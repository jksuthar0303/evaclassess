import React from 'react';
import { Bell, Flame, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../stores/auth.store';
import { useNotificationStore } from '../../../stores/notification.store';
import { useThemeStore } from '../../../stores/theme.store';
import { Avatar } from '../../ui/Avatar';

export function StudentHeader() {
  const { user } = useAuthStore();
  const { unreadCount } = useNotificationStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>
        <span className="text-slate-300">|</span>
        <span className="text-sm font-bold text-slate-800 dark:text-white">Aspirant Portal</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Streak Counter */}
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 text-amber-700 dark:text-amber-400 text-xs font-bold">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{user?.streakDays || 14}d Streak</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900" />
          )}
        </button>

        <Avatar src={user?.avatar} name={user?.name || 'Aspirant'} size="sm" />
      </div>
    </header>
  );
}

export default StudentHeader;
