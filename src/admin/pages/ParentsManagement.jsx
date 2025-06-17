import React from 'react';
import { Users, Search, Filter, Plus, Edit3, Trash2, Mail, Phone } from 'lucide-react';

const ParentsManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 mb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Parents Management</h1>
            <p className="text-yellow-100">Manage and view parent information</p>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="w-12 h-12 text-yellow-200" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search parents..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                <option value="all">All Grades</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
          </div>

          <button className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Parent</span>
          </button>
        </div>
      </div>

      {/* Parents List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Children</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Grade</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "John Smith",
                  email: "john.smith@example.com",
                  phone: "+1 234-567-8900",
                  children: ["Sarah Smith"],
                  grade: "Grade 10"
                },
                {
                  id: 2,
                  name: "Mary Johnson",
                  email: "mary.j@example.com",
                  phone: "+1 234-567-8901",
                  children: ["Tom Johnson", "Lisa Johnson"],
                  grade: "Grade 11, Grade 12"
                }
              ].map(parent => (
                <tr key={parent.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{parent.name}</h4>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{parent.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{parent.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {parent.children.join(", ")}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{parent.grade}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-yellow-600 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParentsManagement; 