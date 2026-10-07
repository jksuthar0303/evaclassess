import React, { useState, useRef } from "react";
import {
  Sparkles,
  Play,
  CheckCircle2,
  Users,
  Clock,
  BookOpen,
  Award,
  Video,
  FileText,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star,
  Search,
  Check,
  X,
  Smartphone,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* --- Authentic Logo Components Matching Oliveboard Screenshot --- */

function IBPSLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 36 36" className="w-7 h-7">
          <path d="M8 8h20v3H16l12 12v3H8v-3h12L8 11z" fill="#0284c7" />
          <circle cx="18" cy="18" r="2.5" fill="#38bdf8" />
        </svg>
      </div>
      <span className="text-[9px] font-black text-[#0284c7] tracking-tighter leading-none">
        IBPS
      </span>
    </div>
  );
}

function SBILogo() {
  return (
    <div className="w-11 h-6 rounded bg-[#0b2575] flex items-center justify-center text-white px-1 shadow-xs">
      <div className="w-3 h-3 rounded-full border-2 border-white relative flex items-center justify-center mr-1">
        <div className="w-0.5 h-1 bg-[#0b2575] absolute -bottom-px" />
      </div>
      <span className="text-[9px] font-black tracking-tight">SBI</span>
    </div>
  );
}

function RBILogo() {
  return (
    <div className="w-9 h-9 rounded-full border border-slate-700 p-0.5 flex items-center justify-center bg-white shadow-xs">
      <svg viewBox="0 0 40 40" className="w-7 h-7">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="#1e293b"
          strokeWidth="1.5"
        />
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.8"
          strokeDasharray="1.5 1.5"
        />
        <path
          d="M19 12c-2 2-3 5-3 8 0 4 3 6 4 6s4-2 4-6c0-3-1-6-3-8h-2z"
          fill="#1e293b"
        />
        <path d="M14 26h12v2H14z" fill="#1e293b" />
      </svg>
    </div>
  );
}

function NIACLLogo() {
  return (
    <div className="w-9 h-9 rounded-full border-2 border-[#1e40af] p-0.5 flex items-center justify-center bg-white shadow-xs">
      <div className="w-7 h-7 rounded-full bg-[#1e40af]/10 flex items-center justify-center text-[7.5px] font-black text-[#1e40af] tracking-tighter">
        NIACL
      </div>
    </div>
  );
}

function NICLLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#0b2575] p-1 flex flex-col items-center justify-center text-white shadow-xs">
      <div className="w-3 h-3 rounded-full border border-white/60 mb-0.5" />
      <span className="text-[6.5px] font-black uppercase leading-none tracking-tighter">
        NICL
      </span>
    </div>
  );
}

function BoBLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 32 18" className="w-7 h-4">
        <path
          d="M4 14c6-8 18-8 24 0"
          stroke="#f97316"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="16" cy="12" r="2.5" fill="#ea580c" />
      </svg>
      <span className="text-[7.5px] font-black text-[#ea580c] tracking-tighter leading-none mt-0.5">
        BOB
      </span>
    </div>
  );
}

function ECGCLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 28 16" className="w-6 h-3.5">
        <ellipse
          cx="14"
          cy="8"
          rx="12"
          ry="6"
          fill="none"
          stroke="#0284c7"
          strokeWidth="2"
        />
        <circle cx="14" cy="8" r="2.5" fill="#0284c7" />
      </svg>
      <span className="text-[8px] font-black text-[#0369a1] tracking-tighter leading-none mt-0.5">
        ECGC
      </span>
    </div>
  );
}

function IDBILogo() {
  return (
    <div className="w-12 h-6 rounded bg-[#15803d] flex items-center justify-center text-white px-1 shadow-xs">
      <span className="text-[8.5px] font-black tracking-tight">IDBI BANK</span>
    </div>
  );
}

function IOBLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#0284c7] p-1 flex items-center justify-center text-white shadow-xs">
      <span className="text-[8px] font-black tracking-tighter">IOB</span>
    </div>
  );
}

function LICLogo() {
  return (
    <div className="w-11 h-6 bg-[#fde047] border border-amber-300 rounded flex items-center justify-center px-1 shadow-xs">
      <span className="text-[9.5px] font-black text-[#1e3a8a] tracking-tight">
        LIC
      </span>
    </div>
  );
}

function LICHFLLogo() {
  return (
    <div className="w-12 h-6 bg-[#0284c7] rounded flex items-center justify-center text-white px-1 shadow-xs">
      <span className="text-[8.5px] font-black tracking-tight">LIC HFL</span>
    </div>
  );
}

function PNBLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#dc2626] flex items-center justify-center text-white shadow-xs">
      <span className="text-[7.5px] font-black tracking-tighter">PNB</span>
    </div>
  );
}

function RepcoLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 24 14" className="w-6 h-3.5">
        <path
          d="M2 12C8 2 16 2 22 12"
          stroke="#c2410c"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
      <span className="text-[7.5px] font-black text-[#9a3412] leading-none">
        REPCO
      </span>
    </div>
  );
}

function OICLLogo() {
  return (
    <div className="w-9 h-9 rounded-full border border-indigo-900 bg-indigo-50/50 flex items-center justify-center shadow-xs">
      <span className="text-[7.5px] font-black text-indigo-900">OICL</span>
    </div>
  );
}

function BankGenericLogo({ label, color = "bg-blue-600" }) {
  return (
    <div
      className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-[8px] font-black shadow-xs`}
    >
      {label}
    </div>
  );
}

function SSCLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#dc2626] border-2 border-red-700 flex items-center justify-center text-white text-[8.5px] font-black shadow-xs">
      SSC
    </div>
  );
}

function RailwaysLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#b91c1c] border border-amber-400 p-0.5 flex items-center justify-center shadow-xs">
      <div className="w-7 h-7 rounded-full bg-[#991b1b] flex items-center justify-center text-amber-300 text-[8px] font-black">
        RRB
      </div>
    </div>
  );
}

function UPSCLogo() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#1e293b] border-2 border-amber-500/80 flex items-center justify-center text-amber-400 text-[8px] font-black shadow-xs">
      UPSC
    </div>
  );
}

export function Courses() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("banking");
  const [selectedExamDetails, setSelectedExamDetails] = useState(null);
  const categoryBarRef = useRef(null);

  const handleScrollCategory = (direction) => {
    if (categoryBarRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      categoryBarRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Exact categories list from Oliveboard Screenshot
  const categoriesList = [
    { id: "banking", name: "Banking" },
    { id: "ssc", name: "SSC" },
    { id: "regulatory", name: "Regulatory" },
    { id: "jaiib", name: "JAIIB" },
    { id: "ugc", name: "UGC" },
    { id: "railways", name: "Railways" },
    { id: "jk", name: "JK Exams" },
    { id: "tn", name: "TN" },
    { id: "icar", name: "ICAR" },
    { id: "upsi", name: "UP SI" },
    { id: "mppolice", name: "MP Police" },
    { id: "upsc", name: "UPSC" },
    { id: "ukssc", name: "UKSSC" },
    { id: "karnataka", name: "Karnataka Exams" },
    { id: "punjab", name: "Punjab Exams" },
    { id: "haryana", name: "Haryana Exams" },
  ];

  // Banking 32 cards exactly as in the Oliveboard screenshot
  const bankingExams = [
    { id: "b1", name: "IBPS RRB PO", logo: <IBPSLogo /> },
    { id: "b2", name: "IBPS RRB Clerk", logo: <IBPSLogo /> },
    { id: "b3", name: "IBPS PO", logo: <IBPSLogo /> },
    { id: "b4", name: "IBPS Clerk", logo: <IBPSLogo /> },
    { id: "b5", name: "SBI PO", logo: <SBILogo /> },
    { id: "b6", name: "SBI Clerk", logo: <SBILogo /> },
    { id: "b7", name: "RBI Assistant", logo: <RBILogo /> },
    { id: "b8", name: "NIACL AO", logo: <NIACLLogo /> },

    { id: "b9", name: "NIACL Assistant", logo: <NIACLLogo /> },
    { id: "b10", name: "NICL AO", logo: <NICLLogo /> },
    { id: "b11", name: "NICL Assistant", logo: <NICLLogo /> },
    { id: "b12", name: "IBPS RRB GBO", logo: <IBPSLogo /> },
    { id: "b13", name: "IBPS RRB CA Officer", logo: <IBPSLogo /> },
    { id: "b14", name: "IBPS RRB IT Officer", logo: <IBPSLogo /> },
    { id: "b15", name: "IBPS RRB Marketing Officer", logo: <IBPSLogo /> },
    { id: "b16", name: "IBPS RRB Officer Scale 3", logo: <IBPSLogo /> },

    { id: "b17", name: "IBPS RRB Treasury Manager", logo: <IBPSLogo /> },
    { id: "b18", name: "IBPS RRB Agriculture Officer", logo: <IBPSLogo /> },
    { id: "b19", name: "SBI CBO", logo: <SBILogo /> },
    { id: "b20", name: "BoB LBO", logo: <BoBLogo /> },
    { id: "b21", name: "ECGC PO", logo: <ECGCLogo /> },
    { id: "b22", name: "IDBI JAM", logo: <IDBILogo /> },
    { id: "b23", name: "IOB LBO", logo: <IOBLogo /> },
    { id: "b24", name: "LIC AAO", logo: <LICLogo /> },

    { id: "b25", name: "LIC ADO", logo: <LICLogo /> },
    { id: "b26", name: "LIC HFL", logo: <LICHFLLogo /> },
    { id: "b27", name: "IBPS SO", logo: <IBPSLogo /> },
    { id: "b28", name: "OICL AO", logo: <OICLLogo /> },
    { id: "b29", name: "REPCO Bank", logo: <RepcoLogo /> },
    { id: "b30", name: "PNB SO Credit", logo: <PNBLogo /> },
    {
      id: "b31",
      name: "Bank of Maharashtra",
      logo: <BankGenericLogo label="BOM" color="bg-sky-700" />,
    },
    {
      id: "b32",
      name: "Bank of India",
      logo: <BankGenericLogo label="BOI" color="bg-amber-700" />,
    },
  ];

  const sscExams = [
    { id: "s1", name: "SSC CGL", logo: <SSCLogo /> },
    { id: "s2", name: "SSC CHSL", logo: <SSCLogo /> },
    { id: "s3", name: "SSC MTS", logo: <SSCLogo /> },
    { id: "s4", name: "SSC CPO", logo: <SSCLogo /> },
    { id: "s5", name: "SSC GD Constable", logo: <SSCLogo /> },
    { id: "s6", name: "SSC JE (Civil/Mech/Elec)", logo: <SSCLogo /> },
    { id: "s7", name: "SSC Stenographer", logo: <SSCLogo /> },
    { id: "s8", name: "SSC Selection Post", logo: <SSCLogo /> },
    {
      id: "s9",
      name: "Delhi Police Constable",
      logo: <BankGenericLogo label="DP" color="bg-slate-800" />,
    },
    {
      id: "s10",
      name: "Delhi Police SI",
      logo: <BankGenericLogo label="DP SI" color="bg-slate-800" />,
    },
    { id: "s11", name: "SSC JHT Translator", logo: <SSCLogo /> },
    {
      id: "s12",
      name: "CISF Constable / ASI",
      logo: <BankGenericLogo label="CISF" color="bg-emerald-800" />,
    },
    {
      id: "s13",
      name: "CRPF Constable Tradesman",
      logo: <BankGenericLogo label="CRPF" color="bg-emerald-900" />,
    },
    {
      id: "s14",
      name: "BSF Constable",
      logo: <BankGenericLogo label="BSF" color="bg-amber-800" />,
    },
    {
      id: "s15",
      name: "ITBP Constable",
      logo: <BankGenericLogo label="ITBP" color="bg-sky-800" />,
    },
    {
      id: "s16",
      name: "SSB Head Constable",
      logo: <BankGenericLogo label="SSB" color="bg-blue-900" />,
    },
  ];

  const regulatoryExams = [
    { id: "r1", name: "RBI Grade B Officer", logo: <RBILogo /> },
    {
      id: "r2",
      name: "NABARD Grade A",
      logo: <BankGenericLogo label="NABARD" color="bg-emerald-700" />,
    },
    {
      id: "r3",
      name: "NABARD Grade B",
      logo: <BankGenericLogo label="NABARD" color="bg-emerald-800" />,
    },
    {
      id: "r4",
      name: "SEBI Grade A Officer",
      logo: <BankGenericLogo label="SEBI" color="bg-blue-800" />,
    },
    {
      id: "r5",
      name: "IFSCA Grade A",
      logo: <BankGenericLogo label="IFSCA" color="bg-teal-700" />,
    },
    {
      id: "r6",
      name: "PFRDA Grade A",
      logo: <BankGenericLogo label="PFRDA" color="bg-indigo-700" />,
    },
    {
      id: "r7",
      name: "SIDBI Grade A",
      logo: <BankGenericLogo label="SIDBI" color="bg-cyan-800" />,
    },
    {
      id: "r8",
      name: "EXIM Bank MT",
      logo: <BankGenericLogo label="EXIM" color="bg-purple-800" />,
    },
  ];

  const railwaysExams = [
    { id: "rw1", name: "RRB NTPC Graduate", logo: <RailwaysLogo /> },
    { id: "rw2", name: "RRB NTPC Undergraduate", logo: <RailwaysLogo /> },
    { id: "rw3", name: "RRB Group D", logo: <RailwaysLogo /> },
    { id: "rw4", name: "RRB ALP (Assistant Loco)", logo: <RailwaysLogo /> },
    { id: "rw5", name: "RRB Technician Grade 1 & 3", logo: <RailwaysLogo /> },
    { id: "rw6", name: "RRB JE Junior Engineer", logo: <RailwaysLogo /> },
    {
      id: "rw7",
      name: "RPF Sub-Inspector",
      logo: <BankGenericLogo label="RPF" color="bg-red-800" />,
    },
    {
      id: "rw8",
      name: "RPF Constable",
      logo: <BankGenericLogo label="RPF" color="bg-red-800" />,
    },
  ];

  const upscExams = [
    { id: "u1", name: "UPSC CSE (IAS/IPS)", logo: <UPSCLogo /> },
    { id: "u2", name: "UPSC EPFO EO/AO", logo: <UPSCLogo /> },
    { id: "u3", name: "UPSC APFC", logo: <UPSCLogo /> },
    {
      id: "u4",
      name: "UPSC CDS Exam",
      logo: <BankGenericLogo label="CDS" color="bg-slate-700" />,
    },
    {
      id: "u5",
      name: "UPSC NDA Exam",
      logo: <BankGenericLogo label="NDA" color="bg-slate-700" />,
    },
    {
      id: "u6",
      name: "UPSC CAPF AC",
      logo: <BankGenericLogo label="CAPF" color="bg-slate-800" />,
    },
    { id: "u7", name: "UPSC Geo-Scientist", logo: <UPSCLogo /> },
    { id: "u8", name: "UPSC CMS Medical", logo: <UPSCLogo /> },
  ];

  const stateExams = [
    {
      id: "st1",
      name: "UP SI (Sub-Inspector)",
      logo: <BankGenericLogo label="UP SI" color="bg-purple-800" />,
    },
    {
      id: "st2",
      name: "UP Police Constable",
      logo: <BankGenericLogo label="UP POLICE" color="bg-purple-800" />,
    },
    {
      id: "st3",
      name: "UPPSC Combined State Exam",
      logo: <BankGenericLogo label="UPPSC" color="bg-purple-700" />,
    },
    {
      id: "st4",
      name: "BPSC Prelims (Bihar)",
      logo: <BankGenericLogo label="BPSC" color="bg-red-800" />,
    },
    {
      id: "st5",
      name: "Bihar Police SI",
      logo: <BankGenericLogo label="BIHAR" color="bg-red-700" />,
    },
    {
      id: "st6",
      name: "MP Police Constable",
      logo: <BankGenericLogo label="MP" color="bg-indigo-800" />,
    },
    {
      id: "st7",
      name: "MPPSC State Service",
      logo: <BankGenericLogo label="MPPSC" color="bg-indigo-900" />,
    },
    {
      id: "st8",
      name: "Rajasthan RAS / RTS",
      logo: <BankGenericLogo label="RAS" color="bg-amber-800" />,
    },
    {
      id: "st9",
      name: "Rajasthan Police SI",
      logo: <BankGenericLogo label="RAJ" color="bg-amber-700" />,
    },
    {
      id: "st10",
      name: "UKSSSC Uttarakhand Exams",
      logo: <BankGenericLogo label="UKSSSC" color="bg-teal-800" />,
    },
    {
      id: "st11",
      name: "Punjab PPSC / PSSSB",
      logo: <BankGenericLogo label="PUNJAB" color="bg-blue-900" />,
    },
    {
      id: "st12",
      name: "Haryana HSSC CET",
      logo: <BankGenericLogo label="HSSC" color="bg-green-800" />,
    },
  ];

  // Helper to get active exam list
  const getExamList = () => {
    switch (activeCategory) {
      case "banking":
        return bankingExams;
      case "ssc":
        return sscExams;
      case "regulatory":
        return regulatoryExams;
      case "railways":
        return railwaysExams;
      case "upsc":
        return upscExams;
      case "upsi":
      case "mppolice":
      case "ukssc":
      case "karnataka":
      case "punjab":
      case "haryana":
      case "jk":
      case "tn":
      case "icar":
        return stateExams;
      default:
        return bankingExams;
    }
  };

  const currentExams = getExamList();

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-slate-800 font-sans">
      {/* 1. HERO SECTION (Oliveboard Style Elevated Layout) */}
      <section className="bg-linear-to-b from-sky-50/60 via-white to-[#fcfdfe] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading + Subtitle + Enrol Now CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200/70 text-[#c8102e] text-xs font-extrabold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#c8102e] animate-ping" />
                <span>Live Coaching Classes 2026-27</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.2]">
                Join Online Courses for Government Exams, Live Coaching Classes
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Complete online courses covering syllabus, strategy, and
                practice for Banking, SSC, Railways, Regulatory and other
                Government exams.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#choose-exam-section"
                  className="px-8 py-3.5 rounded-full bg-[#c8102e] hover:bg-[#a50d24] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Enrol Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href="#choose-exam-section"
                  className="px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#c8102e] hover:border-[#c8102e]/50 font-bold text-sm shadow-xs transition-colors cursor-pointer"
                >
                  Choose Your Exam
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 font-medium pt-3">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-extrabold text-slate-800">
                    4.9/5
                  </span>{" "}
                  Rating
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#c8102e]" />
                  <span className="font-extrabold text-slate-800">
                    10M+
                  </span>{" "}
                  Aspirants
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Updated Exam Pattern</span>
                </div>
              </div>
            </div>

            {/* Right Column: Educational Orbit Graphic (EVA Classes Red Palette) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                {/* Dotted Orbit Path */}
                <div className="absolute inset-2 sm:inset-4 rounded-full border-2 border-dashed border-[#c8102e]/30 animate-[spin_80s_linear_infinite]" />

                {/* Orbiting Year Badges */}
                <div className="absolute top-1 sm:top-2 right-12 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-black text-xs shadow-md">
                  2023
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                  2021
                </div>
                <div className="absolute bottom-6 sm:bottom-8 right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#881337] text-white flex items-center justify-center font-black text-xs shadow-md">
                  2022
                </div>
                <div className="absolute bottom-2 left-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#9f1239] text-white flex items-center justify-center font-black text-xs shadow-md">
                  2024
                </div>

                {/* Orbiting Exam Badges */}
                <div className="absolute top-10 left-3 bg-white p-1 rounded-full shadow-md border border-slate-100">
                  <RBILogo />
                </div>
                <div className="absolute top-8 right-6 bg-white px-2 py-1 rounded-xl shadow-md border border-slate-100">
                  <SBILogo />
                </div>
                <div className="absolute bottom-14 left-2 bg-white p-1 rounded-full shadow-md border border-slate-100">
                  <SSCLogo />
                </div>
                <div className="absolute top-24 right-1 bg-white p-1 rounded-full shadow-md border border-slate-100">
                  <IBPSLogo />
                </div>

                {/* Center 3D Isometric Classroom Mockup */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-2xl border border-rose-100 shadow-xl p-5 w-56 sm:w-64 text-center transform -rotate-1 hover:rotate-0 transition-transform">
                  {/* Laptop Icon / Illustration */}
                  <div className="w-14 h-14 mx-auto rounded-xl bg-linear-to-br from-rose-500 to-[#c8102e] flex items-center justify-center text-white mb-3 shadow-md">
                    <Video className="w-7 h-7" />
                  </div>
                  <div className="text-[11px] font-black text-[#c8102e] uppercase tracking-wider">
                    Live Video Coaching
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-tight">
                    Concept + Practice + Full Mocks
                  </h4>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-semibold bg-slate-50 rounded-lg py-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Daily Live Doubt Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Ribbon: "Courses for All Government Exams" (Exact Oliveboard Screenshot 1 Match) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 text-center tracking-tight mb-6">
              Courses for All Government Exams
            </h3>

            {/* Row of Colorful Exam Tiles */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-2">
              {[
                { name: "SBI", logo: <SBILogo />, bg: "bg-[#edf2fe]" },
                { name: "IBPS", logo: <IBPSLogo />, bg: "bg-[#e0f2fe]" },
                { name: "SSC", logo: <SSCLogo />, bg: "bg-[#fee2e2]" },
                { name: "RBI", logo: <RBILogo />, bg: "bg-[#f3e8ff]" },
                { name: "BOB", logo: <BoBLogo />, bg: "bg-[#ffedd5]" },
                { name: "LIC", logo: <LICLogo />, bg: "bg-[#fef9c3]" },
                { name: "RRB", logo: <RailwaysLogo />, bg: "bg-[#fae8ff]" },
                { name: "NIACL", logo: <NIACLLogo />, bg: "bg-[#dcfce7]" },
                { name: "UPSC", logo: <UPSCLogo />, bg: "bg-[#f1f5f9]" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const el = document.getElementById("choose-exam-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${item.bg} border border-slate-200/50 flex flex-col items-center justify-center p-2 shadow-xs hover:shadow-md hover:scale-105 transition-all cursor-pointer shrink-0`}
                >
                  <div className="scale-90 sm:scale-100">{item.logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR EXAM SECTION (EXACT MATCH TO OLIVEBOARD SCREENSHOT) */}
      <section
        id="choose-exam-section"
        className="py-10 sm:py-14 bg-white border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-900 tracking-tight text-center mb-6 sm:mb-8">
            Choose Your Exam
          </h2>

          {/* Horizontal Category Navigation Bar with Left & Right Buttons (No Native Scrollbar) */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-10 flex items-center gap-2">
            {/* Left Button */}
            <button
              type="button"
              onClick={() => handleScrollCategory("left")}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-[#c8102e] hover:text-white hover:border-[#c8102e] text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Scrollable Container with Hidden Scrollbar */}
            <div
              ref={categoryBarRef}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              className="bg-[#f0f4f9] p-1 sm:p-1.5 rounded-xl flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth flex-1 [&::-webkit-scrollbar]:hidden"
            >
              {categoriesList.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#c8102e] text-white shadow-xs"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/50"
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
              onClick={() => handleScrollCategory("right")}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-[#c8102e] hover:text-white hover:border-[#c8102e] text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* 8-Column Grid of Exam Cards Matching Oliveboard Screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {currentExams.map((exam) => (
              <div
                key={exam.id}
                onClick={() => setSelectedExamDetails(exam)}
                className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 flex flex-col items-center justify-between text-center min-h-31.25 sm:min-h-33.75 shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:border-[#c8102e] hover:shadow-md transition-all cursor-pointer group"
              >
                {/* Logo Top */}
                <div className="h-10 sm:h-12 flex items-center justify-center mb-1">
                  {exam.logo}
                </div>

                {/* Exam Title Bottom */}
                <div className="text-[12px] sm:text-[12.5px] font-semibold text-slate-800 leading-tight text-center group-hover:text-[#c8102e] transition-colors line-clamp-2">
                  {exam.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODAL: EXAM DETAILS & ACTIVE LIVE BATCHES */}
      {selectedExamDetails && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedExamDetails(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                {selectedExamDetails.logo}
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#c8102e] uppercase tracking-wider">
                  Target Exam
                </span>
                <h3 className="text-base font-black text-slate-900">
                  {selectedExamDetails.name}
                </h3>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 mb-4 text-xs space-y-2 border border-slate-100">
              <div className="font-bold text-slate-800">
                Available Courses & Batches:
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">
                  Foundation + Mains Super Batch
                </span>
                <span className="font-bold text-slate-900">₹2,499</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">
                  Test Series & 100+ CBT Mocks
                </span>
                <span className="font-bold text-slate-900">₹699</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600 font-medium">
                  Free Previous Year Papers PDF
                </span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                to="/mock-tests"
                onClick={() => setSelectedExamDetails(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors"
              >
                View Mock Tests
              </Link>
              <button
                type="button"
                onClick={() => {
                  const examSlug = selectedExamDetails.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  setSelectedExamDetails(null);
                  navigate(`/exam/${examSlug}?mode=login`);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white text-xs font-bold text-center transition-colors cursor-pointer"
              >
                Join Live Batch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. WHY CHOOSE OUR COURSES? */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Why Choose Our Courses?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Complete exam preparation ecosystem trusted by top rankers across
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Smartphone className="w-5 h-5 text-[#00a2ff]" />,
                title: "100% Online & Mobile Access",
                desc: "Study anytime on phone, tablet or laptop with offline download.",
              },
              {
                icon: <Video className="w-5 h-5 text-[#6366f1]" />,
                title: "Live & Recorded Classes",
                desc: "Interactive live sessions with replay at 1.5x / 2x speed.",
              },
              {
                icon: <Layers className="w-5 h-5 text-[#10b981]" />,
                title: "Topic-Wise & Full CBT Mocks",
                desc: "Exact pattern tests with All-India percentile analysis.",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-[#f59e0b]" />,
                title: "AI Performance Diagnostics",
                desc: "Pinpoint weak topics and accuracy gaps instantly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200/60 shadow-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 shadow-xs flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
