import React from 'react';
import {
  Target,
  Award,
  Users,
  ShieldCheck,
  BookOpen,
  MapPin,
  Star,
  CheckCircle2,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EvaLogo } from '../../../../components/common/EvaLogo';

export function About() {
  const stats = [
    { value: '50,000+', label: 'Aspirants Trained' },
    { value: '1,200+', label: 'Final Selections in 2024-25' },
    { value: '4.9 / 5', label: 'Student Satisfaction Rating' },
    { value: '15+ Years', label: 'Pedagogical Excellence in Bikaner' },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Real TCS CBT Engine',
      description: 'We simulate the exact interface, timer mechanics, and negative marking patterns used by IBPS, SSC, and NTA.',
    },
    {
      icon: Users,
      title: "Bikaner's Top Faculty",
      description: 'Learn directly from seasoned mentors with decades of expertise in Quantitative Aptitude, Reasoning, and General Awareness.',
    },
    {
      icon: Award,
      title: 'Proven AIR 1 Track Record',
      description: 'Our students have secured All-India Rank 1 in SSC CGL, SBI PO, RBI Grade B, and IBPS SO across multiple cycles.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized 1:1 Mentorship',
      description: 'Individual weekly diagnostic feedback, weak area remedial classes, and dedicated interview preparation panels.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-black uppercase tracking-wider">
            <span>About EVA Classes Bikaner</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.2]">
            Empowering Aspirants with Elite Coaching & Test Simulation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in Bikaner, Rajasthan, EVA Classes is India's dedicated preparation hub for Banking, SSC, Railways, Regulatory Bodies, and State examinations.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#c8102e]">{stat.value}</div>
              <div className="text-xs sm:text-[13px] text-slate-600 font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision 2-Column Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#c8102e] flex items-center justify-center">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h2 className="text-xl font-black text-slate-900">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To democratize high-yield, structured competitive examination preparation for every hardworking aspirant in India. We eliminate rote learning and replace it with analytical shortcuts, concept clarity, and intense computer-based practice.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#c8102e] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h2 className="text-xl font-black text-slate-900">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be recognized as India's most dependable and result-driven examination training ecosystem — combining physical classroom discipline from our Bikaner center with cutting-edge online live broadcasting and adaptive analytics.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Students Trust EVA Classes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Built on uncompromising academic rigor and genuine mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#c8102e] flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campus & Headquarters Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c8102e]">
              <MapPin className="w-4 h-4" />
              <span>Headquarters & Offline Center</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Visit our Bikaner Institute Campus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
              Opp. PBM Hospital Road, Near Sadul Colony, Bikaner, Rajasthan - 334001. Open 7 days a week for offline admissions, student counseling, and library study slots.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
