'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart, DEFAULT_PRODUCT } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import {
  Lock,
  ChevronRight,
  ShieldCheck,
  Truck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, total, clearCart } = useCart()

  // Ensure there is at least one item or fallback for testing
  const checkoutItems = items.length > 0 ? items : [{ ...DEFAULT_PRODUCT, quantity: 1 }]
  const currentSubtotal = items.length > 0 ? subtotal : 69.0
  const freeShipping = currentSubtotal >= 50

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: 'CA',
    zip: '',
    shippingMethod: 'free', // 'free' | 'priority'
    paymentMethod: 'card', // 'card' | 'apple_pay' | 'paypal'
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
    cardName: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const shippingCost = formData.shippingMethod === 'priority' ? 14.99 : freeShipping ? 0 : 7.99
  const taxCost = Number((currentSubtotal * 0.08).toFixed(2))
  const calculatedTotal = Number((currentSubtotal + shippingCost + taxCost).toFixed(2))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    // Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.zip) {
      setErrorMsg('Please complete all required shipping fields.')
      return
    }

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.cardExp || !formData.cardCvc) {
        setErrorMsg('Please enter your card details.')
        return
      }
    }

    setIsSubmitting(true)

    // Simulate payment authorization & order generation
    setTimeout(() => {
      const orderNumber = `SST-${Math.floor(100000 + Math.random() * 900000)}`
      const orderDetails = {
        orderNumber,
        items: checkoutItems,
        total: calculatedTotal,
        shippingCost,
        taxCost,
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
        email: formData.email,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      }

      try {
        localStorage.setItem('sniff_solve_last_order', JSON.stringify(orderDetails))
      } catch {
        // Fallback
      }

      clearCart()
      setIsSubmitting(false)
      router.push(`/order-confirmation?order=${orderNumber}`)
    }, 1200)
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Checkout Header */}
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <Link href="/cart" className="hover:text-blue-600 transition-colors">
                Cart
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-900 font-semibold">Secure Checkout</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Complete Your Order
            </h1>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted &amp; PCI-Compliant</span>
          </div>
        </div>

        {/* Main Grid: Form on Left (7 cols), Order Summary on Right (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Express Checkout Options */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-center">
                Express Checkout
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'apple_pay' }))}
                  className="h-12 bg-black hover:bg-slate-800 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span className="text-base font-bold">Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'paypal' }))}
                  className="h-12 bg-[#ffc439] hover:bg-[#f4bb33] text-slate-900 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span className="text-[#003087] font-black italic">Pay</span>
                  <span className="text-[#0079c1] font-black italic">Pal</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center pt-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-3 text-xs uppercase text-slate-400 font-semibold">
                  Or pay with card below
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handlePlaceOrder} className="space-y-8">
              
              {/* Section 1: Contact Information */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Contact Information</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (for delivery updates)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Shipping Address */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Shipping Address</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="123 Dogwood Lane"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Apartment / Suite
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      placeholder="Apt 4B"
                      value={formData.apartment}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Austin"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zip"
                      required
                      placeholder="78701"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Shipping Method */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Shipping Method</span>
                </h2>

                <div className="space-y-3">
                  <label
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      formData.shippingMethod === 'free'
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="free"
                        checked={formData.shippingMethod === 'free'}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-600 h-4 w-4"
                      />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">
                          Free Express Shipping (2–3 Business Days)
                        </span>
                        <span className="text-xs text-slate-500">
                          Tracked package delivered via FedEx / UPS
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">
                      {freeShipping ? 'FREE' : '$7.99'}
                    </span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      formData.shippingMethod === 'priority'
                        ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="priority"
                        checked={formData.shippingMethod === 'priority'}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-600 h-4 w-4"
                      />
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">
                          Priority Overnight Delivery (Next Business Day)
                        </span>
                        <span className="text-xs text-slate-500">
                          Guaranteed rush order dispatch within 6 hours
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-900">$14.99</span>
                  </label>
                </div>
              </div>

              {/* Section 4: Payment Information */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                      4
                    </span>
                    <span>Payment Information</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Encrypted</span>
                  </div>
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Card Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        required={formData.paymentMethod === 'card'}
                        placeholder="4242 •••• •••• 4242"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 pr-12"
                      />
                      <CreditCard className="w-5 h-5 text-slate-400 absolute right-3.5 top-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="cardExp"
                        required={formData.paymentMethod === 'card'}
                        placeholder="MM/YY"
                        value={formData.cardExp}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        CVV / CVC *
                      </label>
                      <input
                        type="text"
                        name="cardCvc"
                        required={formData.paymentMethod === 'card'}
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        placeholder="Jane Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Your payment information is tokenized and never stored on our servers.
                  </span>
                </div>
              </div>

              {/* Submit Order Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base h-14 rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Authorizing Payment...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${calculatedTotal.toFixed(2)} &amp; Place Order</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>

              <div className="text-center text-xs text-slate-500">
                By placing this order, you agree to our 30-day money back guarantee and terms of service.
              </div>

            </form>

          </div>

          {/* RIGHT: Order Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                Order Summary ({checkoutItems.length} {checkoutItems.length === 1 ? 'item' : 'items'})
              </h3>

              {/* Items List */}
              <div className="space-y-4">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">
                        {item.tierDescription || '4-Level Modular Set'}
                      </p>
                      <span className="text-xs font-semibold text-blue-600">
                        ${item.price.toFixed(2)} each
                      </span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ${currentSubtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {shippingCost === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-slate-600">
                  <span>Estimated Sales Tax</span>
                  <span className="font-semibold text-slate-900">
                    ${taxCost.toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-3 flex justify-between items-baseline font-bold">
                  <span className="text-base text-slate-900">Total</span>
                  <span className="text-2xl font-black text-blue-600">
                    ${calculatedTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Free 2–3 Day Delivery included</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>100% Non-Toxic Chew-Resistant Build</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
