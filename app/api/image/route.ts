import { list, del } from '@vercel/blob';

export async function GET() {
  const { blobs } = await list();
  return Response.json(blobs);
}

export async function DELETE(req: Request) {
  try {
    const { pathname } = await req.json();

    if (!pathname) {
      return new Response(JSON.stringify({ error: 'Missing pathname' }), { status: 400 });
    }

    await del(pathname);  // This actually deletes the blob from Vercel storage

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Failed to delete blob:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete blob' }), { status: 500 });
  }
}
