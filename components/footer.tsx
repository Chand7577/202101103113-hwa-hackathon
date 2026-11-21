'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
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
    <footer className="relative bg-slate-100/70 pt-20 pb-12 overflow-hidden border-t border-slate-200/70">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* FLOATING OVERLAPPING NEWSLETTER CALLOUT (Matching Dribbble layout) */}
        <div className="relative z-20 max-w-4xl mx-auto -mb-28 px-2 sm:px-0">
          <div className="rounded-3xl bg-blue-600 text-white p-6 sm:p-10 shadow-2xl shadow-blue-500/25 border border-blue-400/30 overflow-hidden relative">
            
            {/* Background Ambient Shapes */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500 rounded-full blur-2xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-500 rounded-full blur-2xl opacity-40 pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left: 3D Product Image with Sparkles */}
              <div className="md:col-span-5 flex items-center justify-center relative">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                  <img
                    src="/images/sniff-solve-tower-hero.jpg"
                    alt="Sniff & Solve Tower"
                    className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                  />
                  {/* Floating decorative sparkles */}
                  <div className="absolute -top-2 left-4 text-amber-300 animate-pulse">
                    <Sparkles className="w-6 h-6 fill-current" />
                  </div>
                  <div className="absolute bottom-4 -right-2 text-blue-200 animate-pulse delay-150">
                    <Sparkles className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Right: Newsletter Copy & Pill Form */}
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Subscribe to our newsletter to get updates to our latest collections
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Get 10% off your first order just by subscribing to our canine enrichment club.
                  </p>
                </div>

                {subscribed ? (
                  <div className="p-3.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold flex items-center justify-center md:justify-start gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                    <span>Welcome to the pack! Check your inbox for your 10% off coupon code.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-inner">
                      <div className="flex-1 flex items-center gap-2 px-3 py-2 text-white placeholder-blue-200">
                        <Mail className="w-4 h-4 text-blue-200 shrink-0" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-transparent text-sm text-white placeholder-blue-200 focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-white hover:bg-slate-50 text-blue-600 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm hover:shadow"
                      >
                        Subscribe
                      </button>
                    </div>

                    <p className="text-[11px] text-blue-200 text-center md:text-left">
                      You will be able to unsubscribe at any time. Read our{' '}
                      <Link href="/#faq" className="underline hover:text-white">
                        privacy policy here
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* MAIN WHITE FOOTER CONTAINER */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm pt-36 sm:pt-40 pb-10 px-6 sm:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-100">
            
            {/* Column 1: Brand Info & Socials (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
                    <circle cx="12" cy="13" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                    Sniff &amp; Solve
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-blue-600 mt-0.5">
                    TOWER™
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                The modular 4-tier interactive canine puzzle tower engineered to slow down meal gulping, curb boredom behaviors, and stimulate natural foraging neurology.
              </p>

              {/* Social Icons row (Clean SVG vectors) */}
              <div className="flex items-center gap-2.5 pt-2">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Google / Web */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Google"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Company / Product (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/products/sniff-solve-tower" className="text-slate-600 hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products/sniff-solve-tower" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Support (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Support
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Tweet @ Us
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Links (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/products/sniff-solve-tower" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Become Trainer
                  </Link>
                </li>
                <li>
                  <Link href="/#levels" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/products/sniff-solve-tower" className="text-slate-600 hover:text-blue-600 transition-colors">
                    All In One
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Us (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Contact Us
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>(91) 98765 4321 54</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">support@mail.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© Copyright by CodedUI. All rights reserved.</p>

            <div className="flex items-center gap-4 sm:gap-6 font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Legal
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Site Map
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
