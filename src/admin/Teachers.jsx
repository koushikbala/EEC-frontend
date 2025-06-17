import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  BookOpen,
  Users,
  Star,
  Award,
  Eye,
  MoreVertical,
  Edit2
} from 'lucide-react';

const mockTeachers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    subject: 'Mathematics',
    experience: 8,
    qualification: 'Ph.D. in Mathematics',
    students: 120,
    rating: 4.8,
    status: 'Active',
    joinDate: '2020-08-15',
    location: 'Building A, Room 201',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    email: 'michael.chen@school.edu',
    phone: '+1 (555) 234-5678',
    subject: 'Physics',
    experience: 12,
    qualification: 'Ph.D. in Physics',
    students: 95,
    rating: 4.9,
    status: 'Active',
    joinDate: '2018-01-20',
    location: 'Building B, Room 105',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Ms. Emily Rodriguez',
    email: 'emily.rodriguez@school.edu',
    phone: '+1 (555) 345-6789',
    subject: 'English Literature',
    experience: 6,
    qualification: 'M.A. in English',
    students: 140,
    rating: 4.7,
    status: 'Active',
    joinDate: '2021-09-01',
    location: 'Building C, Room 301',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    email: 'james.wilson@school.edu',
    phone: '+1 (555) 456-7890',
    subject: 'Chemistry',
    experience: 15,
    qualification: 'Ph.D. in Chemistry',
    students: 110,
    rating: 4.6,
    status: 'On Leave',
    joinDate: '2015-03-10',
    location: 'Building D, Room 150',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Ms. Lisa Thompson',
    email: 'lisa.thompson@school.edu',
    phone: '+1 (555) 567-8901',
    subject: 'Biology',
    experience: 10,
    qualification: 'M.S. in Biology',
    students: 130,
    rating: 4.8,
    status: 'Active',
    joinDate: '2019-06-15',
    location: 'Building A, Room 305',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'Prof. David Kumar',
    email: 'david.kumar@school.edu',  
    phone: '+1 (555) 678-9012',
    subject: 'Computer Science',
    experience: 7,
    qualification: 'M.S. in Computer Science',
    students: 85,
    rating: 4.9,
    status: 'Active',
    joinDate: '2020-11-01',
    location: 'Building E, Room 210',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
  }
];

const Teachers = () => {
  const [teachers, setTeachers] = useState(mockTeachers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filter teachers based on search and status
  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || teacher.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const stats = {
    total: teachers.length,
    active: teachers.filter(t => t.status === 'Active').length,
    onLeave: teachers.filter(t => t.status === 'On Leave').length,
    totalStudents: teachers.reduce((sum, t) => sum + t.students, 0),
    avgRating: (teachers.reduce((sum, t) => sum + t.rating, 0) / teachers.length).toFixed(1)
  };

  const TeacherCard = ({ teacher }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-yellow-100 hover:border-yellow-300">
      {/* Card Header */}
      <div className="relative p-6 pb-0">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-16 h-16 rounded-full object-cover border-3 border-yellow-300"
              />
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                teacher.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'
              }`}></div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
              <p className="text-yellow-600 font-semibold">{teacher.subject}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{teacher.rating}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 pt-4">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Award className="w-4 h-4 mr-2 text-yellow-500" />
            <span>{teacher.qualification}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-yellow-500" />
            <span>{teacher.students} students</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
            <span>{teacher.experience} years experience</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
            <span>{teacher.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-6">
          <button
            onClick={() => setSelectedTeacher(teacher)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            View
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );

  const TeacherModal = ({ teacher, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Teacher Details</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-300 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
            <p className="text-yellow-600 font-semibold">{teacher.subject}</p>
            <div className="flex items-center justify-center mt-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-600 ml-1">{teacher.rating} Rating</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">{teacher.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800">{teacher.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Qualification</p>
                <p className="text-gray-800">{teacher.qualification}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="text-gray-800">{teacher.experience} years</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Students</p>
                <p className="text-gray-800">{teacher.students} students</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800">{teacher.location}</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                teacher.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {teacher.status}
              </span>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg transition-colors">
              <Edit3 className="w-4 h-4 inline mr-2" />
              Edit Teacher
            </button>
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4 inline mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-yellow-700">Teacher Management</h1>
            <p className="text-gray-600 mt-2">Manage and monitor teaching staff</p>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            Add New Teacher
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option value="">All Departments</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            {/* Add more department options */}
          </select>
        </div>

        {/* Teachers Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-50">
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Teacher</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Employee ID</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Department</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Qualification</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Experience</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Join Date</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Status</th>
                <th className="border-b border-yellow-100 px-6 py-3 text-left text-sm font-semibold text-yellow-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr 
                  key={teacher.id}
                  className="hover:bg-yellow-50 transition-colors"
                >
                  <td className="border-b border-yellow-100 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center font-semibold text-yellow-700">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{teacher.name}</div>
                        <div className="flex items-center gap-4 mt-1">
                          <a href={`mailto:${teacher.email}`} className="text-sm text-gray-500 hover:text-yellow-600 flex items-center gap-1">
                            <Mail size={14} />
                            {teacher.email}
                          </a>
                          <a href={`tel:${teacher.phone}`} className="text-sm text-gray-500 hover:text-yellow-600 flex items-center gap-1">
                            <Phone size={14} />
                            {teacher.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-yellow-100 px-6 py-4 text-gray-600">{teacher.employeeId}</td>
                  <td className="border-b border-yellow-100 px-6 py-4 text-gray-600">{teacher.department}</td>
                  <td className="border-b border-yellow-100 px-6 py-4 text-gray-600">{teacher.qualification}</td>
                  <td className="border-b border-yellow-100 px-6 py-4 text-gray-600">{teacher.experience}</td>
                  <td className="border-b border-yellow-100 px-6 py-4 text-gray-600">
                    {new Date(teacher.joinDate).toLocaleDateString()}
                  </td>
                  <td className="border-b border-yellow-100 px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="border-b border-yellow-100 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-800" title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800" title="More">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-gray-600">
            Showing {filteredTeachers.length} of {mockTeachers.length} teachers
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-yellow-50">Previous</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-yellow-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;