import React from 'react';
import { Route } from 'react-router-dom';
import { PublicLayout } from '../../components/layout/PublicLayout/PublicLayout';
import { Home } from '../../modules/public/pages/Home/Home';
import { About } from '../../modules/public/pages/About/About';
import { Contact } from '../../modules/public/pages/Contact/Contact';
import { FAQ } from '../../modules/public/pages/FAQ/FAQ';
import { PrivacyPolicy } from '../../modules/public/pages/PrivacyPolicy/PrivacyPolicy';
import { Terms } from '../../modules/public/pages/Terms/Terms';
import { RefundPolicy } from '../../modules/public/pages/RefundPolicy/RefundPolicy';
import { Courses } from '../../modules/public/pages/Courses/Courses';
import { MockTests } from '../../modules/public/pages/MockTests/MockTests';
import { ExamLanding } from '../../modules/public/pages/ExamLanding/ExamLanding';
import { Login } from '../../features/auth/pages/Login';
import { Register } from '../../features/auth/pages/Register';
import { ForgotPassword } from '../../features/auth/pages/ForgotPassword';
import { ResetPassword } from '../../features/auth/pages/ResetPassword';
import { VerifyOtp } from '../../features/auth/pages/VerifyOtp';
import { SuccessStories } from '../../modules/public/pages/SuccessStories/SuccessStories';
import { CurrentAffairs } from '../../modules/public/pages/CurrentAffairs/CurrentAffairs';

export const publicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<Home />} />
    <Route path="courses" element={<Courses />} />
    <Route path="mock-tests" element={<MockTests />} />
    <Route path="test-series" element={<MockTests />} />
    <Route path="exam/:examId" element={<ExamLanding />} />
    <Route path="exams/:examId" element={<ExamLanding />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms" element={<Terms />} />
    <Route path="refund-policy" element={<RefundPolicy />} />
    <Route path="success-stories" element={<SuccessStories />} />
    <Route path="current-affairs" element={<CurrentAffairs />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="reset-password" element={<ResetPassword />} />
    <Route path="verify-otp" element={<VerifyOtp />} />
  </Route>
);

export default publicRoutes;
