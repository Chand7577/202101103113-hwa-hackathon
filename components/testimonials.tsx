import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Sarah M.',
    dog: 'Luna, Golden Retriever',
    text: 'Luna used to eat in 2 minutes. Now she spends 30 minutes solving the tower. Best purchase ever!',
    rating: 5,
  },
  {
    name: 'Mike R.',
    dog: 'Max, Border Collie',
    text: 'Highly intelligent dogs need mental stimulation. This tower keeps Max occupied while I work from home.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    dog: 'Buddy, Beagle',
    text: 'The hidden treats are genius. Buddy comes back to the tower all day long.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Happy dogs, happy owners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what other pet parents are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="p-8 border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 fill-current"
                    fill={star <= t.rating ? 'currentColor' : '#e5e7eb'}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.523.668l3.152.177a1 1 0 011.314 1.314l.177 3.152a1 1 0 001.523.668l1.07-3.292a1 1 0 01.066-1.832l-3.152-.177a1 1 0 00-1.314 1.314l-.177 3.152a1 1 0 001.523.668l1.07-3.292c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.523.668l3.152.177a1 1 0 011.314 1.314l.177 3.152a1 1 0 001.523.668l1.07-3.292a1 1 0 01.066-1.832l-3.152-.177a1 1 0 00-1.314 1.314l-.177 3.152a1 1 0 001.523.668l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{t.text}"</p>
              <CardHeader className="pb-0">
                <CardTitle className="text-sm">{t.name}</CardTitle>
                <CardDescription>{t.dog}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
