import { ROLES } from '../constants/roles';

export const hasRole = (user, role) => {
  if (!user || !user.role) return false;
  return user.role === role;
};

export const hasPermission = (user, permission) => {
  if (!user) return false;
  if (user.role === ROLES.ADMIN) return true; // Admin has all permissions
  return Array.isArray(user.permissions) && user.permissions.includes(permission);
};
