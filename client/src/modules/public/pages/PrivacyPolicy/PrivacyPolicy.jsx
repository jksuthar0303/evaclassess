import React from 'react';
import { Shield, Lock, Eye, FileCheck, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Effective Date: October 2026 • Last Updated: October 5, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              1. Overview & Commitment
            </h2>
            <p>
              At <strong>EVA Classes Bikaner</strong> ("EVA Classes", "we", "our", or "us"), we hold your privacy and personal information in the highest regard. This Privacy Policy outlines the types of information we collect when you visit our website, register for online live classes, participate in CBT mock test series, or use our mobile applications.
            </p>
            <p>
              By accessing our online portal or enrolling in any examination preparation courses, you consent to the data collection and usage practices described herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              2. Information We Collect
            </h2>
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900">A. Personal Identification Data:</strong>
                <p>Full Name, Email Address, Mobile Phone Number, State/City of Residence, and target government examination category (e.g. Banking, SSC, Railways, State PSC).</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900">B. Academic & Performance Data:</strong>
                <p>Mock test scores, question responses, time spent per section, All-India Rank analytics, class attendance logs, and student doubt queries.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <strong className="text-slate-900">C. Device & Technical Information:</strong>
                <p>IP address, browser type, operating system, device identifiers, and session cookies used to provide secure session maintenance and prevent unauthorized account sharing.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              3. How We Use Your Information
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-slate-600">
              <li>To provide access to live coaching lectures, study materials, and the real TCS-pattern computer-based test simulator.</li>
              <li>To compute accurate All-India percentile rankings, speed diagnostics, and personalized weak-area feedback.</li>
              <li>To communicate critical examination notifications, admit card release updates, and class schedules via SMS/Email.</li>
              <li>To securely process tuition payments and process invoice receipts through RBI-licensed payment gateways.</li>
              <li>To detect fraudulent logins, account piracy, or unauthorized distribution of proprietary educational materials.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard 256-bit SSL encryption for all data transmissions. User passwords are stored using salted cryptographic hashes. Financial transactions are processed directly by certified payment partners; <strong>EVA Classes never stores your credit card numbers, CVVs, or Net Banking credentials on our servers.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              5. Student Rights & Control
            </h2>
            <p>
              You have the right to inspect, update, or request deletion of your personal account data at any point. To request data updates or account deletion, simply email our grievance officer with your registered mobile number.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              6. Grievance Redressal & Contact Office
            </h2>
            <p>
              For questions regarding our privacy practices or security measures, please reach out to our registered Bikaner institute office:
            </p>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-2 text-xs">
              <div className="font-bold text-slate-900 text-sm">EVA Classes Bikaner (Head Office)</div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-[#c8102e] shrink-0" />
                <span>Opp. PBM Hospital Road, Near Sadul Colony, Bikaner, Rajasthan - 334001</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-[#c8102e] shrink-0" />
                <a href="mailto:support@evaclasses.com" className="hover:underline font-semibold text-[#c8102e]">
                  support@evaclasses.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-[#c8102e] shrink-0" />
                <span>+91-7676022222 (9:00 AM to 7:00 PM IST)</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
