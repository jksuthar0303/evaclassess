import React from 'react';
import { Smartphone, Download, Check, Star } from 'lucide-react';

export function AppPromotion() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-xs">
              <Smartphone className="w-3.5 h-3.5" /> Prep Anywhere, Anytime
            </span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Download PrepSphere Mobile App for Offline Tests & Quick Revisions
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-xl font-normal leading-relaxed">
              Solve mock questions during transit, download video lectures for zero-data offline viewing, and receive instant exam notification alerts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-blue-100 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Offline Mock Test Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Audio Current Affairs Player</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Daily 10-Minute Rapid Quiz</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Admit Card & Result Notifications</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#download"
                className="px-5 py-3 rounded-2xl bg-slate-950 text-white font-bold text-xs flex items-center gap-3 border border-white/20 hover:bg-black transition-all shadow-lg"
              >
                <div className="w-6 h-6 flex items-center justify-center font-black text-xs bg-white text-slate-950 rounded-lg">
                  ▶
                </div>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400">Get it on</div>
                  <div className="text-xs font-bold leading-none">Google Play</div>
                </div>
              </a>

              <a
                href="#download"
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs flex items-center gap-3 border border-white/20 hover:bg-slate-100 transition-all shadow-lg"
              >
                <div className="w-6 h-6 flex items-center justify-center font-black text-xs bg-slate-950 text-white rounded-lg">
                  
                </div>
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-slate-500">Download on</div>
                  <div className="text-xs font-bold leading-none">App Store</div>
                </div>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                  ))}
                </div>
                <span className="text-xs font-bold">4.8 Rating (250K+ Reviews)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-[440px] rounded-[36px] border-4 border-slate-800 bg-slate-900 shadow-2xl p-3 flex flex-col justify-between text-slate-900 relative">
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto" />
              <div className="bg-white rounded-[26px] p-4 flex-1 my-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 pb-2 border-b">
                    <span>PrepSphere App</span>
                    <span className="text-blue-600 font-bold">PRO</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-xl text-center">
                    <span className="text-[10px] uppercase font-bold text-blue-600">Today's Streak</span>
                    <div className="text-2xl font-black text-slate-900">Day 14 🔥</div>
                  </div>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg border text-slate-700 font-semibold flex justify-between">
                      <span>Daily GS Quiz</span>
                      <span className="text-emerald-600 font-bold">10/10</span>
                    </div>
                    <div className="p-2.5 rounded-lg border text-slate-700 font-semibold flex justify-between">
                      <span>Current Affairs PDF</span>
                      <span className="text-blue-600 font-bold">Saved</span>
                    </div>
                  </div>
                </div>
                <div className="py-2 px-3 bg-slate-900 text-white text-center rounded-xl text-xs font-bold">
                  Start Practice Test
                </div>
              </div>
              <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromotion;
