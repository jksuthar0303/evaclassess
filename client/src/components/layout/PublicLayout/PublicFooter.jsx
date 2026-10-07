import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EvaLogo } from '../../common/EvaLogo';

export function PublicFooter() {
  const categories = [
    { name: 'Banking & Insurance', path: '/exam/sbi-po' },
    { name: 'SSC Exams', path: '/exam/ssc-cgl' },
    { name: 'Regulatory Bodies (RBI/SEBI)', path: '/exam/rbi-grade-b' },
    { name: 'Railways Exams (RRB)', path: '/exam/rrb-ntpc' },
    { name: 'State Government Exams', path: '/exam/cet-rajasthan' },
    { name: 'Insurance AO & Assistant', path: '/exam/lic-aao' },
    { name: 'Defence & Police Exams', path: '/exam/ssc-cpo' },
    { name: 'Teaching & Eligibility Exams', path: '/exam/reet' },
  ];

  const popularExams = [
    { name: 'SBI PO 2026', path: '/exam/sbi-po' },
    { name: 'SBI Clerk 2026', path: '/exam/sbi-clerk' },
    { name: 'IBPS PO 2026', path: '/exam/ibps-po' },
    { name: 'IBPS RRB Officer & Assistant', path: '/exam/ibps-rrb-po' },
    { name: 'SSC CGL (Tier 1 & 2)', path: '/exam/ssc-cgl' },
    { name: 'SSC CHSL (10+2)', path: '/exam/ssc-chsl' },
    { name: 'Railways RRB NTPC', path: '/exam/rrb-ntpc' },
    { name: 'RBI Grade B Officer', path: '/exam/rbi-grade-b' },
  ];

  const mockTests = [
    { name: 'SSC CGL Live Mock Test', path: '/mock-tests' },
    { name: 'SBI PO Prelims & Mains Mock', path: '/mock-tests' },
    { name: 'IBPS PO Mock Test Series', path: '/mock-tests' },
    { name: 'IBPS RRB PO / Clerk Mocks', path: '/mock-tests' },
    { name: 'SSC CHSL Tier 1 & 2 Mocks', path: '/mock-tests' },
    { name: 'RBI Grade B Phase 1 & 2 Mocks', path: '/mock-tests' },
    { name: 'Railways RRB ALP Mock Test', path: '/mock-tests' },
    { name: 'Previous Year Question Papers', path: '/mock-tests' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact & Support', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Refund Policy', path: '/refund-policy' },
  ];

  return (
    <footer className="bg-[#f4f7fb] border-t border-slate-200/80 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Brand Info & Address Column (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2">
              <EvaLogo size="lg" />
            </Link>

            {/* Address & Contact Info matching EVA Classes details */}
            <div className="space-y-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed pr-4 pt-1">
              <p>
                Opp. PBM Hospital Road, Near Sadul Colony, Bikaner, Rajasthan - 334001
              </p>
              <p className="pt-1">
                <span className="font-semibold text-slate-700">Email: </span>
                <a href="mailto:support@evaclasses.com" className="text-[#be123c] hover:underline font-medium">
                  support@evaclasses.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-700">Phone: </span>
                <a href="tel:+917676022222" className="text-slate-700 hover:text-[#be123c]">
                  +91-7676022222
                </a>
              </p>
            </div>
          </div>

          {/* Categories Column (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {categories.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-[#c8102e] transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams Column (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-4">
              Popular Exams
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {popularExams.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-[#c8102e] transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock Tests Column (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-4">
              Mock Tests
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {mockTests.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-[#c8102e] transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-slate-900 tracking-tight mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-[#c8102e] transition-colors leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left, Social Icons on Right (Exact Oliveboard Screenshot) */}
        <div className="border-t border-slate-200 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-slate-500">
          <div>
            © 2026 EVA Classes Bikaner. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-700">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c8102e] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c8102e] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c8102e] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c8102e] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default PublicFooter;
