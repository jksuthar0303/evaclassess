import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  FileCheck2,
  BarChart3,
  Video,
  Bookmark,
  User,
  GraduationCap
} from 'lucide-react';

const LINKS = [
  { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
  { name: 'My Courses', path: '/student/courses', icon: BookOpen },
  { name: 'My Test Series', path: '/student/tests', icon: FileCheck2 },
  { name: 'Score & Analytics', path: '/student/analytics', icon: BarChart3 },
  { name: 'Live Classes', path: '/student/live-classes', icon: Video },
  { name: 'Bookmarks & Notes', path: '/student/bookmarks', icon: Bookmark },
  { name: 'Profile & Settings', path: '/student/profile', icon: User },
];

export function StudentSidebar() {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center gap-2.5 px-3 py-4 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
          <GraduationCap className="w-5 h-5" />
        </div>
        <span className="font-black text-slate-900 dark:text-white">PREPSPHERE</span>
      </div>

      <nav className="flex-1 space-y-1">
        {LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default StudentSidebar;
