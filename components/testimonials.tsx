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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Happy dogs, happy owners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what other pet parents are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card p-8">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill={star <= t.rating ? 'currentColor' : 'currentColor'} opacity={star <= t.rating ? 1 : 0.2} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.523.668l3.152.177a1 1 0 011.314 1.314l.177 3.152a1 1 0 001.523.668l1.07-3.292a1 1 0 01.066-1.832l-3.152-.177a1 1 0 00-1.314 1.314l-.177 3.152a1 1 0 001.523.668l1.07-3.292c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.523.668l3.152.177a1 1 0 011.314 1.314l.177 3.152a1 1 0 001.523.668l1.07-3.292a1 1 0 01.066-1.832l-3.152-.177a1 1 0 00-1.314 1.314l-.177 3.152a1 1 0 001.523.668l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.dog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
