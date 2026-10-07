import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ExploreExams() {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const examsList = [
    {
      id: 'sbi-po',
      name: 'SBI PO',
      bgColor: 'bg-[#ebf5fe]',
      logo: (
        // State Bank of India Logo
        <div className="w-10 h-10 rounded-full bg-[#002f6c] flex items-center justify-center relative shadow-xs">
          <div className="w-4 h-4 rounded-full bg-white relative">
            <div className="w-1.5 h-2.5 bg-[#002f6c] absolute bottom-[-4px] left-1/2 -translate-x-1/2" />
          </div>
        </div>
      ),
    },
    {
      id: 'ibps-po',
      name: 'IBPS PO',
      bgColor: 'bg-[#eef2ff]',
      logo: (
        // IBPS Monogram Emblem
        <div className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-sky-600 text-[13px] tracking-tight">IBPS</span>
        </div>
      ),
    },
    {
      id: 'sbi-clerk',
      name: 'SBI Clerk',
      bgColor: 'bg-[#f3effc]',
      logo: (
        <div className="w-10 h-10 rounded-full bg-[#280071] flex items-center justify-center relative shadow-xs">
          <div className="w-4 h-4 rounded-full bg-white relative">
            <div className="w-1.5 h-2.5 bg-[#280071] absolute bottom-[-4px] left-1/2 -translate-x-1/2" />
          </div>
        </div>
      ),
    },
    {
      id: 'ibps-clerk',
      name: 'IBPS Clerk',
      bgColor: 'bg-[#f5efff]',
      logo: (
        <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-indigo-600 text-[13px] tracking-tight">IBPS</span>
        </div>
      ),
    },
    {
      id: 'ibps-rrb-po',
      name: 'IBPS RRB PO',
      bgColor: 'bg-[#fef6ed]',
      logo: (
        <div className="w-10 h-10 rounded-xl bg-white border border-amber-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-amber-600 text-[11px] tracking-tight leading-none text-center">RRB<br/>PO</span>
        </div>
      ),
    },
    {
      id: 'ibps-rrb-clerk',
      name: 'IBPS RRB Clerk',
      bgColor: 'bg-[#f8f7ee]',
      logo: (
        <div className="w-10 h-10 rounded-xl bg-white border border-lime-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-[#5e771c] text-[11px] tracking-tight leading-none text-center">RRB<br/>CLK</span>
        </div>
      ),
    },
    {
      id: 'ssc-cgl',
      name: 'SSC CGL',
      bgColor: 'bg-[#f0f8f1]',
      logo: (
        // SSC Emblem
        <div className="w-10 h-10 rounded-full bg-white border-2 border-red-600 flex items-center justify-center shadow-xs p-1">
          <div className="w-full h-full rounded-full bg-red-600 flex items-center justify-center text-white font-black text-[9px] tracking-tighter">
            SSC
          </div>
        </div>
      ),
    },
    {
      id: 'ssc-chsl',
      name: 'SSC CHSL',
      bgColor: 'bg-[#f2f9f1]',
      logo: (
        <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-xs p-1">
          <div className="w-full h-full rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-[9px] tracking-tighter">
            CHSL
          </div>
        </div>
      ),
    },
    {
      id: 'railways-ntpc',
      name: 'Railways RRB NTPC',
      bgColor: 'bg-[#fdf2f0]',
      logo: (
        // Indian Railways Logo
        <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-white shadow-xs flex items-center justify-center">
          <div className="w-7 h-7 rounded-full border border-amber-300 flex items-center justify-center text-white font-extrabold text-[9px]">
            RRB
          </div>
        </div>
      ),
    },
    {
      id: 'rbi-grade-b',
      name: 'RBI Grade B',
      bgColor: 'bg-[#edf8f7]',
      logo: (
        // RBI Emblem
        <div className="w-10 h-10 rounded-full bg-white border-2 border-[#78350f] flex items-center justify-center shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#78350f] flex items-center justify-center text-white font-black text-[9px]">
            RBI
          </div>
        </div>
      ),
    },
    {
      id: 'nabard',
      name: 'NABARD Grade A & B',
      bgColor: 'bg-[#eaf7f1]',
      logo: (
        // NABARD Logo
        <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-emerald-700 text-[10px] tracking-tight">NABARD</span>
        </div>
      ),
    },
    {
      id: 'upsc-cse',
      name: 'UPSC CSE',
      bgColor: 'bg-[#eff6ff]',
      logo: (
        // UPSC Lion Capital Emblem
        <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-900 flex items-center justify-center shadow-xs">
          <div className="w-7 h-7 rounded-full bg-blue-900 flex items-center justify-center text-white font-black text-[9px]">
            UPSC
          </div>
        </div>
      ),
    },
    {
      id: 'uppsc-pcs',
      name: 'UPPSC PCS',
      bgColor: 'bg-[#f3f0fb]',
      logo: (
        // UP Government seal
        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-700 flex items-center justify-center shadow-xs">
          <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-white font-black text-[8px] text-center leading-none">
            UP<br/>PCS
          </div>
        </div>
      ),
    },
    {
      id: 'dfccil',
      name: 'DFCCIL Exam',
      bgColor: 'bg-[#f0f9ff]',
      logo: (
        <div className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center shadow-xs">
          <span className="font-black text-sky-700 text-[10px] tracking-tight">DFCCIL</span>
        </div>
      ),
    },
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleExamClick = (exam) => {
    navigate(`/exam/${exam.id}`);
  };

  return (
    <section className="bg-white py-8 sm:py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Screenshot */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-800 tracking-tight">
            Explore Upcoming & Popular Exams
          </h2>
        </div>

        {/* Scrollable Container with Left and Right Compact Arrows */}
        <div className="relative">
          
          {/* Left Compact Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="absolute -left-2 sm:-left-3 top-9 sm:top-10 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8102e] hover:bg-[#a50d24] text-white shadow-md flex items-center justify-center z-10 cursor-pointer transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.8]" />
          </button>

          {/* Scrollable Row */}
          <div
            ref={scrollContainerRef}
            className="flex items-start gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-3 sm:px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {examsList.map((exam) => (
              <div
                key={exam.id}
                onClick={() => handleExamClick(exam)}
                className="flex flex-col items-center gap-2.5 shrink-0 cursor-pointer select-none w-20 sm:w-[94px]"
              >
                {/* Square Icon Tile (Static) */}
                <div
                  className={`w-20 h-20 sm:w-[94px] sm:h-[94px] rounded-2xl flex items-center justify-center p-3 border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] ${exam.bgColor}`}
                >
                  {exam.logo}
                </div>

                {/* Exam Title Underneath */}
                <span className="text-[12px] sm:text-[13px] font-semibold text-slate-700 text-center leading-tight line-clamp-2 px-1">
                  {exam.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Compact Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="absolute -right-2 sm:-right-3 top-9 sm:top-10 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8102e] hover:bg-[#a50d24] text-white shadow-md flex items-center justify-center z-10 cursor-pointer transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.8]" />
          </button>

        </div>

      </div>
    </section>
  );
}

export default ExploreExams;
