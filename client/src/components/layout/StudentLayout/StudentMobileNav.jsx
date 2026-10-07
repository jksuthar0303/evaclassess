import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileCheck2, BarChart3, User } from 'lucide-react';

export function StudentMobileNav() {
  return (
    <nav className="md:hidden sticky bottom-0 z-30 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex justify-around py-2">
      <NavLink
        to="/student/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium ${
            isActive ? 'text-blue-600' : 'text-slate-500'
          }`
        }
      >
        <LayoutDashboard className="w-5 h-5" />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/student/courses"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium ${
            isActive ? 'text-blue-600' : 'text-slate-500'
          }`
        }
      >
        <BookOpen className="w-5 h-5" />
        <span>Courses</span>
      </NavLink>
      <NavLink
        to="/student/tests"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium ${
            isActive ? 'text-blue-600' : 'text-slate-500'
          }`
        }
      >
        <FileCheck2 className="w-5 h-5" />
        <span>Tests</span>
      </NavLink>
      <NavLink
        to="/student/analytics"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium ${
            isActive ? 'text-blue-600' : 'text-slate-500'
          }`
        }
      >
        <BarChart3 className="w-5 h-5" />
        <span>Analytics</span>
      </NavLink>
      <NavLink
        to="/student/profile"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 text-[10px] font-medium ${
            isActive ? 'text-blue-600' : 'text-slate-500'
          }`
        }
      >
        <User className="w-5 h-5" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}

export default StudentMobileNav;
