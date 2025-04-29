'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';

interface BlobFile {
  url: string;
  pathname: string;
  uploadedAt: string;
}

export default function AllImages() {
  const [images, setImages] = useState<BlobFile[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/image',{
        cache:'no-store'
      });
      const blobs = await res.json();
      setImages(blobs);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>All Uploaded Images</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((img, i) => (
          <Card
            key={i}
          >

          <CardContent className='fle flex-col  p-2 m-2 max-w-sm gap-10'>
          <img
            className='w-full h-auto object-cover'
            src={img.url}
            alt={`uploaded-${i}`}
            width={200}
            style={{ borderRadius: '8px', objectFit: 'cover' }}
            />
            <div className='flex max-w-sm text-wrap gap-4 items-start p-4 flex-col'>
              <p>pathname</p>
              <p className='text-wrap text-extraSmall text-secondaryColor'>{img.url}</p>
            </div>
          </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
