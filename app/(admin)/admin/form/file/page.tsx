import { list } from '@vercel/blob';
import Image from 'next/image';
import Link from 'next/link';
 
export default async function Page() {
  const response = await list();
 
  return (
    <div className="grid grid-cols-3 gap-4">
      {response.blobs.map((blob) => (
        <div key={blob.pathname} className='w-full' >
          <Image 
          src={blob.downloadUrl}
          width={200}
          height={200}
          alt={blob.pathname}
          />
          <p className='text-wrap'>pathname : <br/>
            {blob.downloadUrl}
          </p>
        </div>
      ))}
    </div>
  );
}