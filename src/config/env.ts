import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

const envParsed = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!envParsed.success) {
  throw new Error("❌ Biến môi trường không hợp lệ");
}

export const env = envParsed.data;
