import React from 'react';
import {
  Award,
  FileText,
  Landmark,
  TrainTrack,
  MapPin,
  Shield,
  GraduationCap,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { EXAM_CATEGORIES } from '../../../../data/exams';

const ICON_MAP = {
  Award,
  FileText,
  Landmark,
  TrainTrack,
  MapPin,
  Shield,
  GraduationCap,
  BookOpen,
};

export function ExamCategories({ onSelectCategory, activeCategory }) {
  return (
    <section id="categories" className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              TARGET EXAM GOALS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Select Your Examination Category
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Customised syllabus breakdown, sectional tests, live video batches, and daily current affairs curated for each goal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {EXAM_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.icon] || Award;
            const isSelected = activeCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory && onSelectCategory(category.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {category.count} Exams
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400 font-medium">
                    <span>Courses & Mocks</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExamCategories;
