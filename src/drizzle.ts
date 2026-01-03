import * as schema from "./db/schema"
import { neon } from "@neondatabase/serverless"
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http"
import { env } from "./env"

let _db: NeonHttpDatabase<typeof schema> | null = null

function getDb(): NeonHttpDatabase<typeof schema> {
    if (!_db) {
        const databaseUrl = env.DATABASE_URL
        if (!databaseUrl) {
            throw new Error(
                "DATABASE_URL environment variable is not set. Please check your .env file."
            )
        }
        const sql = neon(databaseUrl)
        _db = drizzle(sql, { schema })
    }
    return _db
}

export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
    get(_, prop) {
        return getDb()[prop as keyof NeonHttpDatabase<typeof schema>]
    },
})