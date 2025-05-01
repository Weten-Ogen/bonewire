import { put } from '@vercel/blob';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'; // avoid caching

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
    }

    const blob = await put(file.name, file, {
      access: 'public',
    });

    return new Response(JSON.stringify(blob), { status: 200 });
  } catch (error) {
    console.error('Upload failed:', error);
    return new Response(JSON.stringify({ error: 'Failed to upload file' }), { status: 500 });
  }
}
