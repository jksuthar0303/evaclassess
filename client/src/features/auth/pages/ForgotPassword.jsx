import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl text-center">
        <h2 className="text-2xl font-black mb-2">Reset Password</h2>
        <p className="text-xs text-slate-500 mb-6">Enter your registered email to receive recovery instructions</p>

        {sent ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 text-sm space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto" />
            <p className="font-semibold">Reset Link Dispatched</p>
            <p className="text-xs text-slate-500">Check your email inbox for further steps.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 text-left">
            <Input
              label="Email Address"
              type="email"
              required
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com"
            />
            <Button type="submit" size="md" className="w-full">
              Send Reset Link
            </Button>
          </form>
        )}

        <div className="mt-6 text-xs">
          <Link to="/login" className="text-blue-600 hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
