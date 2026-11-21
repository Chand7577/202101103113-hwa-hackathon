'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Layers, Star } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  badge?: string
  icon?: React.ReactNode
}

interface GooeyNavProps {
  onShopClick?: () => void
  isShopOpen?: boolean
}

// Helper to calculate a continuous, authentic dog bone vector path with 4 distinct condyles and central waist
function getBonePath(w: number, h: number = 40): string {
  const width = Math.max(w, 90)
  const ym = h / 2 // 20
  const notchL = 10
  const notchR = width - 10
  const clx = 14
  const crx = width - 14
  const yt = 11.5
  const yb = 28.5
  const shaftT = 9
  const shaftB = 31

  return `
    M ${notchL} ${ym}
    C ${notchL - 3} ${ym + 3}, 4.5 ${yb - 4}, 4.5 ${yb}
    C 4.5 ${yb + 5.5}, 9 ${yb + 9}, ${clx} ${yb + 9}
    C 19.5 ${yb + 9}, 23 ${shaftB + 2}, 28 ${shaftB}
    L ${width - 28} ${shaftB}
    C ${width - 23} ${shaftB + 2}, ${crx - 5.5} ${yb + 9}, ${crx} ${yb + 9}
    C ${crx + 5.5} ${yb + 9}, ${width - 4.5} ${yb + 5.5}, ${width - 4.5} ${yb}
    C ${width - 4.5} ${yb - 4}, ${notchR + 3} ${ym + 3}, ${notchR} ${ym}
    C ${notchR + 3} ${ym - 3}, ${width - 4.5} ${yt + 4}, ${width - 4.5} ${yt}
    C ${width - 4.5} ${yt - 5.5}, ${crx + 5.5} ${yt - 9}, ${crx} ${yt - 9}
    C ${crx - 5.5} ${yt - 9}, ${width - 23} ${shaftT - 2}, ${width - 28} ${shaftT}
    L 28 ${shaftT}
    C 23 ${shaftT - 2}, 19.5 ${yt - 9}, ${clx} ${yt - 9}
    C 9 ${yt - 9}, 4.5 ${yt - 5.5}, 4.5 ${yt}
    C 4.5 ${yt + 4}, ${notchL - 3} ${ym - 3}, ${notchL} ${ym}
    Z
  `.replace(/\s+/g, ' ').trim()
}

export default function GooeyNav({ onShopClick, isShopOpen }: GooeyNavProps) {
  const pathname = usePathname()

  // High-converting navigation ordered matching the landing page progression
  const navItems: NavItem[] = [
    { label: 'Shop Tower', href: '/products/sniff-solve-tower', hasDropdown: true },
    { label: 'Features', href: '/#features' },
    {
      label: 'The 4 Levels',
      href: '/#levels',
      icon: <Layers className="w-4 h-4 text-blue-600" />,
    },
    { label: 'How It Works', href: '/#how-it-works' },
    {
      label: 'Reviews',
      href: '/#testimonials',
      badge: '4.9 ★',
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (pathname.startsWith('/products')) return 0
    return 0
  })
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([])

  const currentIndex = hoverIndex !== null ? hoverIndex : activeIndex

  // Update active index based on route
  useEffect(() => {
    if (pathname.startsWith('/products')) {
      setActiveIndex(0)
    }
  }, [pathname])

  // Reposition the gooey active indicator
  useEffect(() => {
    const updatePosition = () => {
      const activeItem = itemRefs.current[currentIndex]
      if (activeItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect()
        const itemRect = activeItem.getBoundingClientRect()
        setIndicatorStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
          opacity: 1,
        })
      }
    }
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [currentIndex])

  return (
    <div className="relative flex items-center">
      {/* SVG Gooey Morphing Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="gooey-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Nav Capsule Bar */}
      <div
        ref={navRef}
        className="relative flex items-center p-1.5 rounded-full bg-slate-100/95 border border-slate-200/90 shadow-inner"
        onMouseLeave={() => setHoverIndex(null)}
      >
        {/* Animated Dog Bone Background with authentic 4-lobe condyles & waist */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            height: '40px',
            opacity: indicatorStyle.opacity,
          }}
        >
          <svg
            width={indicatorStyle.width || 120}
            height="40"
            viewBox={`0 0 ${indicatorStyle.width || 120} 40`}
            className="w-full h-full overflow-visible"
          >
            <defs>
              <filter id="bone-nav-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.12" />
                <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0f172a" floodOpacity="0.08" />
              </filter>
              <linearGradient id="bone-nav-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
            </defs>
            <path
              d={getBonePath(indicatorStyle.width || 120, 40)}
              fill="url(#bone-nav-grad)"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              filter="url(#bone-nav-shadow)"
            />
          </svg>
        </div>

        {/* Navigation Items (Exactly 4) */}
        {navItems.map((item, idx) => {
          const isSelected = currentIndex === idx
          const isShop = item.hasDropdown

          if (isShop) {
            return (
              <button
                key={item.label}
                ref={(el) => {
                  itemRefs.current[idx] = el
                }}
                type="button"
                onMouseEnter={() => setHoverIndex(idx)}
                onClick={onShopClick}
                className={`relative z-10 px-4 py-2 text-sm font-bold rounded-xl flex items-center gap-1.5 transition-colors duration-200 select-none ${
                  isSelected
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isShopOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                  }`}
                />
              </button>
            )
          }

          return (
            <Link
              key={item.label}
              ref={(el) => {
                itemRefs.current[idx] = el
              }}
              href={item.href}
              onMouseEnter={() => setHoverIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`relative z-10 px-4 py-2 text-sm font-bold rounded-xl flex items-center gap-1.5 transition-colors duration-200 select-none ${
                isSelected
                  ? 'text-blue-600'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[11px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full ml-0.5">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
