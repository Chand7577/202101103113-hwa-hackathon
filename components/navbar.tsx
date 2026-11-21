'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Sniff &amp; Solve</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Button asChild>
              <Link href="#" className="w-full">
                Order Now
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 py-4">
            <Link href="#features" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              FAQ
            </Link>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-center text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
