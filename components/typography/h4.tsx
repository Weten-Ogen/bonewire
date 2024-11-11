import { cn } from "@/lib/utils"
import React from "react"


interface TypographyH4props {
    children : any,
    className: string
}
export function TypographyH4(props:TypographyH4props) {
    return (
      <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", props.className)}>
        {props.children}
      </h4>
    )
  }
  