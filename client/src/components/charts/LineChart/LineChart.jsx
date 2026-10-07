import React from 'react';

export function LineChart({ data = [20, 45, 30, 80, 65, 90, 85], height = 120, color = '#2563eb' }) {
  const max = Math.max(...data, 100);
  const min = 0;
  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * 300;
      const y = height - ((val - min) / (max - min)) * (height - 20) - 10;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 300 ${height}`} className="w-full overflow-visible">
      <polyline fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={points} />
      {data.map((val, idx) => {
        const x = (idx / (data.length - 1)) * 300;
        const y = height - ((val - min) / (max - min)) * (height - 20) - 10;
        return <circle key={idx} cx={x} cy={y} r="4" fill="#ffffff" stroke={color} strokeWidth="2.5" />;
      })}
    </svg>
  );
}

export default LineChart;
