'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import { Button } from './button';

interface BlobFile {
  url: string;
  pathname: string;
  uploadedAt: string;
}

export default function AllImages() {
  const [images, setImages] = useState<BlobFile[]>([]);
  const handleDelete = async (pathname: string) => {
    try {
      const res = await fetch('/api/image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pathname }),
      });
  
      if (res.ok) {
        setImages((prev) => prev.filter((img) => img.pathname !== pathname));
      } else {
        console.error('Delete failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/image',{
        cache:'no-store',
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
            <Button onClick={() => handleDelete(img.pathname)}>Delete</Button>

          </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
