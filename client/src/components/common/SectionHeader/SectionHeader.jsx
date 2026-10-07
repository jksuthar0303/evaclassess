import React from 'react';

export function SectionHeader({ badge, title, subtitle, action, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? 'text-center max-w-2xl mx-auto' : 'flex flex-col md:flex-row md:items-end justify-between gap-4'}`}>
      <div>
        {badge && (
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
          {title}
        </h2>
        {subtitle && <p className="text-sm text-slate-500 mt-2">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export default SectionHeader;
