import { Suspense } from 'react'
import { SimpleEditor } from '~/components/tiptap-templates/simple/simple-editor'

export default function Page() {
  return (
    <Suspense>
      <SimpleEditor />
    </Suspense>
  )
}
