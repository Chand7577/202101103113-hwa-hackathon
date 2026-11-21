'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Sparkles,
  Clock,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Heart,
  RotateCw,
  Sliders,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

interface TabFeature {
  id: string
  label: string
  icon: typeof Brain
  badge: string
  title: string
  subtitle: string
  description: string
  specs: {
    icon: typeof Activity
    title: string
    desc: string
  }[]
  interactiveData: {
    badge: string
    mainStat: string
    mainLabel: string
    meterLabel: string
    meterValue: number
    meterMax: string
    codeSnippet: string[]
    activeNodeIndices: number[]
  }
}

const TABS: TabFeature[] = [
  {
    id: 'cognitive',
    label: 'Cognitive Agility',
    icon: Brain,
    badge: 'Tier Progression',
    title: 'Engross canine brains with multi-tier puzzle logic.',
    subtitle: 'Modular difficulty that scales as your dog gets smarter.',
    description:
      'Unlike single-use puzzle toys that dogs master in two minutes, the Sniff & Solve Tower features 4 distinct mechanical challenges that require deliberate paw-and-snout manipulation.',
    specs: [
      {
        icon: Layers,
        title: '4 Modular Levels',
        desc: 'Unlock new tiers sequentially to prevent frustration or boredom.',
      },
      {
        icon: RotateCw,
        title: 'Dual-Direction Rotors',
        desc: 'Discs require clockwise and counterclockwise nudging to align reward ports.',
      },
      {
        icon: Zap,
        title: 'Kinetic Snout Levers',
        desc: 'Weighted lift-flaps designed for fine motor coordination.',
      },
      {
        icon: Sliders,
        title: 'Adjustable Flow Gates',
        desc: 'Tune kibble aperture sizes for any treat diameter.',
      },
    ],
    interactiveData: {
      badge: 'Cognitive Load Engine',
      mainStat: '15 Min',
      mainLabel: '= 45-Min Physical Walk',
      meterLabel: 'Mental Focus Intensity',
      meterValue: 92,
      meterMax: '92% Peak Stimulation',
      codeSnippet: [
        'tier.init({ level: 1, mode: "apex_dispenser" });',
        'dog.snout_input({ torque: 0.8N, direction: "cw" });',
        '// Treat release trigger: SUCCESS',
        'tier.escalate({ next_level: 2, flaps_unlocked: true });',
      ],
      activeNodeIndices: [4, 5, 12, 13, 20, 21, 28, 29, 36, 37, 44, 45],
    },
  },
  {
    id: 'olfactory',
    label: 'Olfactory Drive',
    icon: Sparkles,
    badge: 'Scent Satiation',
    title: 'Stimulate 300 million canine scent receptors.',
    subtitle: 'Nose-work foraging triggers natural soothing serotonin.',
    description:
      'Dogs see the world through scent. The Tower uses deep olfactory micro-ports that emit irresistible scent trails while hiding the reward deep within sealed chambers.',
    specs: [
      {
        icon: Heart,
        title: 'Serotonin Activation',
        desc: 'Deep sniffing lowers canine heart rate and reduces cortisol distress.',
      },
      {
        icon: Activity,
        title: 'Scent-Trail Channels',
        desc: 'Micro-perforations let aroma escape without revealing food position.',
      },
      {
        icon: Sparkles,
        title: 'Reward Concealment',
        desc: 'Odor maze compels dogs to track scent intensity with micro-sniffs.',
      },
      {
        icon: CheckCircle2,
        title: 'Anxiety Neutralizer',
        desc: '94% of solo dogs settle peacefully instead of whining or pacing.',
      },
    ],
    interactiveData: {
      badge: 'Olfactory Sensory Array',
      mainStat: '+88%',
      mainLabel: 'Serotonin Elevation',
      meterLabel: 'Cortisol Stress Reduction',
      meterValue: 88,
      meterMax: '-84% Stress Response',
      codeSnippet: [
        'sensor.detect({ scent_receptors: 300_000_000 });',
        'olfactory.forage_state({ mode: "seeking_calm" });',
        'biometric.cortisol_level: 0.12 (-84% vs baseline);',
        'serotonin_dopamine.release({ status: "sustained" });',
      ],
      activeNodeIndices: [1, 2, 9, 10, 17, 18, 25, 26, 33, 34, 41, 42],
    },
  },
  {
    id: 'feeding',
    label: 'Paced Foraging',
    icon: Clock,
    badge: 'Slow Digestion',
    title: 'Transform 45-second gulping into 35-minute focus.',
    subtitle: 'Controlled kibble flow ends bloat, choking, and regurgitation.',
    description:
      'Standard bowls invite frantic inhalation of food. The Tower meters out every single piece of kibble, converting ordinary dinner into an engrossing, health-protective puzzle hunt.',
    specs: [
      {
        icon: Clock,
        title: '35-Minute Meals',
        desc: 'Extends eating duration by up to 30x compared to open bowls.',
      },
      {
        icon: ShieldCheck,
        title: 'Anti-Bloat Geometry',
        desc: 'Prevents life-threatening Gastric Dilation-Volvulus (GDV).',
      },
      {
        icon: Layers,
        title: 'Staggered Chambers',
        desc: 'Food cascades through 4 levels, rationing rewards evenly.',
      },
      {
        icon: Activity,
        title: 'Post-Meal Calm',
        desc: 'Dogs finish satisfied and naturally curl up for a peaceful nap.',
      },
    ],
    interactiveData: {
      badge: 'Digestion Flow Rate',
      mainStat: '32m 40s',
      mainLabel: 'Avg Mealtime Duration',
      meterLabel: 'Ingestion Speed Pacing',
      meterValue: 96,
      meterMax: '30x Slower Intake',
      codeSnippet: [
        'bowl.speed_test({ standard_bowl: "45s gulp" });',
        'tower.feed_cycle({ portion: 1.5_cups, tiers: 4 });',
        'elapsed_time: "00:32:40";',
        'safety_check: "zero_bloat_detected" [PASSED];',
      ],
      activeNodeIndices: [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47],
    },
  },
  {
    id: 'safety',
    label: 'Safe Solo Design',
    icon: ShieldCheck,
    badge: 'Pet-Proof Tough',
    title: 'Engineered for safe play while you are away.',
    subtitle: 'Weighted anti-tip base and chew-resistant FDA polymer.',
    description:
      'Zero pinch points, heavy non-slip silicone base, and rounded edges ensure your pup plays completely unsupervised with zero risk of tipping or injury.',
    specs: [
      {
        icon: ShieldCheck,
        title: '100% Non-Tip Base',
        desc: '3.2-lb weighted silicone grip suction base stays rooted to floors.',
      },
      {
        icon: Lock,
        title: 'Zero Pinch Points',
        desc: 'Smooth recessed tracks protect tongues, teeth, and paw pads.',
      },
      {
        icon: CheckCircle2,
        title: 'FDA Food-Grade Polymer',
        desc: 'BPA-free, non-toxic, and top-rack dishwasher safe for easy cleaning.',
      },
      {
        icon: Heart,
        title: 'Vet Endorsed',
        desc: 'Recommended by canine behavioral therapists for alone-time relief.',
      },
    ],
    interactiveData: {
      badge: 'Structural Integrity Spec',
      mainStat: '100%',
      mainLabel: 'Tip-Proof Stability',
      meterLabel: 'Impact & Bite Resistance',
      meterValue: 98,
      meterMax: 'Heavy-Duty Tested',
      codeSnippet: [
        'base.stability({ weight: "3.2 lbs", suction: true });',
        'bite_force_test({ max_load: "450 psi" }); [PASSED]',
        'chemical_assay: "0% BPA, 0% Lead, 0% Phthalates";',
        'certifications: ["FDA Food-Safe", "CE Canine Safety"];',
      ],
      activeNodeIndices: [3, 11, 19, 27, 35, 43, 24, 25, 26, 27, 28, 29],
    },
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const current = TABS[activeTab]
  const totalNodes = 48

  // Auto-move to next menu every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, activeTab])

  return (
    <section
      id="features"
      className="relative py-20 lg:py-28 overflow-hidden border-t border-slate-200"
      style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #edf2f7 50%, #f1f5f9 100%)',
      }}
    >
      {/* Ambient Blue Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Canine Architecture &amp; Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Canine Enrichment Reimagined for Solitary Focus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Interactive hardware engineering that channels primal foraging drive into hours of calm, independent satisfaction.
          </p>
        </div>

        {/* Modal-style 3-Column Interactive Container — Match Brand Royal Navy & Blue Palette */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl border border-slate-800/90 shadow-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden text-white"
          style={{
            background: 'linear-gradient(145deg, #0b1329 0%, #0d1b3e 60%, #081126 100%)',
          }}
        >
          {/* Subtle Background Radial Highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* ── COL 1: Vertical Tabs / Pills (3 cols) ── */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {TABS.map((tab, idx) => {
                const Icon = tab.icon
                const isActive = activeTab === idx
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`relative overflow-hidden flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left font-bold text-sm transition-all duration-200 shrink-0 select-none ${
                      isActive
                        ? 'bg-blue-600/25 text-white border border-blue-400/40 shadow-lg shadow-blue-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="truncate">{tab.label}</span>

                    {/* Auto-cycle timer progress bar on active tab */}
                    {isActive && (
                      <motion.div
                        key={`tab-progress-${activeTab}`}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '100%' : '100%' }}
                        transition={{
                          duration: isPaused ? 0 : 4.5,
                          ease: 'linear',
                        }}
                        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* ── COL 2: Feature Copy & 2x2 Specs (4 cols) ── */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[11px] font-extrabold uppercase tracking-wider border border-blue-400/30">
                    {current.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* 2x2 Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 border-t border-slate-700/60">
                    {current.specs.map((spec, sIdx) => {
                      const SpecIcon = spec.icon
                      return (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-100">
                            <SpecIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span className="truncate">{spec.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-snug">
                            {spec.desc}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── COL 3: Interactive Node Matrix & Floating Terminal Card (5 cols) ── */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] p-4 rounded-3xl bg-slate-950/80 border border-slate-800 overflow-hidden">
              
              {/* Background Hexagon / Dot Grid Matrix (Blue Palette) */}
              <div className="absolute inset-0 grid grid-cols-8 gap-3 p-6 pointer-events-none opacity-45">
                {Array.from({ length: totalNodes }).map((_, nIdx) => {
                  const isNodeActive = current.interactiveData.activeNodeIndices.includes(nIdx)
                  return (
                    <motion.div
                      key={nIdx}
                      animate={{
                        scale: isNodeActive ? [1, 1.3, 1] : 1,
                        opacity: isNodeActive ? [0.7, 1, 0.7] : 0.25,
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: isNodeActive ? Infinity : 0,
                        delay: (nIdx % 8) * 0.1,
                      }}
                      className={`w-3.5 h-3.5 rounded-full mx-auto ${
                        isNodeActive
                          ? 'bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)] ring-2 ring-blue-300/40'
                          : 'bg-slate-700'
                      }`}
                    />
                  )
                })}
              </div>

              {/* Floating Glass Terminal / Live Telemetry Card (Centered in Matrix) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full max-w-sm rounded-2xl bg-[#0e172f]/95 backdrop-blur-xl border border-blue-500/30 shadow-2xl p-5 space-y-4"
                >
                  {/* Top Bar with Status Pill */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                      {current.interactiveData.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Main Metric Hero */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-black text-white font-mono tracking-tight">
                        {current.interactiveData.mainStat}
                      </div>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">
                        {current.interactiveData.mainLabel}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-blue-300 bg-blue-900/60 border border-blue-500/30 px-2 py-0.5 rounded-full">
                        {current.interactiveData.meterMax}
                      </span>
                    </div>
                  </div>

                  {/* Meter Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>{current.interactiveData.meterLabel}</span>
                      <span className="text-blue-300 font-bold">{current.interactiveData.meterValue}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${current.interactiveData.meterValue}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                      />
                    </div>
                  </div>

                  {/* Monospace System Execution Logs */}
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                    {current.interactiveData.codeSnippet.map((line, lIdx) => (
                      <p key={lIdx} className="truncate">
                        <span className="text-blue-400 select-none mr-2">&gt;</span>
                        <span className={line.startsWith('//') ? 'text-slate-500' : 'text-slate-200'}>
                          {line}
                        </span>
                      </p>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <Link
                      href="/products/sniff-solve-tower#levels"
                      className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Explore 4 Modular Tiers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] text-slate-400 font-mono">₹69.00 In Stock</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
