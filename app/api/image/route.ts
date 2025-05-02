import { list, del,put } from '@vercel/blob';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

// Gets the images from  vercel blob
export async function GET() {
  const { blobs } = await list();
  return Response.json(blobs);
}

// adds an image to vercel blob
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
  }

  const blob = await put(file.name, file, {
    access: 'public', 
  });
  
  return new Response(JSON.stringify(blob), { status: 200 });
}

// deleting an image on vercel blob
export async function DELETE(req: Request) {
  try {
    const { pathname } = await req.json();

    if (!pathname) {
      return new Response(JSON.stringify({ error: 'Missing pathname' }), { status: 400 });
    }

    await del(pathname);  
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to delete blob:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete blob' }), 
    { status: 500 });
  }
}
