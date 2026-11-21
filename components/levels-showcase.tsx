'use client'

import { useState } from 'react'
import {
  Zap,
  Target,
  Flame,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const towerLevels = [
  {
    number: 1,
    levelName: 'Level 1: The Apex Dispenser',
    tier: 'Top Tier',
    difficulty: 'Easy / Starter',
    icon: Zap,
    color: 'text-amber-500',
    border: 'border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-800',
    headerBg: 'bg-gradient-to-r from-amber-50 to-amber-100/50',
    description:
      'A rotary disc crowned at the top of the tower releases small kibble when nudged by the nose. Built-in scent vents immediately alert dogs that delicious rewards await inside.',
    mechanics: [
      'Rotates 360° on smooth, food-safe bearings',
      'Dual scent vents radiate aromas to trigger natural tracking',
      'Easy initial reward builds confidence and excitement',
    ],
  },
  {
    number: 2,
    levelName: 'Level 2: Hidden Flap Chamber',
    tier: 'Upper Middle Tier',
    difficulty: 'Medium Challenge',
    icon: Target,
    color: 'text-cyan-600',
    border: 'border-cyan-200',
    badgeBg: 'bg-cyan-100 text-cyan-800',
    headerBg: 'bg-gradient-to-r from-cyan-50 to-cyan-100/50',
    description:
      'Four lift-up weighted flaps conceal treat wells underneath. Dogs learn to slide their snout or use paw-tapping to lift the flaps and scoop out their favorite snacks.',
    mechanics: [
      'Ergonomic silicone-lipped flaps prevent pinched paws',
      'Accommodates training treats, peanut butter, or fresh fruit',
      'Develops paw-eye coordination and fine motor control',
    ],
  },
  {
    number: 3,
    levelName: 'Level 3: Spin-and-Seek Orbit Disc',
    tier: 'Lower Middle Tier',
    difficulty: 'Advanced Problem Solving',
    icon: Flame,
    color: 'text-purple-600',
    border: 'border-purple-200',
    badgeBg: 'bg-purple-100 text-purple-800',
    headerBg: 'bg-gradient-to-r from-purple-50 to-purple-100/50',
    description:
      'A multi-groove sliding labyrinth. Kibble is hidden beneath rotating concentric sliders that must be spun in sequence to unlock the reward channel.',
    mechanics: [
      'Requires sequential problem solving (step 1 then step 2)',
      'Resistance channels slow down over-eager dogs',
      'Keeps high-energy working breeds thoroughly engrossed',
    ],
  },
  {
    number: 4,
    levelName: 'Level 4: Base Treasure Vault',
    tier: 'Foundation Base',
    difficulty: 'Master Finale',
    icon: ShieldCheck,
    color: 'text-blue-600',
    border: 'border-blue-200',
    badgeBg: 'bg-blue-100 text-blue-800',
    headerBg: 'bg-gradient-to-r from-blue-50 to-blue-100/50',
    description:
      'The grand finale jackpot vault! Heavy-duty sliding latches guard the largest treat compartment, secured onto an ultra-stable, anti-tip weighted silicone base.',
    mechanics: [
      'Holds high-value jackpots (bully slices, freeze-dried liver)',
      'Heavy weighted core + 8 rubber grips won’t flip over',
      'Provides the ultimate triumphant reward at puzzle completion',
    ],
  },
]

export default function LevelsShowcase() {
  const [activeLevel, setActiveLevel] = useState(1)
  const current = towerLevels.find((l) => l.number === activeLevel) || towerLevels[0]

  return (
    <section id="levels" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            4 Modular Challenge Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What&apos;s Inside the Sniff &amp; Solve Tower
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike one-trick puzzle mats, our modular tower stacks 4 distinct brain-teasing mechanisms that can be played individually or stacked together.
          </p>
        </div>

        {/* Level Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {towerLevels.map((lvl) => {
            const isSelected = activeLevel === lvl.number
            return (
              <button
                key={lvl.number}
                type="button"
                onClick={() => setActiveLevel(lvl.number)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    0{lvl.number}
                  </span>
                  <lvl.icon className={`w-5 h-5 ${lvl.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {lvl.tier}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{lvl.difficulty}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Level Deep Dive Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual representation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center justify-center text-center">
                <div
                  className={`w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center ${current.color} mb-4 shadow-inner`}
                >
                  <current.icon className="w-10 h-10" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${current.badgeBg} mb-2`}>
                  {current.difficulty}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">
                  {current.levelName}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Modular Interlocking Component #{current.number}
                </p>
                <div className="mt-5 w-full pt-4 border-t border-slate-100 flex items-center justify-around text-xs text-slate-600 font-medium">
                  <span>✓ 100% Dishwasher Safe</span>
                  <span>✓ Food-Safe Polymer</span>
                </div>
              </div>
            </div>

            {/* Content info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Tier Detail {current.number} of 4
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {current.levelName}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  How Dogs Interact With This Level:
                </h5>
                <ul className="space-y-2.5">
                  {current.mechanics.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
                  <Link href="/products/sniff-solve-tower" className="flex items-center gap-2">
                    <span>Order Complete 4-Level Tower ($69)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <span className="text-xs text-slate-500">
                  Includes all 4 tiers in one box
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
