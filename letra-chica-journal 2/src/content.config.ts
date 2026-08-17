import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articulos = defineCollection({
  loader: glob({ base: './src/content/articulos', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    author: z.string().default('Letra Chica₁'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    featured: z.boolean().default(false),
    homepageSlot: z.enum(['cover', 'sidebar', 'latest', 'focus', 'none']).default('none'),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { articulos };
