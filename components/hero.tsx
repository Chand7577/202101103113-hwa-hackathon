'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  Sparkles,
  Clock,
  Heart,
  Brain,
  ShoppingCart,
  Home,
  CheckCircle2,
} from 'lucide-react'

export default function Hero() {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleQuickAdd = () => {
    addItem(DEFAULT_PRODUCT, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2500)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 pt-4 pb-20 lg:pt-8 lg:pb-28">
      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP CENTER: Eye-Catching Title & Eyebrow */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold shadow-2xs">
            <Home className="w-4 h-4 text-blue-600" />
            <span>Independent Canine Solo Enrichment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
            Keep Your Dog Happily Engaged{' '}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
              While You’re Away.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The modular 4-tier puzzle tower engineered to turn anxious alone-time into hours of calm, independent mental focus. No pacing. No barking. Zero chewed furniture.
          </p>
        </div>

        {/* CENTERPIECE HERO CONTAINER WITH SURROUNDING FLOATING INFO */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* DESKTOP FLOATING CALLOUTS AROUND THE CENTER IMAGE */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: Solves Separation Stress & Long-Duration Engagement (3 cols) */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              
              {/* TOP LEFT CARD: Solves Separation Anxiety */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Heart className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block">
                      Alone-Time Relief
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      Calms Separation Stress
                    </h3>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  94% <span className="text-xs font-bold text-slate-500">Less Anxiety</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Natural olfactory foraging triggers soothing serotonin and dopamine so your pup stays relaxed after you leave.
                </p>
              </div>

              {/* BOTTOM LEFT CARD: Multi-Hour Solo Engagement */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-600 block">
                      Solo Duration
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      Engrossed for Hours
                    </h3>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  45–90+ <span className="text-xs font-bold text-slate-500">Mins Focus</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Sequential puzzle levels pace reward release tier by tier, keeping active dogs engrossed rather than waiting by the door.
                </p>
              </div>

            </div>

            {/* CENTER COLUMN: Flagship Studio Photo (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white p-4 border border-slate-200/90 shadow-2xl overflow-hidden group">
                
                {/* Product Image */}
                <img
                  src="/images/sniff-solve-tower-hero.jpg"
                  alt="Sniff & Solve Tower 4-Level Dog Puzzle"
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200 text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Safe for Solo Play</span>
                </div>

                <div className="absolute bottom-5 right-5 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
                  $69.00 • Free Delivery
                </div>
              </div>

              {/* Bottom Rating Indicator */}
              <div className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-2xs text-xs font-bold text-slate-700">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.9 / 5 Rating</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">Over 2,450+ Happy Home-Alone Dogs</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Safe Solo Play & Peaceful Home (3 cols) */}
            <div className="lg:col-span-3 space-y-6 order-3">
              
              {/* TOP RIGHT CARD: Eliminates Destructive Chewing */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 block">
                      Mental Exercise
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      Curb Boredom Chewing
                    </h3>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  15 Min <span className="text-xs font-bold text-slate-500">= 45-Min Walk</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Channels pent-up physical drive into brain-work. Prevents couch digging, shoe destruction, and stress barking.
                </p>
              </div>

              {/* BOTTOM RIGHT CARD: Safe for Solo Unsupervised Play */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 block">
                      Guilt-Free Leaving
                    </span>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">
                      Safe Solo Design
                    </h3>
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  100% <span className="text-xs font-bold text-slate-500">Non-Tip Base</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Heavy silicone grip base won’t flip over. Rounded edges and non-toxic materials mean zero worries while you&apos;re out.
                </p>
              </div>

            </div>

          </div>

          {/* CENTER BOTTOM: Clean Premium CTA Bar */}
          <div className="mt-12 max-w-2xl mx-auto p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-0.5">
              <div className="flex items-baseline justify-center sm:justify-start gap-2.5">
                <span className="text-3xl font-black text-slate-900">$69.00</span>
                <span className="text-base text-slate-400 line-through">$89.00</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Save $20 Today
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Free Express Delivery (Orders over $50) • 30-Day Money-Back
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-extrabold h-12 px-7 rounded-2xl shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Link href="/products/sniff-solve-tower">
                  <span>Order Tower</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleQuickAdd}
                className="h-12 px-4 rounded-2xl border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-700"
                aria-label="Quick Add to Cart"
              >
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </Button>
            </div>
          </div>

          {isAdded && (
            <div className="mt-3 text-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-2 px-4 rounded-xl max-w-sm mx-auto animate-in fade-in">
              ✓ Added to cart! Check your bag above to proceed.
            </div>
          )}

          {/* Trust Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-blue-600" /> Free 2-3 Day Shipping
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-emerald-600" /> 30-Day Risk-Free Trial
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" /> 100% Non-Toxic Polymer
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
