import React, { useState } from 'react';

export function Tooltip({ text, children, position = 'top' }) {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${positions[position] || positions.top} z-50 px-2.5 py-1 text-xs font-medium text-white bg-slate-900 rounded-lg shadow-lg whitespace-nowrap pointer-events-none`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
