'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import SpecularButton from '@/components/specular-button'
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
  Layers2,
  Sliders,
  Check,
  Heart,
  Award,
  ChevronLeft,
} from 'lucide-react'

// 4 Gallery images
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

// The 4 Stacked Tiers for the Exploded Gallery & "What's Inside"
const productLevels = [
  {
    number: 1,
    name: 'Level 1: Apex Kibble Dispenser',
    tier: 'Top Tier',
    difficulty: 'Starter / Easy',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-400/40',
    ringColor: 'from-amber-400 to-amber-600',
    description:
      'A rotary top disc that turns with a light nose nudge. Specially molded scent vents release tempting kibble aromas that ignite curiosity instantly.',
    highlights: ['360° smooth rotary spin', 'Scent emission vents', 'Instant reward builds initial confidence'],
    layerHeight: 'h-14 sm:h-16',
    elevationOffset: 85,
    visualDetails: 'Rotary scent cap with 5 dispensing apertures & torque-calibrated spinner',
  },
  {
    number: 2,
    name: 'Level 2: Hidden Lift-Flap Chamber',
    tier: 'Upper Middle Tier',
    difficulty: 'Intermediate',
    icon: Target,
    color: 'text-cyan-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-400/40',
    ringColor: 'from-cyan-400 to-blue-500',
    description:
      'Four liftable weighted flaps conceal deep treat wells. Dogs use snout-booping or paw-tapping to flip the flaps and uncover delicious snacks.',
    highlights: ['Silicone-edged safety flaps', 'Holds dry kibble, jerky, or peanut butter', 'Strengthens paw motor dexterity'],
    layerHeight: 'h-16 sm:h-20',
    elevationOffset: 45,
    visualDetails: '4 independent weighted tactile lift-doors with food-safe silicone hinge seals',
  },
  {
    number: 3,
    name: 'Level 3: Spin-and-Seek Orbit Disc',
    tier: 'Lower Middle Tier',
    difficulty: 'Advanced Logic',
    icon: Flame,
    color: 'text-purple-600',
    bg: 'bg-purple-500/10',
    border: 'border-purple-400/40',
    ringColor: 'from-purple-400 to-indigo-600',
    description:
      'A dynamic rotating maze layer with sliding treat doors. Requires sequential paw manipulation to line up the hidden kibble compartments.',
    highlights: ['Multi-slot sliding tracks', 'Counter-rotational motion', 'Sustained focus for smart breeds'],
    layerHeight: 'h-16 sm:h-20',
    elevationOffset: 15,
    visualDetails: 'Concentric bi-directional track maze with dual slide-locks',
  },
  {
    number: 4,
    name: 'Level 4: Base Treasure Vault',
    tier: 'Foundation Jackpot',
    difficulty: 'Master Finale',
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-500/10',
    border: 'border-blue-400/40',
    ringColor: 'from-blue-500 to-indigo-700',
    description:
      'The jackpot finale! A large bottom chamber guarded by sliding locks, anchored to a heavy-duty, anti-tip silicone weighted base.',
    highlights: ['Jackpot prize storage', '8 non-skid rubber floor pads', 'Triumphant finish to puzzle session'],
    layerHeight: 'h-16 sm:h-20',
    elevationOffset: -20,
    visualDetails: 'High-capacity jackpot reward reservoir backed by 8 non-skid silicone grips',
  },
]

const productFeatures = [
  {
    icon: Layers,
    title: 'Modular Stackable Architecture',
    desc: 'Use 1 or 2 tiers for puppies or stack all 4 levels for experienced master puzzlers.',
    badge: 'Modular Engineering',
    colSpan: 'md:col-span-2 lg:col-span-2',
    accent: 'bg-blue-50/60 border-blue-200',
  },
  {
    icon: Clock,
    title: '10x Slower Eating Time',
    desc: 'Transforms 60-second food gulping into 25–35 minutes of calm, healthy foraging.',
    badge: 'Bloat Prevention',
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-amber-50/60 border-amber-200',
  },
  {
    icon: ShieldCheck,
    title: 'Chew-Resistant & Non-Toxic',
    desc: 'Heavy-gauge polypropylene certified BPA-free, lead-free, and phthalate-free.',
    badge: 'FDA Compliant',
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-emerald-50/60 border-emerald-200',
  },
  {
    icon: Dog,
    title: 'All Breeds & Sizes',
    desc: 'Ergonomic dimensions accommodate 8-lb toy breeds up to 100-lb large working breeds.',
    badge: 'Universal Fit',
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-purple-50/60 border-purple-200',
  },
  {
    icon: Sparkles,
    title: 'Dishwasher Safe Sanitation',
    desc: 'Twist-apart design allows complete top-rack dishwasher cleaning in 60 seconds.',
    badge: 'Hygienic Care',
    colSpan: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-cyan-50/60 border-cyan-200',
  },
  {
    icon: Target,
    title: 'Reduces Destructive Chewing',
    desc: 'Burns canine mental energy to curb shoe chewing, couch digging, and separation anxiety.',
    badge: 'Mental Calm',
    colSpan: 'md:col-span-2 lg:col-span-3',
    accent: 'bg-slate-50 border-slate-200',
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
    avatar: '🐕',
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
    avatar: '🐶',
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
    avatar: '🐾',
  },
  {
    name: 'Priya R. & Mochi',
    dog: 'Mochi (Shiba Inu, 2 yrs)',
    rating: 5,
    title: 'The only puzzle toy Mochi has not destroyed in 3 days',
    text: 'Shibas are notoriously clever and stubborn. Mochi has broken three so-called indestructible toys. The Sniff & Solve Tower is built differently. She is obsessed with the scent-hide drawer. We finally leave the house without guilt.',
    verified: true,
    tag: 'Master Puzzler',
    duration: 'Solo play: 55 mins',
    avatar: '🦊',
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
  const prefersReduced = useReducedMotion()

  // State
  const [galleryMode, setGalleryMode] = useState<'standard' | 'exploded'>('standard')
  const [selectedImg, setSelectedImg] = useState(0)
  const [explosionProgress, setExplosionProgress] = useState(70) // 0 to 100%
  const [qty, setQty] = useState(1)
  const [activeLevelTab, setActiveLevelTab] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isAddedToast, setIsAddedToast] = useState(false)
  const [isBursting, setIsBursting] = useState(false)
  const [isButtonAdded, setIsButtonAdded] = useState(false)

  // Dog Match Quiz State
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizStep, setQuizStep] = useState(1)
  const [quizAnswers, setQuizAnswers] = useState({
    size: 'medium',
    speed: 'gulp',
    experience: 'occasional',
  })

  // Mealtime Slider State
  const [mealSliderVal, setMealSliderVal] = useState(50) // 0 (bowl) to 100 (tower)

  // Reviews Carousel State
  const [reviewIdx, setReviewIdx] = useState(0)
  const [isReviewPaused, setIsReviewPaused] = useState(false)

  // Sticky Mobile Buy Bar visibility (hides near footer)
  const [showMobileBuyBar, setShowMobileBuyBar] = useState(true)

  // Spotlights for Bento Cards
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, cardIdx: -1 })

  // Autoplay for reviews carousel
  useEffect(() => {
    if (isReviewPaused) return
    const timer = setInterval(() => {
      setReviewIdx((prev) => (prev + 1) % productReviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isReviewPaused])

  // Hide sticky mobile buy bar when reaching near the footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('site-footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        if (rect.top <= window.innerHeight - 40) {
          setShowMobileBuyBar(false)
          return
        }
      }
      setShowMobileBuyBar(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kibble / Confetti micro-interaction on Add to Cart
  const handleAddToCart = (e?: React.MouseEvent) => {
    addItem(DEFAULT_PRODUCT, qty)
    setIsBursting(true)
    setIsButtonAdded(true)
    setIsAddedToast(true)

    setTimeout(() => setIsBursting(false), 1200)
    setTimeout(() => setIsButtonAdded(false), 2400)
    setTimeout(() => setIsAddedToast(false), 3500)
  }

  const handleBuyNow = () => {
    addItem(DEFAULT_PRODUCT, qty)
    router.push('/checkout')
  }

  // Quiz Recommendation Generator
  const getQuizResult = () => {
    const { size, speed, experience } = quizAnswers
    return {
      title: `${size.toUpperCase()} Dog Calibrated Enrichment Pack`,
      tierSetup: experience === 'master' ? 'All 4 Tiers (Full Difficulty Stack)' : 'Tiers 1 & 2 Progressive Starter',
      estMealtime: speed === 'gulp' ? '30–35 min (up from 45 sec)' : '25–30 min',
      rationale: `Configured with torque-calibrated rotary discs and high-friction anti-skid base suitable for ${size} breeds.`,
    }
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 pt-4 sm:pt-6">
      
      {/* ── Breadcrumb Navigation ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <nav className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/products" className="hover:text-blue-600 transition-colors">
            Interactive Puzzles
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-900 font-bold truncate">
            Sniff &amp; Solve Tower™
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* ══════════════════════════════════════════════════
              LEFT COLUMN: EXPLODED TOWER GALLERY (7 cols)
             ══════════════════════════════════════════════════ */}
          <div id="gallery" className="lg:col-span-7 space-y-4">
            
            {/* View Mode Switcher: Standard 3D vs Exploded Layer Inspection */}
            <div className="flex items-center justify-between p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-500 pl-3">Interactive Gallery:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setGalleryMode('standard')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    galleryMode === 'standard'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Assembled 3D View
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryMode('exploded')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    galleryMode === 'exploded'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Layers2 className="w-3.5 h-3.5" />
                  <span>Exploded Architecture</span>
                </button>
              </div>
            </div>

            {/* Main Stage Display Area */}
            <div className="relative aspect-square w-full rounded-3xl bg-white p-4 sm:p-6 border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group">
              
              {galleryMode === 'standard' ? (
                /* Standard Assembled 3D Gallery */
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    key={selectedImg}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    src={galleryImages[selectedImg].src}
                    alt={galleryImages[selectedImg].title}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>{galleryImages[selectedImg].title}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1 rounded-full">
                    {galleryImages[selectedImg].label}
                  </div>
                </div>
              ) : (
                /* ── 1. EXPLODED TOWER GALLERY (4 Stacked Interactive Layers) ── */
                <div className="relative w-full h-full flex flex-col justify-between py-2">
                  
                  {/* Top Layer Separation Slider Bar */}
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-blue-600" />
                      <span>Layer Separation Distance:</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={explosionProgress}
                        onChange={(e) => setExplosionProgress(Number(e.target.value))}
                        className="w-32 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        aria-label="Layer Separation Distance"
                      />
                      <span className="font-mono text-[11px] text-slate-500 font-bold w-9 text-right">
                        {explosionProgress}%
                      </span>
                    </div>
                  </div>

                  {/* 4 Exploded Stacked Tiers with Connection Wireframe */}
                  <div className="relative flex-1 flex flex-col justify-center items-center py-4 my-2">
                    
                    {/* Central Vertical Alignment Spine Wire */}
                    <div className="absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-300 to-slate-300 pointer-events-none opacity-50" />

                    <div className="w-full max-w-md space-y-3 relative z-10">
                      {productLevels.map((lvl) => {
                        const isSelected = activeLevelTab === lvl.number
                        const offsetPx = (lvl.elevationOffset * (explosionProgress / 100))

                        return (
                          <motion.div
                            key={lvl.number}
                            layout
                            style={{
                              transform: prefersReduced ? 'none' : `translateY(${offsetPx * 0.4}px)`,
                            }}
                            onClick={() => {
                              setActiveLevelTab(lvl.number)
                              const levelsEl = document.getElementById('levels')
                              if (levelsEl) levelsEl.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className={`relative cursor-pointer rounded-2xl border-2 p-3 transition-all duration-200 flex items-center justify-between ${
                              isSelected
                                ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-500/20 scale-[1.02]'
                                : 'bg-white hover:bg-slate-50 border-slate-200/90 shadow-2xs'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-10 h-10 rounded-xl ${lvl.bg} ${lvl.color} flex items-center justify-center shrink-0 border border-slate-200`}
                              >
                                <lvl.icon className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-100/70 px-2 py-0.2 rounded-full">
                                    Tier {lvl.number}
                                  </span>
                                  <span className="text-xs font-bold text-slate-900 truncate">
                                    {lvl.name}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                  {lvl.visualDetails}
                                </p>
                              </div>
                            </div>

                            <span className="text-[11px] font-bold text-blue-600 bg-white border border-slate-200 px-2 py-1 rounded-lg shrink-0 ml-2">
                              {isSelected ? 'Inspecting' : 'Inspect Tier →'}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    Click any exploded tier to sync with the detailed modular challenge specs below.
                  </p>
                </div>
              )}

            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setGalleryMode('standard')
                    setSelectedImg(idx)
                  }}
                  className={`aspect-square rounded-2xl bg-white p-2 border-2 transition-all flex flex-col items-center justify-center overflow-hidden ${
                    galleryMode === 'standard' && selectedImg === idx
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
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
                <Truck className="w-5 h-5 text-blue-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">Free Express</p>
                <p className="text-[10px] text-slate-500">Orders over ₹500</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
                <RotateCcw className="w-5 h-5 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">30-Day Trial</p>
                <p className="text-[10px] text-slate-500">100% money back</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-indigo-600 mx-auto" />
                <p className="text-xs font-bold text-slate-900">Food-Grade</p>
                <p className="text-[10px] text-slate-500">BPA-free &amp; safe</p>
              </div>
            </div>

            {/* ── 2. DOG MATCH QUIZ INLINE CARD ── */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white border border-blue-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    🐕
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Dog Enrichment Match Quiz
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      3 quick questions to personalize tier resistance &amp; feeding pace.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  Step {quizStep} of 3
                </span>
              </div>

              {quizStep === 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800 block">
                    1. What is your dog’s size / weight class?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'small', label: 'Toy / Small', sub: '8–25 lbs' },
                      { id: 'medium', label: 'Medium', sub: '26–55 lbs' },
                      { id: 'large', label: 'Large / Giant', sub: '56–100+ lbs' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, size: opt.id }))
                          setQuizStep(2)
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          quizAnswers.size === opt.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span className="text-xs font-bold block">{opt.label}</span>
                        <span className="text-[10px] opacity-80 block">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800 block">
                    2. How fast does your dog typically eat regular meals?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'gulp', label: 'Vacuum Gulp', sub: '< 60 seconds' },
                      { id: 'fast', label: 'Fast Eater', sub: '1–3 minutes' },
                      { id: 'moderate', label: 'Moderate', sub: '4+ minutes' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, speed: opt.id }))
                          setQuizStep(3)
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          quizAnswers.speed === opt.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span className="text-xs font-bold block">{opt.label}</span>
                        <span className="text-[10px] opacity-80 block">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-800 block">
                    3. What is their experience with interactive puzzle toys?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'beginner', label: 'First Timer', sub: 'New to puzzles' },
                      { id: 'occasional', label: 'Curious', sub: 'Solves basic toys' },
                      { id: 'master', label: 'Puzzle Master', sub: 'Solves in minutes' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setQuizAnswers((prev) => ({ ...prev, experience: opt.id }))
                          setQuizStep(4)
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          quizAnswers.experience === opt.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span className="text-xs font-bold block">{opt.label}</span>
                        <span className="text-[10px] opacity-80 block">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 4 && (
                <div className="p-3.5 rounded-2xl bg-white border border-blue-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Personalized Match Ready
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuizStep(1)}
                      className="text-[11px] text-blue-600 hover:underline font-semibold"
                    >
                      Restart Quiz
                    </button>
                  </div>
                  <h5 className="text-sm font-extrabold text-slate-900">
                    {getQuizResult().title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {getQuizResult().rationale} Expected slow-down: <strong>{getQuizResult().estMealtime}</strong>.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900">
                      ₹69.00 <span className="text-xs font-normal text-slate-400">/ Complete Set</span>
                    </span>
                    <Button
                      size="sm"
                      onClick={handleAddToCart}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 h-9 rounded-xl shadow-xs"
                    >
                      Add Matched Setup to Cart
                    </Button>
                  </div>
                </div>
              )}

              {quizStep < 4 && (
                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                  <span>Click an option to advance automatically.</span>
                  {quizStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setQuizStep((s) => s - 1)}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      ← Back
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT COLUMN: BUY BOX, PRICES, MICRO-BURST (5 cols)
             ══════════════════════════════════════════════════ */}
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
                <span className="text-3xl font-black text-slate-900">₹69.00</span>
                <span className="text-lg text-slate-400 line-through font-medium">₹89.00</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Save ₹20 (22% OFF)
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

            {/* ── 6. ADD-TO-CART WITH MICRO-INTERACTION (KIBBLE BURST) ── */}
            <div className="space-y-3 pt-2 relative">
              
              {/* Kibble / Star Burst Particle Effect */}
              {isBursting && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center z-50">
                  <motion.div
                    initial={{ opacity: 1, scale: 0.5, y: 0 }}
                    animate={{ opacity: 0, scale: 1.5, y: -40 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="flex gap-2 text-2xl"
                  >
                    <span>🦴</span>
                    <span>✨</span>
                    <span>🐕</span>
                    <span>✨</span>
                    <span>🦴</span>
                  </motion.div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-300 rounded-xl bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-12 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-l-xl transition-colors"
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
                    className="w-10 h-12 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-r-xl transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Animated Micro-interaction Button */}
                <Button
                  type="button"
                  size="lg"
                  onClick={handleAddToCart}
                  className={`flex-1 font-extrabold h-12 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md ${
                    isButtonAdded
                      ? 'bg-emerald-600 text-white shadow-emerald-500/25 scale-[0.98]'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:shadow-lg'
                  }`}
                >
                  {isButtonAdded ? (
                    <>
                      <Check className="w-5 h-5 animate-bounce" />
                      <span>Added to Pack!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart — ₹{(69 * qty).toFixed(2)}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Buy Now Instant Checkout Button with Specular Glow */}
              <SpecularButton
                size="md"
                radius={14}
                tint="#0f172a"
                tintOpacity={1}
                textColor="#ffffff"
                lineColor="#94a3b8"
                baseColor="#1e293b"
                intensity={1}
                followMouse
                proximity={180}
                onClick={handleBuyNow}
                className="w-full h-12 font-bold text-sm shadow-md"
              >
                <span>Buy Now with 1-Click Checkout</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </SpecularButton>

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

        {/* ══════════════════════════════════════════════════
            3. MEAL-TIME INTERACTIVE SLIDER (Bowl vs Tower)
           ══════════════════════════════════════════════════ */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-400/30 px-3 py-1 rounded-full">
                Veterinary Digestion Science
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Traditional Bowl vs. Sniff &amp; Solve Tower
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Drag the interactive slider to compare canine digestion pacing, gastric dilation risk, and post-meal calm.
              </p>
            </div>

            {/* Slider Control */}
            <div className="max-w-xl mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Traditional Food Bowl</span>
                <span>Sniff &amp; Solve Tower™</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mealSliderVal}
                onChange={(e) => setMealSliderVal(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 shadow-inner"
                aria-label="Compare Bowl vs Tower"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>45-Sec Vacuum Gulping</span>
                <span>28–35 Min Focused Foraging</span>
              </div>
            </div>

            {/* Comparison Visualizer Bars */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Bowl Stat Card */}
              <div
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  mealSliderVal < 50
                    ? 'bg-rose-950/20 border-rose-500/40 ring-2 ring-rose-500/10'
                    : 'bg-slate-800/40 border-slate-700/60 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Standard Food Bowl
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-300">0:45 mins</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '12%' }} />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Immediate gulping causes air swallowing (Aerophagia)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>High risk of canine bloat &amp; vomit regurgitation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Zero mental stimulation; dogs remain restless</span>
                  </li>
                </ul>
              </div>

              {/* Tower Stat Card */}
              <div
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  mealSliderVal >= 50
                    ? 'bg-blue-950/30 border-blue-400/40 ring-2 ring-blue-500/20'
                    : 'bg-slate-800/40 border-slate-700/60 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Sniff &amp; Solve Tower™
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-300">32:00 mins</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>10x slower eating preserves healthy gut digestion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Olfactory sniffing triggers calming serotonin release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Happily exhausted dogs nap peacefully for hours</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            1 (Cont'd). WHAT'S INSIDE THE 4 MODULAR LEVELS
           ══════════════════════════════════════════════════ */}
        <section id="levels" className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
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

          {/* Level Tabs with Framer Motion layoutId pill */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {productLevels.map((lvl) => {
              const isActive = activeLevelTab === lvl.number
              return (
                <button
                  key={lvl.number}
                  type="button"
                  onClick={() => setActiveLevelTab(lvl.number)}
                  className={`relative p-4 rounded-2xl border text-left transition-all ${
                    isActive
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

                  {isActive && (
                    <motion.div
                      layoutId="active-level-indicator"
                      className="absolute inset-0 rounded-2xl border-2 border-blue-600 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Active Level Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            {(() => {
              const current = productLevels.find((l) => l.number === activeLevelTab) || productLevels[0]
              return (
                <motion.div
                  key={current.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm grid md:grid-cols-12 gap-8 items-center"
                >
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
                </motion.div>
              )
            })()}
          </AnimatePresence>
        </section>

        {/* ══════════════════════════════════════════════════
            4. FEATURES: BENTO GRID WITH CURSOR SPOTLIGHT
           ══════════════════════════════════════════════════ */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineered For Health &amp; Engagement
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every curve, latch, and material was selected with canine longevity and safety in mind.
            </p>
          </div>

          {/* Varied Card Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productFeatures.map((f, i) => (
              <div
                key={i}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setSpotlightPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    cardIdx: i,
                  })
                }}
                onMouseLeave={() => setSpotlightPos({ x: 0, y: 0, cardIdx: -1 })}
                className={`relative overflow-hidden p-7 rounded-3xl bg-white border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${f.colSpan} ${f.accent}`}
              >
                {/* Mouse-following spotlight overlay */}
                {spotlightPos.cardIdx === i && (
                  <div
                    className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
                    style={{
                      background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(37, 99, 235, 0.08), transparent 80%)`,
                    }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full">
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Veterinary Standard</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            How It Works (Sniff -> Solve -> Repeat)
           ══════════════════════════════════════════════════ */}
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-black text-lg flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sniff</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aroma vents emit scents from kibble and treats hidden in all 4 tiers, directing canine curiosity and focus.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-black text-lg flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Solve</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paws and snouts manipulate flaps, rotary disks, and sliders, solving the physical puzzle tier by tier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-2xs">
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

        {/* ══════════════════════════════════════════════════
            5. REVIEWS: SWIPEABLE CAROUSEL WITH METRIC CHIPS
           ══════════════════════════════════════════════════ */}
        <section id="reviews" className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Customer Reviews (2,450+)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Swipe through verified transformations from satisfied pup parents.
            </p>
          </div>

          {/* Carousel Container */}
          <div
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            className="relative max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
              <AnimatePresence mode="wait">
                {(() => {
                  const rev = productReviews[reviewIdx]
                  return (
                    <motion.div
                      key={reviewIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl border border-amber-200">
                            {rev.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-extrabold text-slate-900">{rev.name}</h4>
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                Verified Buyer
                              </span>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">{rev.dog}</span>
                          </div>
                        </div>

                        {/* Metric Chip */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full shadow-2xs">
                            📊 {rev.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <blockquote className="space-y-2">
                        <h5 className="text-lg font-bold text-slate-900 leading-snug">
                          &ldquo;{rev.title}&rdquo;
                        </h5>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {rev.text}
                        </p>
                      </blockquote>
                    </motion.div>
                  )
                })()}
              </AnimatePresence>
            </div>

            {/* Navigation Dots and Controls */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button
                type="button"
                onClick={() => setReviewIdx((prev) => (prev - 1 + productReviews.length) % productReviews.length)}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {productReviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewIdx(i)}
                    className={`h-2 rounded-full transition-all ${
                      reviewIdx === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setReviewIdx((prev) => (prev + 1) % productReviews.length)}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-2xs"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION: Product FAQs
           ══════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════
          7. STICKY MOBILE BUY BAR (Price + CTA, hides near footer)
         ══════════════════════════════════════════════════ */}
      {showMobileBuyBar && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-3 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-slate-900 truncate">
              Sniff &amp; Solve Tower™
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black text-blue-600">₹69.00</span>
              <span className="text-xs text-slate-400 line-through">₹89.00</span>
            </div>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-5 h-10 rounded-xl shadow-md shrink-0 flex items-center gap-1.5"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </Button>
        </div>
      )}

    </div>
  )
}
