"use client"
import * as React from "react"
import { testimonials } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import HeroCarouComp from "./herocaroucomp"

export function HeroCarousel() {
  return (
    <div className="w-full h-[60vh] object-cotain   mt-14  "
   > 
    <Carousel className="w-full   max-w-sm md:w-full mx-auto md:max-w-[80%]">
      <CarouselContent className="w-full  p-4">
        {testimonials.map(item => {
          return <HeroCarouComp
          className="md:w-[300px] h-[300px]" 
          key={item.name}  
          {...item}
          />
        })}
      </CarouselContent>
      <CarouselPrevious 
      variant="default"
      className="hidden md:flex"
      />
      <CarouselNext  
      variant="default"
      className="hidden md:flex"
      />
    </Carousel>
</div>
  )
}
