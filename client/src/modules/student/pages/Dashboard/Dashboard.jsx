import React from 'react';
import { useAuthStore } from '../../../../stores/auth.store';
import { BookOpen, FileCheck, Award, Clock, ArrowRight, Play } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold bg-white/20 px-2.5 py-1 rounded-full">
            Target Exam: {user?.targetExam || 'UPSC CSE 2026'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-2">
            Welcome back, {user?.name || 'Aspirant'}! 🎯
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 mt-1">
            You're on a 14-day study streak. Keep up the momentum!
          </p>
        </div>
        <Button variant="accent" size="sm" className="shrink-0">
          Resume Last Mock Test
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-400 font-semibold">Tests Attempted</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">18 Mocks</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-400 font-semibold">Average Accuracy</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">84.5%</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-400 font-semibold">Current AIR Rank</div>
          <div className="text-2xl font-black text-blue-600 mt-1">#240 / 34K</div>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-400 font-semibold">Study Hours</div>
          <div className="text-2xl font-black text-purple-600 mt-1">42.5 hrs</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
