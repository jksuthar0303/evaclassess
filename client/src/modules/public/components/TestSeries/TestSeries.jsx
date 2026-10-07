import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_TEST_SERIES } from '../../../../data/tests';
import { Button } from '../../../../components/ui/Button';
import { Badge } from '../../../../components/ui/Badge';
import { Check, Star, Zap, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../../../../utils/currency';

export function TestSeries() {
  const navigate = useNavigate();

  return (
    <section id="test-series" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
              <Trophy className="w-3.5 h-3.5 text-emerald-600" />
              <span>TEST PASS PRO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              All-India Mock Test Series & CBT Simulators
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Practice in the exact exam software interface with real-time negative marking, sectional cutoff analytics, and All-India percentile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_TEST_SERIES.map((series) => (
            <div
              key={series.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-blue-500/50 transition-all duration-200 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="primary" size="xs">
                    {series.badge}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{series.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {series.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-slate-500 mb-6">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                    {series.totalTests} Total Tests
                  </span>
                  <span>•</span>
                  <span className="text-emerald-600 font-semibold">{series.freeTests} Free Mocks Included</span>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  {series.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">
                      {formatCurrency(series.price)}
                    </span>
                    <span className="text-xs text-slate-400 line-through ml-2">
                      {formatCurrency(series.originalPrice)}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {series.enrolledAspirants.toLocaleString()} Enrolled
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/register')}
                  >
                    Take Free Test
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate('/register')}
                  >
                    Unlock Series
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

export default TestSeries;
