import { cn } from "@/lib/utils"
import React from "react"

interface TypographyPprops{
    children : any,
    className?: string,
}
export function TypographyP(props: TypographyPprops) {
    return (
      <div className={cn("leading-7 ",props.className)}>
        {props.children}
      </div>
    )
  }
  