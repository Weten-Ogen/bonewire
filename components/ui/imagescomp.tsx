'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from './card';
import { Button } from './button';
import { Loader2 } from 'lucide-react';

interface BlobFile {
  url: string;
  pathname: string;
  uploadedAt: string;
}

export default function AllImages() {
  const [images, setImages] = useState<BlobFile[]>([]);
  const [deletingPath, setDeletingPath] = useState<string | null>(null);
 
  
  
  const handleDelete = async (pathname: string) => {
    
    setDeletingPath(pathname);
  
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
  
    setDeletingPath(null);
  };
 
  const handleUploadedImages = async() => {
      const res = await fetch('/api/image',{
      });
      const blobs = await res.json();
     
      setImages((prev) => [...blobs]);
  }
  
  return (
    <div>
      <h1>All Uploaded Images</h1>
      <Button onClick={handleUploadedImages}>get uploaded images</Button>
      
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
            <div>
                  {
                  deletingPath === img.pathname ? (
                  <Loader2 className="animate-spin w-4 h-4 " />
                ) : (
                  <Button onClick={() => handleDelete(img.pathname)}>Delete</Button>
                )}
            </div>
                <p>{img.pathname }</p>
         </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

            