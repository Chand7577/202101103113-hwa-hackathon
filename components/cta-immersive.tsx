'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Truck, RotateCcw, ShieldCheck, Star, Sparkles } from 'lucide-react'
import gsap from 'gsap'

export default function CTAImmersive() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const priceRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  
  // Array of images for carousel
  const carouselImages = [
    '/images/cta/cta-dog-1.jpg',
    '/images/cta/cta-dog-2.jpg',
    '/images/cta/cta-dog-3.jpg',
    '/images/cta/cta-dog-4.jpg',
    '/images/cta/cta-dog-5.jpg',
  ]

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, x: -50 })
      gsap.set([priceRef.current, buttonRef.current, trustRef.current, badgeRef.current, starsRef.current], { 
        opacity: 0, 
        scale: 0.9 
      })
      gsap.set(heroImageRef.current, { opacity: 0, scale: 1.2 })

      // Animate in sequence
      tl.to(badgeRef.current, { opacity: 1, scale: 1, duration: 0.5 })
        .to(titleRef.current, { opacity: 1, x: 0, duration: 0.8 }, '-=0.3')
        .to(subtitleRef.current, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
        .to(starsRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3')
        .to(priceRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.2')
        .to(buttonRef.current, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.3')
        .to(trustRef.current, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.4')
        .to(heroImageRef.current, { opacity: 1, scale: 1, duration: 1.2 }, 0)
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center min-h-screen"
      style={{ background: '#060a14' }}
    >
      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(96,165,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* No cursor trail - removed as per user request */}

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-white">
          
          {/* Live badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-slate-300 text-xs font-bold w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2,450+ dogs using it right now</span>
          </div>

          {/* Headline */}
          <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Give your pup the gift of{' '}
            <span className="text-blue-400">
              peaceful alone-time
            </span>
          </h2>

          {/* Supporting text */}
          <p ref={subtitleRef} className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md">
            Order today with Free Express Shipping and our 30-Day Money-Back Guarantee. Join thousands of happy dog owners.
          </p>

          {/* Rating stars */}
          <div ref={starsRef} className="flex items-center gap-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white text-base">4.9</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300 text-sm">2,450+ verified reviews</span>
          </div>

          {/* Price */}
          <div ref={priceRef} className="flex items-baseline gap-3 pt-2">
            <span className="text-5xl sm:text-6xl font-black text-white">₹69</span>
            <span className="text-slate-400 line-through text-2xl">₹89</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              Save ₹20
            </span>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base h-14 px-8 rounded-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 group"
            >
              <Link href="/products/sniff-solve-tower" className="flex items-center gap-2">
                <span>Get the Tower — ₹69.00</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div ref={trustRef} className="flex items-center gap-6 pt-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-400" />
              <span>Free 2-3 Day Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400" />
              <span>30-Day Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Guaranteed</span>
            </div>
          </div>

        </div>

        {/* Right: Hero Image Carousel */}
        <div className="lg:col-span-7 relative hidden lg:flex items-center justify-center" style={{ height: '600px' }}>
          
          {/* Main carousel container */}
          <div ref={heroImageRef} className="relative w-full h-full flex items-center justify-center">
            {/* Carousel images */}
            {carouselImages.map((imageSrc, idx) => (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: currentImageIndex === idx ? 1 : 0,
                  pointerEvents: currentImageIndex === idx ? 'auto' : 'none',
                }}
              >
                <img
                  src={imageSrc}
                  onError={(e) => {
                    // Fallback to product image if CTA image doesn't exist
                    e.currentTarget.src = '/images/sniff-solve-tower-hero.jpg'
                  }}
                  alt={`Happy dog ${idx + 1}`}
                  className="w-full h-full object-contain"
                  style={{
                    transform: 'scale(1.1)',
                    filter: 'drop-shadow(0 0 80px rgba(96,165,250,0.25))',
                    animation: currentImageIndex === idx ? 'float 6s ease-in-out infinite' : 'none',
                  }}
                />
              </div>
            ))}

            {/* Floating sparkles */}
            <div className="absolute top-20 right-32 text-amber-300 animate-pulse pointer-events-none z-10">
              <Sparkles className="w-8 h-8 fill-current" />
            </div>
            <div className="absolute bottom-32 right-20 text-blue-300 animate-pulse pointer-events-none z-10" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-6 h-6 fill-current" />
            </div>
            <div className="absolute top-40 left-20 text-indigo-300 animate-pulse pointer-events-none z-10" style={{ animationDelay: '2s' }}>
              <Sparkles className="w-7 h-7 fill-current" />
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden flex flex-col items-center justify-center py-8 gap-4">
          <div className="relative w-64 h-64">
            {carouselImages.map((imageSrc, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: currentImageIndex === idx ? 1 : 0,
                }}
              >
                <img
                  src={imageSrc}
                  onError={(e) => {
                    e.currentTarget.src = '/images/sniff-solve-tower-hero.jpg'
                  }}
                  alt={`Happy dog ${idx + 1}`}
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(96,165,250,0.3))',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Add float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: scale(1.15) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-20px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
