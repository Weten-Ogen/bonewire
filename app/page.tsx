import Advertisement from "@/components/sections/advertisement";
import Hero from "@/components/sections/hero";
import HeroInfo from "@/components/ui/heroinfo";
import HeroProduct from "@/components/ui/heroproduct";
import HeroStatement from "@/components/ui/herostatement";
import ImageWithBackGround from "@/components/ui/imagebackground";
import { HeroCarousel } from "@/components/ui/testimonialcarousel";


export default function Home() {
  return (
   <section className="">
       <ImageWithBackGround 
       heading="Kente Mall"
       subHeading="Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
        />  
        <HeroInfo className=""/>
        <HeroStatement className="h-[70vh] md:h-[50vh] mt-24  flex items-center justify-center pt-20 bg-black text-white "/>
        <HeroCarousel/>
        <HeroProduct className=""/>

   </section>
  );
}
