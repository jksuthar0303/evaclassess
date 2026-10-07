import React from 'react';
import { Star } from 'lucide-react';

export function Rating({ value = 5, max = 5, size = 'sm', count, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center text-amber-400">
        {[...Array(max)].map((_, i) => (
          <Star
            key={i}
            className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} ${
              i < Math.floor(value)
                ? 'fill-amber-400 text-amber-400'
                : i < value
                ? 'fill-amber-200 text-amber-400'
                : 'text-slate-300 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
        {Number(value).toFixed(1)}
      </span>
      {count && (
        <span className="text-xs text-slate-400">({count.toLocaleString()})</span>
      )}
    </div>
  );
}

export default Rating;
