import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "blogs"] {
      slug {
        current
      }
    }`
  );

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: { asset: { url: string } };
  author: {
    name: string;
    image: { asset: { url: string } };
  };
  body: any[]; // Sanity rich text
  content: any[]; // Sanity rich text
}

interface PostPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

async function getPost(slug: string): Promise<Post> {
  const post = await client.fetch(
    `*[_type == "blogs" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      content,
      mainImage {
        asset -> {
          url
        }
      },
      author -> {
        name,
        image {
          asset -> {
            url
          }
        }
      },
      body
    }`,
    { slug }
  );
  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="container-custom py-16">Post not found</div>;
  }
  return (
    <main className="bg-gradient-to-b from-[#010b15] via-[#031525] to-[#052642]">
      <div className="container-custom px-6 sm:px-6 py-16 md:py-20">
        <div className="container-custom">
          <div className="text-sm breadcrumbs text-white mb-4">
            <ul className="flex items-center space-x-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="inline-flex items-center">&gt;</li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li className="inline-flex items-center">&gt;</li>
              <li className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
                {post.title.length > 20
                  ? post.title.substring(0, 20) + "..."
                  : post.title}
              </li>
            </ul>
          </div>
          <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
            {post.title}
          </h1>
          <div className="border-stroke dark:border-stroke-dark mb-10 grid items-center gap-x-10 gap-y-5 border-b pb-8 min-[645px]:grid-cols-[auto_1fr_auto]">
            <figure className="relative flex items-center gap-4">
              {post.author && post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="shrink-0 rounded-full object-cover"
                />
              )}
              <figcaption className="text-white dark:text-white whitespace-nowrap">
                <span className="sr-only">Posted</span> By{" "}
                <a href="/blogs/author/musharof-chy">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  {post.author.name}
                </a>
              </figcaption>
            </figure>
            <dl className="text-white dark:text-white flex items-center gap-5">
              <dt className="flex items-center gap-3">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="currentColor"
                >
                  <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z"></path>
                  <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"></path>
                  <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z"></path>
                  <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z"></path>
                  <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z"></path>
                  <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"></path>
                  <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z"></path>
                  <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z"></path>
                  <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"></path>
                </svg>
                <time dateTime={post.publishedAt} className="truncate">
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(post.publishedAt))}
                </time>
              </dt>
              <dd className="sr-only">Published At</dd>
            </dl>
          </div>
          <div className="relative mb-10 aspect-[97/60] sm:aspect-[97/44]">
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                role="banner"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="rounded-xs object-cover object-center"
                sizes="100vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            )}
          </div>
          {/* {post.mainImage && <img className="w-full object-cover mb-8" />} */}
          <div className="prose max-w-none text-white dark:text-white">
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }: any) => (
                    <img src={value.asset.url} alt={value.alt || " "} />
                  ),
                },
                block: {
                  h1: ({ children }: any) => (
                    <h1 className="text-5xl font-bold my-4">{children}</h1>
                  ),
                  h2: ({ children }: any) => (
                    <h2 className="text-4xl font-bold my-4">{children}</h2>
                  ),
                  h3: ({ children }: any) => (
                    <h3 className="text-3xl font-bold my-4">{children}</h3>
                  ),
                  h4: ({ children }: any) => (
                    <h4 className="text-2xl font-bold my-4">{children}</h4>
                  ),
                  blockquote: ({ children }: any) => (
                    <blockquote className="border-l-purple-500 border-l-4 pl-4 py-1 my-4">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }: any) => (
                    <ul className="list-disc ml-5 my-4">{children}</ul>
                  ),
                  number: ({ children }: any) => (
                    <ol className="list-decimal ml-5 my-4">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }: any) => <li>{children}</li>,
                  number: ({ children }: any) => <li>{children}</li>,
                },
                marks: {
                  link: ({ children, value }: any) => {
                    const rel = !value.href.startsWith("/")
                      ? "noreferrer noopener"
                      : undefined;
                    return (
                      <a
                        href={value.href}
                        rel={rel}
                        className="text-blue-500 hover:underline"
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
