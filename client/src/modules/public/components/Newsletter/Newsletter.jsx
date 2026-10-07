import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Stay Ahead with Daily Exam Updates
        </h2>
        <p className="text-sm text-slate-500 max-w-lg mx-auto mt-2 mb-6">
          Get weekly curated summaries, notification alerts for upcoming government exams, and strategy articles directly in your inbox.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Thank you! You have subscribed to PrepSphere Exam Intelligence.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-[#be123c] focus:ring-2 focus:ring-[#be123c]/20"
            />
            <Button type="submit" size="md" className="w-full sm:w-auto shrink-0 shadow-md">
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
