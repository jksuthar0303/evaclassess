import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { Modal } from '../../ui/Modal';
import { Search, BookOpen, Layers, Award, ArrowRight } from 'lucide-react';
import { POPULAR_EXAMS } from '../../../data/exams';
import { FEATURED_COURSES } from '../../../data/courses';
import { AuthModal } from '../../auth/AuthModal';

export function PublicLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredExams = POPULAR_EXAMS.filter((e) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCourses = FEATURED_COURSES.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen min-w-0 flex flex-col overflow-x-hidden bg-white text-slate-800">
      <PublicHeader
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAuth={(mode) => setAuthMode(mode)}
      />

      <main className="min-w-0 flex-1 overflow-x-hidden">
        <Outlet />
      </main>

      <PublicFooter />

      {/* Global Search Modal */}
      <Modal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        title="Search EVA Classes Library"
        maxWidth="max-w-2xl"
        className="search-library-modal"
      >
        <div className="space-y-4 text-slate-800">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name (UPSC, SSC CGL, Banking...), course or mentor..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#be123c] focus:ring-2 focus:ring-[#be123c]/20"
              autoFocus
            />
          </div>

          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Exam Programs ({filteredExams.length})
            </h5>
            <div className="space-y-1.5">
              {filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  onClick={() => {
                    setSearchOpen(false);
                    const el = document.getElementById('exams');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900">{exam.name}</div>
                      <div className="text-[11px] text-slate-500">{exam.applicants}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>

            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-2">
              Courses & Batches ({filteredCourses.length})
            </h5>
            <div className="space-y-1.5">
              {filteredCourses.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setSearchOpen(false);
                    const el = document.getElementById('courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 truncate max-w-sm">
                        {c.title}
                      </div>
                      <div className="text-[11px] text-slate-500">{c.instructor}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onChangeMode={setAuthMode} />
    </div>
  );
}

export default PublicLayout;
