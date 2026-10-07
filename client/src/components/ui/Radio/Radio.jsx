import React from 'react';

export function Radio({ name, value, checked, onChange, label, className = '' }) {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300 ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange && onChange(value)}
        className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 focus:ring-blue-500"
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Radio;
