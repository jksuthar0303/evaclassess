import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { StudentHeader } from './StudentHeader';
import { StudentSidebar } from './StudentSidebar';
import { StudentMobileNav } from './StudentMobileNav';

export function StudentLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
        <StudentSidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <StudentHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
        <StudentMobileNav />
      </div>
    </div>
  );
}

export default StudentLayout;
