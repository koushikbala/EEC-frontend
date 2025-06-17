import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Teachers from './Teachers';
import Students from './Students';
import Routines from './Routines';
import LessonPlanPage from './pages/LessonPlan';
import TeacherTimetable from './pages/TeacherTimetable';
import ExaminationManagement from './pages/ExaminationManagement';
import ParentsManagement from './pages/ParentsManagement';
import CourseManagement from './pages/CourseManagement';
import SubjectManagement from './pages/SubjectManagement';
import AttendanceManagement from './pages/AttendanceManagement';
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
        <Route path="dashboard" element={<Dashboard />} />
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="routines" element={<Routines />} />
        <Route path="parents" element={<ParentsManagement />} />
        <Route path="courses" element={<CourseManagement />} />
        <Route path="subjects" element={<SubjectManagement />} />
        <Route path="attendance" element={<AttendanceManagement />} />
        <Route path="examination" element={<ExaminationManagement />} />
        <Route path="timetable" element={<TeacherTimetable />} />
        <Route path="lesson-plans" element={<LessonPlanPage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminApp;