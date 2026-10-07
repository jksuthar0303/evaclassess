import React from 'react';

export function Skeleton({ className = '', variant = 'rect' }) {
  const variants = {
    circle: 'rounded-full',
    text: 'h-4 rounded-md',
    rect: 'rounded-xl',
  };

  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 ${variants[variant] || variants.rect} ${className}`}
    />
  );
}

export default Skeleton;
