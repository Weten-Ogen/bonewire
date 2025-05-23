import CarouselComp from "@/components/carouselcomp";
import HeroInfo from "@/components/ui/heroinfo";
import HeroProduct from "@/components/ui/heroproduct";
import HeroStatement from "@/components/ui/herostatement";
import ImageWithBackGround from "@/components/ui/imagebackground";
import Socials from "@/components/ui/socials";
import { HeroCarousel } from "@/components/ui/testimonialcarousel";
import TextOnVideo from "@/components/ui/textonvideo";
import { carouselImage, carouselVideo } from "@/lib/constants";



export default function Home() {
  
  
  return (
   <div className="mt-10">
      <div className="-z-10" id="hero">
       <ImageWithBackGround 
            heading="Kente Mall"
            subHeading="Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."   
        />  
        <CarouselComp
        data={carouselImage}
        type="pic"
        />
        </div>
        <div id="services">
        <HeroInfo 
          className=""
        />
        </div>

        <CarouselComp
          data={carouselVideo}
          type="video"
        />

        <HeroCarousel
        />
        <HeroProduct 
        className=""
        />
        <Socials 
        className=""
        />
   </div>
  );
}

