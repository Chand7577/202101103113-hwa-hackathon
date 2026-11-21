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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/30 flex flex-col justify-center min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] py-2 lg:py-3 px-4 sm:px-6 lg:px-8">
      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-100/50 via-indigo-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between h-full py-1">
        
        {/* TOP: Compact Headline & Eyebrow */}
        <div className="text-center max-w-2xl mx-auto space-y-1 sm:space-y-1.5 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-bold shadow-2xs">
            <Home className="w-3.5 h-3.5 text-blue-600" />
            <span>Independent Canine Solo Enrichment</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.12]">
            Keep Your Dog Happily Engaged{' '}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-4">
              While You’re Away.
            </span>
          </h1>

          <p className="text-xs sm:text-[13px] text-slate-500 max-w-lg mx-auto leading-snug">
            The modular 4-tier puzzle tower that turns anxious alone-time into calm, independent mental focus. No pacing. No barking. Zero chewed furniture.
          </p>
        </div>

        {/* CENTER: Compact Hero Grid (Photo + 4 Surrounding Cards) */}
        <div className="my-auto py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center max-w-5xl mx-auto">
            
            {/* LEFT COLUMN: 2 Cards (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5 order-2 lg:order-1">
              {/* TOP LEFT CARD */}
              <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-600 block">
                      Alone-Time Relief
                    </span>
                    <h3 className="text-xs font-black text-slate-900 leading-tight">
                      Calms Separation Stress
                    </h3>
                  </div>
                </div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  94% <span className="text-[10px] font-bold text-slate-400">Less Anxiety</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  Olfactory foraging triggers calming serotonin so pups settle peacefully.
                </p>
              </div>

              {/* BOTTOM LEFT CARD */}
              <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-600 block">
                      Solo Duration
                    </span>
                    <h3 className="text-xs font-black text-slate-900 leading-tight">
                      Engrossed for Hours
                    </h3>
                  </div>
                </div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  45–90+ <span className="text-[10px] font-bold text-slate-400">Mins Focus</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  Progressive tiers pace rewards, keeping dogs active instead of waiting by the door.
                </p>
              </div>
            </div>

            {/* CENTER COLUMN: Central Product Photo (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-[270px] lg:h-[270px] rounded-3xl bg-white p-3 border border-slate-200/90 shadow-xl overflow-hidden group">
                {/* Product Image */}
                <img
                  src="/images/sniff-solve-tower-hero.jpg"
                  alt="Sniff & Solve Tower 4-Level Dog Puzzle"
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-2xs border border-slate-200 text-[10px] font-black text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Safe for Solo Play</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                  $69.00 • Free Delivery
                </div>
              </div>

              {/* Rating Pill */}
              <div className="flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-2xs text-[11px] font-bold text-slate-700">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span>4.9/5</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium">2,450+ Happy Dogs</span>
              </div>
            </div>

            {/* RIGHT COLUMN: 2 Cards (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5 order-3">
              {/* TOP RIGHT CARD */}
              <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-600 block">
                      Mental Exercise
                    </span>
                    <h3 className="text-xs font-black text-slate-900 leading-tight">
                      Curb Boredom Chewing
                    </h3>
                  </div>
                </div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  15 Min <span className="text-[10px] font-bold text-slate-400">= 45-Min Walk</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  Tires out hyperactive drives to prevent shoe destruction and barking.
                </p>
              </div>

              {/* BOTTOM RIGHT CARD */}
              <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-600 block">
                      Guilt-Free Leaving
                    </span>
                    <h3 className="text-xs font-black text-slate-900 leading-tight">
                      Safe Solo Design
                    </h3>
                  </div>
                </div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  100% <span className="text-[10px] font-bold text-slate-400">Non-Tip Base</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  Heavy silicone grip base won’t flip over. Zero pinch points for safe play.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Compact CTA & Price Pill Bar */}
        <div className="shrink-0 max-w-xl mx-auto w-full pt-1">
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-md flex items-center justify-between gap-4">
            <div className="space-y-0.5 pl-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 leading-none">$69.00</span>
                <span className="text-xs text-slate-400 line-through leading-none">$89.00</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-full">
                  Save $20
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium leading-none">
                Free Express Delivery • 30-Day Money-Back
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs h-9 px-5 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <Link href="/products/sniff-solve-tower">
                  <span>Order Tower</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleQuickAdd}
                className="h-9 px-2.5 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700"
                aria-label="Quick Add to Cart"
              >
                <ShoppingCart className="w-4 h-4 text-blue-600" />
              </Button>
            </div>
          </div>

          {isAdded && (
            <div className="mt-1.5 text-center text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-1 px-3 rounded-lg animate-in fade-in">
              ✓ Added to cart! Check your bag above to proceed.
            </div>
          )}

          {/* Single-line Trust Signals */}
          <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 font-medium pt-1.5">
            <span className="flex items-center gap-1">
              <Truck className="w-3 h-3 text-blue-500" /> Free 2-3 Day Shipping
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <RotateCcw className="w-3 h-3 text-emerald-500" /> 30-Day Trial
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-indigo-500" /> 100% Non-Toxic Polymer
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
