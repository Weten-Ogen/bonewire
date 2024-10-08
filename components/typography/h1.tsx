import { cn } from "@/lib/utils"
import React from "react"

interface TypographyH1props{
    children : string,
    className: string
}

export function TypographyH1(props:TypographyH1props) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", props.className)}>
        {props.children}
      </h1>
    )
  }
  