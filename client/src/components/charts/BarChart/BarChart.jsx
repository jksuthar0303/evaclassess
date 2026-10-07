import React from 'react';

export function BarChart({ data = [40, 70, 55, 90, 65, 80], height = 120, color = '#2563eb' }) {
  const max = Math.max(...data, 100);

  return (
    <div className="flex items-end justify-between gap-2 w-full" style={{ height }}>
      {data.map((val, idx) => {
        const pct = (val / max) * 100;
        return (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
            <div
              className="w-full rounded-t-lg bg-blue-500/20 group-hover:bg-blue-600 transition-all"
              style={{ height: `${pct}%`, backgroundColor: color }}
            />
            <span className="text-[10px] text-slate-400">{val}%</span>
          </div>
        );
      })}
    </div>
  );
}

export default BarChart;
