'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) {
    return null
  }

  return (
    <div className="border border-gray-300 rounded-md">
      {/* Toolbar */}
      <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('bold') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('italic') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('strike') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Strike
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('code') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Code
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          H3
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('bulletList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('orderedList') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('codeBlock') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Code Block
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 text-sm border rounded ${
            editor.isActive('blockquote') ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
          }`}
        >
          Quote
        </button>
      </div>

      {/* Editor */}
      <div className="min-h-[300px]">
        <EditorContent 
          editor={editor} 
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}