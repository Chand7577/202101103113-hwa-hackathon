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

export default function GooeyNav({ onShopClick, isShopOpen }: GooeyNavProps) {
  const pathname = usePathname()

  // Exactly 4 streamlined, high-converting options
  const navItems: NavItem[] = [
    { label: 'Shop Tower', href: '/products/sniff-solve-tower', hasDropdown: true },
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
        className="relative flex items-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 shadow-inner"
        style={{ filter: 'url(#gooey-nav-filter)' }}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {/* Animated Gooey Pill Blob */}
        <div
          className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-md transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
        >
          {/* Subtle liquid droplet indicators */}
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full opacity-90" />
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full opacity-90" />
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
