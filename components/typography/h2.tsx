import { cn } from "@/lib/utils"
import React from "react"

interface TypographyH2props {
    className: string,
    children: string
}
export function TypographyH2(props:TypographyH2props) {
    return (
      <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",props.className)}>
        {props.children}
      </h2>
    )
  }
  