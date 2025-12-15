import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    readTime: z.string(),
    tags: z.array(z.string()).default([]),
    coverUrl: z.string().url().optional(),
  }),
});

export const collections = { articles };
