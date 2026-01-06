import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {

  const body = await req.json();

  const SECRET = process.env.SANITY_REVALIDATE_SECRET; // ← SAME SPELLING AS ENV

  if (!SECRET || body.secret !== SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  // Refresh blog list page
  revalidatePath("/blog");

  return new Response("Revalidated", { status: 200 });
}

// optional manual check
export async function GET() {
  return new Response("Use POST method", { status: 200 });
}