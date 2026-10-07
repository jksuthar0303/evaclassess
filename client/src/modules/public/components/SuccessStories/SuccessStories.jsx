import React from 'react';
import { SUCCESS_STORIES } from '../../data/homepage.data';
import { Play, MapPin, Award } from 'lucide-react';

export function SuccessStories() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            INSPIRING JOURNEYS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Real Aspirants. Real Transformation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all"
            >
              <div className="relative sm:w-1/2 aspect-video sm:aspect-auto overflow-hidden">
                <img
                  src={story.videoThumb}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1 fill-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-6 sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{story.from}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {story.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {story.achievement}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Watch Video Interview →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
