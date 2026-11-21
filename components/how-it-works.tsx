import Link from 'next/link'
import { ArrowRight, PawPrint } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Load the tower',
    description: 'Fill each level with your dog\'s favorite treats or kibble.',
  },
  {
    number: '02',
    title: 'Set it down',
    description: 'Place the tower on the floor and let your dog investigate.',
  },
  {
    number: '03',
    title: 'Watch them solve',
    description: 'Your dog flips, spins and sniffs their way to treats.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Simple to use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three steps to a happier, more engaged pup.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting lines between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -z-10">
            <div className="h-[1px] w-full bg-border mx-auto max-w-[calc(100%-4rem)]" />
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              <div className={`mx-auto mb-8 relative z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20 border border-primary/30`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
