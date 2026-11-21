'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import {
  ChevronRight,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Zap,
  Target,
  Flame,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  Clock,
  Layers,
  Dog,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'

const galleryImages = [
  {
    src: '/images/sniff-solve-tower-hero.jpg',
    title: 'Full Tower Stack',
    label: 'All 4 modular challenge tiers assembled',
  },
  {
    src: '/images/product-side.svg',
    title: 'Architectural Elevation',
    label: '16.5" height with interlocking twist rings',
  },
  {
    src: '/images/product-top.svg',
    title: 'Aerial 360° View',
    label: 'Concentric rotary disc & scent channels',
  },
  {
    src: '/images/product-details.svg',
    title: 'Safety & Materials',
    label: 'Food-grade BPA-free chew-resistant polymer',
  },
]

const productLevels = [
  {
    number: 1,
    name: 'Level 1: Apex Kibble Dispenser',
    tier: 'Top Tier',
    difficulty: 'Starter / Easy',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    description:
      'A rotary top disc that turns with a light nose nudge. Specially molded scent vents release tempting kibble aromas that ignite curiosity instantly.',
    highlights: ['360° smooth rotary spin', 'Scent emission vents', 'Instant reward builds initial confidence'],
  },
  {
    number: 2,
    name: 'Level 2: Hidden Lift-Flap Chamber',
    tier: 'Upper Middle Tier',
    difficulty: 'Intermediate',
    icon: Target,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    description:
      'Four liftable weighted flaps conceal deep treat wells. Dogs use snout-booping or paw-tapping to flip the flaps and uncover delicious snacks.',
    highlights: ['Silicone-edged safety flaps', 'Holds dry kibble, jerky, or peanut butter', 'Strengthens paw motor dexterity'],
  },
  {
    number: 3,
    name: 'Level 3: Spin-and-Seek Orbit Disc',
    tier: 'Lower Middle Tier',
    difficulty: 'Advanced Logic',
    icon: Flame,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    description:
      'A dynamic rotating maze layer with sliding treat doors. Requires sequential paw manipulation to line up the hidden kibble compartments.',
    highlights: ['Multi-slot sliding tracks', 'Counter-rotational motion', 'Sustained focus for smart breeds'],
  },
  {
    number: 4,
    name: 'Level 4: Base Treasure Vault',
    tier: 'Foundation Jackpot',
    difficulty: 'Master Finale',
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    description:
      'The jackpot finale! A large bottom chamber guarded by sliding locks, anchored to a heavy-duty, anti-tip silicone weighted base.',
    highlights: ['Jackpot prize storage', '8 non-skid rubber floor pads', 'Triumphant finish to puzzle session'],
  },
]

const productFeatures = [
  {
    icon: Layers,
    title: 'Modular Stackable Architecture',
    desc: 'Use 1 or 2 tiers for puppies or stack all 4 levels for experienced master puzzlers.',
  },
  {
    icon: Clock,
    title: '10x Slower Eating Time',
    desc: 'Transforms 60-second food gulping into 25–35 minutes of calm, healthy foraging.',
  },
  {
    icon: ShieldCheck,
    title: 'Chew-Resistant & Non-Toxic',
    desc: 'Heavy-gauge polypropylene certified BPA-free, lead-free, and phthalate-free.',
  },
  {
    icon: Dog,
    title: 'All Breeds & Sizes',
    desc: 'Ergonomic dimensions accommodate 8-lb toy breeds up to 100-lb large working breeds.',
  },
  {
    icon: Sparkles,
    title: 'Dishwasher Safe Sanitation',
    desc: 'Twist-apart design allows complete top-rack dishwasher cleaning in 60 seconds.',
  },
  {
    icon: Target,
    title: 'Reduces Destructive Chewing',
    desc: 'Burns canine mental energy to curb shoe chewing, couch digging, and separation anxiety.',
  },
]

const productReviews = [
  {
    name: 'Sarah M. & Luna',
    dog: 'Luna (Golden Retriever, 3 yrs)',
    rating: 5,
    title: 'From 90-second vacuum eating to 30 minutes of calm fun!',
    text: 'Luna used to inhale her kibble so fast she would cough and throw up. We tried slow feeder bowls, but she outsmarted them in a day. The Sniff & Solve Tower completely changed our mornings. She methodically works through every level with her nose and paws. She is totally relaxed afterward!',
    verified: true,
    tag: 'Fast Eater Solved',
    duration: 'Mealtime: 32 mins',
  },
  {
    name: 'Marcus T. & Cooper',
    dog: 'Cooper (Australian Shepherd, 2 yrs)',
    rating: 5,
    title: 'Finally something that tires out an Aussie’s brain!',
    text: 'High-energy herding dogs are notorious for getting destructive when bored. Cooper used to chew chair legs while I took Zoom calls. 20 minutes with the 4-level tower burns as much energy as a long run. The chew-resistant polymer is surprisingly tough. Worth every single penny.',
    verified: true,
    tag: 'Separation Anxiety',
    duration: 'Boredom chewing: 0%',
  },
  {
    name: 'Elena & David K.',
    dog: 'Barnaby (French Bulldog, 4 yrs)',
    rating: 5,
    title: 'Perfect size and the non-slip base is incredible',
    text: 'I was worried Barnaby would push the tower over because he is clumsy and strong. But the weighted base and rubber grip pads keep it glued to our hardwood floor! He loves the flap level and spins the top wheel like a pro. Cleaning is super fast—we just pop the tiers in the top rack of the dishwasher.',
    verified: true,
    tag: 'Dishwasher Safe',
    duration: 'Verified Buyer',
  },
]

const productFaqs = [
  {
    q: 'Can an aggressive chewer destroy the Sniff & Solve Tower?',
    a: 'The tower is molded from ultra-high-density, food-grade polypropylene engineered specifically for canine puzzle toys. While no dog toy is 100% indestructible if left unattended as a chew bone, the rounded contours and recessed moving parts prevent dogs from catching teeth on outer edges.',
  },
  {
    q: 'What dog sizes and breeds is the tower suitable for?',
    a: 'The modular dimensions (16.5" total stack height with an 11" diameter base) make it suitable for dogs ranging from 8-lb toy breeds up to 100-lb giant breeds. You can adjust the difficulty and stack only 1 or 2 levels for smaller pups or use all 4 tiers for larger dogs.',
  },
  {
    q: 'How does it slow down fast eaters and prevent bloat?',
    a: 'The Sniff & Solve Tower distributes kibble across 4 distinct levels with spinning barriers, lift flaps, and vault sliders, forcing your dog to eat 3–5 pieces at a time. This extends mealtime to 20–35 minutes, greatly lowering the risk of bloat and choking.',
  },
  {
    q: 'How do I clean and sanitize the tower?',
    a: 'All 4 modular tiers quickly twist apart in seconds. Each level is top-rack dishwasher safe for easy sanitizing, or you can rinse them with warm soapy water.',
  },
]

export default function ProductDetailPage() {
  const router = useRouter()
  const { addItem, setIsCartOpen } = useCart()
  const [selectedImg, setSelectedImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [activeLevelTab, setActiveLevelTab] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isAddedToast, setIsAddedToast] = useState(false)

  const handleAddToCart = () => {
    addItem(DEFAULT_PRODUCT, qty)
    setIsAddedToast(true)
    setTimeout(() => setIsAddedToast(false), 3000)
  }

  const handleBuyNow = () => {
    addItem(DEFAULT_PRODUCT, qty)
    router.push('/checkout')
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-28">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-blue-600 transition-colors">
              Interactive Puzzles
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">
              Sniff &amp; Solve Tower™
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* LEFT: Product Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-3xl bg-white p-4 border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center group">
              <img
                src={galleryImages[selectedImg].src}
                alt={galleryImages[selectedImg].title}
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.02]"
              />

              {/* Floating badges on image */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{galleryImages[selectedImg].title}</span>
              </div>

              <div className="absolute bottom-5 left-5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full">
                {galleryImages[selectedImg].label}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImg(idx)}
                  className={`aspect-square rounded-2xl bg-white p-2 border-2 transition-all flex flex-col items-center justify-center overflow-hidden ${
                    selectedImg === idx
                      ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                <Truck className="w-5 h-5 text-blue-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">Free Shipping</p>
                <p className="text-[10px] text-slate-500">Orders over $50</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                <RotateCcw className="w-5 h-5 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">30-Day Trial</p>
                <p className="text-[10px] text-slate-500">100% money back</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">Food-Grade</p>
                <p className="text-[10px] text-slate-500">BPA-free &amp; safe</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Product Buy Box & Details (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header / Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Veterinarian Approved
                </span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                  In Stock &amp; Ready to Ship
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sniff &amp; Solve Tower™
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Modular 4-Tier Interactive Canine Puzzle &amp; Slow Feeder
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-800">4.9</span>
                <span className="text-slate-400">•</span>
                <a href="#reviews" className="text-xs text-blue-600 font-semibold hover:underline">
                  2,450 Verified Reviews
                </a>
              </div>
            </div>

            {/* Price Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1.5">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-slate-900">$69.00</span>
                <span className="text-lg text-slate-400 line-through font-medium">$89.00</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Save $20 (22% OFF)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                <strong>Free Express Delivery:</strong> Estimated arrival in 2–3 business days.
              </p>
            </div>

            {/* Short Benefit Copy */}
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed to cure canine boredom and stop dangerous meal gulping. The Sniff &amp; Solve Tower combines 4 modular tiers featuring rotary kibble dispensers, tactile lift flaps, concentric sliders, and a grand finale treat vault.
            </p>

            {/* What's Included Bullet Checklist */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="font-bold text-slate-900">What&apos;s Included In The Box:</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Apex Scent Rotary Top</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>4-Chamber Lift Flaps</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Spin-and-Seek Orbit Tier</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Weighted Anti-Tip Base Vault</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-300 rounded-xl bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-11 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-l-xl transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-slate-900">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-10 h-11 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-r-xl transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  type="button"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart — ${(69 * qty).toFixed(2)}</span>
                </Button>
              </div>

              {/* Buy Now Instant Checkout Button */}
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleBuyNow}
                className="w-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white font-bold h-11 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Buy Now with 1-Click Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              {isAddedToast && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-in fade-in duration-200">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Added to cart! Total: {qty} {qty === 1 ? 'tower' : 'towers'}
                  </span>
                  <Link href="/checkout" className="underline font-bold text-emerald-900">
                    Checkout Now →
                  </Link>
                </div>
              )}
            </div>

            {/* Reassurance text */}
            <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span><strong>Risk-Free Trial:</strong> 30 days to test. If your dog doesn&apos;t love it, full refund.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span><strong>Sanitization:</strong> 100% Top-rack dishwasher safe for effortless cleaning.</span>
              </div>
            </div>

          </div>

        </div>

        {/* SECTION: The 4-Level Tower Breakdown (What's Inside) */}
        <section id="levels" className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Modular Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              What&apos;s Inside The 4 Levels
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every level offers a completely distinct challenge mechanism. Dogs can play individual levels or stack them into one towering puzzle.
            </p>
          </div>

          {/* Level Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {productLevels.map((lvl) => (
              <button
                key={lvl.number}
                type="button"
                onClick={() => setActiveLevelTab(lvl.number)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeLevelTab === lvl.number
                    ? 'border-blue-600 bg-blue-50/80 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400">Level 0{lvl.number}</span>
                  <lvl.icon className={`w-4 h-4 ${lvl.color}`} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{lvl.tier}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{lvl.difficulty}</p>
              </button>
            ))}
          </div>

          {/* Active Level Card */}
          {(() => {
            const current = productLevels.find((l) => l.number === activeLevelTab) || productLevels[0]
            return (
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-4 shadow-inner">
                    <current.icon className={`w-12 h-12 ${current.color}`} />
                    <span className="text-xs font-bold text-slate-700 mt-2">Tier {current.number}</span>
                  </div>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {current.difficulty}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{current.tier}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{current.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{current.description}</p>
                  <ul className="grid sm:grid-cols-3 gap-2 pt-2">
                    {current.highlights.map((h, i) => (
                      <li key={i} className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })()}
        </section>

        {/* SECTION: 6 Key Features Grid */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineered For Health &amp; Engagement
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every curve, latch, and material was selected with canine longevity and safety in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{f.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: How It Works (Sniff -> Solve -> Repeat) */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The 3-Step Engagement Loop
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How the tower engages your dog&apos;s natural scent-tracking neurology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-black text-lg flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sniff</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aroma vents emit scents from kibble and treats hidden in all 4 tiers, directing canine curiosity and focus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-black text-lg flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Solve</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paws and snouts manipulate flaps, rotary disks, and sliders, solving the physical puzzle tier by tier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 font-black text-lg flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Repeat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Controlled treat pacing triggers dopamine rewards, resulting in a satisfied, calm, and happily tired dog.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Customer Reviews */}
        <section id="reviews" className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Customer Reviews (2,450+)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              See how the Sniff &amp; Solve Tower transformed mealtime for other dogs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {productReviews.map((r, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    &ldquo;{r.title}&rdquo;
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {r.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{r.name}</span>
                    <span className="text-[11px] text-slate-500">{r.dog}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {r.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Product FAQs */}
        <section id="faq" className="mt-20 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {productFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
