import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';

const ThemeCustomizer = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [skin, setSkin] = useState('light');
  const [contentWidth, setContentWidth] = useState('full');
  const [menuLayout, setMenuLayout] = useState('vertical');
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const [rtlEnabled, setRtlEnabled] = useState(false);
  const [navbarColor, setNavbarColor] = useState('#6366f1');

  const navbarColors = [
    '#6366f1', // Purple
    '#6b7280', // Gray
    '#10b981', // Green
    '#ef4444', // Red
    '#06b6d4', // Cyan
    '#f59e0b', // Orange
    '#374151'  // Dark Gray
  ];

  // Whenever any theme setting changes, call the parent callback
  const updateTheme = (newSettings) => {
    const themeConfig = {
      skin,
      contentWidth,
      menuLayout,
      menuCollapsed,
      menuHidden,
      rtlEnabled,
      navbarColor,
      ...newSettings
    };
    
    if (onThemeChange) {
      onThemeChange(themeConfig);
    }
  };

  const handleSkinChange = (newSkin) => {
    setSkin(newSkin);
    updateTheme({ skin: newSkin });
  };

  const handleContentWidthChange = (newWidth) => {
    setContentWidth(newWidth);
    updateTheme({ contentWidth: newWidth });
  };

  const handleMenuLayoutChange = (newLayout) => {
    setMenuLayout(newLayout);
    updateTheme({ menuLayout: newLayout });
  };

  const handleMenuCollapsedChange = () => {
    const newCollapsed = !menuCollapsed;
    setMenuCollapsed(newCollapsed);
    updateTheme({ menuCollapsed: newCollapsed });
  };

  const handleMenuHiddenChange = () => {
    const newHidden = !menuHidden;
    setMenuHidden(newHidden);
    updateTheme({ menuHidden: newHidden });
  };

  const handleRtlChange = () => {
    const newRtl = !rtlEnabled;
    setRtlEnabled(newRtl);
    updateTheme({ rtlEnabled: newRtl });
  };

  const handleNavbarColorChange = (newColor) => {
    setNavbarColor(newColor);
    updateTheme({ navbarColor: newColor });
  };

  return (
    <>
      {/* Theme Customizer Panel */}
      {isOpen && (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-2xl border-l border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Theme Customizer</h2>
                <p className="text-sm text-gray-500">Customize & Preview in Real Time</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-6 overflow-y-auto">
            {/* Skin */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Skin</h3>
              <div className="grid grid-cols-2 gap-2">
                {['light', 'bordered', 'dark', 'semi-dark'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSkinChange(option)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      skin === option
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Width */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Content Width</h3>
              <div className="flex space-x-3">
                {['full', 'boxed'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleContentWidthChange(option)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      contentWidth === option
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option} Width
                  </button>
                ))}
              </div>
            </div>

            {/* RTL */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">RTL</h3>
              <div className="flex items-center">
                <button 
                  onClick={handleRtlChange}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    rtlEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    rtlEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
                <span className="ml-3 text-sm text-gray-600">
                  {rtlEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>

            {/* Menu Layout */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Menu Layout</h3>
              <div className="flex space-x-3">
                {['vertical', 'horizontal'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleMenuLayoutChange(option)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      menuLayout === option
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Collapsed */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Menu Collapsed</h3>
              <div className="flex items-center">
                <button 
                  onClick={handleMenuCollapsedChange}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    menuCollapsed ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    menuCollapsed ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
                <span className="ml-3 text-sm text-gray-600">
                  {menuCollapsed ? 'Collapsed' : 'Expanded'}
                </span>
              </div>
            </div>

            {/* Menu Hidden */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Menu Hidden</h3>
              <div className="flex items-center">
                <button 
                  onClick={handleMenuHiddenChange}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    menuHidden ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
                    menuHidden ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
                <span className="ml-3 text-sm text-gray-600">
                  {menuHidden ? 'Hidden' : 'Visible'}
                </span>
              </div>
            </div>

            {/* Navbar Color */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Navbar Color</h3>
              <div className="grid grid-cols-7 gap-2">
                {navbarColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavbarColorChange(color)}
                    className={`w-8 h-8 rounded-lg transition-all hover:scale-110 ${
                      navbarColor === color 
                        ? 'ring-2 ring-blue-500 ring-offset-2' 
                        : ''
                    }`}
                    style={{ backgroundColor: color }}
                    title={`Color ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-700 transition-colors z-40"
          title="Open Theme Customizer"
        >
          <Settings size={20} />
        </button>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default ThemeCustomizer;