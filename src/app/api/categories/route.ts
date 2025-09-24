import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/categories - Get all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
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

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

// POST /api/categories - Create new category (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description } = body

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const existingCategory = await prisma.category.findUnique({ where: { slug } })
    if (existingCategory) {
      return NextResponse.json({ error: 'Category already exists' }, { status: 400 })
    }

    const category = await prisma.category.create({
      data: { name, slug, description }
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
}