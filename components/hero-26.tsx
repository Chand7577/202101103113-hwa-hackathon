'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import SpecularButton from '@/components/specular-button'
import RotatingText from '@/components/rotating-text'
import {
  ArrowRight, ShieldCheck, Clock,
  Heart, Brain, ShoppingCart, Star, CheckCircle2,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Heart,
    accent: '#f43f5e',
    value: '94%',
    sub: 'Less Anxiety',
    desc: 'Olfactory foraging calms separation stress.',
  },
  {
    icon: Brain,
    accent: '#a855f7',
    value: '15 Min',
    sub: '= 45-Min Walk',
    desc: 'Channels pent-up drive into brain-work.',
  },
  {
    icon: Clock,
    accent: '#06b6d4',
    value: '45–90m',
    sub: 'Engaged Alone',
    desc: 'Progressive tiers pace rewards for hours.',
  },
  {
    icon: ShieldCheck,
    accent: '#10b981',
    value: '100%',
    sub: 'Non-Tip Base',
    desc: 'Silicone grip. Zero pinch points.',
  },
  {
    icon: CheckCircle2,
    accent: '#3b82f6',
    value: 'Vet OK',
    sub: 'Non-Toxic',
    desc: 'Veterinarian-recommended enrichment toy.',
  },
]

// C-arc positions (px) — image is ~560px tall, centered vertically in 580px container
// Cards are 180px wide, positioned to the LEFT of the image
// C opens to the right (toward the image)
const ARC = [
  { top:  20, left: 50 },   // top of C
  { top: 110, left: 15 },   // upper sweep
  { top: 210, left:  0 },   // middle — widest
  { top: 310, left: 15 },   // lower sweep
  { top: 400, left: 50 },   // bottom of C
]

export default function Hero26() {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [visible, setVisible] = useState<number[]>([])

  const handleQuickAdd = () => {
    addItem(DEFAULT_PRODUCT, 1)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2500)
  }

  useEffect(() => {
    const timers = FEATURES.map((_, i) =>
      setTimeout(() => setVisible(p => [...p, i]), 300 + i * 300)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        background: '#060a14',
        minHeight: 'calc(100vh - 5rem)',
      }}
    >
      {/* ── Huge raw image — RIGHT half, bleeding to edge (Desktop Only) ── */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 right-0 pointer-events-none"
        style={{ width: '55%' }}
      >
        {/* Fade-left mask so image blends into the dark bg on its left edge */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, #060a14 0%, #060a1460 30%, transparent 60%)',
          }}
        />
        {/* Fade-right so it softly bleeds the right edge */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to left, #060a14 0%, transparent 20%)',
          }}
        />
        <img
          src="/images/sniff-solve-tower-hero.jpg"
          alt="Sniff & Solve Tower"
          className="w-full h-full object-contain object-center"
          style={{ transform: 'scale(1.08) translateX(4%)', filter: 'drop-shadow(0 0 60px rgba(96,165,250,0.12))' }}
        />
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-5rem)]">

        {/* LEFT: Text column */}
        <div className="flex flex-col gap-5 py-12 lg:py-0">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-[11px] font-bold uppercase tracking-wider w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Independent Canine Enrichment
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.08]">
            Keeps your dog<br />
            <span className="inline-flex items-center mt-1">
              <RotatingText
                texts={[
                  'happy while away.',
                  'calm & focused.',
                  'mentally engaged.',
                  'free from anxiety.',
                ]}
                effect="slide"
                direction="up"
                highlight={true}
                highlightColor="#2563eb"
                staggerFrom="last"
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                rotationInterval={2600}
                mainClassName="rounded-2xl px-2.5 sm:px-3 py-0.5 sm:py-1 font-black text-white text-2xl sm:text-4xl lg:text-[50px] inline-block"
              />
            </span>
          </h1>

          <p className="text-slate-400 text-[15px] leading-relaxed max-w-[320px]">
            The 4-tier modular puzzle tower that turns anxious alone-time into calm, independent focus. No barking. No chewing. Zero guilt.
          </p>

          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-black text-white">₹69</span>
            <span className="text-slate-500 line-through text-xl">₹89</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              Save ₹20
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/products/sniff-solve-tower">
              <SpecularButton
                size="md"
                radius={14}
                tint="#2563eb"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#bfdbfe"
                baseColor="#1d4ed8"
                intensity={1.2}
                followMouse
                proximity={220}
                className="font-bold text-sm h-12 px-6 shadow-lg shadow-blue-500/25"
              >
                <span>Order Tower</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </SpecularButton>
            </Link>
            <SpecularButton
              size="md"
              radius={14}
              tint="#1e293b"
              tintOpacity={0.65}
              textColor="#cbd5e1"
              lineColor="#94a3b8"
              baseColor="#334155"
              intensity={0.9}
              followMouse
              proximity={200}
              onClick={handleQuickAdd}
              className="font-bold text-sm h-12 px-5 border border-white/10"
            >
              <ShoppingCart className="w-4 h-4 mr-1 text-blue-400" />
              <span>Quick Add</span>
            </SpecularButton>
          </div>

          {isAdded && (
            <p className="text-xs text-emerald-400 font-bold">✓ Added to cart!</p>
          )}

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="font-bold text-white">4.9</span>
            <span>· 2,450+ happy dog owners</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Dogs in 38+ countries are using it right now
          </div>

          {/* Dedicated mobile product visual showcase */}
          <div className="lg:hidden relative w-full flex flex-col items-center justify-center pt-2 pb-2">
            <div className="relative w-full max-w-[270px] aspect-square flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
              />
              <img
                src="/images/sniff-solve-tower-hero.jpg"
                alt="Sniff & Solve Tower"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: C-arc feature cards only — image is behind via absolute */}
        <div className="relative hidden lg:block" style={{ height: 520 }}>

          {/* Subtle vertical connector line for the C */}
          <div
            className="absolute rounded-full"
            style={{
              left: 32,
              top: 32,
              width: 2,
              height: 436,
              background: 'linear-gradient(to bottom, transparent, rgba(96,165,250,0.2) 20%, rgba(96,165,250,0.2) 80%, transparent)',
            }}
          />

          {/* Feature cards in C-arc */}
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            const isVisible = visible.includes(i)
            const arc = ARC[i]
            return (
              <div
                key={i}
                className="absolute flex items-center gap-2.5 rounded-2xl"
                style={{
                  width: 192,
                  top: arc.top,
                  left: arc.left,
                  padding: '10px 14px',
                  background: 'rgba(10,15,30,0.82)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.4,0.64,1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${f.accent}18`,
                    border: `1px solid ${f.accent}30`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: f.accent }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-white">{f.value}</span>
                    <span className="text-[9px] text-slate-500">{f.sub}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-2">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile feature grid */}
      <div className="lg:hidden relative z-20 w-full px-6 pb-12">
        <div className="grid grid-cols-2 gap-2.5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            const isLast = i === FEATURES.length - 1
            return (
              <div
                key={i}
                className={`flex items-start gap-2.5 p-3 rounded-2xl ${isLast ? 'col-span-2' : ''}`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}
                >
                  <Icon className="w-4 h-4" style={{ color: f.accent }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    <span className="text-sm font-black text-white">{f.value}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{f.sub}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug line-clamp-2">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
