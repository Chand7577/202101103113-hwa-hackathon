'use client'

import { Sparkles, RotateCw, ArrowRight, Clock, Home, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AnimatedContent from '@/components/animated-content'

const loopSteps = [
  {
    step: '01',
    name: 'Sniff',
    subtitle: 'Olfactory Scent Awakening',
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 5.5 3.5 7.5l1.5-1.5C5.5 16.5 4 14.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.5-1.5 4.5-3 6l1.5 1.5C20.5 17.5 22 15 22 12c0-5.5-4.5-10-10-10z" />
        <ellipse cx="12" cy="14" rx="4" ry="3" />
        <circle cx="10" cy="14" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'Step 1: Curiosity',
    description:
      'The moment you step out, multi-tier scent vents release tempting kibble aromas. Your dog’s 300 million scent receptors lock on, redirecting attention away from the exit door.',
    takeaway: 'Engages their primary sensory organ',
  },
  {
    step: '02',
    name: 'Solve',
    subtitle: 'Cognitive Solo Play',
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'Step 2: Mental Work',
    description:
      'Dogs use paw taps, nose nudges, and concentric slider rotation to solve tier after tier. Each success dispenses a small reward, maintaining high motivation and focus.',
    takeaway: 'Turns lonely hours into triumphant fun',
  },
  {
    step: '03',
    name: 'Repeat',
    subtitle: 'Restful Calm Relaxation',
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'Step 3: Serotonin Release',
    description:
      'After working down to the base jackpot vault, the intense mental exertion naturally exhausts their working drive, leading to deep, contented sleep until you return.',
    takeaway: 'Peaceful naps with zero home destruction',
  },
]

const awayTimeline = [
  {
    time: '8:30 AM',
    title: 'You Leave for Work',
    detail: 'Aroma vents instantly awaken your dog’s natural foraging drive, taking their mind off you walking out the door.',
    badge: 'Departure Relief',
  },
  {
    time: '9:15 AM',
    title: 'Tiers 1 & 2 Conquered',
    detail: 'Nose nudges on the top rotary disc and lifting hidden flaps keep paws active and brains engrossed.',
    badge: 'Focused Flow',
  },
  {
    time: '10:30 AM',
    title: 'Base Vault Jackpot Solved',
    detail: 'Concentrated logic on the sliding orbit disc unlocks the bottom prize, concluding an engaging solo challenge.',
    badge: 'Triumphant Reward',
  },
  {
    time: '11:30 AM',
    title: 'Deep, Restful Sleep',
    detail: 'Happy brain fatigue triggers natural calming sleep hormones. Your dog naps peacefully until your key turns in the lock.',
    badge: 'Calm Companionship',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-100/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="w-3.5 h-3.5" />
            Designed For When You’re Away
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Keeps Dogs Engaged: Sniff → Solve → Repeat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dogs don’t need you standing over them to stay entertained. Our progressive challenge tiers tap into natural foraging instincts to create a self-sustaining solo loop.
          </p>
        </div>

        {/* 3 Step Cards */}
        <AnimatedContent
          distance={70}
          direction="vertical"
          duration={0.8}
          stagger={0.12}
          ease="power3.out"
          threshold={0.1}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 relative mb-16"
        >
          {loopSteps.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl bg-white border ${item.border} shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-2xs`}>
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>

                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {item.badge}
                </span>

                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-1">
                  {item.name}
                </h3>
                <h4 className="text-xs font-bold text-slate-500 mb-3.5">
                  {item.subtitle}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{item.takeaway}</span>
              </div>
            </div>
          ))}
        </AnimatedContent>

        {/* WHILE YOU'RE AWAY TIMELINE */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              A Day in the Life
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Happens While You’re Away
            </h3>
            <p className="text-sm text-slate-500">
              Here is how the Sniff &amp; Solve Tower turns an 8-hour workday into a calm, rewarding solo adventure.
            </p>
          </div>

          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.8}
            stagger={0.1}
            ease="power3.out"
            threshold={0.1}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative"
          >
            {awayTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 relative group hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-black text-blue-600 font-mono">
                      {item.time}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-800">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>No anxiety pacing</span>
                </div>
              </div>
            ))}
          </AnimatedContent>
        </div>

      </div>
    </section>
  )
}
