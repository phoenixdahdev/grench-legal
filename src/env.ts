import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
    server: {
        DATABASE_URL: z.url(),
    },
    experimental__runtimeEnv: process.env
});