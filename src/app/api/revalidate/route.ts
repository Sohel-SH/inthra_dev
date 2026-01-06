import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {

  const body = await req.json();

  const SECRET = process.env.SANITY_REVALIDATE_SECRET; // ← SAME SPELLING AS ENV
  console.log("BODY SECRET FROM SANITY:", body.secret);
  console.log("ENV SECRET FROM VERCEL:", SECRET);
  if (!SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }
  if (body.secret !== SECRET) {
    return new Response("secret not matched", { status: 401 });
  }

  // Refresh blog list page
  revalidatePath("/blog");

  return new Response(
    JSON.stringify({
      secretFromBody: body?.secret || null,
      envSecret: SECRET || null,
      fullBody: body || null
    }, null, 2),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

// optional manual check
export async function GET() {
  return new Response("Use POST method", { status: 200 });
}