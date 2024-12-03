"use server"
import { revalidatePath } from "next/cache"

// filters
export async function getfilters(filter:string) {
  const data = await fetch( `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products/filter/${filter}`,{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
    cache: "no-store"
  })
  const products = await data.json()
  
  return products
}

