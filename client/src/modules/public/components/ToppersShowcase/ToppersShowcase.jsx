import React, { useState } from 'react';
import { Play, X, Award, CheckCircle2, BookOpen, Quote } from 'lucide-react';

export function ToppersShowcase() {
  const [selectedTopper, setSelectedTopper] = useState(null);

  const toppers = [
    {
      id: 1,
      air: '1',
      exam: 'RBI Grade B 2025',
      name: 'Nakshatra Malhotra',
      nameBg: 'bg-[#00b074]',
      examBadgeBg: 'bg-[#e6f7f0] text-[#008f5d]',
      cardBg: 'bg-gradient-to-br from-[#f0faf5] via-white to-white',
      accentColor: '#00b074',
      shapeClass: 'bg-emerald-200/30',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Practiced 40+ full length mock tests on PrepSphere. The descriptive test evaluation & detailed GA analysis made all the difference.',
        score: '242 / 300 (Phase II)',
        attempts: '1st Attempt',
      },
    },
    {
      id: 2,
      air: '1',
      exam: 'SSC CGL 2025',
      name: 'Dhruv Rana',
      nameBg: 'bg-[#ea583f]',
      examBadgeBg: 'bg-[#fef2ee] text-[#d9482f]',
      cardBg: 'bg-gradient-to-br from-[#fdf5f2] via-white to-white',
      accentColor: '#ea583f',
      shapeClass: 'bg-orange-200/30',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Quantitative aptitude mock tests with exact TCS interface gave me the real exam confidence. Solved every PYQ from 2018 onwards.',
        score: '348 / 390 (Tier 2)',
        attempts: '2nd Attempt',
      },
    },
    {
      id: 3,
      air: '3',
      exam: 'SSC CGL 2025',
      name: 'N Ramcharan',
      nameBg: 'bg-[#e04f43]',
      examBadgeBg: 'bg-[#fef2f1] text-[#cf3f34]',
      cardBg: 'bg-gradient-to-br from-[#fdf4f4] via-white to-white',
      accentColor: '#e04f43',
      shapeClass: 'bg-red-200/30',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Daily English comprehension practice and sectional speed drills helped me score 100% accuracy in reasoning & English.',
        score: '342 / 390 (Tier 2)',
        attempts: '1st Attempt',
      },
    },
    {
      id: 4,
      air: '1',
      exam: 'SBI PO 2025',
      name: 'Niranjan Jain',
      nameBg: 'bg-[#c8102e]',
      examBadgeBg: 'bg-rose-50 text-[#c8102e]',
      cardBg: 'bg-gradient-to-br from-rose-50/50 via-white to-white',
      accentColor: '#c8102e',
      shapeClass: 'bg-rose-200/30',
      hasInterviewLink: true,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'High-level puzzle marathons and mock interview guidance under ex-GM bankers completely transformed my interview round preparation.',
        score: '78.5 / 100 (Final Normalized)',
        attempts: '1st Attempt',
      },
    },
    {
      id: 5,
      air: '1',
      exam: 'SSC CGL 2024',
      name: 'Shubham Agrawal',
      nameBg: 'bg-[#c8102e]',
      examBadgeBg: 'bg-rose-50 text-[#c8102e]',
      cardBg: 'bg-gradient-to-br from-rose-50/50 via-white to-white',
      accentColor: '#c8102e',
      shapeClass: 'bg-rose-200/30',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Consistency in weekly full-length mock tests helped me manage time pressure. Analyzed wrong questions before sleeping every day.',
        score: '346 / 390',
        attempts: '2nd Attempt',
      },
    },
    {
      id: 6,
      air: '1',
      exam: 'RBI Gr. B 2024',
      name: 'S B Tanay Gaurav',
      nameBg: 'bg-[#00b074]',
      examBadgeBg: 'bg-[#e6f7f0] text-[#008f5d]',
      cardBg: 'bg-gradient-to-br from-[#f0faf5] via-white to-white',
      accentColor: '#00b074',
      shapeClass: 'bg-emerald-200/30',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Phase 2 ESI & FM notes on EVA Classes were crisp and syllabus-oriented. Special focus on economic survey and budget reports.',
        score: '238.5 / 300',
        attempts: '1st Attempt',
      },
    },
    {
      id: 7,
      air: '1',
      exam: 'IBPS SO(IT) 2025',
      name: 'Nikita',
      nameBg: 'bg-[#c8102e]',
      examBadgeBg: 'bg-rose-50 text-[#c8102e]',
      cardBg: 'bg-gradient-to-br from-rose-50/50 via-white to-white',
      accentColor: '#c8102e',
      shapeClass: 'bg-rose-200/30',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Professional knowledge modules covering OS, DBMS, Computer Networks and Information Security helped me top across all banks.',
        score: '48.5 / 60 (Mains IT)',
        attempts: '1st Attempt',
      },
    },
    {
      id: 8,
      air: '1',
      exam: 'IBPS SO(Mkt) 2025',
      name: 'Sai Lokesh',
      nameBg: 'bg-[#c8102e]',
      examBadgeBg: 'bg-rose-50 text-[#c8102e]',
      cardBg: 'bg-gradient-to-br from-rose-50/50 via-white to-white',
      accentColor: '#c8102e',
      shapeClass: 'bg-rose-200/30',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
      interview: {
        strategy: 'Marketing principles, brand management case studies and banking awareness sessions were key to securing AIR 1.',
        score: '51 / 60 (Mains Marketing)',
        attempts: '1st Attempt',
      },
    },
  ];

  return (
    <section id="success-stories" className="bg-white py-10 sm:py-14 border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Screenshot */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-800 tracking-tight flex items-center justify-center gap-2.5">
            <span>Record Breaking Results Every Year</span>
            <span className="text-3xl sm:text-4xl inline-block">🎉</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Celebrating our top rankers who turned their govt service ambitions into reality with EVA Classes Bikaner.
          </p>
        </div>

        {/* 4-Columns Grid (2 Rows = 8 Topper Cards) - Completely Static without hover animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {toppers.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between ${t.cardBg}`}
            >
              {/* Decorative Corner Geometric Wave Curve (Exact Oliveboard Detail) */}
              <div
                className={`absolute top-0 left-0 w-28 h-28 rounded-br-full pointer-events-none opacity-40 ${t.shapeClass}`}
              />

              {/* Card Top & Body Content */}
              <div className="p-4 sm:p-5 relative z-10 flex flex-col h-full justify-between">
                
                {/* Upper row: Laurel Wreath (Left) and Topper Portrait (Right) */}
                <div className="flex items-start justify-between gap-2">
                  
                  {/* Left Column: Golden Laurel Wreath + Exam Pill Badge + optional Interview link */}
                  <div className="flex flex-col items-start pt-1">
                    
                    {/* Golden Laurel Wreath SVG */}
                    <div className="relative w-16 h-16 flex items-center justify-center -ml-1">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500 fill-current opacity-90 drop-shadow-xs">
                        {/* Left Laurel Branch */}
                        <path d="M36 14 C33 22 25 35 25 50 C25 65 35 80 48 88 C40 82 30 70 30 50 C30 35 38 22 42 16 Z" />
                        <ellipse cx="26" cy="28" rx="5" ry="8" transform="rotate(-30 26 28)" />
                        <ellipse cx="22" cy="44" rx="5" ry="8" transform="rotate(-15 22 44)" />
                        <ellipse cx="24" cy="62" rx="5" ry="8" transform="rotate(15 24 62)" />
                        <ellipse cx="34" cy="76" rx="5" ry="8" transform="rotate(40 34 76)" />

                        {/* Right Laurel Branch */}
                        <path d="M64 14 C67 22 75 35 75 50 C75 65 65 80 52 88 C60 82 70 70 70 50 C70 35 62 22 58 16 Z" />
                        <ellipse cx="74" cy="28" rx="5" ry="8" transform="rotate(30 74 28)" />
                        <ellipse cx="78" cy="44" rx="5" ry="8" transform="rotate(15 78 44)" />
                        <ellipse cx="76" cy="62" rx="5" ry="8" transform="rotate(-15 76 62)" />
                        <ellipse cx="66" cy="76" rx="5" ry="8" transform="rotate(-40 66 76)" />
                      </svg>

                      {/* Rank Number & AIR text inside wreath */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[26px] font-black text-[#dc2626] leading-none tracking-tight">
                          {t.air}
                        </span>
                        <span className="text-[10px] font-bold text-[#b91c1c] tracking-wider uppercase leading-none mt-0.5">
                          AIR
                        </span>
                      </div>
                    </div>

                    {/* Exam Name Pill Badge */}
                    <div className={`mt-3 px-3 py-1.5 rounded-xl text-xs font-bold leading-tight shadow-xs ${t.examBadgeBg}`}>
                      {t.exam}
                    </div>

                    {/* Optional "Watch Interview" link (Visible on card 4) */}
                    {t.hasInterviewLink ? (
                      <button
                        type="button"
                        onClick={() => setSelectedTopper(t)}
                        className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#0077d8] hover:underline cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Interview</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedTopper(t)}
                        className="mt-4 text-[11px] font-semibold text-slate-400 hover:text-slate-700"
                      >
                        Read Strategy →
                      </button>
                    )}
                  </div>

                  {/* Right Column: Confident Portrait Photo (Static, No zoom on hover) */}
                  <div className="relative shrink-0 w-28 sm:w-32 h-44 sm:h-48 overflow-hidden rounded-t-xl self-end">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  </div>

                </div>

                {/* Candidate Name Ribbon at bottom right (Static, No translate on hover) */}
                <div className="w-full flex justify-end mt-2 pt-1">
                  <div
                    className={`inline-block py-1.5 px-3.5 rounded-lg text-white font-bold text-xs sm:text-[13px] tracking-wide shadow-xs ${t.nameBg}`}
                  >
                    {t.name}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Topper Strategy & Interview Modal */}
      {selectedTopper && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedTopper(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 text-white relative ${selectedTopper.nameBg}`}>
              <button
                type="button"
                onClick={() => setSelectedTopper(null)}
                className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white/50 shrink-0">
                  <img src={selectedTopper.photo} alt={selectedTopper.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-white/90">
                    AIR {selectedTopper.air} • {selectedTopper.exam}
                  </div>
                  <h3 className="text-xl font-black">{selectedTopper.name}</h3>
                  <div className="text-xs text-white/90 font-medium">Topper Strategy & Review</div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Quote className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{selectedTopper.interview.strategy}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 font-medium block">Reported Score</span>
                  <span className="text-slate-800 font-bold text-sm">{selectedTopper.interview.score}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 font-medium block">Attempts</span>
                  <span className="text-slate-800 font-bold text-sm">{selectedTopper.interview.attempts}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Verified PrepSphere Student
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedTopper(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ToppersShowcase;
