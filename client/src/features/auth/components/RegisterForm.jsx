import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { useAuthStore } from '../../../stores/auth.store';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    targetExam: 'UPSC Civil Services 2026',
  });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      id: 'usr_' + Date.now(),
      name: formData.name || 'New Aspirant',
      email: formData.email,
      role: 'STUDENT',
      targetExam: formData.targetExam,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    });
    navigate('/student/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        type="text"
        required
        icon={User}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="e.g. Aarav Sharma"
      />

      <Input
        label="Email Address"
        type="email"
        required
        icon={Mail}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="aspirant@gmail.com"
      />

      <Input
        label="Mobile Number"
        type="tel"
        required
        icon={Phone}
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="+91 98765 43210"
      />

      <Input
        label="Password"
        type="password"
        required
        icon={Lock}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="At least 6 characters"
      />

      <Button type="submit" size="md" className="w-full shadow-md shadow-blue-500/20" icon={ArrowRight} iconPosition="right">
        Create Aspirant Account
      </Button>
    </form>
  );
}

export default RegisterForm;
