'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: string
  email: string
  name: string | null
  role: string
}

interface Category {
  id: string
  name: string
  slug: string
}

interface Tag {
  id: string
  name: string
  slug: string
}

interface Post {
  id: string
  title: string
  slug: string
  summary: string | null
  published: boolean
  publishedAt: string | null
  createdAt: string
  author: {
    id: string
    name: string | null
    email: string
  }
  categories: {
    category: Category
  }[]
  tags: {
    tag: Tag
  }[]
}

export default function AdminBlogPage() {
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const checkAuthAsync = async () => {
      try {
        const response = await fetch('/api/auth/me')
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
          // Load posts after setting user
          const postsResponse = await fetch('/api/admin/blog?page=1&limit=50')
          if (postsResponse.ok) {
            const postsData = await postsResponse.json()
            setPosts(postsData.posts)
          }
          setLoading(false)
        } else {
          router.push('/admin')
        }
      } catch (error) {
        router.push('/admin')
      }
    }
    checkAuthAsync()
  }, [router])

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog?page=1&limit=50')
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts)
      } else {
        setError('Failed to load posts')
      }
    } catch (error) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const deletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== postId))
      } else {
        alert('Failed to delete post')
      }
    } catch (error) {
      alert('Network error')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blog Admin</h1>
              <p className="text-gray-600">Welcome, {user?.name || user?.email}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/admin/blog/new"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                New Post
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Posts table */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Posts</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Manage your blog posts
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              {posts.length === 0 ? (
                <li className="px-4 py-4 text-center text-gray-500">
                  No posts found. <Link href="/admin/blog/new" className="text-indigo-600 hover:text-indigo-900">Create your first post</Link>
                </li>
              ) : (
                posts.map((post) => (
                  <li key={post.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-lg font-medium text-gray-900 mr-2">
                            {post.title}
                          </h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {post.summary || 'No summary'}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          Created: {new Date(post.createdAt).toLocaleDateString()}
                          {post.publishedAt && (
                            <span className="ml-4">
                              Published: {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap mt-2">
                          {post.categories.map(({ category }) => (
                            <span key={category.id} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1">
                              {category.name}
                            </span>
                          ))}
                          {post.tags.map(({ tag }) => (
                            <span key={tag.id} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 mr-2 mb-1">
                              #{tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}