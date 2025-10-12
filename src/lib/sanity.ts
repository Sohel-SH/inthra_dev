import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to specify API version
  useCdn: false, // set to `false` if you want to ensure fresh data
});