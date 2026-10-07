import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Smartphone, Sparkles, Trophy, Download } from 'lucide-react';

export function AppDownloadBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Download Free EVA Classes App | Get Courses, Mock Tests, and More.',
      buttonText: 'Install Now',
      buttonLink: '#app-download',
    },
    {
      id: 2,
      title: 'Attempt All-India Weekly Live Mocks | Compete With 5,00,000+ Aspirants',
      buttonText: 'Register Live Mock',
      buttonLink: '#test-series',
    },
    {
      id: 3,
      title: 'Access 100+ Free E-books, Previous Year Papers & Daily Current Affairs',
      buttonText: 'Explore Resources',
      buttonLink: '#resources',
    },
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card (Exact match to EVA Classes Red branding) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#881337] via-[#c8102e] to-[#dc2626] overflow-hidden shadow-xl min-h-[220px] sm:min-h-[250px] flex items-center">
          
          {/* Isometric 3D Hexagon / Cube Wireframe Background Texture */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 pointer-events-none opacity-30 overflow-hidden flex justify-end">
            <svg
              className="h-full w-full object-cover"
              viewBox="0 0 800 300"
              preserveAspectRatio="xMaxYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="isometric-cube-grid"
                  width="60"
                  height="104"
                  patternUnits="userSpaceOnUse"
                  patternTransform="scale(1)"
                >
                  {/* Isometric Cube Wireframe Lines */}
                  {/* Top diamond */}
                  <path d="M30 0 L60 17.32 L30 34.64 L0 17.32 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                  {/* Left Face */}
                  <path d="M0 17.32 L0 52 L30 69.28 L30 34.64 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                  {/* Right Face */}
                  <path d="M60 17.32 L60 52 L30 69.28 L30 34.64 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />

                  {/* Offset Lower Cube */}
                  <path d="M30 52 L60 69.32 L30 86.64 L0 69.32 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                  <path d="M0 69.32 L0 104 L30 121.28 L30 86.64 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                  <path d="M60 69.32 L60 104 L30 121.28 L30 86.64 Z" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#isometric-cube-grid)" />
            </svg>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-8 sm:py-10 max-w-3xl space-y-5">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white tracking-tight leading-snug">
              {currentSlide.title}
            </h3>

            <div>
              <a
                href={currentSlide.buttonLink}
                className="inline-flex items-center gap-2 bg-[#4c0519] hover:bg-[#360311] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{currentSlide.buttonText}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Carousel Bottom Controls (Left Arrow, Dots, Right Arrow) */}
        <div className="flex items-center justify-center gap-4 mt-4 select-none">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="p-1 text-slate-800 hover:text-[#c8102e] transition-colors cursor-pointer"
            aria-label="Previous banner"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeSlide === idx
                    ? 'bg-[#c8102e] w-3 h-3'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="p-1 text-slate-800 hover:text-[#c8102e] transition-colors cursor-pointer"
            aria-label="Next banner"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default AppDownloadBanner;
