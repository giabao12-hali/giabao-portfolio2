'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import RichTextEditor from '@/components/admin/rich-text-editor'

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
  content: string
  summary: string | null
  image: string | null
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

interface PostFormData {
  title: string
  content: string
  summary: string
  image: string
  published: boolean
  categoryIds: string[]
  tagIds: string[]
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<User | null>(null)
  const [post, setPost] = useState<Post | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    summary: '',
    image: '',
    published: false,
    categoryIds: [],
    tagIds: []
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const checkAuthAndLoadDataAsync = async () => {
      try {
        const authResponse = await fetch('/api/auth/me')
        if (!authResponse.ok) {
          router.push('/admin')
          return
        }

        const authData = await authResponse.json()
        setUser(authData.user)

        // Load post data
        const postResponse = await fetch(`/api/admin/blog/${params.id}`)
        if (!postResponse.ok) {
          if (postResponse.status === 404) {
            setError('Post not found')
          } else {
            setError('Failed to load post')
          }
          setLoading(false)
          return
        }

        const postData = await postResponse.json()
        setPost(postData)

        // Set form data
        setFormData({
          title: postData.title,
          content: postData.content,
          summary: postData.summary || '',
          image: postData.image || '',
          published: postData.published,
          categoryIds: postData.categories.map((c: any) => c.category.id),
          tagIds: postData.tags.map((t: any) => t.tag.id)
        })

        // Load categories and tags
        const [categoriesResponse, tagsResponse] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/tags')
        ])

        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json()
          setCategories(categoriesData)
        }

        if (tagsResponse.ok) {
          const tagsData = await tagsResponse.json()
          setTags(tagsData)
        }

        setLoading(false)
      } catch (error) {
        setError('Network error')
        setLoading(false)
      }
    }
    checkAuthAndLoadDataAsync()
  }, [params.id, router])



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !post) return

    setSaving(true)
    setError('')

    try {
      const response = await fetch(`/api/blog/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/blog')
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to update post')
      }
    } catch (error) {
      setError('Network error')
    } finally {
      setSaving(false)
    }
  }

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        categoryIds: [...prev.categoryIds, categoryId]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        categoryIds: prev.categoryIds.filter(id => id !== categoryId)
      }))
    }
  }

  const handleTagChange = (tagId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        tagIds: [...prev.tagIds, tagId]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        tagIds: prev.tagIds.filter(id => id !== tagId)
      }))
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (error && !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-red-600 mb-4">{error}</div>
          <Link
            href="/admin/blog"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Back to Posts
          </Link>
        </div>
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
              <h1 className="text-3xl font-bold text-gray-900">Edit Post</h1>
              <p className="text-gray-600">Editing: {post?.title}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/admin/blog"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Back to Posts
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Post Details</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Basic information about your blog post.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                        Summary
                      </label>
                      <textarea
                        name="summary"
                        id="summary"
                        rows={3}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="Brief description of your post..."
                        value={formData.summary}
                        onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Featured Image URL
                      </label>
                      <input
                        type="url"
                        name="image"
                        id="image"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="https://example.com/image.jpg"
                        value={formData.image}
                        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Content</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Edit your blog post content.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <RichTextEditor
                    content={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    placeholder="Start writing your post..."
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Categories & Tags</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Organize your post with categories and tags.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <label className="text-base font-medium text-gray-900">Categories</label>
                      <div className="mt-4 space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <input
                              id={`category-${category.id}`}
                              name="categories"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={formData.categoryIds.includes(category.id)}
                              onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                            />
                            <label htmlFor={`category-${category.id}`} className="ml-3 text-sm text-gray-700">
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="text-base font-medium text-gray-900">Tags</label>
                      <div className="mt-4 space-y-2">
                        {tags.map((tag) => (
                          <div key={tag.id} className="flex items-center">
                            <input
                              id={`tag-${tag.id}`}
                              name="tags"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              checked={formData.tagIds.includes(tag.id)}
                              onChange={(e) => handleTagChange(tag.id, e.target.checked)}
                            />
                            <label htmlFor={`tag-${tag.id}`} className="ml-3 text-sm text-gray-700">
                              {tag.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Publishing</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose whether to publish or save as draft.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="flex items-center">
                    <input
                      id="published"
                      name="published"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    />
                    <label htmlFor="published" className="ml-3 text-sm text-gray-700">
                      Published
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Link
                href="/admin/blog"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving || !formData.title.trim() || !formData.content.trim()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Update Post'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}