import api from '../api/axios';
import { API_ENDPOINTS } from '../../constants/api';

export const authService = {
  login: async (credentials) => {
    // In mock/demo mode return successful session
    return {
      user: {
        id: 'usr_student',
        name: credentials.email?.split('@')[0] || 'Aspirant',
        email: credentials.email,
        role: 'STUDENT',
      },
      token: 'jwt-mock-token-' + Date.now(),
    };
  },
  register: async (userData) => {
    return {
      user: {
        id: 'usr_' + Date.now(),
        name: userData.name,
        email: userData.email,
        role: 'STUDENT',
      },
      token: 'jwt-mock-token-' + Date.now(),
    };
  },
  logout: async () => {
    return { success: true };
  },
};

export default authService;
