import React from 'react';
import { FACULTY_MEMBERS } from '../../../../data/faculty';
import { Award, Users, BookOpen } from 'lucide-react';

export function Faculty() {
  return (
    <section id="faculty" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            ESTEEMED MENTORSHIP BOARD
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Learn Under India's Renowned Educators & Ex-Officers
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Mentors with proven track records of producing Single Digit All India Ranks in UPSC, SSC CGL & Banking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_MEMBERS.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 text-center flex flex-col items-center hover:shadow-lg transition-all group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-blue-500/20 group-hover:ring-blue-500 transition-all">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {faculty.name}
              </h3>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                {faculty.subject}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 max-w-[200px] leading-tight">
                {faculty.credentials}
              </p>

              <div className="w-full mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {faculty.studentsMentored}
                  </div>
                  <div className="text-[10px] text-slate-400">Mentored</div>
                </div>
                <div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">
                    {faculty.selections.split(' ')[0]}
                  </div>
                  <div className="text-[10px] text-slate-400">Selections</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
