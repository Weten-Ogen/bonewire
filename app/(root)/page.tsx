import ImageWithText from "@/components/ui/imagewithtext";
import HeroImage from '@/public/assets/images/bag2.jpg';

export default function Home() {
  return (
    <section className=" md:overflow-hidden md:object-contain">
      <article className="pt-0 md:pt-8 md:w-[80%] mx-auto">
        <ImageWithText 
        imageurl={'https://l8yhwwsvkn8vkuaa.public.blob.vercel-storage.com/hero-9WNAVami4Ilsgq7QySTgyuNnsth4tO.jpg'}
        className="p-4 md:flex  flex-cols-reverse md:items-center md:justify-center gap-8 md:p-8"
        title="Kente Mall"
        content="Your home of quality Kente products. We have everything else you will ever need from a kente piece."
        subcontent="Quantity is Affordable."
        calltoaction="Order Now"
        actionref="/dashboard"
        />
      </article>
     </section>
      );
}
