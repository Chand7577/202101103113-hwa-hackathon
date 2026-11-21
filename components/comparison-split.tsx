'use client'

import { X, Check, Zap } from 'lucide-react'
import Link from 'next/link'
import SpecularButton from '@/components/specular-button'
import AnimatedContent from '@/components/animated-content'

// Scrolling marquee items — "old way" tools dog owners cobble together
const OLD_TOOLS = [
  { icon: '🦴', label: 'Chew Toys' },
  { icon: '🧊', label: 'Frozen Kongs' },
  { icon: '🥜', label: 'Peanut butter licks' },
  { icon: '📺', label: 'Dog TV on YouTube' },
  { icon: '🏠', label: 'Dog daycare' },
  { icon: '🐾', label: 'Dog walkers' },
  { icon: '💊', label: 'Calming supplements' },
  { icon: '🎾', label: 'Scatter feeding' },
  { icon: '🛏️', label: 'Lick mats' },
  { icon: '🔔', label: 'Anti-bark collars' },
  { icon: '🎵', label: 'Calming music apps' },
  { icon: '📦', label: 'Monthly toy boxes' },
]

const TRACK = [...OLD_TOOLS, ...OLD_TOOLS, ...OLD_TOOLS]
const CARD_W = 168
const GAP = 12
const ONE_SET_PX = OLD_TOOLS.length * (CARD_W + GAP)

const OLD_WAY = [
  'Dog destroys treat toy in under 5 minutes',
  'Frozen Kong thaws too fast — 8 minutes max',
  'Constant barking the moment you close the door',
  'No clear picture of if your dog is actually calm',
  'Juggling 5–6 different toys that do not talk to each other',
  'Expensive daycare just to avoid coming home to chaos',
]

const NEW_WAY = [
  '45–90 minutes of focused solo engagement per session',
  '4 progressive tiers scale difficulty as your dog improves',
  'Dogs naturally self-soothe — no supervision needed',
  'Olfactory foraging triggers calming serotonin release',
  'One modular tower replaces six scattered solutions',
  'Vet-approved mental enrichment designed for solo play',
]

export default function ComparisonSplit() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 40%, #2563eb 100%)' }}
    >
      {/* Pure-CSS marquee keyframe */}
      <style>{`
        @keyframes tools-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-${ONE_SET_PX}px); }
        }
        .tools-track {
          animation: tools-scroll 32s linear infinite;
          will-change: transform;
        }
        .tools-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── TOP: Floating tools marquee (2 rows, opposite directions) ── */}
      <div className="pt-10 pb-2 space-y-3 overflow-hidden opacity-70">
        {/* Row 1 — left scroll */}
        <div className="relative overflow-hidden">
          <div className="tools-track flex" style={{ gap: GAP }}>
            {TRACK.map((tool, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold whitespace-nowrap"
                style={{ width: CARD_W }}
              >
                <span>{tool.icon}</span>
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right scroll (reverse) */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              gap: GAP,
              animation: `tools-scroll 28s linear infinite reverse`,
              willChange: 'transform',
              width: 'max-content',
            }}
          >
            {[...TRACK].reverse().map((tool, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium whitespace-nowrap"
                style={{ width: CARD_W }}
              >
                <span>{tool.icon}</span>
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN: 3-column layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

          {/* COL 1: Big headline */}
          <AnimatedContent
            distance={50}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            threshold={0.1}
            className="flex flex-col gap-5"
          >
            <div className="inline-flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-200" />
              One tower instead of ten toys
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.07] tracking-tight">
              Leaving your dog alone is stressful enough. Your solution should not make it worse.
            </h2>

            <p className="text-blue-100 text-base leading-relaxed">
              Most dog owners piece together a dozen scattered toys, supplements, and videos.
              Here is what changes the day you switch to the Sniff &amp; Solve Tower.
            </p>

            <Link href="/products/sniff-solve-tower" className="mt-2 w-fit">
              <SpecularButton
                size="md"
                radius={14}
                tint="#ffffff"
                tintOpacity={1}
                textColor="#1d4ed8"
                lineColor="#93c5fd"
                baseColor="#dbeafe"
                intensity={1.2}
                followMouse
                proximity={220}
                className="font-black text-sm h-12 px-6 shadow-xl"
              >
                <Zap className="w-4 h-4 mr-1 text-blue-600" />
                <span>Get the Tower — ₹69</span>
              </SpecularButton>
            </Link>

            <p className="text-blue-200 text-xs font-medium">
              Free shipping · 30-day money-back guarantee
            </p>
          </AnimatedContent>

          {/* COL 2: THE OLD WAY */}
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            delay={0.15}
            ease="power3.out"
            threshold={0.1}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/70 text-xs font-black uppercase tracking-widest">The Old Way</span>
            </div>

            <div className="space-y-2.5">
              {OLD_WAY.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm"
                >
                  <X className="w-4 h-4 text-red-200 shrink-0 mt-0.5" />
                  <p className="text-blue-50 text-sm font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedContent>

          {/* COL 3: THE SNIFF & SOLVE WAY */}
          <AnimatedContent
            distance={70}
            direction="vertical"
            duration={0.8}
            delay={0.25}
            scale={0.96}
            ease="power3.out"
            threshold={0.1}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-white text-xs font-black uppercase tracking-widest">The Sniff &amp; Solve Way</span>
            </div>

            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-2xl space-y-3.5">
              {NEW_WAY.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-slate-800 text-sm font-medium leading-snug">{item}</p>
                </div>
              ))}

              {/* Stats row */}
              <div className="pt-4 mt-2 border-t border-slate-200 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xl font-black text-blue-600">45–90m</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">Solo engagement</p>
                </div>
                <div>
                  <p className="text-xl font-black text-blue-600">94%</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">Less anxiety</p>
                </div>
                <div>
                  <p className="text-xl font-black text-blue-600">4 Tiers</p>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight">Progressive levels</p>
                </div>
              </div>
            </div>
          </AnimatedContent>

        </div>
      </div>
    </section>
  )
}
