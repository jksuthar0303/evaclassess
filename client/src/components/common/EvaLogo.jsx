import React from 'react';

export function EvaLogo({ size = 'md', showText = true, className = '', textColor = 'text-slate-900', subtextColor = 'text-slate-500' }) {
  const sizeMap = {
    sm: { img: 'w-8 h-8', title: 'text-lg', sub: 'text-[9px]' },
    md: { img: 'w-10 h-10', title: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 'w-14 h-14', title: 'text-2xl', sub: 'text-xs' },
    xl: { img: 'w-20 h-20', title: 'text-3xl', sub: 'text-sm' },
  };

  const selectedSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Emblem Logo */}
      <img
        src="/eva-logo.svg"
        alt="EVA Classes Bikaner"
        className={`${selectedSize.img} object-contain shrink-0 drop-shadow-xs`}
      />

      {/* Typography Brand Name */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span className={`font-black tracking-tight ${selectedSize.title} ${textColor}`}>
              EVA <span className="text-[#be123c]">CLASSES</span>
            </span>
          </div>
          <span className={`font-extrabold uppercase tracking-widest ${selectedSize.sub} ${subtextColor} mt-0.5`}>
            Bikaner • Exam Prep
          </span>
        </div>
      )}
    </div>
  );
}

export default EvaLogo;
