import { cn } from "@/lib/utils";
import React from "react";
interface comprops {
  className?:string,
  children:string
}


export function TypographyBlockquote(props:comprops) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic",props.className)}>
      {props.children}
    </blockquote>
  )
}
