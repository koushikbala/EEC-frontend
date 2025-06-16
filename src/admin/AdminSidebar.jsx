import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import { ADMIN_MENU_ITEMS } from '../../utils/adminConstants';

const AdminSidebar = ({ 
  activeMenuItem, 
  onMenuItemClick, 
  collapsed = false, 
  onToggleSidebar 
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {collapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggleSidebar}
        />
      )}
      
      <div className={`
        ${collapsed ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:relative z-50 w-80 
        bg-gradient-to-b from-orange-400 to-orange-500 text-white 
        flex flex-col h-full transition-transform duration-300
      `}>
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">💙</span>
            </div>
            <span className="text-2xl font-bold">EEC Admin</span>
          </div>
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 pb-4 overflow-y-auto">
          {ADMIN_MENU_ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.label === activeMenuItem;
            return (
              <div
                key={index}
                onClick={() => {
                  onMenuItemClick(item.label);
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 1024) {
                    onToggleSidebar();
                  }
                }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'bg-white bg-opacity-20 backdrop-blur-sm shadow-lg' 
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium flex-1">{item.label}</span>
                {item.hasSubmenu && <ChevronRight size={16} />}
              </div>
            );
          })}
        </nav>

        {/* Admin Info Footer */}
        <div className="p-4 border-t border-white border-opacity-20">
          <div className="text-center">
            <p className="text-sm opacity-75">Logged in as</p>
            <p className="font-semibold">Administrator</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;