'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '@/data/products.data';

export type CartItem = Product & {
    quantity: number
}

type CartContextType = {
    items: CartItem[]
    addItem: (product: Product) => void
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    removeProduct: (id: number) => void
    getItemQty: (id: number) => number
    totalPrice: number
    clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = 'forja-cart'

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([])
    /* =========================
        Inicializar desde localStorage
    ========================= */
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) {
                setItems(JSON.parse(stored))
            }
        } catch (error) {
            console.error('Error leyendo carrito:', error)
        }
    }, [])
  /* =========================
     Persistir en localStorage
     ========================= */
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])
  /* =========================
     Métodos públicos
     ========================= */
    const addItem = (product: Product) => {
        setItems(prev => {
            const existing = prev.find(p => p.id === product.id)

            if (existing) {
                return prev.map(p =>
                p.id === product.id
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
                )
            }

            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const increaseQty = (id: number) => {
        setItems(prev => prev.map(p => p.id === id ? {...p, quantity: p.quantity + 1} : p))
    }

    const decreaseQty = (id: number) => {
        setItems(prev => prev.map(p => p.id === id ? {...p, quantity: Math.max(1, p.quantity - 1)} : p))
    }

    const removeProduct = (id: number) => {
        setItems(prev => prev.filter(p => p.id !== id))
    }


    const getItemQty = (id: number) => {
        return items.find(p => p.id === id)?.quantity ?? 0
    }

    const clearCart = () => {
        setItems([])
        localStorage.removeItem(STORAGE_KEY)
    }

    const totalPrice = items.reduce((acc, p) => acc + p.price * p.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                increaseQty,
                decreaseQty,
                removeProduct,
                getItemQty,
                totalPrice,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error('useCart must be used inside CartProvider')
    }
    return ctx
}
