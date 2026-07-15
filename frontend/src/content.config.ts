import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.{md,mdx}",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        author: z.string(),
        category: z.string(),
        image: z.string(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    blog,
};