import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useThemeStore } from '../../../../stores/theme.store';

export function Hero() {
  const navigate = useNavigate();
  const { palette } = useThemeStore();

  return (
    <section className="bg-white pt-5 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Banner */}
        <div className={`relative rounded-2xl sm:rounded-3xl ${palette.bannerGradient} overflow-hidden shadow-xl min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex items-center`}>
          
          {/* Top-Right Decorative Dot Matrix (4x4 grid matching screenshot) */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-10 grid grid-cols-4 gap-2.5 sm:gap-3.5 z-10 opacity-75 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
            ))}
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 px-6 sm:px-10 lg:px-14 py-8 lg:py-0">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-3 sm:space-y-4 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-white tracking-tight leading-[1.15]">
                Crack Government Exams
              </h1>
              
              <p className="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-xl">
                Live Classes & Practice Sessions with Top Faculty, AI-driven Mock Tests
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  style={{ color: palette.logoDark }}
                  className="bg-white hover:bg-slate-50 text-sm sm:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Illustration Column (Exact recreation of student with laptop, desk, plant, books) */}
            <div className="lg:col-span-6 xl:col-span-5 hidden lg:flex justify-end items-end relative self-end pt-4">
              <div className="relative w-[380px] xl:w-[430px] h-[310px] xl:h-[340px] flex items-end justify-center">
                
                {/* SVG Composition of Student studying at desk */}
                <svg
                  viewBox="0 0 440 340"
                  className="w-full h-full object-contain overflow-visible"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Circular Radial Glow behind character */}
                  <circle cx="250" cy="180" r="140" fill={palette.glowColor} fillOpacity="0.8" />
                  <circle cx="250" cy="180" r="100" fill={palette.glowColor2} fillOpacity="0.5" />

                  {/* Potted Plant (Left of girl) */}
                  <g id="potted-plant">
                    {/* Plant Pot with palette theme color */}
                    <path d="M75 240 L115 240 L108 295 L82 295 Z" fill={palette.potColor} stroke="#000" strokeOpacity="0.2" strokeWidth="2" />
                    <rect x="70" y="235" width="50" height="8" rx="3" fill={palette.glowColor2} />
                    
                    {/* Big Stylized Golden-Yellow / Orange Leaves */}
                    {/* Leaf 1 (Left low) */}
                    <path
                      d="M70 236 C55 220 52 185 75 165 C85 185 82 215 80 236"
                      fill="#e69622"
                    />
                    <path d="M72 230 C65 210 65 190 73 175" stroke="#cc7f12" strokeWidth="2" strokeLinecap="round" />

                    {/* Leaf 2 (Center tall) */}
                    <path
                      d="M93 235 C88 180 100 135 125 120 C130 160 115 200 97 235"
                      fill="#f2a829"
                    />
                    <path d="M96 230 C100 190 108 160 120 135" stroke="#d68d18" strokeWidth="2" strokeLinecap="round" />

                    {/* Leaf 3 (Right) */}
                    <path
                      d="M102 235 C115 210 135 185 145 160 C130 195 115 220 106 235"
                      fill="#e69622"
                    />
                    <path d="M104 230 C118 205 130 185 140 170" stroke="#cc7f12" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Pen Holder (Beside pot) */}
                  <g id="pen-holder">
                    <rect x="130" y="245" width="22" height="42" rx="4" fill="#e8891c" />
                    {/* Pens sticking out */}
                    <line x1="135" y1="245" x2="132" y2="225" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                    <line x1="141" y1="245" x2="141" y2="220" stroke="#00a2ff" strokeWidth="3" strokeLinecap="round" />
                    <line x1="147" y1="245" x2="151" y2="224" stroke="#ea5b5b" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  {/* Stack of Books (Right of girl) */}
                  <g id="books-stack">
                    {/* Bottom Book (Deep Blue) */}
                    <rect x="350" y="265" width="70" height="15" rx="3" fill="#1b41a4" />
                    <rect x="358" y="267" width="60" height="11" fill="#fff" />
                    <rect x="350" y="265" width="10" height="15" rx="2" fill="#15368a" />

                    {/* Middle Book (Yellow/Cream) */}
                    <rect x="355" y="248" width="65" height="17" rx="3" fill="#f7c844" />
                    <rect x="363" y="250" width="55" height="13" fill="#fff" />
                    <rect x="355" y="248" width="10" height="17" rx="2" fill="#e0b12f" />
                    {/* Bookmark ribbon */}
                    <path d="M395 265 L395 273 L399 270 L403 273 L403 265 Z" fill="#ea5b5b" />

                    {/* Top Book (Pink/Magenta) */}
                    <rect x="352" y="233" width="68" height="15" rx="3" fill="#e55589" />
                    <rect x="360" y="235" width="58" height="11" fill="#fff" />
                    <rect x="352" y="233" width="10" height="15" rx="2" fill="#c93e70" />
                  </g>

                  {/* Girl Character */}
                  <g id="girl-character">
                    {/* Long Black Hair (Back) */}
                    <path
                      d="M205 150 C185 180 180 230 180 280 L290 280 C290 230 285 180 265 150 Z"
                      fill="#1e2229"
                    />

                    {/* Neck */}
                    <rect x="228" y="195" width="20" height="24" rx="4" fill="#fcd7b6" />

                    {/* Coral/Red Shirt Body */}
                    <path
                      d="M190 250 C190 230 210 215 238 215 C266 215 286 230 286 250 L292 310 L184 310 Z"
                      fill="#ea5b5b"
                    />

                    {/* Head / Face */}
                    <ellipse cx="238" cy="170" rx="26" ry="32" fill="#fcd7b6" />

                    {/* Hair Front / Style */}
                    <path
                      d="M210 165 C210 135 220 125 240 125 C265 125 270 140 270 165 C260 155 245 155 230 155 C218 155 212 160 210 165 Z"
                      fill="#1e2229"
                    />
                    {/* Hair bangs / side strands */}
                    <path d="M212 165 C210 190 206 230 214 240 C216 220 220 185 222 170 Z" fill="#1e2229" />
                    <path d="M266 165 C268 190 272 230 264 240 C262 220 258 185 256 170 Z" fill="#1e2229" />

                    {/* Cute Eyes & Smile */}
                    <ellipse cx="228" cy="172" rx="2" ry="2.5" fill="#2d3748" />
                    <ellipse cx="248" cy="172" rx="2" ry="2.5" fill="#2d3748" />
                    <path d="M234 184 C236 187 240 187 242 184" stroke="#c27a5d" strokeWidth="2" strokeLinecap="round" />

                    {/* Arms reaching to laptop keyboard */}
                    <path d="M192 250 C195 270 210 280 225 282" stroke="#ea5b5b" strokeWidth="14" strokeLinecap="round" />
                    <path d="M284 250 C281 270 266 280 251 282" stroke="#ea5b5b" strokeWidth="14" strokeLinecap="round" />
                    <circle cx="224" cy="282" r="7" fill="#fcd7b6" />
                    <circle cx="252" cy="282" r="7" fill="#fcd7b6" />

                    {/* White Modern Laptop */}
                    {/* Laptop Screen (Facing user slightly angled) */}
                    <rect x="200" y="240" width="76" height="52" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                    {/* Laptop inner bezel & sphere logo on screen back */}
                    <rect x="204" y="244" width="68" height="44" rx="2" fill="#f8fafc" />
                    <circle cx="238" cy="266" r="6" fill="#00a2ff" fillOpacity="0.4" />
                    <circle cx="238" cy="266" r="3" fill="#092b82" />

                    {/* Laptop Base / Keyboard */}
                    <path d="M190 292 L286 292 L294 300 L182 300 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
                    <rect x="210" y="293" width="56" height="5" rx="1" fill="#e2e8f0" />
                  </g>

                  {/* Desk Surface Line */}
                  <line x1="50" y1="298" x2="430" y2="298" stroke="#143c9e" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
