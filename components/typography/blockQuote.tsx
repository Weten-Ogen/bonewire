"use client"
import { cn } from "@/lib/utils";
import React from "react";


interface TypographyBlockquoteprops {
    className: string,
    children : string
}
const TypographyBlockquote =(props:TypographyBlockquoteprops) => {return (
      <blockquote className={cn("mt-6 border-l-2 pl-6 italic",props.className)}>
        {props.children}
      </blockquote>
    )
  }
  

export default TypographyBlockquote