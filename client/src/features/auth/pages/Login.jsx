import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { EvaLogo } from '../../../components/common/EvaLogo';

export function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <EvaLogo size="lg" showText={false} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">Sign In to EVA CLASSES</h2>
          <p className="text-xs text-slate-500 mt-1">Access your courses, mock tests and performance stats</p>
        </div>

        <LoginForm />

        <div className="text-center mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-bold text-blue-600 hover:underline">
            Register for Free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
