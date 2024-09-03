"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white text-black">
      <div className="flex w-max space-x-4 p-4">
        
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
