import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    exam: 'Banking & Insurance',
    queryType: 'Course Admission',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#c8102e] text-xs font-black uppercase tracking-wider">
            <span>Student Support & Admissions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Contact EVA Classes Bikaner
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about live batches, CBT mock test series, or fees? Speak directly with our student counselors.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Helpline Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#c8102e] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Admissions & Helpline</div>
                <a href="tel:+917676022222" className="text-lg font-black text-slate-900 hover:text-[#c8102e] block transition-colors">
                  +91-7676022222
                </a>
                <p className="text-xs text-slate-500">Available Monday to Sunday, 8:00 AM – 8:00 PM IST</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#c8102e] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Helpdesk</div>
                <a href="mailto:support@evaclasses.com" className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#c8102e] block transition-colors">
                  support@evaclasses.com
                </a>
                <p className="text-xs text-slate-500">Average response time: within 2 hours</p>
              </div>
            </div>

            {/* Campus Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#c8102e] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Bikaner Center Head Office</div>
                <div className="text-sm font-bold text-slate-900">
                  Opp. PBM Hospital Road, Near Sadul Colony, Bikaner, Rajasthan - 334001
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Walking distance from Sadul Colony Circle. Visitors welcomed.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-0.5 text-xs text-slate-600">
                <div className="font-bold text-slate-900 text-sm">Working Hours</div>
                <p>Monday – Saturday: 7:00 AM – 9:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-black text-slate-900">Send an Inquiry or Feedback</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details and our subject counselor will call you with course roadmap and fee discounts.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">Thank you, {formData.name || 'Aspirant'}!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been received by our Bikaner admissions desk. An expert counselor will get in touch with you shortly on <strong>{formData.mobile}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        exam: 'Banking & Insurance',
                        queryType: 'Course Admission',
                        message: '',
                      });
                    }}
                    className="mt-3 text-xs font-bold text-[#c8102e] hover:underline cursor-pointer"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Examination</label>
                      <select
                        value={formData.exam}
                        onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e] bg-white"
                      >
                        <option>Banking & Insurance (SBI/IBPS/LIC)</option>
                        <option>SSC Exams (CGL/CHSL/GD/CPO)</option>
                        <option>Regulatory Bodies (RBI Grade B/SEBI)</option>
                        <option>Railways Exams (RRB NTPC/Group D)</option>
                        <option>Rajasthan State (CET/Patwar/SI)</option>
                        <option>Defence & Police Exams</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Question / Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you need help with (batch timings, test series access, fee concession, syllabus advice)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#c8102e]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#c8102e] hover:bg-[#a50d24] text-white font-extrabold text-sm transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
