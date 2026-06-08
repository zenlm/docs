import { createMDX } from '@hanzo/docs-mdx/next';

// TEMPORARY: pin outDir until the published @hanzo/docs-mdx ships the new
// `.docs` default (fixed in hanzoai/docs branch fix/default-outdir-dotdocs).
// Once released, this becomes plain `createMDX()`.
const withMDX = createMDX({ outDir: '.docs' });

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
