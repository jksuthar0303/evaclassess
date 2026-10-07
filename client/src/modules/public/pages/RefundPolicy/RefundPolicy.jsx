import React from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, Clock, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-bold uppercase tracking-wider">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Student Assurance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Refund & Cancellation Policy
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
              1. Our Student Satisfaction Commitment
            </h2>
            <p>
              At <strong>EVA Classes Bikaner</strong>, we are deeply committed to delivering India's highest quality competitive examination coaching. We want every student to feel completely confident when enrolling in our live foundation batches and mock test passes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              2. 7-Day Money-Back Guarantee (Live Batches)
            </h2>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2">
              <div className="font-bold text-[#c8102e] text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Eligibility for Full Course Refund:</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-[13px] text-slate-700">
                <li>Refund request must be submitted within <strong>7 calendar days</strong> from the batch commencement date or enrollment date.</li>
                <li>The student must have attended or watched fewer than <strong>3 live/recorded class sessions</strong>.</li>
                <li>No digital course books, printed test series modules, or proprietary master formula sheets should have been fully downloaded.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              3. Mock Test Series Packages
            </h2>
            <p>
              Due to the immediate consumption nature of digital examination questions, mock test series packages and monthly CBT test passes are generally non-refundable once more than <strong>1 full test</strong> has been attempted. If a student experiences verifiable technical glitches preventing test submission, our technical support will promptly reset test attempts or issue a credit voucher.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              4. How to Request a Refund
            </h2>
            <p>
              To initiate a refund request, follow these simple steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
                <div className="font-bold text-slate-900 text-xs">Email Helpdesk</div>
                <p className="text-[11px] text-slate-500">Send an email to support@evaclasses.com with subject "Refund Request".</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
                <div className="font-bold text-slate-900 text-xs">Provide Details</div>
                <p className="text-[11px] text-slate-500">Include your registered mobile number, order ID, and transaction screenshot.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
                <div className="font-bold text-slate-900 text-xs">Prompt Credit</div>
                <p className="text-[11px] text-slate-500">Approved refunds are credited directly to your original payment method in 3–5 working days.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              5. Need Help with an Order?
            </h2>
            <p>
              Our student billing team in Bikaner is available to assist you Monday through Saturday:
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                <Mail className="w-4 h-4 text-[#c8102e]" />
                <span>support@evaclasses.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                <Phone className="w-4 h-4 text-[#c8102e]" />
                <span>+91-7676022222</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}

export default RefundPolicy;
