import { useMemo } from 'react';
import { hasRole, hasPermission } from '../lib/permissions';

export function usePermissions(user) {
  return useMemo(() => ({
    hasRole: (role) => hasRole(user, role),
    hasPermission: (permission) => hasPermission(user, permission),
    isAdmin: user?.role === 'ADMIN',
    isStudent: user?.role === 'STUDENT',
  }), [user]);
}
