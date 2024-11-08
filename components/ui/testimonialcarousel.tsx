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
    <div className="w-full h-screen object-contain ">
    <Carousel className="w-full   max-w-sm md:w-full mx-auto md:max-w-[90%]">
      <CarouselContent className="w-full h-screen p-4">
        {testimonials.map(item => {
          return <HeroCarouComp
          className="md:w-[300px] h-[300px]" 
          key={item.name}  
          {...item}
          />
        })}
      </CarouselContent>

    </Carousel>
</div>
  )
}
