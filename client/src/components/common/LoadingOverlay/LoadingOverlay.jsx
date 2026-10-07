import React from 'react';
import { Spinner } from '../../ui/Spinner';

export function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex flex-col items-center justify-center">
      <Spinner size="lg" className="border-white" />
      <p className="text-white text-sm font-semibold mt-3">{message}</p>
    </div>
  );
}

export default LoadingOverlay;
