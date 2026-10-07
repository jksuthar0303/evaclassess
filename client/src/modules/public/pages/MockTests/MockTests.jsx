import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  RotateCcw,
  BookOpen,
  Star,
  Users,
  Sparkles,
  TrendingUp,
  FileText,
  AlertCircle,
  HelpCircle,
  BarChart3,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  MOCK_TEST_CATEGORIES,
  MOCK_TEST_SERIES_PACKAGES,
  SAMPLE_CBT_QUESTIONS,
} from '../../../../data/mockTests.data';
import { EvaLogo } from '../../../../components/common/EvaLogo';

export function MockTests() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState(null);
  
  // CBT Test Taking Engine State
  const [activeCbtTest, setActiveCbtTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [visitedQuestions, setVisitedQuestions] = useState(new Set([1]));
  const [questionLanguage, setQuestionLanguage] = useState('en'); // 'en' or 'hi'
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(900); // 15 mins test
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const categoryBarRef = useRef(null);

  // Category horizontal scroll
  const handleScrollCategory = (direction) => {
    if (categoryBarRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      categoryBarRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Timer countdown for CBT
  useEffect(() => {
    if (!activeCbtTest || isTestSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeCbtTest, isTestSubmitted]);

  // Format time MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start CBT Test
  const handleStartTest = (testItem, packageItem) => {
    setSelectedPackage(null);
    const examSlug = (packageItem?.exam || 'exam')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    navigate(`/exam/${examSlug}?mode=login`);
  };

  // CBT Question Handlers
  const currentQ = SAMPLE_CBT_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQ.id];
      return updated;
    });
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIndex < SAMPLE_CBT_QUESTIONS.length - 1) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      setVisitedQuestions((prev) => new Set([...prev, SAMPLE_CBT_QUESTIONS[nextIdx].id]));
    }
  };

  const handleMarkForReviewAndNext = () => {
    setMarkedForReview((prev) => new Set([...prev, currentQ.id]));
    handleSaveAndNext();
  };

  const handleJumpToQuestion = (idx) => {
    setCurrentQuestionIndex(idx);
    setVisitedQuestions((prev) => new Set([...prev, SAMPLE_CBT_QUESTIONS[idx].id]));
  };

  const handleSubmitTest = () => {
    setShowSubmitConfirm(false);
    setIsTestSubmitted(true);
  };

  const handleExitCbt = () => {
    setActiveCbtTest(null);
    setIsTestSubmitted(false);
  };

  // Calculate results
  const calculateResults = () => {
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    SAMPLE_CBT_QUESTIONS.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!ans) {
        unattempted++;
      } else if (ans === q.correctOption) {
        correct++;
        score += q.marks;
      } else {
        incorrect++;
        score -= q.negativeMarks;
      }
    });

    const totalMarks = SAMPLE_CBT_QUESTIONS.reduce((acc, q) => acc + q.marks, 0);
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    const percentile = Math.min(99.4, Math.max(45, (score / totalMarks) * 100 + 12)).toFixed(1);

    return {
      score: Math.max(0, score).toFixed(2),
      totalMarks,
      correct,
      incorrect,
      unattempted,
      accuracy,
      percentile,
    };
  };

  const results = isTestSubmitted ? calculateResults() : null;

  // Filter test packages by active category
  const filteredPackages = MOCK_TEST_SERIES_PACKAGES.filter((pkg) => {
    return activeCategory === 'all' || pkg.category === activeCategory;
  });

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-slate-800 font-sans pb-16">
      
      {/* 1. HERO SECTION (Oliveboard Style Elevated Layout) */}
      <section className="bg-gradient-to-b from-sky-50/70 via-white to-[#fcfdfe] pt-10 sm:pt-14 pb-10 sm:pb-14 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200/70 text-[#be123c] text-xs font-black tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#be123c] animate-ping" />
                <span>All India Live Mock Tests 2026-27 • EVA CLASSES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.2]">
                Online Mock Test Series with Real TCS Exam Simulator
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Simulate real exam pressure with exact exam interface, All India Rank, speed percentile analytics, and bilingual questions designed by Bikaner's top rankers and expert faculty.
              </p>

              {/* Trust Strip */}
              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium pt-2">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-extrabold text-slate-800">4.9/5</span> Rating
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#be123c]" />
                  <span className="font-extrabold text-slate-800">50 Lakh+</span> Mocks Taken
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Latest 2026 Exam Pattern</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Weekend Mock Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-700/60 relative overflow-hidden">
                {/* Glow pill */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#be123c]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[11px] font-black uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                    <span>Live This Weekend</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">100% Free Entry</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  SBI PO 2026 Prelims All India Free Live Mock #1
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Compete with 45,000+ aspirants nationwide. Get real All-India Rank, percentile prediction & question-wise time analysis.
                </p>

                {/* Specs Pill */}
                <div className="grid grid-cols-3 gap-2 my-4 pt-1 text-center">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                    <div className="text-[10px] text-slate-400">Questions</div>
                    <div className="text-sm font-black text-white">100 Qs</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                    <div className="text-[10px] text-slate-400">Duration</div>
                    <div className="text-sm font-black text-white">60 Mins</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2">
                    <div className="text-[10px] text-slate-400">Language</div>
                    <div className="text-sm font-black text-white">En & Hi</div>
                  </div>
                </div>

                {/* Attempt Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleStartTest(
                      MOCK_TEST_SERIES_PACKAGES[0].testsList[0],
                      MOCK_TEST_SERIES_PACKAGES[0]
                    )
                  }
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#be123c] to-[#e11d48] hover:from-[#9f1239] hover:to-[#be123c] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Free Live Test Simulator</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY SWITCHER & FILTER BAR */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-[64px] sm:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Horizontal Category Navigation Bar with Left & Right Buttons */}
          <div className="flex items-center gap-2">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => handleScrollCategory('left')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-[#be123c] hover:text-white hover:border-[#be123c] text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Scrollable Container with Hidden Scrollbar */}
            <div
              ref={categoryBarRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              className="bg-[#f0f4f9] p-1 sm:p-1.5 rounded-xl flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth flex-1 [&::-webkit-scrollbar]:hidden"
            >
              {MOCK_TEST_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#be123c] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={() => handleScrollCategory('right')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-[#be123c] hover:text-white hover:border-[#be123c] text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. TEST SERIES PACKAGES GRID (Zero Pricing - Only Attempt Test & View Tests) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#c8102e] text-white flex items-center justify-center font-black text-sm tracking-wider shadow-xs">
                    {pkg.examLogo}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-100 text-[#c8102e]">
                    {pkg.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 font-medium">
                    <span className="font-bold text-slate-800">{pkg.totalTests} Full Tests</span>
                    <span>•</span>
                    <span className="text-[#c8102e] font-bold">All-India Rank</span>
                    <span>•</span>
                    <span>{pkg.languages}</span>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {pkg.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c8102e] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: No Pricing - Only Attempt Test & View Tests */}
              <div className="p-5 bg-rose-50/20 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Real TCS Simulator</span>
                  </span>
                  <span className="text-slate-700 font-bold">
                    {pkg.enrolledAspirants.toLocaleString()} Aspirants Enrolled
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleStartTest(pkg.testsList[0], pkg)}
                    className="py-3 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-extrabold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Attempt Test</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(pkg)}
                    className="py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-[#c8102e] hover:bg-slate-50 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Tests ({pkg.totalTests})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL: PACKAGE TESTS LIST & SCHEDULE */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#be123c]">
                  EVA CLASSES • Test Series Schedule
                </div>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {selectedPackage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Test list items */}
            <div className="p-6 overflow-y-auto space-y-3 flex-1 custom-scrollbar">
              {selectedPackage.testsList.map((test, idx) => (
                <div
                  key={test.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#be123c]/40 transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                      <h4 className="text-sm font-bold text-slate-900">{test.name}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 text-[#be123c] text-[10px] font-black uppercase">
                        Active Mock
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span>{test.questions} Questions</span>
                      <span>•</span>
                      <span>{test.marks} Marks</span>
                      <span>•</span>
                      <span>{test.duration} Mins</span>
                      <span>•</span>
                      <span>{test.attempts.toLocaleString()} Attempts</span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => handleStartTest(test, selectedPackage)}
                      className="px-4 py-2 rounded-xl bg-[#be123c] hover:bg-[#9f1239] text-white font-extrabold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Attempt Test</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-600 font-bold">
                All {selectedPackage.totalTests} tests include All-India Rank & instant AI solutions • EVA CLASSES
              </div>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="px-5 py-2.5 rounded-xl bg-[#be123c] hover:bg-[#9f1239] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. FULL COMPUTER BASED TEST (CBT) SIMULATOR ENGINE */}
      {activeCbtTest && (
        <div className="fixed inset-0 z-50 bg-[#f8fafc] flex flex-col overflow-hidden animate-in fade-in">
          
          {/* CBT Header */}
          <header className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <EvaLogo size="sm" showText={false} />
              <div>
                <h2 className="text-xs sm:text-sm font-black text-white leading-tight">
                  {activeCbtTest.name}
                </h2>
                <div className="text-[11px] text-slate-400 font-medium">
                  {activeCbtTest.packageName}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setQuestionLanguage('en')}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    questionLanguage === 'en' ? 'bg-[#be123c] text-white' : 'text-slate-300'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionLanguage('hi')}
                  className={`px-2.5 py-1 rounded cursor-pointer ${
                    questionLanguage === 'hi' ? 'bg-[#be123c] text-white' : 'text-slate-300'
                  }`}
                >
                  हिन्दी
                </button>
              </div>

              {/* Timer Countdown */}
              {!isTestSubmitted && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono font-black text-sm sm:text-base">
                  <Clock className="w-4 h-4 animate-pulse" />
                  <span>{formatTime(timeLeftSeconds)}</span>
                </div>
              )}

              {/* Submit or Exit Button */}
              {!isTestSubmitted ? (
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(true)}
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md transition-colors cursor-pointer"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleExitCbt}
                  className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  <span>Exit Test</span>
                </button>
              )}
            </div>
          </header>

          {/* If Submitted: Show Comprehensive Scorecard & Solutions */}
          {isTestSubmitted ? (
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-5xl mx-auto w-full space-y-8 custom-scrollbar">
              
              {/* Scorecard Hero Banner */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-100 pb-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs uppercase tracking-wider">
                      Mock Test Completed!
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                      Performance Scorecard & AI Rank
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {activeCbtTest.name} • EVA CLASSES National Benchmark
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartTest(activeCbtTest, null)}
                    className="px-5 py-2.5 rounded-xl bg-[#be123c] hover:bg-[#9f1239] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake Test</span>
                  </button>
                </div>

                {/* 4 Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-4 text-center">
                    <div className="text-xs text-sky-800 font-bold">Your Score</div>
                    <div className="text-2xl sm:text-3xl font-black text-sky-900 mt-1">
                      {results.score} <span className="text-xs text-sky-600 font-medium">/ {results.totalMarks}</span>
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">Cutoff: 3.50 (Cleared)</div>
                  </div>

                  <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 text-center">
                    <div className="text-xs text-purple-800 font-bold">Percentile</div>
                    <div className="text-2xl sm:text-3xl font-black text-purple-900 mt-1">
                      {results.percentile}%
                    </div>
                    <div className="text-[10px] text-purple-600 font-medium mt-1">Among Top 5%</div>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 text-center">
                    <div className="text-xs text-amber-800 font-bold">Accuracy</div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-900 mt-1">
                      {results.accuracy}%
                    </div>
                    <div className="text-[10px] text-amber-700 font-medium mt-1">
                      {results.correct} Correct, {results.incorrect} Wrong
                    </div>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 text-center">
                    <div className="text-xs text-emerald-800 font-bold">All India Rank</div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-900 mt-1">
                      #142
                    </div>
                    <div className="text-[10px] text-emerald-700 font-medium mt-1">Out of 24,800 Aspirants</div>
                  </div>
                </div>
              </div>

              {/* Step by Step Question Solutions */}
              <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#be123c]" />
                  <span>Detailed Solutions & Answer Explanations</span>
                </h4>

                {SAMPLE_CBT_QUESTIONS.map((q, idx) => {
                  const userChoice = userAnswers[q.id];
                  const isCorrect = userChoice === q.correctOption;
                  const isSkipped = !userChoice;

                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-black text-sm text-slate-800">Q{idx + 1}.</span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                            {q.section}
                          </span>
                        </div>

                        <div>
                          {isSkipped ? (
                            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs">
                              Unattempted
                            </span>
                          ) : isCorrect ? (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-black text-xs flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Correct (+{q.marks})</span>
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 font-black text-xs flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>Incorrect (-{q.negativeMarks})</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Question Text */}
                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                        {questionLanguage === 'hi' ? q.questionHi : q.questionEn}
                      </p>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt) => {
                          const isOptionCorrect = opt.id === q.correctOption;
                          const isOptionChosen = userChoice === opt.id;

                          let optClass = 'bg-slate-50 border-slate-200 text-slate-700';
                          if (isOptionCorrect) {
                            optClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                          } else if (isOptionChosen && !isOptionCorrect) {
                            optClass = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-2 ${optClass}`}
                            >
                              <span>
                                <strong className="mr-1.5">{opt.id}.</strong>
                                {questionLanguage === 'hi' ? opt.textHi : opt.textEn}
                              </span>
                              {isOptionCorrect && (
                                <span className="text-[10px] font-black uppercase text-emerald-700">Correct Answer</span>
                              )}
                              {isOptionChosen && !isOptionCorrect && (
                                <span className="text-[10px] font-black uppercase text-rose-700">Your Choice</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 block mb-1 font-bold">Solution:</strong>
                        {questionLanguage === 'hi' ? q.solutionHi : q.solutionEn}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ) : (
            /* Active Live CBT Testing Screen */
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              
              {/* Left / Center Area: Question Viewer & Actions */}
              <div className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 bg-white border-r border-slate-200">
                
                {/* Question Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black text-slate-900">
                        Question {currentQuestionIndex + 1}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">
                        {currentQ.section}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                      <span className="text-emerald-600 font-bold">+{currentQ.marks}</span>
                      <span>•</span>
                      <span className="text-rose-500 font-bold">-{currentQ.negativeMarks}</span>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="py-2">
                    <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed select-none">
                      {questionLanguage === 'hi' ? currentQ.questionHi : currentQ.questionEn}
                    </p>
                  </div>

                  {/* Options List */}
                  <div className="mt-6 space-y-3">
                    {currentQ.options.map((opt) => {
                      const isSelected = userAnswers[currentQ.id] === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all flex items-center gap-3 cursor-pointer select-none ${
                            isSelected
                              ? 'bg-rose-50/80 border-[#be123c] text-[#be123c] font-bold shadow-xs'
                              : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected
                                ? 'border-[#be123c] bg-[#be123c] text-white'
                                : 'border-slate-300 text-slate-600'
                            }`}
                          >
                            {opt.id}
                          </div>
                          <span className="text-sm sm:text-base">
                            {questionLanguage === 'hi' ? opt.textHi : opt.textEn}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleMarkForReviewAndNext}
                      className="px-4 py-2.5 rounded-xl border border-purple-300 text-purple-700 bg-purple-50 hover:bg-purple-100 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Mark for Review & Next
                    </button>
                    <button
                      type="button"
                      onClick={handleClearResponse}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Clear Response
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveAndNext}
                      className="px-6 py-2.5 rounded-xl bg-[#be123c] hover:bg-[#9f1239] text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer"
                    >
                      Save & Next
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Panel: Question Palette & Legend */}
              <div className="w-full lg:w-80 bg-slate-50 p-4 sm:p-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 shrink-0">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
                    Question Palette ({SAMPLE_CBT_QUESTIONS.length} Questions)
                  </h4>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 font-semibold mb-4 bg-white p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center font-bold text-[9px]">✓</span>
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-rose-500 text-white flex items-center justify-center font-bold text-[9px]">✕</span>
                      <span>Not Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-purple-600 text-white flex items-center justify-center font-bold text-[9px]">★</span>
                      <span>Review</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-[9px]">0</span>
                      <span>Not Visited</span>
                    </div>
                  </div>

                  {/* Question Number Tiles */}
                  <div className="grid grid-cols-5 gap-2">
                    {SAMPLE_CBT_QUESTIONS.map((q, idx) => {
                      const isAnswered = !!userAnswers[q.id];
                      const isReview = markedForReview.has(q.id);
                      const isCurrent = currentQuestionIndex === idx;

                      let tileBg = 'bg-slate-200 text-slate-700';
                      if (isReview) {
                        tileBg = 'bg-purple-600 text-white';
                      } else if (isAnswered) {
                        tileBg = 'bg-emerald-500 text-white';
                      } else if (visitedQuestions.has(q.id)) {
                        tileBg = 'bg-rose-500 text-white';
                      }

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => handleJumpToQuestion(idx)}
                          className={`w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center transition-all cursor-pointer ${tileBg} ${
                            isCurrent ? 'ring-2 ring-slate-900 ring-offset-2' : ''
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Final Submit in Sidebar */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirm(true)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md transition-colors cursor-pointer"
                  >
                    Submit Test Paper
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* Submit Confirmation Modal */}
          {showSubmitConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
              <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl text-center space-y-4">
                <AlertCircle className="w-12 h-12 text-[#be123c] mx-auto" />
                <h4 className="text-lg font-black text-slate-900">Are you sure you want to submit?</h4>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>Answered: <strong className="text-emerald-600">{Object.keys(userAnswers).length}</strong></p>
                  <p>Unanswered: <strong className="text-rose-500">{SAMPLE_CBT_QUESTIONS.length - Object.keys(userAnswers).length}</strong></p>
                  <p>Marked for Review: <strong className="text-purple-600">{markedForReview.size}</strong></p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirm(false)}
                    className="py-2.5 rounded-xl border border-slate-200 font-bold text-xs text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitTest}
                    className="py-2.5 rounded-xl bg-[#be123c] hover:bg-[#9f1239] font-bold text-xs text-white shadow-md cursor-pointer"
                  >
                    Yes, Submit
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default MockTests;
