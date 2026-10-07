import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OtpForm } from '../components/OtpForm';

export function VerifyOtp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl text-center">
        <h2 className="text-2xl font-black mb-2">Verify Mobile OTP</h2>
        <p className="text-xs text-slate-500 mb-6">Enter the 4-digit code sent to your registered phone</p>

        <OtpForm onVerify={() => navigate('/student/dashboard')} />
      </div>
    </div>
  );
}

export default VerifyOtp;
