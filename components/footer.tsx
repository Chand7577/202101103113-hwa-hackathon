'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer id="site-footer" className="relative bg-slate-100/80 pt-16 pb-12 overflow-hidden border-t border-slate-200">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Content */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-100">
            
            {/* Column 1: Brand Info & Socials (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                    Sniff &amp; Solve
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-extrabold text-blue-600 mt-1">
                    TOWER™
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
                The modular 4-tier interactive canine puzzle tower engineered to slow down meal gulping, curb boredom behaviors, and stimulate natural foraging neurology.
              </p>

              {/* Trust Badges Mini */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-semibold text-slate-600">
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Vet Recommended
                </span>
                <span className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  <Truck className="w-3.5 h-3.5 text-blue-600" />
                  Free Express Shipping
                </span>
                <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
                  30-Day Risk-Free
                </span>
              </div>
            </div>

            {/* Column 2: Product & Science (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Product &amp; Science
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/products/sniff-solve-tower" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Sniff &amp; Solve Tower™
                  </Link>
                </li>
                <li>
                  <Link href="/products/sniff-solve-tower#levels" className="text-slate-600 hover:text-blue-600 transition-colors">
                    The 4 Modular Tiers
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Canine Foraging Science
                  </Link>
                </li>
                <li>
                  <Link href="/products/sniff-solve-tower#gallery" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Exploded Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
                    The 3-Step Loop
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Care & Guides (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Care &amp; Guides
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Size &amp; Breed Guide
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Dishwasher &amp; Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Materials &amp; BPA-Free
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Bloat Prevention
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">
                    2,450+ Reviews
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Inline Email Field (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Enrichment Club
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Join 25,000+ dog parents getting vet-approved puzzle routines and secret pack deals.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Welcome to the pack! Check your inbox for 10% off.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-50 border border-slate-200 focus-within:border-blue-600 transition-colors">
                    <Mail className="w-4 h-4 text-slate-400 ml-2 shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-transparent text-xs text-slate-900 placeholder-slate-400 px-2 py-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shrink-0 shadow-xs"
                    >
                      Join
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 block">
                    No spam ever. Unsubscribe anytime.
                  </span>
                </form>
              )}

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>1-800-SNIFF-TOYS</span>
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Sniff &amp; Solve Tower™. All rights reserved.</p>

            <div className="flex items-center gap-4 sm:gap-6 font-medium">
              <Link href="/#faq" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/#faq" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/#faq" className="hover:text-blue-600 transition-colors">
                30-Day Money-Back Guarantee
              </Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
