
import { list } from '@vercel/blob';
import Image from 'next/image';
import Imagegrid from './imagegrid';
import AllImages from '@/components/ui/imagescomp';
 
export default async function Page() {
 

  return (
    <div>
      <AllImages/>
    </div>
   
  );
}