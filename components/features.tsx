import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PawPrint, ShieldCheck, Flame } from 'lucide-react'

const features = [
  {
    title: 'Multi-Level Puzzle',
    description: 'Different levels with flaps and spinning parts keep your dog guessing and engaged.',
    icon: PawPrint,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Hidden Treats',
    description: 'Secret compartments reward your dog\'s curiosity with tasty surprises.',
    icon: ShieldCheck,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Durable Build',
    description: 'Chew-resistant, non-toxic materials built for dogs of all sizes.',
    icon: Flame,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why dogs love it</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every level is a new challenge. Flaps, spinning parts and hidden treats turn mealtime into playtime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
