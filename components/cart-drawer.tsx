'use client'

import React from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
} from 'lucide-react'

export default function CartDrawer() {
  const {
    items,
    updateQuantity,
    removeItem,
    totalItems,
    subtotal,
    shipping,
    total,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  if (!isCartOpen) return null

  const freeShippingThreshold = 50
  const freeShippingDiff = freeShippingThreshold - subtotal
  const freeShippingProgress = Math.min(100, Math.max(0, (subtotal / freeShippingThreshold) * 100))

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-background shadow-2xl flex flex-col h-full z-10 border-l border-border animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Your Cart</h2>
            <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-3 bg-muted/50 border-b border-border">
          <div className="flex items-center justify-between text-xs font-medium mb-1.5">
            <span className="flex items-center gap-1.5 text-foreground">
              <Truck className="w-3.5 h-3.5 text-primary" />
              {subtotal >= freeShippingThreshold
                ? '🎉 You unlocked Free Express Shipping!'
                : `Add ₹${freeShippingDiff.toFixed(2)} more for FREE shipping`}
            </span>
            <span className="text-muted-foreground">{Math.round(freeShippingProgress)}%</span>
          </div>
          <div className="w-full bg-border h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-base font-medium text-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Ready to challenge your dog? Add the Sniff &amp; Solve Tower to get started.
              </p>
              <Button
                onClick={() => setIsCartOpen(false)}
                asChild
                className="mt-2"
              >
                <Link href="/products/sniff-solve-tower">Explore Sniff &amp; Solve</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
              >
                <div className="w-20 h-20 rounded-lg bg-muted flex-shrink-0 overflow-hidden border border-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-foreground leading-tight">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {item.tierDescription && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.tierDescription}
                      </p>
                    )}
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-sm font-bold text-primary">
                        ₹{item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-lg bg-background">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors rounded-l-lg"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors rounded-r-lg"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4 bg-muted/30">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium text-foreground">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-medium text-foreground">
                  {shipping === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    `₹${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-bold text-base text-foreground">
                <span>Total</span>
                <span className="text-primary">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                asChild
                size="lg"
                className="w-full font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all"
                onClick={() => setIsCartOpen(false)}
              >
                <Link href="/checkout" className="flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => setIsCartOpen(false)}
              >
                <Link href="/cart">View Full Cart Details</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                30-day money-back guarantee
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
