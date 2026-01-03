'use client'

import { EditorContent, useEditor } from '@tiptap/react'

// --- Tiptap Core Extensions ---
import { StarterKit } from '@tiptap/starter-kit'
import { Image } from '@tiptap/extension-image'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TextAlign } from '@tiptap/extension-text-align'
import { Typography } from '@tiptap/extension-typography'
import { Highlight } from '@tiptap/extension-highlight'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { Selection } from '@tiptap/extensions'

// --- Tiptap Node ---
import { ImageUploadNode } from '~/components/tiptap-node/image-upload-node/image-upload-node-extension'
import { HorizontalRule } from '~/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension'
import '~/components/tiptap-node/blockquote-node/blockquote-node.scss'
import '~/components/tiptap-node/code-block-node/code-block-node.scss'
import '~/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss'
import '~/components/tiptap-node/list-node/list-node.scss'
import '~/components/tiptap-node/image-node/image-node.scss'
import '~/components/tiptap-node/heading-node/heading-node.scss'
import '~/components/tiptap-node/paragraph-node/paragraph-node.scss'

import '~/components/tiptap-templates/simple/simple-editor.scss'

export function SimpleViewer({ content }: { content: string }) {
  let parsedContent = ''
  try {
    parsedContent = JSON.parse(content)
  } catch (e) {
    parsedContent = content // Fallback if regular text
  }

  const editor = useEditor({
    editable: false,
    content: parsedContent,
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: true, // Allow clicking links in viewer
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: 'image/*',
        maxSize: 1024 * 1024 * 10, // 10MB
        limit: 3,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'simple-editor-content outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <EditorContent
      editor={editor}
      className="simple-editor-wrapper border-none p-0"
    />
  )
}
