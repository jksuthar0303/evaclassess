import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { EXAMS_MENU_DATA } from '../../../data/examsMenu.data';
import { useThemeStore } from '../../../stores/theme.store';

export function ExamMegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }) {
  const { palette } = useThemeStore();
  const [selectedCategoryId, setSelectedCategoryId] = useState('bank-insurance');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeCategory =
    EXAMS_MENU_DATA.find((c) => c.id === selectedCategoryId) || EXAMS_MENU_DATA[0];

  const handleExamClick = (exam) => {
    onClose();
    navigate(`/exam/${exam.id}`);
  };

  return (
    <>
      {/* Click-away backdrop overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
      />

      {/* Main Centered Mega Menu Box (Oliveboard exact replica) */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="fixed top-[64px] sm:top-[68px] left-1/2 -translate-x-1/2 w-[96vw] max-w-[1120px] bg-white rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.18)] border border-slate-200 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex h-[490px] sm:h-[530px]">
          
          {/* Left Categories Column (Scrollable Sidebar) */}
          <div className="w-48 sm:w-60 border-r border-slate-200 bg-[#fbfcfd] overflow-y-auto custom-scrollbar p-2 sm:p-2.5 space-y-1 shrink-0 select-none">
            {EXAMS_MENU_DATA.map((cat) => {
              const isActive = cat.id === activeCategory.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setSelectedCategoryId(cat.id)}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  style={{
                    backgroundColor: isActive ? palette.primary : undefined,
                  }}
                  className={`w-full flex items-center justify-between px-3 sm:px-3.5 py-2.5 rounded-lg text-xs sm:text-[13px] font-semibold text-left transition-all cursor-pointer ${
                    isActive
                      ? 'text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate pr-1">{cat.name}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isActive ? 'text-white translate-x-0.5' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Exams Grid Column */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-5 bg-white">
            {/* 3-Column Grid of Exam Cards (Directly matching Oliveboard) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {activeCategory.exams.map((exam) => (
                <div
                  key={exam.id}
                  onClick={() => handleExamClick(exam)}
                  className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white hover:border-[#c8102e] hover:bg-rose-50/20 transition-colors cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                    {/* Exam Branded Logo Badge */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-[10px] sm:text-[11px] tracking-tight shrink-0 shadow-xs ${exam.logoBg} ${exam.logoColor}`}
                    >
                      {exam.logoText}
                    </div>

                    {/* Exam Title */}
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-700 group-hover:text-[#c8102e] transition-colors truncate">
                      {exam.title}
                    </span>
                  </div>

                  {/* Right Chevron */}
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#c8102e] transition-colors shrink-0 ml-1" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ExamMegaMenu;
