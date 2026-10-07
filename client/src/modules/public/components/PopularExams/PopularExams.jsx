import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POPULAR_EXAMS } from '../../../../data/exams';
import { Badge } from '../../../../components/ui/Badge';
import { Button } from '../../../../components/ui/Button';
import { Users, FileSpreadsheet, BookOpen, Star, ArrowRight } from 'lucide-react';

export function PopularExams({ selectedCategory }) {
  const navigate = useNavigate();

  const filteredExams = selectedCategory
    ? POPULAR_EXAMS.filter((e) => e.category === selectedCategory)
    : POPULAR_EXAMS;

  const displayList = filteredExams.length > 0 ? filteredExams : POPULAR_EXAMS;

  return (
    <section id="exams" className="py-16 bg-[#f8fafc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              FEATURED EXAM PORTALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Top Enrolled Examination Hubs
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Dedicated test portals with previous year papers, question banks, and live mock tests designed as per official notification norms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((exam) => (
            <div
              key={exam.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/50 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary" size="xs">
                    {exam.code}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{exam.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {exam.name}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                {/* Stages Tags */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {exam.stages.map((stage, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {exam.testsCount}+
                    </div>
                    <div className="text-[10px] text-slate-400">Mock Tests</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {exam.coursesCount}
                    </div>
                    <div className="text-[10px] text-slate-400">Batches</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {exam.applicants.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400">Aspirants</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  onClick={() => navigate('/register')}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Enter Exam Hub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularExams;
