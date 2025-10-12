import { client } from "@/lib/sanity";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: { asset: { url: string } };
  excerpt: string;
  author: {
    name: string;
    image: { asset: { url: string } };
  };
  categories: { title: string }[];
}

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    `*[_type == "blogs"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset -> {
          url
        }
      },
      excerpt,
      author -> {
        name,
        image {
          asset -> {
            url
          }
        }
      },
      categories[] -> {
        title
      }
    }`
  );
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-gradient-to-b from-[#010b15] via-[#031525] to-[#052642]">
      <div className="container-custom px-6 sm:px-6 py-16 md:py-20">
        <div className="container-custom">
          <div className="text-sm breadcrumbs text-white mb-2">
            <ul className="flex items-center space-x-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="inline-flex items-center">&gt;</li>
              <li className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
                Blog
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold text-white mb-8">Blog List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug.current}`}
                key={post._id}
                className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden text-white block group"
              >
                <div className="overflow-hidden rounded-t-lg">
                  {post.mainImage && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="w-full h-48 object-cover scale-110 transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-3"
                    />
                  )}
                </div>
                {post.categories && post.categories.length > 0 && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm z-10">
                    {post.categories[0].title}
                  </div>
                )}
                <div className="p-6 relative">
                  <div className="h-[150px] sm:h-[130px] md:h-[150px]">
                    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                      <span className="bg-gradient-to-r bg-[length:0px_8px] bg-left-bottom bg-no-repeat transition-[background-size] duration-1000 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_8px] from-[#4ade80]/60 via-[#a3ff4e]/60 to-[#cfff81]/60">
                        {post.title.length > 70
                          ? post.title.substring(0, 70) + "..."
                          : post.title}
                      </span>
                    </h2>
                    <p className="text-gray-300 mb-4 text-sm mt-2">
                      {post.excerpt.length > 100
                        ? post.excerpt.substring(0, 100) + "..."
                        : post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center mt-4">
                    {post.author && post.author.image && (
                      <img
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                    )}
                    <div>
                      <p className="text-white font-medium text-sm">
                        {post.author.name}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }).format(new Date(post.publishedAt))}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
