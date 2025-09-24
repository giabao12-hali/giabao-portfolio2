import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/admin/blog/[id] - Get single post by ID (admin - includes unpublished)
export async function GET(
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

    const post = await prisma.post.findFirst({
      where: {
        OR: [
          { id },
          { slug: id }
        ]
        // No published filter for admin
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