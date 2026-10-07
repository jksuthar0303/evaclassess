import React, { createContext, useContext, useState } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const value = {
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar: () => setSidebarOpen((prev) => !prev),
    searchModalOpen,
    setSearchModalOpen,
    activeCategory,
    setActiveCategory,
  };

  return React.createElement(UIContext.Provider, { value }, children);
}

export function useUIStore() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIStore must be used within a UIProvider');
  }
  return context;
}
