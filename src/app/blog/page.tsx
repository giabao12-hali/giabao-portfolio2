import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog-db";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const { posts } = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{post.title}</p>
              <p className="h-6 text-xs text-muted-foreground">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : new Date(post.createdAt).toLocaleDateString()}
              </p>
              {post.summary && (
                <p className="text-sm text-muted-foreground mt-1">
                  {post.summary}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.map(({ category }) => (
                  <span key={category.id} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    {category.name}
                  </span>
                ))}
                {post.tags.map(({ tag }) => (
                  <span key={tag.id} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
