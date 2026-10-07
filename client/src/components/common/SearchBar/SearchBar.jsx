import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ value, onChange, placeholder = 'Search exams, courses, mock tests...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-[#be123c] focus:ring-2 focus:ring-[#be123c]/20"
      />
    </div>
  );
}

export default SearchBar;
