import { DocsLayout } from '@hanzo/docs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import Enso from '../components/Enso';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="inline-flex items-center gap-2 font-semibold text-base">
            <Enso size={26} className="enso-glow" />
            <span className="sheen-text">Zen LM</span>
          </span>
        ),
        url: '/',
      }}
      sidebar={{
        banner: (
          <div className="p-3 rounded-lg bg-primary/10 text-sm">
            <strong>Zen5 Ultra</strong> — 2T+ MoDE — <a href="/docs/models#zen5--next-generation" className="underline">Research Preview</a>
          </div>
        ),
      }}
      links={[
        { text: 'HuggingFace', url: 'https://huggingface.co/zenlm' },
        { text: 'GitHub', url: 'https://github.com/zenlm' },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
