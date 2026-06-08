import { createMDX } from '@hanzo/docs-mdx/next';

const withMDX = createMDX({ outDir: '.docs' });

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default withMDX(config);
