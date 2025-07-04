import React from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  BookOpen,
  Award,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeView, setActiveView, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'attendance', name: 'Attendance', icon: Users },
    { id: 'routine', name: 'Routine', icon: Calendar },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'courses', name: 'Courses', icon: BookOpen },
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'profile', name: 'Profile', icon: User, link: '/profile' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-yellow-50 to-amber-50 shadow-lg transition-all duration-300 z-50 border-r border-yellow-200 ${
      isOpen ? 'w-64' : 'w-20'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-yellow-200">
        <div className={`flex items-center space-x-3 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full overflow-hidden flex items-center justify-center shadow-sm">
            <img src='/harrow-hall-school.png' className="text-white font-bold text-sm w-full"/>
          </div>
          <span className="font-bold text-amber-800">Student Portal</span>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-yellow-100 transition-colors text-amber-700"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-3">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            if (item.link) {
              return (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      window.location.pathname === item.link
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg'
                        : 'text-amber-700 hover:bg-yellow-100 hover:text-amber-800'
                    }`}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg' 
                      : 'text-amber-700 hover:bg-yellow-100 hover:text-amber-800'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-yellow-200">
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-amber-700 hover:bg-yellow-100 hover:text-amber-800 transition-colors">
            <Settings size={20} className="flex-shrink-0" />
            <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>
              Settings
            </span>
          </button>
          
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors">
            <LogOut size={20} className="flex-shrink-0" />
            <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;