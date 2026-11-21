import Link from 'next/link'
import { ArrowRight, PawPrint, Zap, Flame, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/3" />
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>New modular puzzle tower</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Make every meal an{' '}
              <span className="text-primary">adventure.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Introducing Sniff &amp; Solve Tower — a tall modular puzzle tower with flaps, spinning parts and hidden
              treats that challenges your dog and beats boredom, one level at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="#" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg">
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#how-it-works" className="px-8 py-4 text-lg rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all">
                How It Works
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Chew-resistant &amp; non-toxic</span>
              </div>
              <div className="h-5 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Free shipping over $50</span>
              </div>
              <div className="h-5 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" />
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-b from-secondary to-secondary/50">
                {/* Abstract tower representation */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5" />

                {/* Level dividers */}
                <div className="absolute top-1/4 left-1/8 right-1/8 h-[1px] bg-border/40" />
                <div className="absolute top-2/5 left-1/8 right-1/8 h-[1px] bg-border/40" />
                <div className="absolute top-3/5 left-1/8 right-1/8 h-[1px] bg-border/40" />
                <div className="absolute bottom-1/6 left-1/8 right-1/8 h-[1px] bg-border/40" />

                {/* Treat hints */}
                <div className="absolute top-1/5 left-1/4 w-3 h-3 bg-yellow-400 rounded-full shadow-md ring-1 ring-yellow-500/20 animate-pulse-slow" />
                <div className="absolute top-3/5 left-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-md ring-1 ring-yellow-500/20 animate-pulse-slow" />
                <div className="absolute bottom-1/5 left-3/4 w-3 h-3 bg-yellow-400 rounded-full shadow-md ring-1 ring-yellow-500/20 animate-pulse-slow" />

                {/* Flaps */}
                <div className="absolute top-2/5 left-2/5 w-14 h-14 bg-secondary rounded-xl rotate-45 border border-border shadow-sm" />
                <div className="absolute top-3/5 left-4/5 w-14 h-14 bg-secondary rounded-xl rotate-45 border border-border shadow-sm" />

                {/* Spinner */}
                <div className="absolute bottom-1/5 left-1/5 w-18 h-18 bg-secondary rounded-full border-2 border-border/60 animate-spin-slow" />
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <PawPrint className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute bottom-10 left-20 w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <PawPrint className="w-8 h-8 text-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
