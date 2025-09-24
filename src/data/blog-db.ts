import { prisma } from '@/lib/prisma'

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  summary: string | null
  image: string | null
  published: boolean
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  author: {
    id: string
    name: string | null
    email: string
  }
  categories: {
    category: {
      id: string
      name: string
      slug: string
    }
  }[]
  tags: {
    tag: {
      id: string
      name: string
      slug: string
    }
  }[]
}

export async function getBlogPosts(
  page: number = 1, 
  limit: number = 10,
  category?: string,
  tag?: string
): Promise<{ posts: BlogPost[], total: number }> {
  const skip = (page - 1) * limit

  const where = {
    published: true,
    ...(category && {
      categories: {
        some: {
          category: {
            slug: category
          }
        }
      }
    }),
    ...(tag && {
      tags: {
        some: {
          tag: {
            slug: tag
          }
        }
      }
    })
  }

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      include: {
        author: {
          select: { id: true, name: true, email: true }
        },
        categories: {
          include: {
            category: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        }
      },
      orderBy: {
        publishedAt: 'desc'
      },
      skip,
      take: limit
    }),
    prisma.post.count({ where })
  ])

  return { posts, total }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await prisma.post.findFirst({
    where: {
      slug,
      published: true
    },
    include: {
      author: {
        select: { id: true, name: true, email: true }
      },
      categories: {
        include: {
          category: true
        }
      },
      tags: {
        include: {
          tag: true
        }
      }
    }
  })

  return post
}

export async function getCategories() {
  return await prisma.category.findMany({
    include: {
      _count: {
        select: {
          posts: {
            where: {
              post: {
                published: true
              }
            }
          }
        }
      }
    },
    orderBy: { name: 'asc' }
  })
}

export async function getTags() {
  return await prisma.tag.findMany({
    include: {
      _count: {
        select: {
          posts: {
            where: {
              post: {
                published: true
              }
            }
          }
        }
      }
    },
    orderBy: { name: 'asc' }
  })
}

// Helper function to convert HTML to markdown-like format for display
export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()
}