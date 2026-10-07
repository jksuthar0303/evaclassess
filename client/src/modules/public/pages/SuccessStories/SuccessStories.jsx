import React from 'react';
import { ArrowRight, Award, BookOpen, CheckCircle2, GraduationCap, Quote, Star, Users } from 'lucide-react';

const achievers = [
  {
    name: 'Nakshatra Malhotra',
    exam: 'RBI Grade B 2025',
    rank: 'AIR 1',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=85',
    quote: 'The mock analysis and descriptive evaluation gave my preparation the direction it needed.',
    detail: '40+ full-length mocks completed',
  },
  {
    name: 'Dhruv Rana',
    exam: 'SSC CGL 2025',
    rank: 'AIR 1',
    location: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=85',
    quote: 'The exam-level questions helped me build speed without losing accuracy.',
    detail: '75+ mock tests attempted',
  },
  {
    name: 'Niranjan Jain',
    exam: 'SBI PO 2024–25',
    rank: 'AIR 1',
    location: 'Bikaner, Rajasthan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&auto=format&fit=crop&q=85',
    quote: 'The focused guidance made Quant and Reasoning much easier to understand.',
    detail: 'Final score: 78.5 / 100',
  },
  {
    name: 'Shubham Agrawal',
    exam: 'SSC CGL 2024',
    rank: 'AIR 1',
    location: 'Kota, Rajasthan',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&auto=format&fit=crop&q=85',
    quote: 'Weekly mocks and reviewing every mistake kept my preparation consistent.',
    detail: '346 / 390 in Tier 2',
  },
  {
    name: 'Sneha Verma',
    exam: 'IBPS PO 2025',
    rank: 'AIR 3',
    location: 'Lucknow, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=85',
    quote: 'The revision plans helped me stay calm and focused through every stage.',
    detail: 'Cleared in first attempt',
  },
  {
    name: 'Sahil Meena',
    exam: 'RRB NTPC 2024',
    rank: 'AIR 2',
    location: 'Ajmer, Rajasthan',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=85',
    quote: 'Daily practice and detailed solutions turned my weak areas into strengths.',
    detail: '92% mock-test accuracy',
  },
];

const impactStats = [
  { value: '18+', label: 'AIR 1 achievers', icon: Award },
  { value: '70,000+', label: 'career selections', icon: GraduationCap },
  { value: '2.5 Cr+', label: 'students reached', icon: Users },
  { value: '200+', label: 'exams supported', icon: BookOpen },
];

export function SuccessStories() {
  return (
    <div className="bg-white text-slate-900">
      <section style={{ backgroundColor: '#7f1d1d' }} className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
        <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#be123c]/30" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#f59e0b]/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <Star className="h-4 w-4 fill-current" /> Real stories. Real results.
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Dreams turned into <span className="text-amber-300">results.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-rose-100 sm:text-lg">
              Meet the aspirants who stayed consistent, trusted the process, and made their government-exam goals a proud reality with EVA Classes.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm font-semibold text-white/90 sm:gap-8">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> First-attempt success</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> Exam-focused preparation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> Mentor-led guidance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">A community that delivers</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Built around your success</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">Every number reflects thousands of focused learners, honest practice, and expert guidance.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {impactStats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-7 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:px-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#be123c]"><Icon className="h-6 w-6" /></div>
                <div className="mt-4 text-2xl font-black text-[#881337] sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">Champions of consistency</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Meet our achievers</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Different exams. Different journeys. One shared habit: showing up every day.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievers.map((student) => (
              <article key={student.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.07)]">
                <div className="relative h-44 bg-slate-100 sm:h-48">
                  <img src={student.image} alt={student.name} className="h-full w-full object-cover object-top" />
                  <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black text-[#881337]">{student.rank}</div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#be123c]">{student.exam}</p>
                      <h3 className="mt-1 text-base font-black text-slate-950 sm:text-lg">{student.name}</h3>
                    </div>
                    <Award className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-slate-400">{student.location}</p>
                  <div className="my-4 h-px bg-slate-100" />
                  <div className="flex gap-3">
                    <Quote className="h-5 w-5 shrink-0 text-[#be123c]" />
                    <p className="text-xs italic leading-5 text-slate-600">“{student.quote}”</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600">
                    <span>{student.detail}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff7ed' }} className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-orange-100 bg-white px-6 py-10 text-center shadow-[0_12px_35px_rgba(124,45,18,0.06)] sm:px-12 lg:flex-row lg:text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">Your turn to shine</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#881337] sm:text-4xl">Your success story starts here.</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">Choose your exam, follow a clear plan, and prepare with a community that believes in your potential.</p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <div className="hidden items-center gap-1 text-xs font-bold text-slate-400 sm:flex"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Learn</div>
            <ArrowRight className="hidden h-4 w-4 text-slate-300 sm:block" />
            <div className="hidden items-center gap-1 text-xs font-bold text-slate-400 sm:flex"><span className="h-2 w-2 rounded-full bg-amber-400" /> Practice</div>
            <ArrowRight className="hidden h-4 w-4 text-slate-300 sm:block" />
            <a href="/courses" className="inline-flex items-center gap-2 rounded-xl bg-[#be123c] px-5 py-3 text-sm font-bold text-white">Explore Courses <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
