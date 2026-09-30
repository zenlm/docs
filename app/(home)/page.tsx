import Link from 'next/link';
import Enso from '../components/Enso';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      <div className="max-w-4xl text-center">
        <Enso size={104} className="enso-glow mx-auto mb-8" />
        <h1 className="sheen-text text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          Zen LM
        </h1>
        <p className="text-lg md:text-xl text-white/55 mb-4 font-light tracking-tight">
          Open models for two jobs: agentic coding that runs on your own machine, and marketing work.
        </p>
        <p className="text-sm md:text-base text-white/45 mb-12 font-light">
          Zen LM is the open model family of Zoo Labs Foundation, a 501(c)(3) non-profit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Link href="/docs/models/zen6" className="glass-card p-6 rounded-2xl !border-white/20 block">
            <h3 className="font-medium text-base mb-1.5 text-white/90">Zen 6</h3>
            <p className="text-sm text-white/45">Available now · 27B dense · text, images and video · 1M context with YaRN</p>
          </Link>
          <Link href="/docs/models/zen6#zen-6-flash" className="glass-card p-6 rounded-2xl block">
            <h3 className="font-medium text-base mb-1.5 text-white/90">Zen 6 Flash</h3>
            <p className="text-sm text-white/45">Available now · ternary 27B in 5.95 GB · reads images · fits a laptop</p>
          </Link>
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-medium text-base mb-1.5 text-white/90">Zen 7</h3>
            <p className="text-sm text-white/45">
              Research preview · no weights yet ·{' '}
              <a href="https://hanzo.ai/research-access" className="underline underline-offset-2 hover:text-white/80 transition">
                Request access
              </a>
            </p>
          </div>
        </div>

        <p className="mb-12 text-xs text-white/45">
          Call <code>zen6</code> and <code>zen6-flash</code> on api.hanzo.ai. The earlier generations, Zen 5, Zen 4 and
          Zen 3, are in the <Link href="/docs/models" className="underline underline-offset-2 hover:text-white/80 transition">model docs</Link>.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/docs"
            className="btn-solid px-6 py-3 rounded-xl font-medium"
          >
            Read Docs
          </Link>
          <Link
            href="https://huggingface.co/zenlm"
            className="btn-glass px-6 py-3 rounded-xl font-medium text-white/85"
          >
            HuggingFace
          </Link>
          <Link
            href="https://github.com/zenlm"
            className="btn-glass px-6 py-3 rounded-xl font-medium text-white/85"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
