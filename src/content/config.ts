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
    role: z.enum(["guest", "speaker", "panelist", "participant"]),
    date: z.date(),
    city: z.string(),
    description: z.string(),
    organizer: z.object({
      name: z.string(),
      logo: z.string().url().nullable().optional(),
    }),
    photos: z
      .array(
        z.union([
          z.string().url(),
          z.string().regex(/^(?:\/|\.\/|\.\.\/|[A-Za-z0-9_\-./]+)$/),
        ]),
      )
      .optional()
      .default([]),
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
