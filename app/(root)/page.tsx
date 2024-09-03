import ImageWithText from "@/components/ui/imagewithtext";
import HeroImage from '@/public/assets/images/bag2.jpg';

export default function Home() {
  return (
    <section className=" md:overflow-hidden md:object-contain">
      {/* hero section 
          --> contents 
          --> call to action
          ---> image display
        
      */}
      <article className="pt-10 md:pt-10 md:w-[80%] mx-auto">

        <ImageWithText 
        imageurl={HeroImage}
        className="p-4 md:flex  md:items-center md:justify-center gap-8 md:p-8"
        title={"Bonewire"}
        content="Your home of quality kente products. We have everything else you will ever need from a kente piece."
        subcontent="quantity is affordable"
        calltoaction="Order Now"
        actionref="/dashboard"
        />
      </article>
    </section>
      );
}
