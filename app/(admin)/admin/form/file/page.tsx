
import { list } from '@vercel/blob';
import Image from 'next/image';
import Imagegrid from './imagegrid';
import AllImages from '@/components/ui/imagescomp';
 
export default async function Page() {
  // const response = await list();
  // const images = response.blobs.filter(image => image.pathname.endsWith(".mp4") === false)

  return (
    <div>
      <AllImages/>
    </div>
    // <Imagegrid response={response} images={images}/>
  );
}