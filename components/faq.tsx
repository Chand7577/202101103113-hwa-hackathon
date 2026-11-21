const faqs = [
  {
    q: 'Is it safe for puppies?',
    a: 'Yes. The tower is made from chew-resistant, non-toxic materials and is suitable for dogs of all ages.',
  },
  {
    q: 'How do I clean it?',
    a: 'All levels detach easily and are dishwasher safe. Wipe down the base with a damp cloth.',
  },
  {
    q: 'What size dogs is it for?',
    a: 'The modular design works for small breeds up to large dogs. Adjust treat difficulty by level.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day money-back guarantee. If your dog doesn\'t love it, return it for a full refund.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card p-6">
              <button className="w-full flex items-center justify-between text-left">
                <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
