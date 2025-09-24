import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/blog/[id] - Get single post by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const post = await prisma.post.findFirst({
      where: {
        OR: [
          { id },
          { slug: id }
        ],
        published: true
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

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

// PUT /api/blog/[id] - Update post (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    const body = await request.json()
    const { title, content, summary, image, published, categoryIds, tagIds } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if post exists
    const existingPost = await prisma.post.findUnique({ where: { id } })
    if (!existingPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Generate new slug if title changed
    let slug = existingPost.slug
    if (title !== existingPost.title) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      // Check if new slug already exists
      const slugExists = await prisma.post.findFirst({
        where: { slug, id: { not: id } }
      })
      if (slugExists) {
        slug = `${slug}-${Date.now()}`
      }
    }

    // Update post with relations
    await prisma.$transaction(async (tx) => {
      // Remove existing relations
      await tx.postCategory.deleteMany({ where: { postId: id } })
      await tx.postTag.deleteMany({ where: { postId: id } })

      // Update post
      await tx.post.update({
        where: { id },
        data: {
          title,
          slug,
          content,
          summary,
          image,
          published: published || false,
          publishedAt: published && !existingPost.published ? new Date() : existingPost.publishedAt,
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
        }
      })
    })

    // Fetch updated post
    const updatedPost = await prisma.post.findUnique({
      where: { id },
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

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

// DELETE /api/blog/[id] - Delete post (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    const existingPost = await prisma.post.findUnique({ where: { id } })
    if (!existingPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    await prisma.post.delete({ where: { id } })

    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}