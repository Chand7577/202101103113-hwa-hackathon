import Link from 'next/link'

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
    description: 'Watch your dog flip, spin and sniff their way to treats.'
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple to use</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three steps to a happier, more engaged pup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
