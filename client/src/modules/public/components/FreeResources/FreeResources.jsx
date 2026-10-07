import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FreeResources() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const resourceCategories = [
    {
      id: 'mock-tests',
      title: 'Mock Tests',
      links: [
        { title: 'SSC CGL Mock Test', path: '/test-series' },
        { title: 'SBI PO Mock Test', path: '/test-series' },
        { title: 'IBPS PO Mock Test', path: '/test-series' },
        { title: 'SSC CHSL Mock Test', path: '/test-series' },
        { title: 'RBI Grade B Mock Test', path: '/test-series' },
      ],
      viewMoreLink: '/test-series',
    },
    {
      id: 'pyq',
      title: 'Previous Year Papers',
      links: [
        { title: 'SSC CGL Previous Year Papers', path: '/test-series' },
        { title: 'SBI PO Previous Year Papers', path: '/test-series' },
        { title: 'IBPS PO Previous Year Papers', path: '/test-series' },
        { title: 'SSC CHSL Previous Year Papers', path: '/test-series' },
        { title: 'RBI Grade B Previous Year Papers', path: '/test-series' },
      ],
      viewMoreLink: '/test-series',
    },
    {
      id: 'sbi-po',
      title: 'SBI PO',
      links: [
        { title: 'SBI PO Notification', path: '/courses' },
        { title: 'SBI PO Syllabus', path: '/courses' },
        { title: 'SBI PO Exam Dates', path: '/courses' },
        { title: 'SBI PO Salary & Perks', path: '/courses' },
        { title: 'SBI PO Admit Card', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
    {
      id: 'ssc-chsl',
      title: 'SSC CHSL',
      links: [
        { title: 'SSC CHSL Notification', path: '/courses' },
        { title: 'SSC CHSL Syllabus', path: '/courses' },
        { title: 'SSC CHSL Apply Online', path: '/courses' },
        { title: 'SSC CHSL Exam Pattern', path: '/courses' },
        { title: 'SSC CHSL Eligibility', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
    {
      id: 'ssc-cgl',
      title: 'SSC CGL',
      links: [
        { title: 'SSC CGL Notification', path: '/courses' },
        { title: 'SSC CGL Apply Online', path: '/courses' },
        { title: 'SSC CGL Exam Pattern', path: '/courses' },
        { title: 'SSC CGL Eligibility', path: '/courses' },
        { title: 'SSC CGL Syllabus', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
    {
      id: 'ibps-po',
      title: 'IBPS PO',
      links: [
        { title: 'IBPS PO Notification', path: '/courses' },
        { title: 'IBPS PO Syllabus', path: '/courses' },
        { title: 'IBPS PO Exam Pattern', path: '/courses' },
        { title: 'IBPS PO Eligibility', path: '/courses' },
        { title: 'IBPS PO Exam Date', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
    {
      id: 'rbi-grade-b',
      title: 'RBI Grade B',
      links: [
        { title: 'RBI Grade B Notification', path: '/courses' },
        { title: 'RBI Grade B Syllabus', path: '/courses' },
        { title: 'RBI Grade B Phase 1 PYQs', path: '/test-series' },
        { title: 'RBI Grade B Phase 2 Prep', path: '/courses' },
        { title: 'RBI Grade B Salary & Perks', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
    {
      id: 'rrb-ntpc',
      title: 'Railways RRB NTPC',
      links: [
        { title: 'RRB NTPC Notification', path: '/courses' },
        { title: 'RRB NTPC Syllabus', path: '/courses' },
        { title: 'RRB NTPC Exam Pattern', path: '/courses' },
        { title: 'RRB NTPC Previous Papers', path: '/test-series' },
        { title: 'RRB NTPC Cut-off Marks', path: '/courses' },
      ],
      viewMoreLink: '/courses',
    },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="resources" className="bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Heading and Right Compact Arrows (Exact Oliveboard Screenshot) */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Access Free Resources
          </h2>

          {/* Right Circular Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8102e] hover:bg-[#a50d24] text-white shadow-xs flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.8]" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8102e] hover:bg-[#a50d24] text-white shadow-xs flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.8]" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Row of Resource Cards */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-0.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {resourceCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#f4f7fb] rounded-2xl p-5 sm:p-6 border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between shrink-0 w-[270px] sm:w-[290px] lg:w-[300px]"
            >
              <div>
                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-800 mb-4 tracking-tight">
                  {cat.title}
                </h3>

                {/* List of Resource Links */}
                <div className="space-y-2.5">
                  {cat.links.map((link, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(link.path)}
                      className="bg-white rounded-xl py-2.5 px-3.5 text-xs sm:text-[13px] font-semibold text-slate-700 shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-slate-200/50 hover:text-[#c8102e] hover:border-[#c8102e]/40 transition-colors flex items-center justify-between cursor-pointer group"
                    >
                      <span className="truncate pr-2">{link.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="mt-5 pt-1">
                <button
                  type="button"
                  onClick={() => navigate(cat.viewMoreLink)}
                  className="bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                >
                  <span>View More</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FreeResources;
