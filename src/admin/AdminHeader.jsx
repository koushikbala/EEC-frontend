import React from 'react';
import { Award, Settings, Search, Bell, Menu } from 'lucide-react';

const AdminHeader = ({ onToggleSidebar, adminUser }) => {
  return (
    <header className="bg-gradient-to-r from-red-400 to-red-500 text-white px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onToggleSidebar}
          className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors lg:hidden"
        >
          <Menu size={20} />
        </button>
        <div className="p-2 bg-white bg-opacity-20 rounded-lg">
          <Award size={24} />
        </div>
        <h1 className="text-xl font-semibold hidden md:block">Admin Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm">🇺🇸 English</span>
        </div>
        <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
          <Settings size={20} />
        </button>
        <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
          <Search size={20} />
        </button>
        <button className="relative p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="text-right hidden md:block">
            <p className="font-medium">{adminUser?.name || 'Admin'}</p>
            <p className="text-sm opacity-90">{adminUser?.role || 'Administrator'}</p>
          </div>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span>{adminUser?.avatar || '👨‍💼'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
