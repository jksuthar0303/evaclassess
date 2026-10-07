import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  HelpCircle,
  BookOpen,
  Laptop,
  CreditCard,
  Smartphone,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'courses', label: 'Courses & Live Classes', icon: BookOpen },
    { id: 'mocks', label: 'Mock Tests & CBT Engine', icon: Laptop },
    { id: 'payment', label: 'Payment & Validity', icon: CreditCard },
    { id: 'app', label: 'Mobile App & Downloads', icon: Smartphone },
  ];

  const faqData = [
    {
      id: 1,
      category: 'courses',
      question: 'What is included in EVA Classes Live Online Coaching batches?',
      answer: 'Our live online batches include comprehensive syllabus coverage by Bikaner top faculty, daily live interactive video lectures, downloadable bilingual PDF study notes, weekly topic revision drills, and access to the complete CBT mock test series with All-India Rank analytics.',
    },
    {
      id: 2,
      category: 'courses',
      question: 'What happens if I miss a live class?',
      answer: 'All live lectures are automatically recorded in high-definition and uploaded to your student portal within 1 hour of session completion. You have unlimited replay access 24/7 throughout your course validity.',
    },
    {
      id: 3,
      category: 'courses',
      question: 'How do doubt-clearing sessions work?',
      answer: 'Students can ask questions in real-time during live classes via voice and chat. Additionally, we run dedicated weekly live doubt classes and maintain subject-wise faculty discussion boards where doubts are answered within 2 hours.',
    },
    {
      id: 4,
      category: 'mocks',
      question: 'How closely do EVA Classes mock tests mirror the real TCS exam interface?',
      answer: 'Our CBT engine is built to exactly replicate the real TCS examination software. You experience the authentic countdown timer, question palette color codes (visited, answered, marked for review), bilingual language toggling, and realistic sectional time limits.',
    },
    {
      id: 5,
      category: 'mocks',
      question: 'How is the All-India Rank (AIR) and percentile calculated?',
      answer: 'When you submit a live test, your score is benchmarked against tens of thousands of active aspirants across India. You receive your exact All-India Rank, percentile score, time-spent analysis per question, and comparison with the topper accuracy level.',
    },
    {
      id: 6,
      category: 'mocks',
      question: 'Can I re-attempt a mock test after submission?',
      answer: 'Yes, tests can be re-attempted in practice mode anytime. You also retain lifetime access to full bilingual step-by-step solutions, video explanations, and sectional performance diagnostic charts.',
    },
    {
      id: 7,
      category: 'payment',
      question: 'What payment modes are supported for enrollments?',
      answer: 'We support all major payment modes including UPI (Google Pay, PhonePe, Paytm), Net Banking across 50+ banks, Credit Cards, Debit Cards, and EMI options through secure RBI-licensed payment gateways.',
    },
    {
      id: 8,
      category: 'payment',
      question: 'What is the refund policy on courses?',
      answer: 'We offer an unconditional 7-day refund guarantee on our full-length live batches if you have attended fewer than 3 sessions. Please review our Refund Policy page or contact our Bikaner support desk for instant assistance.',
    },
    {
      id: 9,
      category: 'app',
      question: 'Can I access classes and mock tests on mobile devices?',
      answer: 'Yes! EVA Classes is fully accessible via any mobile browser as well as our official Android and iOS applications. You can even download video lessons and class PDF notes to learn offline while traveling.',
    },
    {
      id: 10,
      category: 'app',
      question: 'Can I switch between my laptop and mobile phone?',
      answer: 'Yes, your single login works seamlessly across mobile, tablet, and PC. Your test progress, bookmarked questions, and lecture timestamps synchronize across all your registered devices automatically.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-bold uppercase tracking-wider">
            <span>Help & Knowledge Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Find quick answers about online live coaching, CBT mock test simulator, syllabus coverage, and account support.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. mock test, refund, live class)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs text-sm font-medium focus:outline-none focus:border-[#c8102e] focus:ring-2 focus:ring-[#c8102e]/20 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#c8102e] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-2">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <div className="font-bold text-slate-800">No matching questions found</div>
              <p className="text-xs text-slate-500">
                Try searching with different keywords or contact our student counselor.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'bg-rose-50 text-[#c8102e] rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions? Help Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg font-black text-slate-900">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Our Bikaner expert student counseling team is here to assist you 7 days a week.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQ;
