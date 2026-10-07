import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

export function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl text-center">
        <h2 className="text-2xl font-black mb-2">Create New Password</h2>
        <p className="text-xs text-slate-500 mb-6">Choose a secure password for your account</p>

        <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }} className="space-y-4 text-left">
          <Input
            label="New Password"
            type="password"
            required
            icon={Lock}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
          />
          <Button type="submit" size="md" className="w-full">
            Save & Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
