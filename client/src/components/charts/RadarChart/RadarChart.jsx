import React from 'react';

export function RadarChart({ labels = ['Quant', 'Reasoning', 'English', 'GK', 'Current Affairs'], values = [80, 90, 70, 85, 95], size = 180 }) {
  const center = size / 2;
  const radius = center - 25;
  const total = labels.length;

  const points = values
    .map((val, idx) => {
      const angle = (Math.PI * 2 / total) * idx - Math.PI / 2;
      const r = (val / 100) * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width={size} height={size} className="mx-auto overflow-visible">
      {/* Background circles */}
      {[0.25, 0.5, 0.75, 1].map((scale, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={radius * scale}
          fill="none"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-800"
          strokeDasharray="2,2"
        />
      ))}
      <polygon points={points} fill="rgba(37, 99, 235, 0.25)" stroke="#2563eb" strokeWidth="2" />
      {labels.map((lbl, idx) => {
        const angle = (Math.PI * 2 / total) * idx - Math.PI / 2;
        const x = center + (radius + 15) * Math.cos(angle);
        const y = center + (radius + 15) * Math.sin(angle);
        return (
          <text
            key={idx}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[9px] font-semibold fill-slate-500"
          >
            {lbl}
          </text>
        );
      })}
    </svg>
  );
}

export default RadarChart;
