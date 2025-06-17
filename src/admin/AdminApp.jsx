import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Teachers from './Teachers';
import Students from './Students';
import Routines from './Routines';
import { useState } from 'react';

const AdminApp = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <AdminLayout
      activeMenuItem={activeMenuItem}
      onMenuItemClick={handleMenuItemClick}
      sidebarCollapsed={sidebarCollapsed}
      onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      adminUser={{
        name: 'Admin User',
        role: 'Administrator',
        avatar: 'src/koushik-bala-pp.jpg',
      }}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="routines" element={<Routines />} />
        <Route path="parents" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Parents Management</h1>
              <p className="text-gray-600 mb-6">Manage and view parent information</p>
            </div>
          </div>
        } />
        <Route path="courses" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Course Management</h1>
              <p className="text-gray-600 mb-6">Manage and organize courses</p>
            </div>
          </div>
        } />
        <Route path="subjects" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Subject Management</h1>
              <p className="text-gray-600 mb-6">Manage and organize subjects</p>
            </div>
          </div>
        } />
        <Route path="attendance" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Student Attendance</h1>
              <p className="text-gray-600 mb-6">Track and manage student attendance</p>
            </div>
          </div>
        } />
        <Route path="examination" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Examination Management</h1>
              <p className="text-gray-600 mb-6">Manage examinations and results</p>
            </div>
          </div>
        } />
        <Route path="timetable" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Teacher Timetable</h1>
              <p className="text-gray-600 mb-6">View and manage teacher schedules</p>
            </div>
          </div>
        } />
        <Route path="lesson-plan" element={
          <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-100 p-8">
            <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 border border-yellow-200">
              <h1 className="text-3xl font-bold text-yellow-700 mb-2">Lesson Plans</h1>
              <p className="text-gray-600 mb-6">Create and manage lesson plans</p>
            </div>
          </div>
        } />
      </Routes>
    </AdminLayout>
  );
};

export default AdminApp;