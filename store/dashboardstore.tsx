
import staticlist from '@/constants/staticlist'
import { product } from '@/types/next'
import  { create } from 'zustand'

interface dashboardstoreprops {
    products: [] | product[],
    updateProducts : (n:number) => Promise<void>,
    filterProducts : (tag:string) => void,
}

const initialState = staticlist.products

export const UseDashboardStore = create<dashboardstoreprops>

((set) => ({
 products : initialState,
 updateProducts: async (n) => {
    const response= staticlist.products
    set((state) => ({products:response}))
 },

 filterProducts: (tag) => {
    set((state) => ({products:[...initialState]}))
    set((state) => ({products:
      tag === "all" ?
      state.products.filter(product => product.tags !== tag):
      state.products.filter(product => product.tags === tag)}))    
 }
}))