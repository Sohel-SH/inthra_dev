import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  const body = await req.json();

  const SECRET = process.env.SANITY_REVALIDATE_SECRET;

  if (!SECRET || body.secret !== SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  // Refresh blog list page
  revalidatePath("/blog");

  return new Response("Revalidated", { status: 200 });
}
