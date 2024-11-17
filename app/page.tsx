import Advertisement from "@/components/sections/advertisement";
import Hero from "@/components/sections/hero";
import HeroInfo from "@/components/ui/heroinfo";
import HeroProduct from "@/components/ui/heroproduct";
import HeroStatement from "@/components/ui/herostatement";
import ImageWithBackGround from "@/components/ui/imagebackground";
import Socials from "@/components/ui/socials";
import { HeroCarousel } from "@/components/ui/testimonialcarousel";


export default function Home() {
  return (
   <div className="">
      <div className="-z-10">
       <ImageWithBackGround 
       heading="Kente Mall"
       subHeading="Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
        />  
        </div>
        <HeroInfo className=""/>
        <HeroStatement className="mt-24 bg-black text-white "/>
        <HeroCarousel/>
        <HeroProduct className=""/>
        <Socials className="p-4 flex items-center justify-between"/>
   </div>
  );
}
