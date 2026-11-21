'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  quantity: number
  levelOption?: string
  tierDescription?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  shipping: number
  tax: number
  total: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const DEFAULT_PRODUCT: CartItem = {
  id: 'sniff-solve-tower',
  name: 'Sniff & Solve Tower',
  price: 69.0,
  originalPrice: 89.0,
  image: '/images/sniff-solve-tower-hero.jpg',
  quantity: 1,
  tierDescription: 'Complete 4-Level Modular Puzzle Set',
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sniff_solve_cart')
      if (saved) {
        setItems(JSON.parse(saved))
      }
    } catch {
      // Fallback
    }
    setMounted(true)
  }, [])

  // Save cart to localStorage on updates
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('sniff_solve_cart', JSON.stringify(items))
      } catch {
        // Fallback
      }
    }
  }, [items, mounted])

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { ...item, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  // Free shipping on orders over $50
  const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 7.99
  const tax = Number((subtotal * 0.08).toFixed(2))
  const total = Number((subtotal + shipping + tax).toFixed(2))

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
        shipping,
        tax,
        total,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { DEFAULT_PRODUCT }
