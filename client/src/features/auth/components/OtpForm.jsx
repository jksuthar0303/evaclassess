import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';

export function OtpForm({ onVerify }) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (val, idx) => {
    const updated = [...otp];
    updated[idx] = val.slice(-1);
    setOtp(updated);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onVerify) onVerify(otp.join(''));
      }}
      className="space-y-4"
    >
      <div className="flex justify-center gap-3">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            className="w-12 h-12 text-center text-lg font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <Button type="submit" size="md" className="w-full">
        Verify OTP
      </Button>
    </form>
  );
}

export default OtpForm;
