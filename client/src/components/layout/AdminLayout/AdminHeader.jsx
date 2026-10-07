import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/80 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span className="text-slate-700">|</span>
        <span className="text-sm font-bold text-white flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-emerald-400" /> PrepSphere Administration
        </span>
      </div>
    </header>
  );
}

export function AdminSidebar() {
  return (
    <div className="p-4 space-y-4">
      <div className="font-bold text-white text-lg">Admin Console</div>
      <div className="text-xs text-slate-400">Manage courses, tests, users and content</div>
    </div>
  );
}

export function AdminMobileNav() {
  return null;
}

export default AdminHeader;
