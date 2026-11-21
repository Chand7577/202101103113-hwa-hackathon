import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Sniff &amp; Solve</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              The tall modular puzzle tower that keeps your dog engaged for hours with flaps, spinning parts and hidden treats.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Sniff & Solve Tower</Link></li>
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Refill Packs</Link></li>
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Shipping</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get tips and new product updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-500"
              />
              <button type="submit" className="px-4 py-2 bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Sniff & Solve. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 3.587 5.785 6.213 9.881 6.213 1.216 0 2.4-.08 3.558-.243-.2.95-.764 1.7-1.548 1.7 1.246 0 2.399-.536 3.221-1.392.661 1.364-1.113 2.498-2.604 2.498-.677 0-1.32-.184-1.95-.564-.838-.838-1.343-2.003-1.343-3.196 0-.244.033-.485.082-.729a9 9 0 00-.237-2.36c0-.734.124-1.458.344-2.144a10 10 0 00-1.532-1.344c-.415-.491-.863-.952-1.31-1.406z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.301 3.495.998.108-.776.417-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.247c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 6c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V6zm-2 0l-5 5V8h-3V6l5 5zm-4 0v3l-5-5 5-5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
