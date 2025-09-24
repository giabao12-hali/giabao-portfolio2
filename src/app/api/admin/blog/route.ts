import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/admin/blog - Get all posts (admin - includes unpublished)
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const skip = (page - 1) * limit

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        // No published filter for admin - show all posts
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
          updatedAt: 'desc' // Order by last updated for admin
        },
        skip,
        take: limit
      }),
      prisma.post.count() // Count all posts
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