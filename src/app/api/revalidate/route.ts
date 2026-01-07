import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const SECRET = "mySuperSecretKey123";
  const timestamp = new Date().toISOString();

  // Log request start
  console.log(`[${timestamp}] Webhook received`);

  if (!SECRET) {
    console.error(`[${timestamp}] ERROR: SANITY_REVALIDATE_SECRET not configured`);
    return new Response("Invalid secret configuration", { status: 401 });
  }

  // Get all headers for debugging
  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  // Get the raw body for signature verification
  const rawBody = await req.text();
  let body;
  
  try {
    body = JSON.parse(rawBody);
  } catch (e) {
    console.warn(`[${timestamp}] Failed to parse body as JSON:`, e);
    body = {};
  }

  // Log what we received
  console.log(`[${timestamp}] Headers:`, JSON.stringify(headers, null, 2));
  console.log(`[${timestamp}] Raw body length:`, rawBody.length);
  console.log(`[${timestamp}] Parsed body:`, JSON.stringify(body, null, 2));
  console.log(`[${timestamp}] Query params:`, Object.fromEntries(req.nextUrl.searchParams));

  // Check for Sanity signature header (proper webhook verification)
  const signature = req.headers.get("x-sanity-signature");
  
  if (signature) {
    console.log(`[${timestamp}] Found X-Sanity-Signature header, verifying...`);
    // Verify signature using HMAC-SHA256
    const expectedSignature = crypto
      .createHmac("sha256", SECRET)
      .update(rawBody)
      .digest("hex");
    
    console.log(`[${timestamp}] Signature check:`, {
      received: signature.substring(0, 20) + "...",
      expected: expectedSignature.substring(0, 20) + "...",
      match: signature === expectedSignature,
    });
    
    if (signature !== expectedSignature) {
      console.error(`[${timestamp}] Signature mismatch!`);
      return new Response(
        JSON.stringify({ 
          error: "Invalid signature",
          timestamp,
          receivedSignature: signature.substring(0, 20) + "...",
        }),
        { 
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log(`[${timestamp}] Signature verified successfully`);
  } else {
    console.log(`[${timestamp}] No signature header, checking for secret in body/query/headers...`);
    // Fallback: check secret in body, query params, or headers
    const secretFromBody = body?.secret;
    const secretFromQuery = req.nextUrl.searchParams.get("secret");
    const secretFromHeader = req.headers.get("x-sanity-secret") || req.headers.get("authorization")?.replace("Bearer ", "");

    const providedSecret = secretFromBody || secretFromQuery || secretFromHeader;

    console.log(`[${timestamp}] Secret check:`, {
      fromBody: secretFromBody ? "***" : null,
      fromQuery: secretFromQuery ? "***" : null,
      fromHeader: secretFromHeader ? "***" : null,
      envSecretExists: !!SECRET,
      match: providedSecret === SECRET,
    });

    if (!providedSecret || providedSecret !== SECRET) {
      console.error(`[${timestamp}] Secret mismatch!`);
      return new Response(
        JSON.stringify({ 
          error: "Invalid secret",
          timestamp,
          receivedFrom: secretFromBody ? "body" : secretFromQuery ? "query" : secretFromHeader ? "header" : "none",
          secret_body: body?.secret,
          secret_query: body?.secret,
          secret_header: body?.secret,
          expectedSecret: SECRET,
        }),
        { 
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log(`[${timestamp}] Secret verified successfully`);
  }

  // Refresh blog list page
  console.log(`[${timestamp}] Revalidating /blog`);
  revalidatePath("/blog");
  
  // Also revalidate individual blog posts if _id is provided
  if (body?._id) {
    const slug = body.slug?.current || "";
    console.log(`[${timestamp}] Revalidating /blog/${slug}`);
    revalidatePath(`/blog/${slug}`);
  }

  console.log(`[${timestamp}] Revalidation complete`);
  return new Response(
    JSON.stringify({ 
      success: true,
      message: "Revalidated",
      timestamp,
      revalidated: ["/blog", body?._id ? `/blog/${body.slug?.current || ""}` : null].filter(Boolean),
    }),
    { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

// Debug endpoint to check configuration
export async function GET(req: NextRequest) {
  const SECRET = process.env.SANITY_REVALIDATE_SECRET;
  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return new Response(
    JSON.stringify({
      message: "Revalidate endpoint is active",
      method: "Use POST method for webhooks",
      config: {
        secretConfigured: !!SECRET,
        secretLength: SECRET?.length || 0,
        secret: SECRET,
      },
      requestInfo: {
        headers,
        queryParams: Object.fromEntries(req.nextUrl.searchParams),
      },
      instructions: {
        signature: "Sanity webhooks should include X-Sanity-Signature header",
        secret: "Or include secret in body.secret, query ?secret=, or header X-Sanity-Secret",
      },
    }, null, 2),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}