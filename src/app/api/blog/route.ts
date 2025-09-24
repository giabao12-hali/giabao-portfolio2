import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/blog - Get all published posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')
    const search = searchParams.get('search')

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
      }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' as const } },
          { summary: { contains: search, mode: 'insensitive' as const } },
          { content: { contains: search, mode: 'insensitive' as const } }
        ]
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

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST /api/blog - Create new post (admin only)
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, content, summary, image, published, categoryIds, tagIds, authorId } = body

    if (!title || !content || !authorId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Check if slug already exists
    const existingPost = await prisma.post.findUnique({ where: { slug } })
    if (existingPost) {
      return NextResponse.json({ error: 'Post with this title already exists' }, { status: 400 })
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        summary,
        image,
        published: published || false,
        publishedAt: published ? new Date() : null,
        authorId,
        ...(categoryIds && {
          categories: {
            create: categoryIds.map((categoryId: string) => ({ categoryId }))
          }
        }),
        ...(tagIds && {
          tags: {
            create: tagIds.map((tagId: string) => ({ tagId }))
          }
        })
      },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        },
        categories: {
          include: { category: true }
        },
        tags: {
          include: { tag: true }
        }
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}