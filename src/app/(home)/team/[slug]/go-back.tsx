'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const GoBackButton = () => {
  const router = useRouter()
  return (
    <div className="container mx-auto px-6 pt-32 pb-8 md:pt-40">
      <button
        onClick={() => router.back()}
        className="text-muted-foreground hover:text-primary flex w-fit items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Team
      </button>
    </div>
  )
}

export default GoBackButton
