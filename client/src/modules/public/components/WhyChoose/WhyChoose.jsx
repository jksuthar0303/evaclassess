import React from 'react';
import { Star, Smartphone, FileText, Users, Cpu, PlaySquare } from 'lucide-react';

export function WhyChoose() {
  const stats = [
    {
      id: 1,
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400/20 stroke-[1.8]" />,
      value: '4.55/5',
      label: 'Play Store Rating',
    },
    {
      id: 2,
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400 stroke-[1.8]" />,
      value: '10M+',
      label: 'App Downloads',
    },
    {
      id: 3,
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 stroke-[1.8]" />,
      value: '50M+',
      label: 'Mock Tests taken',
    },
  ];

  const features = [
    {
      id: 1,
      icon: (
        <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center">
          <Users className="w-6 h-6 text-[#c8102e] stroke-[2]" />
        </div>
      ),
      title: "India's Top Faculty",
      description: 'Learn from & Practice with Expert Faculty with years of experience',
    },
    {
      id: 2,
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#f0effe] flex items-center justify-center">
          <Cpu className="w-6 h-6 text-[#6366f1] stroke-[2]" />
        </div>
      ),
      title: 'AI-Driven Learning',
      description: 'Adaptive Learning platform that provides targeted personalized analytics',
    },
    {
      id: 3,
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#f6edfd] flex items-center justify-center">
          <PlaySquare className="w-6 h-6 text-[#a855f7] stroke-[2]" />
        </div>
      ),
      title: 'Top Quality Content',
      description: 'Created by Toppers and Experts in each category, course content updated to latest pattern',
    },
    {
      id: 4,
      icon: (
        <div className="w-14 h-14 rounded-full bg-[#fdf0f5] flex items-center justify-center">
          <Star className="w-6 h-6 text-[#ec4899] stroke-[2]" />
        </div>
      ),
      title: 'Rated 4.5/5 on Playstore',
      description: "Aspirants love EVA Classes' adaptive mock tests, live sessions & analytics",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Compact, Sleek Red Stats Banner matching Logo */}
        <div className="max-w-5xl mx-auto relative rounded-2xl bg-gradient-to-r from-[#4c0519] via-[#881337] to-[#c8102e] px-4 sm:px-8 py-6 sm:py-7 shadow-xl border border-white/10 overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Single Row 3 Columns with Clean Dividers */}
          <div className="grid grid-cols-3 divide-x divide-white/15 items-center relative z-10">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center px-2 sm:px-4">
                <div className="mb-2">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium mt-1 leading-tight text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Why Choose EVA Classes? */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-800 tracking-tight text-left mb-6">
            Why Choose EVA Classes?
          </h2>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex flex-col items-center text-center"
              >
                {/* Circular Icon */}
                <div className="mb-4">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
