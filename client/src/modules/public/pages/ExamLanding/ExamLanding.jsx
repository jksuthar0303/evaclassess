import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Mail,
  Smartphone,
  Lock,
  Play,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Users,
  Star,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  FileText
} from 'lucide-react';
import { EXAMS_MENU_DATA } from '../../../../data/examsMenu.data';
import { MOCK_TEST_SERIES_PACKAGES } from '../../../../data/mockTests.data';
import { useAuthStore } from '../../../../stores/auth.store';
import { EvaLogo } from '../../../../components/common/EvaLogo';

export function ExamLanding() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { login, isAuthenticated, user } = useAuthStore();

  // Registration/Login Card Form State
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Find exam details from menu data or fallback
  const exam = useMemo(() => {
    let found = null;
    for (const cat of EXAMS_MENU_DATA) {
      const match = cat.exams.find(
        (e) => e.id === examId || e.id.toLowerCase() === (examId || '').toLowerCase()
      );
      if (match) {
        found = { ...match, categoryName: cat.name };
        break;
      }
    }

    if (found) return found;

    // Fallback if URL slug is custom (e.g. sidbi, sbi-po, etc.)
    const cleanTitle = (examId || 'Exam')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      id: examId || 'custom-exam',
      title: cleanTitle,
      logoText: cleanTitle.slice(0, 4).toUpperCase(),
      logoBg: 'bg-[#c8102e]',
      logoColor: 'text-white',
      categoryName: 'Competitive Exams',
    };
  }, [examId]);

  // Find relevant mock tests for this exam
  const relevantMockPackage = useMemo(() => {
    return (
      MOCK_TEST_SERIES_PACKAGES.find(
        (p) =>
          p.title.toLowerCase().includes(exam.title.toLowerCase()) ||
          exam.title.toLowerCase().includes(p.exam.toLowerCase())
      ) || MOCK_TEST_SERIES_PACKAGES[0]
    );
  }, [exam.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      name: formData.name || formData.email.split('@')[0] || 'Aspirant',
      email: formData.email,
      role: 'student',
    });
    setFormSubmitted(true);
  };

  const handleGoogleSignIn = () => {
    login({
      name: 'Google User',
      email: 'student@gmail.com',
      role: 'student',
    });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION (EXACT MATCH TO OLIVEBOARD SIDBI SCREENSHOT, BRANDED IN EVA RED) */}
      <section className="relative bg-gradient-to-r from-[#6b0716] via-[#881337] to-[#c8102e] text-white py-10 sm:py-14 lg:py-16 overflow-hidden">
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading + Subtitle + 6 Checklist Features */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Breadcrumb */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-rose-100">
                <span>EVA CLASSES</span>
                <span>•</span>
                <span>{exam.categoryName || 'Exam Preparation'}</span>
              </div>

              {/* Main Heading matching Screenshot */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.2]">
                {exam.title} Online Coaching Classes
              </h1>

              {/* Subtitle matching Screenshot */}
              <p className="text-sm sm:text-base text-rose-100 leading-relaxed max-w-xl">
                Crack {exam.title} with video lessons, live classes, mock tests, and comprehensive doubt sessions included in {exam.title} Courses.
              </p>

              {/* 6 Feature Checkmarks in 2 Columns matching Screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>Complete Syllabus Coverage</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>Live Classes with Doubt Clearing</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>Mock Tests for Practice</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>Live Practice Sessions</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>Short Cuts and Tips</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#c8102e] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-white text-[#c8102e]" />
                  </div>
                  <span>1:1 Mock Interviews</span>
                </div>
              </div>

              {/* Direct Quick Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-rose-200">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  <strong className="text-white">4.9/5</strong> Rating by Toppers
                </span>
                <span>•</span>
                <span>100% Latest 2026 TCS Interface</span>
              </div>
            </div>

            {/* Right Column: Exact Registration / Login Card matching Screenshot */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-slate-800">
                
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      Welcome to {exam.title} Prep!
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your free trial is active. You can now access video lectures, test simulator, and daily notes.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/mock-tests"
                        className="inline-block w-full py-3 rounded-xl bg-[#c8102e] text-white font-bold text-sm text-center"
                      >
                        Start Practicing Now
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Google Sign-in Button matching Screenshot */}
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.99 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                      <span>Sign in with Google</span>
                    </button>

                    {/* Divider matching Screenshot */}
                    <div className="flex items-center gap-3 my-2">
                      <div className="flex-1 border-t border-slate-200" />
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        Or
                      </span>
                      <div className="flex-1 border-t border-slate-200" />
                    </div>

                    {/* Input: Email */}
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Input: Mobile No */}
                    <div className="relative">
                      <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile No"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Input: Password */}
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Action Button: Register Now matching Screenshot (Orange/Amber) */}
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-extrabold text-sm sm:text-base shadow-sm transition-colors cursor-pointer"
                    >
                      {isLoginMode ? 'Login to Continue' : 'Register Now'}
                    </button>

                    {/* Footer Toggle matching Screenshot */}
                    <div className="text-center pt-1 text-xs text-slate-500 font-medium">
                      {isLoginMode ? (
                        <span>
                          Don't have an account?{' '}
                          <button
                            type="button"
                            onClick={() => setIsLoginMode(false)}
                            className="text-[#c8102e] font-bold hover:underline cursor-pointer"
                          >
                            Register
                          </button>
                        </span>
                      ) : (
                        <span>
                          Already a user?{' '}
                          <button
                            type="button"
                            onClick={() => setIsLoginMode(true)}
                            className="text-[#c8102e] font-bold hover:underline cursor-pointer"
                          >
                            Login
                          </button>
                        </span>
                      )}
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EXAM QUICK FACTS STRIP */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-slate-100">
            <div className="p-2">
              <div className="text-xs text-slate-400 font-semibold">Target Exam</div>
              <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">{exam.title}</div>
            </div>
            <div className="p-2">
              <div className="text-xs text-slate-400 font-semibold">Exam Mode</div>
              <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">Online CBT (TCS Interface)</div>
            </div>
            <div className="p-2">
              <div className="text-xs text-slate-400 font-semibold">Course Medium</div>
              <div className="text-sm sm:text-base font-black text-slate-900 mt-0.5">Bilingual (Hindi & English)</div>
            </div>
            <div className="p-2">
              <div className="text-xs text-slate-400 font-semibold">Faculty Center</div>
              <div className="text-sm sm:text-base font-black text-[#c8102e] mt-0.5">EVA Classes Bikaner</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES & BATCHES AVAILABLE FOR THIS EXAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Popular {exam.title} Live Coaching Batches
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Structured batches designed strictly on the 2026 latest blueprint by expert faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Batch Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-[#c8102e] text-[11px] font-black uppercase tracking-wider">
                Full Foundation
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {exam.title} 2026 Complete Selection Batch
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete coverage from zero basics to advanced mains level with daily live lectures, class PDF notes & quizzes.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>350+ Hours Live Interactive Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Topic-wise PDF notes & Formula cheat-sheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Full CBT Test Series included free</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full py-3 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs sm:text-sm text-center block transition-colors"
              >
                Join Live Batch
              </Link>
            </div>
          </div>

          {/* Batch Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase tracking-wider">
                Crash Course
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {exam.title} Fast-Track Revision & Speed Drill
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Targeted 60-day rapid revision designed for aspirants preparing in final exam cycle with high-yield questions.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>High-frequency topic speed sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Previous 5 years solved question papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Weekly live ranker guidance webinar</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/courses"
                className="w-full py-3 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs sm:text-sm text-center block transition-colors"
              >
                View Batch Schedule
              </Link>
            </div>
          </div>

          {/* Batch Card 3: Mock Test Pass */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-black uppercase tracking-wider">
                Test Series Pass
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {exam.title} 100+ Full CBT Mock Test Series
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Real TCS simulation engine with All India Percentile, speed analysis, and step-by-step video solutions.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Exact exam interface, fonts & palette</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Instant performance scorecard & weak area meter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Bilingual (English & Hindi) question switcher</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/mock-tests"
                className="w-full py-3 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs sm:text-sm text-center block transition-colors"
              >
                Attempt Test Simulator
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SYLLABUS & EXAM PATTERN SECTION */}
      <section className="bg-white border-y border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {exam.title} Exam Pattern & Syllabus Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Know the detailed weightage, marking scheme, and time duration for each section.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Prelims Box */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="font-black text-slate-900 text-base">Stage 1: Preliminary Exam</h3>
                <span className="text-xs font-bold text-[#c8102e]">Duration: 60 Mins</span>
              </div>
              <div className="divide-y divide-slate-200 text-xs sm:text-sm mt-3">
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">Quantitative Aptitude</span>
                  <span className="font-bold text-slate-900">35 Qs • 35 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">Reasoning Ability</span>
                  <span className="font-bold text-slate-900">35 Qs • 35 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">English Language</span>
                  <span className="font-bold text-slate-900">30 Qs • 30 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5 font-bold text-slate-900 bg-rose-50/60 px-3 rounded-lg mt-2">
                  <span>Total Composite</span>
                  <span className="text-[#c8102e]">100 Qs • 100 Marks</span>
                </div>
              </div>
            </div>

            {/* Mains Box */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="font-black text-slate-900 text-base">Stage 2: Mains & Descriptive</h3>
                <span className="text-xs font-bold text-[#c8102e]">Duration: 180 Mins</span>
              </div>
              <div className="divide-y divide-slate-200 text-xs sm:text-sm mt-3">
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">Data Analysis & Interpretation</span>
                  <span className="font-bold text-slate-900">35 Qs • 60 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">Reasoning & Computer Aptitude</span>
                  <span className="font-bold text-slate-900">45 Qs • 60 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-semibold text-slate-700">General / Economy / Banking Awareness</span>
                  <span className="font-bold text-slate-900">40 Qs • 40 Marks</span>
                </div>
                <div className="flex items-center justify-between py-2.5 font-bold text-slate-900 bg-rose-50/60 px-3 rounded-lg mt-2">
                  <span>Total + Descriptive Writing</span>
                  <span className="text-[#c8102e]">155 Qs • 200 Marks (+50 Descriptive)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions for {exam.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Everything you need to know about preparation, syllabus, and guidance.
          </p>
        </div>

        <div className="space-y-3">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900">
              When are the live classes conducted for {exam.title}?
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Classes are held live every morning and evening. If you miss any session, full high-definition recordings are accessible 24/7 on the web and mobile app.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900">
              Are the mock tests based on the latest 2026 TCS exam interface?
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Yes, our computer-based test (CBT) engine exactly mirrors the official TCS interface with bilingual question toggling, question palette colors, and countdown timer.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900">
              How can I clear my individual doubts?
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Every batch has dedicated faculty doubt-clearing sessions and a 1-on-1 mentor chat to review weak areas and mock test scores.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ExamLanding;
