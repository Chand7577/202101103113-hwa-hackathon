'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import GooeyNav from '@/components/gooey-nav'
import {
  Menu,
  X,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  ArrowRight,
  Star,
  Zap,
  Target,
  Flame,
  Layers,
} from 'lucide-react'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [shopMenuOpen, setShopMenuOpen] = useState(false)
  const shopRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const { totalItems, subtotal, setIsCartOpen } = useCart()

  // Close menus on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setShopMenuOpen(false)
  }, [pathname])

  // Close shop menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Value Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-[13px] py-2 px-4 font-semibold tracking-wide border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-400" />
            <span>Free Express Shipping on Orders Over $50</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <div className="hidden sm:flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Risk-Free Trial</span>
          </div>
          <span className="hidden md:inline text-slate-600">•</span>
          <div className="hidden md:flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Veterinarian Recommended Mental Enrichment</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-all">
              <svg
                className="w-6 h-6"
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
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                Sniff &amp; Solve
              </span>
              <span className="text-[11px] tracking-widest uppercase font-extrabold text-blue-600 mt-1">
                TOWER™
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: React Bits Gooey Navbar with exactly 4 options */}
          <div ref={shopRef} className="hidden lg:flex items-center relative">
            <GooeyNav
              onShopClick={() => setShopMenuOpen((prev) => !prev)}
              isShopOpen={shopMenuOpen}
            />

            {/* Shop Mega Menu Dropdown */}
            {shopMenuOpen && (
              <div className="absolute top-full left-0 w-[580px] mt-3 bg-transparent z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 grid grid-cols-12 gap-6">
                  
                  {/* Featured Product Card (6 cols) */}
                  <div className="col-span-6 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                          Flagship Puzzle
                        </span>
                        <span className="text-xs font-bold text-slate-900">$69.00</span>
                      </div>
                      <div className="w-full aspect-[4/3] bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center overflow-hidden mb-3">
                        <img
                          src="/images/sniff-solve-tower-hero.jpg"
                          alt="Sniff & Solve Tower"
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                        Sniff &amp; Solve Tower™
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        Modular 4-tier interactive dog puzzle designed to slow eating and stop boredom.
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <Link
                        href="/products/sniff-solve-tower"
                        onClick={() => setShopMenuOpen(false)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>View Product</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Quick Level Jumps (6 cols) */}
                  <div className="col-span-6 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        The 4 Modular Tiers
                      </span>

                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link
                            href="/products/sniff-solve-tower#levels"
                            onClick={() => setShopMenuOpen(false)}
                            className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                            <div>
                              <span className="font-bold block text-[13px]">Level 1: Apex Dispenser</span>
                              <span className="text-[11px] text-slate-500">Rotary top kibble wheel</span>
                            </div>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/sniff-solve-tower#levels"
                            onClick={() => setShopMenuOpen(false)}
                            className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            <Target className="w-4 h-4 text-cyan-600 shrink-0" />
                            <div>
                              <span className="font-bold block text-[13px]">Level 2: Lift-Flaps</span>
                              <span className="text-[11px] text-slate-500">Concealed treat wells</span>
                            </div>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/sniff-solve-tower#levels"
                            onClick={() => setShopMenuOpen(false)}
                            className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            <Flame className="w-4 h-4 text-purple-600 shrink-0" />
                            <div>
                              <span className="font-bold block text-[13px]">Level 3: Orbit Discs</span>
                              <span className="text-[11px] text-slate-500">Multi-slot sliding puzzle</span>
                            </div>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/sniff-solve-tower#levels"
                            onClick={() => setShopMenuOpen(false)}
                            className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                            <div>
                              <span className="font-bold block text-[13px]">Level 4: Base Vault</span>
                              <span className="text-[11px] text-slate-500">Non-slip jackpot base</span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        href="/cart"
                        onClick={() => setShopMenuOpen(false)}
                        className="text-slate-600 hover:text-slate-900 font-semibold"
                      >
                        View Cart ({totalItems})
                      </Link>
                      <Link
                        href="/checkout"
                        onClick={() => setShopMenuOpen(false)}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Fast Checkout →
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons & Direct Buy CTA */}
          <div className="flex items-center gap-3">
            
            {/* Interactive Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative h-11 px-3.5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-all flex items-center gap-2 shadow-2xs"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-slate-700" />
              <span className="text-xs font-bold text-slate-900">
                {totalItems > 0 ? `$${subtotal.toFixed(2)}` : 'Cart'}
              </span>
              {totalItems > 0 && (
                <span className="bg-blue-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white ml-0.5">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct Buy CTA */}
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm h-11 px-5 rounded-2xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Link href="/products/sniff-solve-tower">
                <span>Order Tower</span>
                <span className="font-normal text-blue-200 text-xs">($69)</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 rounded-2xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER / FLYOUT (Aligned to 4 items) */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-5 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Featured Product Preview */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
              <img src="/images/sniff-solve-tower-hero.jpg" alt="Tower" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                Featured Product
              </span>
              <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">
                Sniff &amp; Solve Tower™
              </h4>
              <p className="text-xs text-slate-500 font-semibold">$69.00 • Free Delivery</p>
            </div>
            <Button asChild size="sm" className="bg-blue-600 text-white text-xs px-3.5 h-9 rounded-xl">
              <Link href="/products/sniff-solve-tower" onClick={() => setIsMobileOpen(false)}>
                View
              </Link>
            </Button>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
              Navigation
            </span>
            <Link
              href="/products/sniff-solve-tower"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-slate-900 font-bold hover:bg-slate-50 text-sm"
            >
              <span>Shop Tower</span>
              <span className="text-xs font-semibold text-blue-600">$69.00</span>
            </Link>
            <Link
              href="/#levels"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-3 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 text-sm"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>The 4 Levels</span>
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileOpen(false)}
              className="block px-3 py-3 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 text-sm"
            >
              How It Works
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 text-sm"
            >
              <span>Reviews</span>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                4.9 ★ (2,450+)
              </span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2.5">
            <Link
              href="/cart"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm"
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-blue-600" />
                <span>Shopping Cart</span>
              </div>
              <span className="text-xs bg-white px-2.5 py-0.5 rounded-full border border-slate-200 font-bold">
                {totalItems} items (${subtotal.toFixed(2)})
              </span>
            </Link>

            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-2xl justify-center"
              onClick={() => setIsMobileOpen(false)}
            >
              <Link href="/products/sniff-solve-tower">
                Get Sniff &amp; Solve Tower — $69
              </Link>
            </Button>
          </div>

          <div className="pt-2 flex items-center justify-around text-center text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-blue-600" /> Free Shipping
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 30-Day Guarantee
            </span>
          </div>

        </div>
      )}
    </header>
  )
}
