import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  BookOpen,
  Award,
  FileCheck2,
  Layers,
  GraduationCap,
  Sparkles,
  Smartphone,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { useAuthStore } from '../../../stores/auth.store';
import { useThemeStore, COLOR_PALETTES } from '../../../stores/theme.store';
import { POPULAR_EXAMS, EXAM_CATEGORIES } from '../../../data/exams';
import { ExamMegaMenu } from './ExamMegaMenu';
import { EvaLogo } from '../../common/EvaLogo';

export function PublicHeader({ onOpenSearch, onOpenAuth }) {
  const { isAuthenticated } = useAuthStore();
  const { palette } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [examsDropdownOpen, setExamsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);
  const examsMenuTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isExamsActive = currentPath.startsWith('/exam') || currentPath.startsWith('/exams');
  const isCoursesActive = currentPath === '/courses';
  const isMockTestsActive = currentPath === '/mock-tests' || currentPath === '/test-series';
  const isMoreActive = ['/about', '/contact', '/privacy-policy', '/terms', '/refund-policy', '/faq', '/success-stories', '/current-affairs'].includes(currentPath);

  const handleExamsEnter = () => {
    if (examsMenuTimeoutRef.current) {
      clearTimeout(examsMenuTimeoutRef.current);
    }
    setExamsDropdownOpen(true);
  };

  const handleExamsLeave = () => {
    if (examsMenuTimeoutRef.current) {
      clearTimeout(examsMenuTimeoutRef.current);
    }
    examsMenuTimeoutRef.current = setTimeout(() => {
      setExamsDropdownOpen(false);
    }, 250);
  };

  // Close search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredExams = searchQuery.trim()
    ? POPULAR_EXAMS.filter((e) =>
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px] gap-2 sm:gap-4">
          
          {/* Left section: Hamburger + Logo + Nav Items */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {/* Hamburger Icon */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1.5 text-slate-700 hover:text-sky-600 rounded-lg transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[2.2]" />
            </button>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <EvaLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-[14px] font-medium text-slate-700">
              {/* Exams Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleExamsEnter}
                onMouseLeave={handleExamsLeave}
              >
                <button
                  type="button"
                  onClick={() => setExamsDropdownOpen((prev) => !prev)}
                  className={`relative flex items-center gap-1 hover:text-[#be123c] py-2 transition-colors cursor-pointer ${
                    examsDropdownOpen || isExamsActive ? 'text-[#be123c] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#be123c] after:rounded-full' : ''
                  }`}
                >
                  <span>Exams</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${examsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <ExamMegaMenu
                  isOpen={examsDropdownOpen}
                  onClose={() => setExamsDropdownOpen(false)}
                  onMouseEnter={handleExamsEnter}
                  onMouseLeave={handleExamsLeave}
                />
              </div>

              {/* Courses */}
              <Link
                to="/courses"
                className={`py-2 transition-all relative font-semibold ${
                  isCoursesActive
                    ? 'text-[#c8102e] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#c8102e] after:rounded-full'
                    : 'hover:text-[#c8102e] text-slate-700'
                }`}
              >
                Courses
              </Link>

              {/* Mock Tests */}
              <Link
                to="/mock-tests"
                className={`py-2 flex items-center gap-1 transition-all relative font-semibold ${
                  isMockTestsActive
                    ? 'text-[#c8102e] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#c8102e] after:rounded-full'
                    : 'hover:text-[#c8102e] text-slate-700'
                }`}
              >
                <span>Mock Tests</span>
              </Link>

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMoreDropdownOpen(true)}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-1 py-2 transition-all relative font-semibold cursor-pointer ${
                    isMoreActive
                      ? 'text-[#c8102e] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#c8102e] after:rounded-full'
                      : 'hover:text-[#c8102e] text-slate-700'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute left-0 top-full pt-1 w-52 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-0.5 text-xs font-semibold text-slate-700">
                      <a
                        href="/current-affairs"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors ${currentPath === '/current-affairs' ? 'bg-rose-50 text-[#c8102e] font-bold' : 'hover:bg-rose-50 hover:text-[#c8102e]'}`}
                      >
                        Current Affairs
                      </a>
                      <a
                        href="/success-stories"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors ${currentPath === '/success-stories' ? 'bg-rose-50 text-[#c8102e] font-bold' : 'hover:bg-rose-50 hover:text-[#c8102e]'}`}
                      >
                        Success Stories
                      </a>
                      <Link
                        to="/contact"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          currentPath === '/contact'
                            ? 'bg-rose-50 text-[#c8102e] font-bold'
                            : 'hover:bg-rose-50 hover:text-[#c8102e]'
                        }`}
                      >
                        Contact
                      </Link>
                      <Link
                        to="/about"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          currentPath === '/about'
                            ? 'bg-rose-50 text-[#c8102e] font-bold'
                            : 'hover:bg-rose-50 hover:text-[#c8102e]'
                        }`}
                      >
                        About Us
                      </Link>
                      <Link
                        to="/faq"
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          currentPath === '/faq'
                            ? 'bg-rose-50 text-[#c8102e] font-bold'
                            : 'hover:bg-rose-50 hover:text-[#c8102e]'
                        }`}
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Center section: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md xl:max-w-lg mx-2" ref={searchRef}>
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  placeholder="Search Exams, Courses, Articles, Test Series"
                  className="w-full bg-[#f8fafc] hover:bg-white focus:bg-white text-slate-800 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-lg border border-slate-200 focus:border-[#be123c] focus:ring-1 focus:ring-[#be123c]/30 pl-3.5 pr-10 py-2.5 transition-all outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-slate-400 hover:text-sky-600 transition-colors cursor-pointer"
                  title="Search"
                >
                  <Search className="w-4 h-4 stroke-[2]" />
                </button>
              </form>

              {/* Instant Search Popup */}
              {showSearchResults && searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50 max-h-72 overflow-y-auto">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase">
                    Matching Exams ({filteredExams.length})
                  </div>
                  {filteredExams.length > 0 ? (
                    filteredExams.map((exam) => (
                      <div
                        key={exam.id}
                        onClick={() => {
                          setShowSearchResults(false);
                          const el = document.getElementById('exams');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-3 py-2 rounded-lg hover:bg-sky-50 cursor-pointer flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-slate-800">{exam.name}</span>
                        <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded">
                          {exam.category}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-3 text-xs text-slate-400 text-center">
                      No matching exam found. Click search for global library.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right section: Google Play Button + Login/Signup */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="md:hidden p-2 text-slate-600 hover:text-sky-600 rounded-lg hover:bg-slate-50"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Google Play Store Badge Button */}
            <a
              href="#app-download"
              className="hidden sm:flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-slate-900 transition-colors shadow-xs"
            >
              {/* Google Play icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.8L14.2 12.4L3.6 23C3.2 22.5 3 21.8 3 21V3.8C3 3 3.2 2.3 3.6 1.8Z" fill="#2196F3" />
                <path d="M17.7 8.9L14.2 12.4L3.6 1.8C4.1 1.3 4.9 1 5.8 1.5L17.7 8.9Z" fill="#4CAF50" />
                <path d="M17.7 15.9L5.8 23.3C4.9 23.8 4.1 23.5 3.6 23L14.2 12.4L17.7 15.9Z" fill="#F44336" />
                <path d="M21.2 10.9L17.7 8.9L14.2 12.4L17.7 15.9L21.2 13.9C22.3 13.3 22.3 11.5 21.2 10.9Z" fill="#FFC107" />
              </svg>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] uppercase tracking-wider text-slate-300 font-medium">GET IT ON</span>
                <span className="text-[12px] font-bold text-white tracking-tight">Google Play</span>
              </div>
            </a>

            {/* Login / Signup Button (EVA Classes Red) */}
            <button
              type="button"
              onClick={() => (onOpenAuth ? onOpenAuth('login') : navigate('/login'))}
              className="bg-[#be123c] hover:bg-[#9f1239] text-white text-xs sm:text-[13px] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-xs transition-all cursor-pointer select-none"
            >
              Login / Signup
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="space-y-1 text-sm font-semibold text-slate-700">
            <a
              href="#exams"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-rose-50 hover:text-[#be123c]"
            >
              Exams Catalog
            </a>
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isCoursesActive
                  ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs'
                  : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'
              }`}
            >
              Live Courses & Batches
            </Link>
            <Link
              to="/mock-tests"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                isMockTestsActive
                  ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs'
                  : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'
              }`}
            >
              Mock Test Series & Pass
            </Link>
            <a
              href="/current-affairs"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${currentPath === '/current-affairs' ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs' : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'}`}
            >
              Current Affairs
            </a>
            <a
              href="/success-stories"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${currentPath === '/success-stories' ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs' : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'}`}
            >
              Success Stories
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                currentPath === '/contact'
                  ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs'
                  : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                currentPath === '/about'
                  ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs'
                  : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl transition-all ${
                currentPath === '/faq'
                  ? 'bg-rose-50 text-[#c8102e] font-bold border-l-4 border-[#c8102e] shadow-xs'
                  : 'hover:bg-rose-50 hover:text-[#c8102e] text-slate-700'
              }`}
            >
              FAQ
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#app-download"
              className="flex items-center justify-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-xs font-bold"
            >
              <span>Download Google Play App</span>
            </a>
            {!isAuthenticated ? (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth ? onOpenAuth('login') : navigate('/login');
                }}
                className="w-full bg-[#be123c] hover:bg-[#9f1239] text-white py-2.5 rounded-lg font-bold text-sm transition-colors"
              >
                Login / Signup
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/student/dashboard');
                }}
                className="w-full bg-[#c8102e] hover:bg-[#a50d24] text-white py-2.5 rounded-lg font-bold text-sm transition-colors"
              >
                Go to Dashboard
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default PublicHeader;
