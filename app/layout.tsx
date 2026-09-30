import './global.css';
import { RootProvider } from '@hanzo/docs-base-ui/provider/next';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | Zen LM',
    default: 'Zen LM Documentation - Open Models for Agentic Coding and Marketing Work',
  },
  description: 'Documentation for Zen LM, the open model family of Zoo Labs Foundation, a 501(c)(3) non-profit. Zen 6 and Zen 6 Flash are available now; Zen 7 is in research preview.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
