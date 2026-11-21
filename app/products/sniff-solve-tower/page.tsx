'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  ChevronRight,
  Clock,
  PawPrint,
  Plus,
  Minus,
  ShoppingCart,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Zap,
  Target,
} from 'lucide-react'

const levels = [
  {
    number: 1,
    title: 'Top Treat Dispenser',
    description: 'A spinning disc at the top releases treats when nudged, sparking curiosity from the very first sniff.',
    icon: Zap,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    number: 2,
    title: 'Hidden Flap Chamber',
    description: 'Liftable flaps conceal treats underneath, rewarding your dog for exploring with their nose and paws.',
    icon: Target,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    number: 3,
    title: 'Spin-and-Seek Disc',
    description: 'A rotating middle layer hides kibble in secret slots, forcing your dog to keep coming back for more.',
    icon: Flame,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    number: 4,
    title: 'Base Treasure Vault',
    description: 'The final compartment holds the biggest rewards, keeping dogs engaged until every last treat is found.',
    icon: ShieldCheck,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
]

const features = [
  {
    title: 'Multi-Level Modular Design',
    description: 'Four distinct levels stack into one tall tower, giving your dog a new challenge on every tier.',
    icon: PawPrint,
  },
  {
    title: 'Flaps That Hide Treats',
    description: 'Liftable flaps conceal snacks underneath, rewarding curiosity with every nose boop and paw tap.',
    icon: Target,
  },
  {
    title: 'Spinning Discs & Interactive Parts',
    description: 'Rotating layers and moveable components keep mealtime feeling like playtime, not a chore.',
    icon: Zap,
  },
  {
    title: 'Hidden Treat Compartments',
    description: 'Secret slots and chambers force your dog to work for their food, slowing down fast eaters.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Lasting Engagement',
    description: 'Designed to keep dogs busy and engrossed far longer than a standard bowl ever could.',
    icon: Clock,
  },
  {
    title: 'Chew-Resistant Build',
    description: 'Non-toxic, durable materials stand up to enthusiastic paws and curious snouts of all sizes.',
    icon: Flame,
  },
]

export default function ProductPage() {
  return (
    <div className="bg-background">
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to shop
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Gallery & Info */}
          <div className="lg:col-span-7 space-y-8">
            <ProductGallery />

            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Sniff &amp; Solve Tower
              </h1>
              <p className="text-lg text-muted-foreground">
                A tall modular puzzle tower designed to keep dogs busy and engrossed for hours.
              </p>

              <Separator />

              <PurchaseBar />

              <Separator className="my-6" />

              <h2 className="text-2xl font-bold text-foreground">What&apos;s inside</h2>
              <p className="text-muted-foreground max-w-2xl">
                Every level is a new challenge. Flaps, spinning parts and hidden compartments turn mealtime into a rewarding game.
              </p>

              <LevelTower levels={levels} />
            </div>
          </div>

          {/* Right Column: Features */}
          <div className="lg:col-span-5 space-y-6">
            <FeatureGrid features={features} />

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Why dogs love it</CardTitle>
                <CardDescription>
                  Turns every meal into a rewarding challenge that beats boredom.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Slows down fast eaters</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Mental stimulation for smart breeds</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Reduces destructive boredom behaviors</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">Suitable for all dog sizes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why it works section */}
        <section className="mt-20 lg:mt-24 border-t border-border pt-10 lg:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How it keeps dogs engaged</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The tower forces your dog to sniff, flip, spin and solve — coming back to the platform again and again.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {['Sniff', 'Solve', 'Repeat'].map((step, idx) => (
                <div key={step} className="text-center p-6 rounded-2xl bg-muted border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step === 'Sniff'
                      ? 'Treats are hidden behind flaps and in compartments.'
                      : step === 'Solve'
                      ? 'Your dog flips and spins parts to uncover rewards.'
                      : 'Every solved level earns a tasty treat.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/images/product-main.svg',
    '/images/product-side.svg',
    '/images/product-top.svg',
    '/images/product-details.svg',
  ]

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
        <img
          src={images[selectedImage]}
          alt="Sniff & Solve Tower"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.483 7.74 8.131 5 12 5c7.178 0 11.269 4.302 11.984 10.468A60.062 60.062 0 0016.832 16.1c-1.132 2.845-3.506 4.998-6.642 5.842a60.13 60.13 0 01-8.208-.944z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square bg-muted rounded-xl border-2 overflow-hidden ${
              selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50 transition-colors'
            }`}
          >
            <img src={img} alt={`Tower view ${idx + 1}`} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  )
}

function PurchaseBar() {
  const [qty, setQty] = useState(1)

  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-4">
        <span className="text-2xl font-bold text-foreground">$69.00</span>
        <span className="text-sm text-muted-foreground">Free shipping on orders over $50</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-input rounded-lg">
          <button
            onClick={() => setQty((p) => Math.max(1, p - 1))}
            className="flex w-10 h-10 items-center justify-center hover:bg-muted"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 text-sm font-medium text-foreground">{qty}</span>
          <button
            onClick={() => setQty((p) => p + 1)}
            className="flex w-10 h-10 items-center justify-center hover:bg-muted"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <Button size="lg" className="flex-1 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to cart
        </Button>
      </div>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <CheckCircle2 className="w-4 h-4" />
        <span>30-day money-back guarantee</span>
      </div>
    </div>
  )
}

type Level = {
  number: number
  title: string
  description: string
  icon: any
  color: string
  bg: string
}

type Feature = {
  title: string
  description: string
  icon: any
}

function LevelTower({ levels }: { levels: Level[] }) {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        {levels.map((level) => (
          <button
            key={level.number}
            onClick={() => setExpanded(expanded === level.number ? null : level.number)}
            className={`flex flex-col items-center gap-2 rounded-xl p-3 border transition-all ${
              expanded === level.number
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:border-primary/50 bg-muted/50 hover:bg-white'
            }`}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1">
              {level.number}
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                level.color
              } ${
                level.bg
              }`}
            >
              <level.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-foreground text-center leading-tight">
              {level.title}
            </span>
          </button>
        ))}
      </div>

      {expanded && (
        <Card className="border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg">{levels[expanded - 1].title}</CardTitle>
            <button
              onClick={() => setExpanded(null)}
              className="rounded-full p-1.5 hover:bg-muted"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{levels[expanded - 1].description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((feature, idx) => (
        <Card key={idx} className="border-border hover:border-primary/30 transition-colors p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <feature.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
