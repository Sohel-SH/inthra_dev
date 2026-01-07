// app/api/revalidate/route.ts

import { revalidatePath } from 'next/cache';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get secret from headers (as configured in Sanity)
    const secret = request.headers.get('secret');
    
    // Verify the secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      console.error('Invalid secret received:', secret);
      return NextResponse.json(
        { 
          error: 'Invalid secret',
          timestamp: new Date().toISOString(),
          receivedFrom: secret ? 'header' : 'none',
          expectedSecret: process.env.REVALIDATE_SECRET 
        },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const body = await request.json();
    console.log('Webhook received:', body);

    const { _type, slug } = body;

    // Revalidate based on content type
    if (_type === 'blogs') {
      if (slug?.current) {
        // Revalidate the specific blog post page
        await revalidatePath(`/blogs/${slug.current}`);
        console.log(`Revalidated: /blogs/${slug.current}`);
      }
      
      // Revalidate the blog listing page
      await revalidatePath('/blogs');
      console.log('Revalidated: /blogs');
      
      // If you're using root page that shows blogs
      await revalidatePath('/');
      console.log('Revalidated: /');
    }

    return NextResponse.json({ 
      revalidated: true,
      timestamp: new Date().toISOString(),
      paths: slug?.current ? [`/blogs/${slug.current}`, '/blogs', '/'] : ['/blogs', '/']
    });

  } catch (err) {
    console.error('Error in revalidate webhook:', err);
    return NextResponse.json(
      { 
        error: 'Error revalidating',
        message: err instanceof Error ? err.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook endpoint is working. Use POST to trigger revalidation.',
    timestamp: new Date().toISOString()
  });
}