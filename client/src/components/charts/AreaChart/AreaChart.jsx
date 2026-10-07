import React from 'react';

export function AreaChart({ data = [30, 40, 60, 50, 75, 90], height = 120, color = '#2563eb' }) {
  const max = Math.max(...data, 100);
  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * 300;
      const y = height - (val / max) * (height - 20) - 10;
      return `${x},${y}`;
    })
    .join(' ');

  const areaPoints = `0,${height} ${points} 300,${height}`;

  return (
    <svg viewBox={`0 0 300 ${height}`} className="w-full overflow-hidden">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <polygon fill="url(#areaGradient)" points={areaPoints} />
      <polyline fill="none" stroke={color} strokeWidth="2.5" points={points} />
    </svg>
  );
}

export default AreaChart;
