import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { useAuthStore } from '../../../stores/auth.store';

export function LoginForm() {
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [password, setPassword] = useState('password123');
  const [role, setRole] = useState('STUDENT');
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      id: role === 'ADMIN' ? 'usr_admin' : 'usr_student',
      name: role === 'ADMIN' ? 'Super Admin' : (email.split('@')[0] || 'Aspirant'),
      email,
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    });

    if (role === 'ADMIN') {
      navigate('/admin/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {/* Role Picker for easy previewing */}
      <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
        <button
          type="button"
          onClick={() => setRole('STUDENT')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            role === 'STUDENT'
              ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Student / Aspirant
        </button>
        <button
          type="button"
          onClick={() => setRole('ADMIN')}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            role === 'ADMIN'
              ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-xs'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Administrator
        </button>
      </div>

      <Input
        label="Email Address"
        type="email"
        required
        icon={Mail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="yourname@gmail.com"
      />

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Password
          </label>
          <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          required
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </div>

      <Button type="submit" size="md" className="w-full shadow-md shadow-blue-500/20" icon={LogIn}>
        Sign In to {role === 'ADMIN' ? 'Admin Portal' : 'Student Account'}
      </Button>
    </form>
  );
}

export default LoginForm;
