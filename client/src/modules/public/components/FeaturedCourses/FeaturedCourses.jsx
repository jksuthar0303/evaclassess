import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_COURSES } from '../../../../data/courses';
import { Badge } from '../../../../components/ui/Badge';
import { Button } from '../../../../components/ui/Button';
import { Star, Clock, Video, FileCheck, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../../../../utils/currency';

export function FeaturedCourses() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              LEARN FROM THE BEST
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Top Ranked Foundation & Target Batches
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Live interactive classes, bilingual lecture PDFs, personal mentor sessions, and daily answer evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                {course.isBestseller && (
                  <span className="absolute top-2.5 left-2.5 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-xs">
                    Bestseller
                  </span>
                )}
                <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                  {course.language}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium truncate max-w-[140px]">{course.instructor}</span>
                    <div className="flex items-center gap-1 font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 text-[10px]">({course.ratingsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-slate-400" /> {course.lecturesCount} Lectures
                    </span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      {formatCurrency(course.discountedPrice)}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {formatCurrency(course.originalPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {course.discountPercent}% OFF
                    </span>
                  </div>

                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() => navigate('/register')}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
