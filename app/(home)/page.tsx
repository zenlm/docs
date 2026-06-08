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
        <p className="text-lg md:text-xl text-white/55 mb-12 font-light tracking-tight">
          Frontier AI models for code, reasoning, and multimodal understanding
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-medium text-base mb-1.5 text-white/90">zen4-ultra</h3>
            <p className="text-sm text-white/45">1.04T MoE · 384 experts · 256K ctx</p>
          </div>
          <div className="glass-card p-6 rounded-2xl !border-white/20">
            <h3 className="font-medium text-base mb-1.5 text-white/90">zen4-pro-max</h3>
            <p className="text-sm text-white/45">80B MoE · Flagship consumer</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-medium text-base mb-1.5 text-white/90">zen4-coder-flash</h3>
            <p className="text-sm text-white/45">31B MoE · 59.2% SWE-bench</p>
          </div>
        </div>

        <div className="mb-12 p-4 rounded-2xl border border-dashed border-white/10 text-center">
          <p className="text-sm font-medium mb-1 text-white/80">Zen5 Ultra — 2T+ MoDE — Coming Soon</p>
          <p className="text-xs text-white/45">
            The largest open-weight model in history.{' '}
            <Link href="/docs/models#zen5--next-generation" className="underline underline-offset-2 hover:text-white/80 transition">
              Request research access
            </Link>
          </p>
        </div>

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
