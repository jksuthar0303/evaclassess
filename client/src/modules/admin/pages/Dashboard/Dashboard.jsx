import React from 'react';
import { Users, FileSpreadsheet, DollarSign, Activity } from 'lucide-react';
import { ADMIN_STATS } from '../../data/admin.data';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">System Admin Overview</h1>
        <p className="text-xs text-slate-400 mt-1">Platform telemetry, test attempts and revenue metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Total Aspirants</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white mt-2">
            {ADMIN_STATS.totalAspirants.toLocaleString()}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Active Test Series</span>
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-white mt-2">
            {ADMIN_STATS.activeTestSeries} Portals
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Attempts Today</span>
            <Activity className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white mt-2">
            {ADMIN_STATS.todayAttempts.toLocaleString()}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Monthly Revenue</span>
            <DollarSign className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black text-white mt-2">
            {ADMIN_STATS.revenueMonthly}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
