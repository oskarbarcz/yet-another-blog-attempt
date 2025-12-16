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

// Events collection
const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // event name
    role: z.enum(["guest", "speaker", "panelist"]),
    date: z.date(),
    city: z.string(),
    description: z.string(),
    organizer: z.object({
      name: z.string(),
      // Logo may be null or omitted entirely
      logo: z.string().url().nullable().optional(),
    }),
    photos: z.array(z.string().url()).optional().default([]),
    links: z
      .object({
        // Allow internal article links (e.g., /articles/my-post) or full URLs
        article: z
          .union([z.string().url(), z.string().regex(/^\//)])
          .optional(),
        youtube: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        facebook: z.string().url().optional(),
        other: z.string().url().optional(),
      })
      .partial()
      .optional(),
  }),
});

export const collections = { articles, events };
