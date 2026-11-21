'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Printer,
  ShoppingBag,
  Clock,
  Heart,
} from 'lucide-react'

interface SavedOrder {
  orderNumber: string
  items: Array<{
    id: string
    name: string
    price: number
    image: string
    quantity: number
  }>
  total: number
  shippingCost: number
  taxCost: number
  shippingAddress: {
    name: string
    address: string
    apartment?: string
    city: string
    state: string
    zip: string
  }
  email: string
  date: string
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderParam = searchParams.get('order') || 'SST-849201'

  const [order, setOrder] = useState<SavedOrder | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sniff_solve_last_order')
      if (saved) {
        setOrder(JSON.parse(saved))
      }
    } catch {
      // Fallback
    }
  }, [])

  // Calculate estimated delivery: 3 days from now
  const estDeliveryDate = new Date()
  estDeliveryDate.setDate(estDeliveryDate.getDate() + 3)
  const estDeliveryStr = estDeliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
          
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10 animate-in zoom-in-75 duration-300">
            <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              Order Confirmed &amp; Payment Successful
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Thank You for Your Order!
            </h1>
            <p className="text-base text-slate-600 max-w-lg mx-auto">
              Your pup is going to love the Sniff &amp; Solve Tower™. We have received your order and our team is preparing it for dispatch.
            </p>
          </div>

          {/* Order Reference Pill */}
          <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-sm">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Order Number</span>
              <span className="font-extrabold text-slate-900 font-mono text-base">
                {order?.orderNumber || orderParam}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-xs text-slate-400 block font-medium">Estimated Delivery</span>
              <span className="font-bold text-blue-600">{estDeliveryStr}</span>
            </div>
          </div>

          {/* What happens next steps */}
          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
              What Happens Next:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  01
                </div>
                <h4 className="text-sm font-bold text-slate-900">Order Dispatched</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We pack each 4-tier puzzle tower with precision safety seals within 24 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  02
                </div>
                <h4 className="text-sm font-bold text-slate-900">Live GPS Tracking</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  You’ll receive a FedEx/UPS tracking link via email as soon as it leaves the warehouse.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
                  03
                </div>
                <h4 className="text-sm font-bold text-slate-900">Enrichment Time!</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Unbox, load your dog’s favorite kibble or treats, and enjoy 30+ minutes of quiet focus.
                </p>
              </div>
            </div>
          </div>

          {/* Order Details Breakdown */}
          {order && (
            <div className="pt-6 border-t border-slate-100 text-left space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Order Summary</h3>

              <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
                {order.items.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between gap-4 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="p-4 bg-white space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-slate-900">
                      {order.shippingCost === 0 ? 'FREE' : `$${order.shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span className="font-semibold text-slate-900">${order.taxCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-slate-900 pt-2 border-t border-slate-100">
                    <span>Total Paid</span>
                    <span className="text-blue-600">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              {order.shippingAddress && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-slate-900 block">Delivering To:</span>
                  <p>{order.shippingAddress.name}</p>
                  <p>
                    {order.shippingAddress.address}
                    {order.shippingAddress.apartment && ` ${order.shippingAddress.apartment}`}
                  </p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl"
            >
              <Link href="/" className="flex items-center gap-2">
                <span>Back to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => window.print()}
              className="w-full sm:w-auto border-slate-300 rounded-xl flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Receipt</span>
            </Button>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-2">
            <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
            <span>Protected by our 30-Day Money-Back Guarantee</span>
          </div>

        </div>

      </div>
    </div>
  )
}
