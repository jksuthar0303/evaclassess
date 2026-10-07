import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, FileSpreadsheet, Shield } from 'lucide-react';

export function AdminSidebar() {
  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Users Management', path: '/admin/users', icon: Users },
    { name: 'Courses', path: '/admin/courses', icon: BookOpen },
    { name: 'Test Series', path: '/admin/tests', icon: FileSpreadsheet },
  ];

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center gap-2 px-3 py-4 mb-4 border-b border-slate-800">
        <Shield className="w-5 h-5 text-emerald-400" />
        <span className="font-bold text-white text-sm">Control Center</span>
      </div>
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <link.icon className="w-4 h-4" />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default AdminSidebar;
