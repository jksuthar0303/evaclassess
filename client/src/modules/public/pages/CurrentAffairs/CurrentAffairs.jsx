import React from 'react';
import { ArrowRight, BookOpen, Calendar, Clock, Download, FileText, Flame, Globe2, Search, Sparkles } from 'lucide-react';
import { DAILY_CURRENT_AFFAIRS } from '../../../../data/currentAffairs';

const categories = ['All Updates', 'National', 'Economy', 'Science & Tech', 'Banking', 'International'];

export function CurrentAffairs() {
  return (
    <div className="bg-white text-slate-900">
      <section style={{ backgroundColor: '#7f1d1d' }} className="px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300"><Flame className="h-4 w-4" /> Daily exam intelligence</div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Stay informed.<br /><span className="text-amber-300">Stay ahead.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-rose-100 sm:text-lg">Clear, exam-focused analysis of the news that matters for UPSC, SSC, Banking, Railways and every competitive exam.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[['Daily briefs', 'Updated every morning', Sparkles], ['Exam relevance', 'Prelims + Mains ready', FileText], ['Monthly PDFs', 'Revise on the go', Download]].map(([title, text, Icon]) => (
              <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"><Icon className="h-5 w-5 shrink-0 text-amber-300" /><div><p className="text-sm font-bold">{title}</p><p className="mt-0.5 text-xs text-rose-100">{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">Today’s capsule</p><h2 className="mt-2 text-3xl font-black tracking-tight text-[#881337] sm:text-4xl">What’s making the news</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Read the context, remember the facts, and connect every update to your exam syllabus.</p></div>
          <div className="relative w-full lg:w-72"><Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" /><input placeholder="Search current affairs" className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#be123c]" /></div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category, index) => <button type="button" key={category} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${index === 0 ? 'bg-[#be123c] text-white' : 'bg-slate-100 text-slate-600'}`}>{category}</button>)}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {DAILY_CURRENT_AFFAIRS.map((item, index) => (
            <article key={item.id} className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] ${index === 0 ? 'lg:col-span-2 lg:row-span-2 lg:p-8' : ''}`}>
              <div className="flex items-center justify-between gap-3 text-xs text-slate-400"><span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{item.date}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{item.readTime}</span></div>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#be123c]"><Globe2 className="h-6 w-6" /></div>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-wider text-[#be123c]">{item.category}</p>
              <h3 className={`${index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'} mt-2 font-black leading-tight text-[#881337]`}>{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">#{tag}</span>)}</div>
              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5"><button type="button" className="flex items-center gap-2 text-xs font-bold text-[#be123c]"><BookOpen className="h-4 w-4" /> Read full analysis</button><button type="button" className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><Download className="h-4 w-4" /> PDF</button></div>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-rose-50 p-7 sm:p-10"><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">Revision made simple</p><h2 className="mt-2 text-2xl font-black text-[#881337] sm:text-3xl">Download this month’s capsule</h2><p className="mt-2 text-sm text-slate-500">One compact PDF for your last-minute current affairs revision.</p></div><button type="button" className="flex items-center gap-2 rounded-xl bg-[#be123c] px-5 py-3 text-sm font-bold text-white"><Download className="h-4 w-4" /> Download PDF <ArrowRight className="h-4 w-4" /></button></div></section>
      </main>
    </div>
  );
}

export default CurrentAffairs;
