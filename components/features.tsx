'use client'

import {
  Layers,
  Sparkles,
  RotateCw,
  Gift,
  ShieldCheck,
  Dog,
  Clock,
  HeartHandshake,
  Check,
  X,
} from 'lucide-react'

const keyBenefits = [
  {
    icon: Layers,
    title: 'Stackable Modular Levels',
    description:
      'Customize the challenge level as your dog learns. Start with 1 tier for curious beginners or stack all 4 levels for master problem solvers.',
    badge: 'Level 1 to 4',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Sparkles,
    title: 'Lift-Up Flaps That Hide Treats',
    description:
      'Specially weighted tactile flaps reward dogs for using their paws and snout to flip, lift, and uncover high-value rewards.',
    badge: 'Scent-Driven',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: RotateCw,
    title: 'Spinning Discs & Moving Parts',
    description:
      'Dynamic rotary disks require multi-directional thinking. Dogs must rotate clockwise or counterclockwise to align reward slots.',
    badge: 'Mental Agility',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: Gift,
    title: 'Hidden Vault & Compartments',
    description:
      'A deep base treasure vault stores the ultimate jackpot, keeping dogs persevering until every last crumb is solved.',
    badge: 'Jackpot Chamber',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: ShieldCheck,
    title: 'Chew-Resistant & Non-Toxic',
    description:
      'Crafted from high-density, food-grade polypropylene polymer. 100% free of BPA, phthalates, and lead — built tough for rigorous play.',
    badge: 'FDA Food-Grade',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Dog,
    title: 'Suitable for All Dog Sizes',
    description:
      'Ergonomically dimensioned for 8-lb Chihuahuas up to 100-lb Golden Retrievers, German Shepherds, and Mastiffs alike.',
    badge: 'Universal Fit',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Engineered For Canine Brains
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            6 Reasons Why Dogs (and Owners) Love the Tower
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most dog toys lose interest in 5 minutes. The Sniff &amp; Solve Tower uses progressive modular tiers that tap into natural foraging instincts.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {keyBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white border ${benefit.border} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center ${benefit.color} group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {benefit.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Lab-tested canine durability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Problem vs. Solution Card: Fast Eating & Boredom */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              The Behavioral Transformation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Fast Gulping vs. Calm Enrichment
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Dogs have 300 million olfactory receptors. Here is what happens when you switch from a standard bowl:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Bad way */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wide">
                <X className="w-4 h-4" />
                <span>Traditional Food Bowls &amp; Chews</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span><strong>45-second gulping:</strong> Swallowing whole kibble increases canine bloat, choking, and regurgitation risk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span><strong>Pent-up energy:</strong> Boredom triggers shoe chewing, excessive barking, door scratching, and couch digging.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span><strong>Zero mental stimulation:</strong> Meals offer zero cognitive release, leaving high-energy breeds anxious.</span>
                </li>
              </ul>
            </div>

            {/* Sniff & Solve way */}
            <div className="p-6 rounded-2xl bg-blue-950/80 border border-blue-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wide">
                <Check className="w-4 h-4" />
                <span>With Sniff &amp; Solve Tower™</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>20–35 min slow feeding:</strong> Controlled treat delivery improves digestion and reduces gastric distension.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Calming dopamine release:</strong> 15 minutes of sniffing puzzle work burns as much mental energy as a 45-minute walk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Peaceful nap afterward:</strong> Satisfied brain fatigue leads to calm, restful sleep with zero destructive mischief.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
