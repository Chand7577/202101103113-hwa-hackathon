'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Tag,
  CheckCircle2,
  Lock,
} from 'lucide-react'

export default function CartPage() {
  const router = useRouter()
  const {
    items,
    updateQuantity,
    removeItem,
    addItem,
    subtotal,
    shipping,
    tax,
    total,
    totalItems,
  } = useCart()

  const [promoCode, setPromoCode] = useState('')
  const [discountPercent, setDiscountPercent] = useState(0)
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null)

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = promoCode.trim().toUpperCase()
    if (clean === 'PUPPY10' || clean === 'SAVE10') {
      setDiscountPercent(10)
      setPromoMessage({ text: 'Promo code applied! 10% discount added.' })
    } else if (clean === 'FREE') {
      setDiscountPercent(15)
      setPromoMessage({ text: 'Special VIP promo applied! 15% discount added.' })
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try "PUPPY10"', error: true })
    }
  }

  const discountAmount = Number(((subtotal * discountPercent) / 100).toFixed(2))
  const finalTotal = Math.max(0, Number((total - discountAmount).toFixed(2)))

  const freeShippingThreshold = 50
  const freeShippingDiff = freeShippingThreshold - subtotal
  const freeShippingProgress = Math.min(100, Math.max(0, (subtotal / freeShippingThreshold) * 100))

  return (
    <div className="bg-slate-50/50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            <span>Shopping Cart</span>
            {totalItems > 0 && (
              <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            )}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review your order details before proceeding to our secure checkout.
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm space-y-6">
            <div className="w-20 h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10 opacity-40" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Your cart is empty</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Give your dog the mental exercise and slow-feeding enrichment they crave with the Sniff &amp; Solve Tower™.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
                <Link href="/products/sniff-solve-tower" className="flex items-center gap-2">
                  <span>Explore Sniff &amp; Solve Tower</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => addItem(DEFAULT_PRODUCT, 1)}
                className="border-slate-300 rounded-xl"
              >
                Quick Add 1 Tower (₹69)
              </Button>
            </div>
          </div>
        ) : (
          /* Populated Cart Grid */
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left: Cart Items (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Free Shipping Alert Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 mb-2">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    {subtotal >= freeShippingThreshold
                      ? '🎉 You unlocked Free Express Shipping!'
                      : `Add ₹${freeShippingDiff.toFixed(2)} more to qualify for Free Shipping`}
                  </span>
                  <span className="text-slate-500 font-bold">{Math.round(freeShippingProgress)}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items Table Card */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Item Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 leading-tight">
                            {item.name}
                          </h3>
                          {item.tierDescription && (
                            <p className="text-xs text-slate-500 mt-0.5">
                              {item.tierDescription}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-baseline gap-2 pt-1">
                        <span className="text-base font-extrabold text-blue-600">
                          ₹{item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{item.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          In Stock
                        </span>
                      </div>

                      {/* Quantity & Line Total */}
                      <div className="pt-3 flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white rounded-l-xl transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white rounded-r-xl transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-slate-400 block">Total</span>
                          <span className="text-base font-bold text-slate-900">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
                  <h4 className="text-xs font-bold text-slate-900">30-Day Money-Back</h4>
                  <p className="text-[11px] text-slate-500">100% risk-free return guarantee</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1">
                  <Truck className="w-5 h-5 text-blue-600 mx-auto" />
                  <h4 className="text-xs font-bold text-slate-900">Fast 2-3 Day Delivery</h4>
                  <p className="text-[11px] text-slate-500">Tracked shipment dispatched in 24h</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-1">
                  <Sparkles className="w-5 h-5 text-indigo-600 mx-auto" />
                  <h4 className="text-xs font-bold text-slate-900">Food-Grade Materials</h4>
                  <p className="text-[11px] text-slate-500">Non-toxic, FDA compliant polymers</p>
                </div>
              </div>

            </div>

            {/* Right: Order Summary (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Order Summary
                </h3>

                {/* Subtotals breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold text-slate-900">₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span>Shipping</span>
                      {shipping === 0 && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Free Over ₹500
                        </span>
                      )}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {shipping === 0 ? (
                        <span className="text-emerald-600">FREE</span>
                      ) : (
                        `₹${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Sales Tax</span>
                    <span className="font-semibold text-slate-900">₹{tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex justify-between items-baseline">
                    <div>
                      <span className="text-base font-bold text-slate-900">Total</span>
                      <span className="text-xs text-slate-400 block font-normal">INR (incl. tax)</span>
                    </div>
                    <span className="text-2xl font-black text-blue-600">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-blue-600" />
                    <span>Have a promo code? (Try PUPPY10)</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. PUPPY10"
                      className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium uppercase text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <Button type="submit" variant="outline" size="sm" className="rounded-xl text-xs font-bold">
                      Apply
                    </Button>
                  </div>
                  {promoMessage && (
                    <p className={`text-[11px] font-semibold ${promoMessage.error ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {promoMessage.text}
                    </p>
                  )}
                </form>

                {/* Checkout CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all"
                >
                  <Link href="/checkout" className="flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                {/* Trust guarantee note */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  )
}
