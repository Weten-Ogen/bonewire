"use client"
import { product } from '@/types/next'
import  { create } from 'zustand'

interface cartstoreprops {
    cart: [] | product[],
    addItemToCart: (product:product) => void,
    removeItemFromCart: (productId:string) => void,

}

export const UseCartStore = create<cartstoreprops>((set) => ({
 cart : [],
 addItemToCart: (product) => {
    set((state) => ({cart:[...state.cart, product]}))
 },
 removeItemFromCart:(productId) =>{
    set((state) => ({cart: state.cart.filter(product => product.id  !== productId)}))
 }

}))