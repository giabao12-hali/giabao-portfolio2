import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as {
      userId: string
      email: string
      role: string
    }

    // Get user info
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true, role: true }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}