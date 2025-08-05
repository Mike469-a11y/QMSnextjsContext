'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: 'MFakheem',
    role: 'admin',
    isAuthenticated: true,
  });

  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Global loading state management
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  // Notification management
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type, id: Date.now() });
    setTimeout(() => setNotification(null), 5000);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  const value = {
    // User state
    user,
    updateUser,
    
    // Theme state
    theme,
    toggleTheme,
    
    // Loading state
    isLoading,
    showLoading,
    hideLoading,
    
    // Notifications
    notification,
    showNotification,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};