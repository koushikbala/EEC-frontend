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
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'attendance', name: 'Attendance', icon: Users },
    { id: 'routine', name: 'Routine', icon: Calendar },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'courses', name: 'Courses', icon: BookOpen },
    { id: 'achievements', name: 'Achievements', icon: Award },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-50 ${
      isOpen ? 'w-64' : 'w-20'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={`flex items-center space-x-3 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">EEC</span>
          </div>
          <span className="font-bold text-gray-800">Student Portal</span>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  <span className={`font-medium ${isOpen ? 'block' : 'hidden'}`}>
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200">
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
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