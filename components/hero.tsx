import Link from 'next/link'
import { ArrowRight, PawPrint } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -translate-y-20 bg-brand-50 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-bark-100 rounded-full blur-2xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bark-50 text-bark-700 text-sm font-medium border border-bark-100">
              <PawPrint className="w-4 h-4" />
              <span>New: Treat-filled modular tower</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Keep your dog engaged<span className="text-brand-600"> for hours.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
              Introducing Sniff &amp; Solve Tower — a tall modular puzzle tower with flaps, spinning parts and hidden
              treats that challenges your dog and beats boredom, one level at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#" className="btn-primary flex items-center justify-center gap-2">
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary flex items-center justify-center gap-2">
                How It Works
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Free shipping on orders over $50</span>
              </div>
              <span className="h-4 w-px bg-gray-300" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="relative w-full h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                {/* Product tower representation */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-green-500/20" />

                {/* Tower levels */}
                <div className="absolute top-1/4 left-1/10 w-4/5 h-1/12 bg-gray-400 rounded-full opacity-50" />
                <div className="absolute top-2/5 left-1/10 w-4/5 h-1/12 bg-gray-400 rounded-full opacity-50" />
                <div className="absolute top-3/5 left-1/10 w-4/5 h-1/12 bg-gray-400 rounded-full opacity-50" />
                <div className="absolute bottom-1/6 left-1/10 w-4/5 h-1/12 bg-gray-400 rounded-full opacity-50" />

                {/* Treats */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full shadow-md animate-pulse-slow" />
                <div className="absolute top-3/5 left-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-md animate-pulse-slow" />
                <div className="absolute bottom-1/6 left-3/4 w-4 h-4 bg-yellow-400 rounded-full shadow-md animate-pulse-slow" />

                {/* Flaps */}
                <div className="absolute top-2/5 left-3/10 w-12 h-12 bg-gray-300 rounded-xl rotate-45 border-2 border-gray-400" />
                <div className="absolute top-3/5 left-6/10 w-12 h-12 bg-gray-300 rounded-xl rotate-45 border-2 border-gray-400" />

                {/* Spinning part */}
                <div className="absolute bottom-1/6 left-2/10 w-16 h-16 bg-gray-200 rounded-full border-4 border-gray-300" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center opacity-80">
              <PawPrint className="w-8 h-8 text-brand-500" />
            </div>
            <div className="absolute bottom-10 left-20 w-32 h-32 bg-bark-100 rounded-full flex items-center justify-center opacity-80">
              <PawPrint className="w-10 h-10 text-bark-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
