import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  const testimonialsData = [
    {
      id: 1,
      category: 'regulatory',
      examTag: 'NABARD Grade A',
      examBadgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      gradientBar: 'from-emerald-400 to-teal-500',
      quote:
        'I had subscribed to a free interview course by PrepSphere. I appeared for the mock interview & the panel members helped me in my weaker sections. Their help, guidance & mentorship made me fortunate enough to clear NABARD Grade A Interview. My interview went for the longest time that day. One advice I will give is to focus especially on the Agriculture part (ARD section). Practice more for descriptive.',
      name: 'Suraj Kr. Prajapati',
      post: 'Assistant Manager • NABARD',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      category: 'banking',
      examTag: 'IBPS PO',
      examBadgeBg: 'bg-sky-50 text-sky-700 border-sky-200/60',
      gradientBar: 'from-sky-400 to-blue-600',
      quote:
        'While studying online, I saw a lot of materials and later understood that PrepSphere was the best material I could get for my preparation. For mock tests, I have heavily relied on their sectional test series. The doubt discussion group also helped me a lot to improve my reasoning speed. Truly thankful to the entire mentor team!',
      name: 'Akshay S Kumar',
      post: 'Probationary Officer • Canara Bank',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      category: 'banking',
      examTag: 'SBI PO',
      examBadgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      gradientBar: 'from-indigo-400 to-purple-600',
      quote:
        'I watched banking 2.0 masterclass videos for the interview preparation in the span of 2 days. PrepSphere provided me with the challenging environment which SBI PO demands. That helped me a lot to answer economic questions and situational banking queries correctly in the interview.',
      name: 'Shubham Bhardwaj',
      post: 'Probationary Officer • State Bank of India',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      category: 'ssc',
      examTag: 'SSC CGL',
      examBadgeBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
      gradientBar: 'from-amber-400 to-orange-500',
      quote:
        'I gave weekly live tests and I also gave 75 full-length mock tests that were really helpful, especially the AI percentile analysis. That gave me an exact understanding of where I stood in all-India competition. The test series were game-changers for my self-study preparation.',
      name: 'Tanya Yadav',
      post: 'Inspector (Central Excise) • CBIC',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      category: 'ssc',
      examTag: 'SSC CHSL',
      examBadgeBg: 'bg-rose-50 text-rose-700 border-rose-200/60',
      gradientBar: 'from-rose-400 to-pink-600',
      quote:
        'The faculties have been very supportive & helped me succeed in my exam. The daily typing speed tests and sectional quizzes kept me ahead of the cutoff right from Tier 1 to document verification. Thank you, PrepSphere!',
      name: 'Shubham Sourav',
      post: 'Postal Assistant • Department of Posts',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      category: 'regulatory',
      examTag: 'RBI Grade B',
      examBadgeBg: 'bg-teal-50 text-teal-700 border-teal-200/60',
      gradientBar: 'from-teal-400 to-emerald-600',
      quote:
        "Mock tests, both for Phase 1 and Phase 2 are comprehensive and contain relevant questions. It helped me approach questions in a calm manner during the examination, which enabled me to clear Phase 1. Sectional tests for Phase 2 were also well-curated with detailed model answers.",
      name: 'Nimitha J Nath',
      post: 'Grade B Officer • Reserve Bank of India (AIR 5)',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 7,
      category: 'ssc',
      examTag: 'SSC CGL',
      examBadgeBg: 'bg-orange-50 text-orange-700 border-orange-200/60',
      gradientBar: 'from-orange-400 to-red-500',
      quote:
        'The level of quantitative aptitude questions in CBT tests matches the TCS exam pattern 100%. Detailed percentile analytics showed me my weak topics in geometry and algebra which I worked on before the Mains.',
      name: 'Vikramaditya Rao',
      post: 'Income Tax Inspector • CBDT',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 8,
      category: 'banking',
      examTag: 'IBPS Clerk',
      examBadgeBg: 'bg-blue-50 text-blue-700 border-blue-200/60',
      gradientBar: 'from-blue-400 to-sky-600',
      quote:
        'The monthly Current Affairs capsules and live revision marathons were the main reason I scored 42 out of 50 in General Awareness. PrepSphere mock tests are the benchmark for all banking aspirants.',
      name: 'Priyanka Sen',
      post: 'Customer Service Associate • Bank of Baroda',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    },
    {
      id: 9,
      category: 'banking',
      examTag: 'SBI PO',
      examBadgeBg: 'bg-violet-50 text-violet-700 border-violet-200/60',
      gradientBar: 'from-violet-400 to-purple-600',
      quote:
        'The high level puzzle drills for Reasoning and Descriptive English evaluation by expert teachers gave me the edge to crack SBI PO in my very first attempt. Highly recommended to all serious aspirants!',
      name: 'Karanvir Singh',
      post: 'Probationary Officer • SBI (AIR 24)',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
    },
  ];

  // Show 3 cards initially, expand to all 9 when isExpanded is true
  const displayedItems = isExpanded ? testimonialsData : testimonialsData.slice(0, 3);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    if (isExpanded) {
      const section = document.getElementById('testimonials');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="testimonials" className="bg-[#fafbfc] py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View more/less on Right */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Testimonials
          </h2>

          <button
            type="button"
            onClick={toggleExpand}
            className="group hidden sm:flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#c8102e] hover:text-[#a50d24] transition-colors cursor-pointer select-none"
          >
            <span>{isExpanded ? 'View less' : 'View more'}</span>
            <div className="w-5 h-5 rounded-full bg-[#c8102e] group-hover:bg-[#a50d24] text-white flex items-center justify-center transition-transform duration-200">
              <ChevronRight
                className={`w-3.5 h-3.5 stroke-[2.8] transition-transform duration-200 ${
                  isExpanded ? '-rotate-90' : 'rotate-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* 3-Column Modern Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-3 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0 scrollbar-none">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[88%] sm:min-w-[48%] md:min-w-0 snap-start bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden relative"
            >
              {/* Vibrant Accent Top Strip */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.gradientBar}`} />

              <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                
                {/* Upper Area: Stars + Exam Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                      ))}
                    </div>

                    {/* Exam Pill Badge */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border ${item.examBadgeBg}`}
                    >
                      {item.examTag}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-slate-100 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                    <p className="text-slate-700 text-[11px] sm:text-[13.5px] leading-relaxed relative z-10 italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Candidate Info Footer */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Avatar with Verified checkmark */}
                    <div className="relative shrink-0">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-200">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white">
                        <CheckCircle2 className="w-3 h-3 stroke-[3]" />
                      </div>
                    </div>

                    {/* Candidate Name & Designation */}
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium truncate">
                        {item.post}
                      </span>
                    </div>
                  </div>

                  {/* Verified Tag */}
                  <span className="hidden sm:inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                    Verified
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
