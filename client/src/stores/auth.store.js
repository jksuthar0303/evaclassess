import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants/storage';
import { storage } from '../lib/storage';
import { ROLES } from '../constants/roles';

// Mock initial student user for demonstration
const DEFAULT_USER = {
  id: 'usr_101',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@example.com',
  role: ROLES.STUDENT,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  targetExam: 'UPSC Civil Services 2026',
  streakDays: 14,
  coins: 450,
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => storage.get(STORAGE_KEYS.USER_DATA, null));
  const [token, setToken] = useState(() => storage.get(STORAGE_KEYS.AUTH_TOKEN, null));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      storage.set(STORAGE_KEYS.USER_DATA, user);
    } else {
      storage.remove(STORAGE_KEYS.USER_DATA);
    }
  }, [user]);

  const login = (userData, authToken = 'sample-jwt-token') => {
    setUser(userData);
    setToken(authToken);
    storage.set(STORAGE_KEYS.AUTH_TOKEN, authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    storage.remove(STORAGE_KEYS.USER_DATA);
  };

  const switchRole = (newRole) => {
    if (user) {
      setUser({ ...user, role: newRole });
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    loading,
    setLoading,
    login,
    logout,
    switchRole,
  };

  return React.createElement(AuthContext.Provider, { value }, children);
}

export function useAuthStore() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthStore must be used within an AuthProvider');
  }
  return context;
}
