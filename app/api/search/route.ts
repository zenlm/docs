import { source } from '@/lib/source';
import { createFromSource } from '@hanzo/docs-core/search/server';

// Static export: emit a prebuilt search index at build time.
export const revalidate = false;
export const dynamic = 'force-static';

export const { GET } = createFromSource(source);
