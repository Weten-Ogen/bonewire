
import { list } from '@vercel/blob';
import Image from 'next/image';
import Imagegrid from './imagegrid';
 
export default async function Page() {
  const response = await list();
  const images = response.blobs.filter(image => image.pathname.endsWith(".mp4") === false)

  return (
    <Imagegrid response={response} images={images}/>
  );
}