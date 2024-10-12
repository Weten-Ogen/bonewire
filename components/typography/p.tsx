import { cn } from "@/lib/utils"
import React from "react"

interface TypographyPprops{
    children : string | number,
    className?: string,
}
export function TypographyP(props: TypographyPprops) {
    return (
      <p className={cn("leading-7 [&:not(:first-child)]:mt-6",props.className)}>
        {props.children}
      </p>
    )
  }
  