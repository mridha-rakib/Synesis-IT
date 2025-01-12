import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URI: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI,
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
});
