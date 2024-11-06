import Advertisement from "@/components/sections/advertisement";
import Hero from "@/components/sections/hero";
import ImageWithBackGround from "@/components/ui/imagebackground";


export default function Home() {
  return (
   <section className="">
       <ImageWithBackGround 
       heading="Kente Mall"
       subHeading="Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."
        />  
       <Advertisement/> 
   </section>
  );
}
