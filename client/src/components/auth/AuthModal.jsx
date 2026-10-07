import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Eye, EyeOff, GraduationCap, Lock, Mail, Phone, User, X } from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';

export function AuthModal({ mode, onClose, onChangeMode }) {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (mode) {
      setSent(false);
      setPassword('');
    }
  }, [mode]);

  useEffect(() => {
    if (!mode) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mode, onClose]);

  if (!mode) return null;

  const isRegister = mode === 'register';
  const isForgot = mode === 'forgot';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isForgot) {
      setSent(true);
      return;
    }

    login({
      id: isRegister ? `usr_${Date.now()}` : 'usr_student',
      name: isRegister ? (name || 'New Aspirant') : (email.split('@')[0] || 'Aspirant'),
      email,
      role: 'STUDENT',
      targetExam: 'UPSC Civil Services 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    });
    onClose();
    navigate('/student/dashboard');
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6" onMouseDown={onClose}>
      <div className="relative grid max-h-[94vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr]" onMouseDown={(event) => event.stopPropagation()}>
        <div style={{ backgroundColor: '#7f1d1d' }} className="hidden p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"><GraduationCap className="h-6 w-6 text-amber-300" /></div>
              <div><p className="text-lg font-black">EVA CLASSES</p><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-100">Bikaner • Exam Prep</p></div>
            </div>
            <p className="mt-20 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Prepare with purpose</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">Same aspiration.<br />Bigger achievement.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-rose-100">Everything you need to move from preparation to selection, in one focused learning space.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white/10">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=85" alt="Students preparing together" className="h-48 w-full object-cover opacity-90" />
            <div className="p-5"><p className="text-sm font-bold">Join 10L+ aspirants</p><p className="mt-1 text-xs text-rose-100">Build a better future with the right preparation.</p></div>
          </div>
        </div>

        <div className="max-h-[94vh] overflow-y-auto p-6 sm:p-10">
          <button type="button" onClick={onClose} aria-label="Close authentication modal" className="absolute right-4 top-4 rounded-full p-2 text-slate-400"><X className="h-5 w-5" /></button>
          <div className="mb-7 pr-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#be123c]">EVA Classes Bikaner</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#881337]">{isRegister ? 'Create your account' : isForgot ? 'Reset your password' : 'Welcome back!'}</h2>
            <p className="mt-2 text-sm text-slate-500">{isRegister ? 'Start your preparation journey with a trusted learning platform.' : isForgot ? 'Enter your email and we will send recovery instructions.' : 'Log in to continue your preparation.'}</p>
          </div>

          {isForgot && sent ? (
            <div className="rounded-2xl bg-emerald-50 p-6 text-center text-emerald-700">
              <CheckCircle2 className="mx-auto h-10 w-10" />
              <p className="mt-3 font-bold">Reset link sent</p>
              <p className="mt-1 text-xs text-slate-500">Check your inbox for the next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegister && <Field icon={User} label="Full Name" value={name} onChange={setName} placeholder="Aarav Sharma" />}
              <Field icon={Mail} label="Email Address" value={email} onChange={setEmail} placeholder="aspirant@gmail.com" type="email" required />
              {isRegister && <Field icon={Phone} label="Mobile Number" value={phone} onChange={setPhone} placeholder="+91 98765 43210" type="tel" required />}
              {!isForgot && <Field icon={Lock} label="Password" value={password} onChange={setPassword} placeholder="At least 6 characters" type={showPassword ? 'text' : 'password'} required trailing={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>} />}
              {!isRegister && !isForgot && <div className="flex justify-end"><button type="button" onClick={() => onChangeMode('forgot')} className="text-xs font-bold text-[#be123c]">Forgot Password?</button></div>}
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#be123c] px-4 py-3.5 text-sm font-bold text-white">{isRegister ? 'Create Account' : isForgot ? 'Send Reset Link' : 'Login'} <ArrowRight className="h-4 w-4" /></button>
            </form>
          )}

          <div className="my-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-400"><span className="h-px flex-1 bg-slate-200" />or<span className="h-px flex-1 bg-slate-200" /></div>
          {!isForgot && <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700"><span className="text-base font-black text-[#4285f4]">G</span> Continue with Google</button>}
          <p className="mt-7 text-center text-xs text-slate-500">
            {isForgot ? 'Remember your password? ' : isRegister ? 'Already have an account? ' : 'New to EVA Classes? '}
            <button type="button" onClick={() => onChangeMode(isForgot || isRegister ? 'login' : 'register')} className="font-bold text-[#be123c]">{isForgot || isRegister ? 'Login' : 'Register'}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, value, onChange, placeholder, type = 'text', required = false, trailing }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">{label}</span>
      <span className="relative block">
        <Icon className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
        <input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-10 text-sm text-slate-800 outline-none focus:border-[#be123c] focus:ring-2 focus:ring-rose-100" />
        {trailing && <span className="absolute right-3.5 top-3.5">{trailing}</span>}
      </span>
    </label>
  );
}

export default AuthModal;
