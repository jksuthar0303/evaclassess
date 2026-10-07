import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { useAuthStore } from '../../../stores/auth.store';
import { Dropdown } from '../../ui/Dropdown';
import { Avatar } from '../../ui/Avatar';

export function UserMenu() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) return null;

  const items = [
    {
      label: 'Student Portal',
      icon: LayoutDashboard,
      onClick: () => navigate('/student/dashboard'),
    },
    {
      label: 'Account Profile',
      icon: User,
      onClick: () => navigate('/student/profile'),
    },
    { divider: true },
    {
      label: 'Sign Out',
      icon: LogOut,
      onClick: () => {
        logout();
        navigate('/');
      },
    },
  ];

  return (
    <Dropdown
      trigger={
        <button className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
          <Avatar src={user.avatar} name={user.name} size="sm" />
        </button>
      }
      items={items}
      align="right"
    />
  );
}

export default UserMenu;
