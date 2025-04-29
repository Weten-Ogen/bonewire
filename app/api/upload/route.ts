// app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextRequest } from 'next/server';


export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('files') as File[];

  const uploadResults = await Promise.all(
    files.map(async (file) => {
      const blob = await put(file.name, file, {
        access: 'public',
      });
      return blob;
    })
  );

  return new Response(JSON.stringify(uploadResults), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
