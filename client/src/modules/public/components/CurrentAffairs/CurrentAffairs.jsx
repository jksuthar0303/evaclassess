import React from 'react';
import { DAILY_CURRENT_AFFAIRS } from '../../../../data/currentAffairs';
import { Button } from '../../../../components/ui/Button';
import { Calendar, Download, Clock, BookOpen, ArrowRight } from 'lucide-react';

export function CurrentAffairs() {
  return (
    <section id="current-affairs" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              DAILY EXAM INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Daily Current Affairs & Editorial Analysis
            </h2>
          </div>
          <a
            href="#resources"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Download Monthly Compilations <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DAILY_CURRENT_AFFAIRS.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1 font-medium text-slate-500">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.readTime}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded mb-2">
                  {item.category}
                </span>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Article
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Download PDF Summary"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentAffairs;
