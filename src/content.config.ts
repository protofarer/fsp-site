import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  // markdown front matter as fields
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      // titleImage: image().optional(),
      blurb: z.string().optional(),
    }),
});

const coaches = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coaches' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.string(),
      coachImage: image().optional(),
      blurb: z.string().optional(),
      coachBlurbImage: image().optional(),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    title: z.string(),
    heroMiddleLine: z.string(),
  }),
});

export const collections = { services, coaches, home };
