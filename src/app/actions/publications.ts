'use server'

import { db } from '~/drizzle'
import { posts, type NewPost } from '~/db/schema'
import { desc, eq } from 'drizzle-orm'
import { generateKebabCase } from '~/lib/utils'

export async function createPublication(data: { title: string; content: string }) {
    const slug = generateKebabCase(data.title)
    // Check if slug exists and append random string if needed
    const existing = await db.query.posts.findFirst({
        where: eq(posts.slug, slug),
    })

    const finalSlug = existing ? `${slug}-${Math.random().toString(36).slice(2, 7)}` : slug

    await db.insert(posts).values({
        title: data.title,
        content: data.content,
        slug: finalSlug,
        published: true, // Auto-publish for now as per simple flow
    })
}

export async function getPublications() {
    return await db.query.posts.findMany({
        orderBy: [desc(posts.created_at)],
        where: eq(posts.published, true),
    })
}

export async function getPublication(slug: string) {
    return await db.query.posts.findFirst({
        where: eq(posts.slug, slug),
    })
}
