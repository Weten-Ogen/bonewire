"use client"
import { cn } from '@/lib/utils'
import React from 'react'

interface comprops {
    className?: string,

}

const Linksfoot = [
 {
     reff: "/",
     label: "home"
 },
 {
     reff: "/",
     label: "about"
 },
 {
     reff: "#featuredProducts",
     label: "featuredProducts"
 },
 {
     reff: "#services",
     label: "#Services"
 },
 {
     reff: "/products",
     label: "products"
 },
 {
     reff: "/chat",
     label: "message us"
 },
 
]
// home services products message us , about 
const LinkFooter = (props:comprops) => {

    return (
    <div className={cn('',)}>
        {
          Linksfoot.map((items:any) => {
            return <div className=''>

                </div>
        })
        }
    </div>
  )
}

export default LinkFooter
