'use client'

import { Star, CheckCircle2, ShieldCheck } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M. & Luna',
    dog: 'Luna (Golden Retriever, 3 yrs)',
    rating: 5,
    title: 'From 90-second vacuum eating to 30 minutes of calm fun!',
    text: 'Luna used to inhale her kibble so fast she would cough and throw up. We tried slow feeder bowls, but she outsmarted them in a day. The Sniff & Solve Tower completely changed our mornings. She methodically works through every level with her nose and paws. Totally relaxed afterward!',
    duration: 'Mealtime: 32 mins',
  },
  {
    name: 'Marcus T. & Cooper',
    dog: 'Cooper (Australian Shepherd, 2 yrs)',
    rating: 5,
    title: "Finally something that tires out an Aussie's brain!",
    text: 'High-energy herding dogs get destructive when bored. Cooper chewed chair legs during my Zoom calls. 20 minutes with the 4-level tower burns as much energy as a long run. The chew-resistant polymer is surprisingly tough. Worth every single penny.',
    duration: 'Boredom chewing: 0%',
  },
  {
    name: 'Elena & David K.',
    dog: 'Barnaby (French Bulldog, 4 yrs)',
    rating: 5,
    title: 'Perfect size and the non-slip base is incredible',
    text: 'I was worried Barnaby would push the tower over because he is clumsy and strong. The weighted base and rubber grip pads keep it glued to our hardwood floor! He loves the flap level and spins the top wheel like a pro. Cleaning is super fast in the dishwasher.',
    duration: 'Verified Buyer',
  },
  {
    name: 'Priya R. & Mochi',
    dog: 'Mochi (Shiba Inu, 2 yrs)',
    rating: 5,
    title: 'The only puzzle toy Mochi has not destroyed in 3 days',
    text: 'Shibas are notoriously stubborn and clever. Mochi has broken three so-called indestructible toys. The Sniff & Solve Tower is built differently. She is obsessed with the scent-hide drawer. We finally leave the house without guilt.',
    duration: 'Solo play: 55 mins',
  },
  {
    name: 'James L. & Biscuit',
    dog: 'Biscuit (Beagle, 5 yrs)',
    rating: 5,
    title: 'Nose work in a tower -- beagle heaven',
    text: 'Beagles are scent hounds; they NEED nose work or they drive you crazy. The Sniff & Solve Tower is essentially a portable nose-work station. Biscuit works it for 45 minutes straight, completely silent. We have seen a dramatic reduction in howling when we leave.',
    duration: 'Howling: eliminated',
  },
]

// Duplicate for seamless infinite loop — 3x ensures no gap at any screen width
const TRACK = [...reviews, ...reviews, ...reviews]

// Card width + gap in px — must match the inline styles below
const CARD_W = 400
const GAP = 32
// Width of one full set (the distance we scroll before looping)
const ONE_SET_PX = reviews.length * (CARD_W + GAP)

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">

      {/* Pure-CSS keyframe — no JS setState, renders at native 60/120fps */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-${ONE_SET_PX}px); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Loved By 2,400+ Dogs &amp; Pet Parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Real Results From Real Paws
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-sm">4.9 out of 5 stars</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-600 text-sm">Over 98% satisfaction rating</span>
          </div>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
        />

        <div
          className="marquee-track flex"
          style={{ gap: GAP, paddingLeft: 24, paddingRight: 24 }}
        >
          {TRACK.map((r, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              style={{ width: CARD_W }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Owner
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  &ldquo;{r.title}&rdquo;
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {r.text}
                </p>

                <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{r.name}</h5>
                    <p className="text-xs text-slate-500">{r.dog}</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md whitespace-nowrap">
                    {r.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
