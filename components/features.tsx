import Link from 'next/link'

const features = [
  {
    title: 'Multi-Level Puzzle',
    description: 'Different levels with flaps and spinning parts keep your dog guessing.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'Hidden Treats',
    description: 'Hide treats in secret compartments for a rewarding challenge.',
    icon: 'M5 3v2M5 19v2M12 3v2M12 19v2M7 6h2M17 6h2M7 18h2M17 18h2',
  },
  {
    title: 'Durable Build',
    description: 'Chew-resistant materials designed for dogs of all sizes.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why dogs love it</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every level is a new challenge. Flaps, spinning parts and hidden treats turn mealtime into playtime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-200">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
