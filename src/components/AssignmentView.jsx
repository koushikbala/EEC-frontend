import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Book, FileText, Download } from 'lucide-react';

const AssignmentView = () => {
  const [filter, setFilter] = useState('all'); // all, pending, completed, overdue

  // Sample assignment data
  const assignments = [
    {
      id: 1,
      title: "Database Design Project",
      course: "Database Management Systems",
      dueDate: "2025-06-20",
      status: "pending",
      priority: "high",
      description: "Design and implement a relational database for a library management system",
      submissionType: "file",
      maxMarks: 100
    },
    {
      id: 2,
      title: "React Component Assessment",
      course: "Web Development",
      dueDate: "2025-06-18",
      status: "completed",
      priority: "medium",
      description: "Create reusable React components with proper state management",
      submissionType: "link",
      maxMarks: 75,
      submittedAt: "2025-06-15"
    },
    {
      id: 3,
      title: "Algorithm Analysis Report",
      course: "Data Structures & Algorithms",
      dueDate: "2025-06-12",
      status: "overdue",
      priority: "high",
      description: "Analyze time and space complexity of sorting algorithms",
      submissionType: "file",
      maxMarks: 50
    },
    {
      id: 4,
      title: "Network Security Case Study",
      course: "Cybersecurity",
      dueDate: "2025-06-25",
      status: "pending",
      priority: "medium",
      description: "Analyze a real-world security breach and propose solutions",
      submissionType: "presentation",
      maxMarks: 80
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'overdue': return <AlertCircle className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-yellow-600" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-600">Manage your assignments and submissions</p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {['all', 'pending', 'completed', 'overdue'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                filter === filterType
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {assignments.filter(a => a.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {assignments.filter(a => a.status === 'completed').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-red-600">
                {assignments.filter(a => a.status === 'overdue').length}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4 ${getPriorityColor(assignment.priority)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {getStatusIcon(assignment.status)}
                  <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                    {assignment.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Book className="w-4 h-4" />
                    <span>{assignment.course}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {formatDate(assignment.dueDate)}</span>
                  </div>
                  <span className="text-gray-500">Max Marks: {assignment.maxMarks}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{assignment.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      Submission: {assignment.submissionType}
                    </span>
                    {assignment.status === 'pending' && (
                      <span className={`text-sm font-medium ${
                        getDaysRemaining(assignment.dueDate) < 0 
                          ? 'text-red-600' 
                          : getDaysRemaining(assignment.dueDate) <= 3 
                            ? 'text-yellow-600' 
                            : 'text-green-600'
                      }`}>
                        {getDaysRemaining(assignment.dueDate) < 0 
                          ? `${Math.abs(getDaysRemaining(assignment.dueDate))} days overdue`
                          : `${getDaysRemaining(assignment.dueDate)} days remaining`
                        }
                      </span>
                    )}
                    {assignment.submittedAt && (
                      <span className="text-sm text-green-600">
                        Submitted on {formatDate(assignment.submittedAt)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {assignment.status === 'pending' && (
                      <button className="px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition-colors">
                        Submit
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
          <p className="text-gray-600">No assignments match your current filter.</p>
        </div>
      )}
    </div>
  );
};

export default AssignmentView;