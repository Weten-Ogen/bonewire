import { cn } from "@/lib/utils"
import React from "react"

interface TypographyH3props {
    children : string,
    className: string,
}
export function TypographyH3(props: TypographyH3props) {
    return (
      <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight",props.className)}>
        {props.children}
      </h3>
    )
  }
  