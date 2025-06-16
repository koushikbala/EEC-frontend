import { Routes, Route, NavLink } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import Analytics from './Analytics';
import './AdminApp.css';

const AdminApp = () => {
  return (
    <div className="admin-app">
      {/* Sidebar */}
      <div className="sidebar w-64">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">🏠</span> Dashboard
          </NavLink>
          <NavLink to="/admin/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">📈</span> Analytics
          </NavLink>
          <NavLink to="/admin/teachers" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">👩‍🏫</span> Teachers
          </NavLink>
          <NavLink to="/admin/students" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">👩‍🎓</span> Students
          </NavLink>
          <NavLink to="/admin/parents" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">👨‍👩‍👧</span> Parents
          </NavLink>
          <NavLink to="/admin/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">📚</span> Courses
          </NavLink>
          <NavLink to="/admin/subjects" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">📖</span> Subjects
          </NavLink>
          <NavLink to="/admin/attendance" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">✅</span> Student Attendance
          </NavLink>
          <NavLink to="/admin/examination" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">📝</span> Examination
          </NavLink>
          <NavLink to="/admin/routines" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">🕒</span> Routines
          </NavLink>
          <NavLink to="/admin/timetable" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">⏰</span> Teacher Timetable
          </NavLink>
          <NavLink to="/admin/lesson-plan" className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">📅</span> Lesson Plan
          </NavLink>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="teachers" element={<div><h2>Teachers Page</h2><p>Teachers content goes here.</p></div>} />
          <Route path="students" element={<div><h2>Students Page</h2><p>Students content goes here.</p></div>} />
          <Route path="parents" element={<div><h2>Parents Page</h2><p>Parents content goes here.</p></div>} />
          <Route path="courses" element={<div><h2>Courses Page</h2><p>Courses content goes here.</p></div>} />
          <Route path="subjects" element={<div><h2>Subjects Page</h2><p>Subjects content goes here.</p></div>} />
          <Route path="attendance" element={<div><h2>Student Attendance Page</h2><p>Attendance content goes here.</p></div>} />
          <Route path="examination" element={<div><h2>Examination Page</h2><p>Examination content goes here.</p></div>} />
          <Route path="routines" element={<div><h2>Routines Page</h2><p>Routines content goes here.</p></div>} />
          <Route path="timetable" element={<div><h2>Teacher Timetable Page</h2><p>Timetable content goes here.</p></div>} />
          <Route path="lesson-plan" element={<div><h2>Lesson Plan Page</h2><p>Lesson Plan content goes here.</p></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;