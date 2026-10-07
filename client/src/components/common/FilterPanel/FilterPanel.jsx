import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '../../ui/Button';

export function FilterPanel({ filters = [], onReset, className = '' }) {
  return (
    <div className={`p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-blue-600" />
          <span>Filters</span>
        </div>
        {onReset && (
          <button onClick={onReset} className="text-xs text-blue-600 hover:underline">
            Reset All
          </button>
        )}
      </div>

      <div className="space-y-4">{filters}</div>
    </div>
  );
}

export default FilterPanel;
