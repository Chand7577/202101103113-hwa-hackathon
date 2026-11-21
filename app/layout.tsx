import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { CartProvider } from '@/lib/cart-context'
import CartDrawer from '@/components/cart-drawer'
import SmoothScroll from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: 'Sniff & Solve Tower™ | Premium Modular Dog Puzzle Tower',
  description:
    'The 4-tier modular dog puzzle tower designed to beat boredom, slow down fast eaters, and provide hours of mental stimulation with interactive flaps, spinners, and hidden treats.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50/50 text-slate-900">
        <SmoothScroll>
          <CartProvider>
            <Navbar />
            <main className="flex-grow pt-24">{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
