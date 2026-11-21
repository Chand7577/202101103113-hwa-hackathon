'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import AnimatedContent from '@/components/animated-content'

const faqItems = [
  {
    q: 'Can an aggressive chewer destroy the Sniff & Solve Tower?',
    a: 'The tower is molded from ultra-high-density, food-grade polypropylene engineered specifically for canine puzzle toys. While no dog toy is 100% indestructible if left unattended as a chew bone, the rounded contours and recessed moving parts prevent dogs from catching teeth on outer edges. We recommend supervising your dog during initial puzzle sessions.',
  },
  {
    q: 'What dog sizes and breeds is the tower suitable for?',
    a: 'The modular dimensions (16.5" total stack height with an 11" diameter base) make it suitable for dogs ranging from 8-lb toy breeds (Yorkies, Dachshunds) up to 100-lb giant breeds (Labs, Shepherds, Rottweilers). You can adjust the difficulty and stack only 1 or 2 levels for smaller pups or use all 4 tiers for larger dogs.',
  },
  {
    q: 'How does it slow down fast eaters and prevent canine bloat?',
    a: 'Traditional bowls allow dogs to inhale 2 cups of food in under 60 seconds. The Sniff & Solve Tower distributes kibble across 4 distinct levels with spinning barriers, lift flaps, and vault sliders, forcing your dog to eat 3–5 pieces at a time. This extends mealtime to 20–35 minutes, greatly lowering the risk of gastric dilatation-volvulus (bloat) and choking.',
  },
  {
    q: 'What kinds of food and treats work best inside?',
    a: 'You can use dry kibble of any standard shape, freeze-dried raw bites, crunchy biscuits, or training treats. The lift-up flap chamber and base vault can also accommodate soft snacks like plain pumpkin puree or dog-safe peanut butter for an extra sensory reward.',
  },
  {
    q: 'How do I clean and sanitize the tower?',
    a: 'All 4 modular tiers quickly twist apart in seconds. Each level is top-rack dishwasher safe for easy sanitizing, or you can rinse them with warm soapy water. The base rubber pads wipe clean with a damp cloth.',
  },
  {
    q: 'What is your 30-Day Money-Back Guarantee?',
    a: 'We want both you and your pup to be 100% thrilled. If your dog doesn’t take to the tower or you aren’t completely satisfied within 30 days of receiving your order, simply reach out to our support team for a prepaid return label and a full, hassle-free refund.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Everything You Need To Know
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions before ordering? Here are answers to the most common questions from dog owners.
          </p>
        </div>

        {/* Accordion List */}
        <AnimatedContent
          distance={50}
          direction="vertical"
          duration={0.7}
          stagger={0.08}
          ease="power3.out"
          threshold={0.1}
          className="space-y-3.5"
        >
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </AnimatedContent>

      </div>
    </section>
  )
}
