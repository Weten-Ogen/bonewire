"use client"
import { product } from '@/types/next'
import  { create } from 'zustand'

interface cartstoreprops {
    cart: [] | product[],
    cost : number,
    count : number,
    addItemToCart: (product:product) => void,
    removeItemFromCart: (productId:string) => void,
    
}

export const UseCartStore = create<cartstoreprops>((set) => ({
 cart : [],
 cost : 0,
 count: 0,
 addItemToCart: (product) => {
   set((state) => ({cart: [...state.cart,product] }))
   set((state) => ({count: state.count + 1}))
 },
 removeItemFromCart: (productId) => {
   set((state) => ({cart:state.cart.filter((product) => product.id !== productId) }))
   set((state) => ({count: state.count - 1}))
 },
 
}))