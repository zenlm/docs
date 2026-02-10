import './global.css';
import { RootProvider } from '@hanzo/docs-base-ui/provider/next';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | Zen4',
    default: 'Zen4 Documentation - Open Foundation Models',
  },
  description: 'Zen4 model family documentation. Consumer, Coder, and Ultra tiers from 4B to 1T+ parameters by Zen LM and Hanzo AI.',
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
