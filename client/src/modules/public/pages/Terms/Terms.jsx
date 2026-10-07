import React from 'react';
import { FileText, ShieldAlert, CheckCircle2, Scale, UserCheck, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Terms of Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Effective Date: October 2026 • Last Revised: October 5, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms & Conditions ("Terms") govern your access to and use of websites, applications, live online batches, recorded video archives, and mock examination engines operated by <strong>EVA Classes Bikaner</strong>.
            </p>
            <p>
              By creating an account, registering for any course, or attempting free/paid test series, you confirm that you have read, understood, and agreed to be legally bound by these Terms and our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              2. User Account & Single-User Access
            </h2>
            <p>
              Each registration is issued exclusively for a single, individual student. You are strictly prohibited from sharing your login credentials, password, or session access with any third party.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                Our system deploys active concurrent device tracking. If simultaneous access or credential sharing is detected, EVA Classes reserves the right to suspend account access immediately without refund.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              3. Intellectual Property Rights
            </h2>
            <p>
              All course content, video lectures, question sets, mock solutions, PDF formula sheets, graphics, trademarks, and test software interface are the proprietary intellectual property of EVA Classes Bikaner.
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
              <li>You may not screen record, re-distribute, re-upload, broadcast, or resell any live or recorded lecture.</li>
              <li>You may not extract or publish questions or test series solutions on Telegram, WhatsApp, or third-party web portals.</li>
              <li>Violation of intellectual property rights will invite legal action under the Indian Copyright Act, 1957.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              4. Code of Academic Integrity
            </h2>
            <p>
              Aspirants must maintain academic honesty in all discussion forums, live chat classrooms, and mock tests. Any abusive language directed towards faculty or fellow students, spamming, or fraudulent attempt scripts will result in permanent blacklisting from our portals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              5. Course Validity & Schedules
            </h2>
            <p>
              Each course or test pack specifies a definite validity period (e.g. 6 months, 12 months, or until the official examination date). Once the validity expires, access to live classes and test series ceases unless renewed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              6. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bikaner, Rajasthan, India</strong>.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900">Questions about our Terms?</h4>
                <p className="text-xs text-slate-500">Contact our legal and administrative cell in Bikaner.</p>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-bold text-xs transition-colors"
              >
                Contact Helpdesk
              </Link>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

export default Terms;
