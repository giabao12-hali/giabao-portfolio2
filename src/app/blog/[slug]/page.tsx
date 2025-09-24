import { getBlogPosts, getBlogPost } from "@/data/blog-db";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const { posts } = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getBlogPost(params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description: description || undefined,
    openGraph: {
      title,
      description: description || undefined,
      type: "article",
      publishedTime: publishedTime?.toISOString(),
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || undefined,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt?.toISOString(),
            dateModified: post.updatedAt.toISOString(),
            description: post.summary,
            image: post.image
              ? `${DATA.url}${post.image}`
              : `${DATA.url}/og?title=${post.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.author.name || post.author.email,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.publishedAt ? post.publishedAt.toISOString() : post.createdAt.toISOString())}
          </p>
        </Suspense>
      </div>
      
      {/* Categories and Tags */}
      <div className="flex flex-wrap gap-2 mb-8 max-w-[650px]">
        {post.categories.map(({ category }) => (
          <span key={category.id} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {category.name}
          </span>
        ))}
        {post.tags.map(({ tag }) => (
          <span key={tag.id} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            #{tag.name}
          </span>
        ))}
      </div>

      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></article>
    </section>
  );
}
