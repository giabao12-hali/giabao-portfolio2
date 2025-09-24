import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface AuthUser {
  id: string
  email: string
  name: string | null
  role: string
}

export function verifyToken(token: string): { userId: string; email: string; role: string } | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as {
      userId: string
      email: string
      role: string
    }
    return decoded
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  // Try to get token from cookie first
  const cookieToken = request.cookies.get('auth-token')?.value
  if (cookieToken) return cookieToken

  // Fallback to Authorization header
  const authHeader = request.headers.get('Authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }

  return null
}

export function requireAuth(request: NextRequest): { userId: string; email: string; role: string } | null {
  const token = getTokenFromRequest(request)
  if (!token) return null

  return verifyToken(token)
}

export function requireAdmin(request: NextRequest): { userId: string; email: string; role: string } | null {
  const auth = requireAuth(request)
  if (!auth || auth.role !== 'ADMIN') return null

  return auth
}