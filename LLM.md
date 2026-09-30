# docs — docs.zenlm.org

**Org:** zenlm · **Origin:** https://github.com/zenlm/docs · **Site:** https://docs.zenlm.org

The Zen LM documentation: Next.js static export on Hanzo Docs (fumadocs). Zen LM
is the open model family of Zoo Labs Foundation, a 501(c)(3) non-profit.

## The story

Two jobs lead: agentic coding that runs on your own machine, and marketing work.
Zen 6 and Zen 6 Flash are available now (`zen6`, `zen6-flash`); their numbers come
from the two Hugging Face cards only (`content/docs/models/zen6.mdx`). Zen 7 is a
research preview with "Request access" → https://hanzo.ai/research-access. Zen 5,
Zen 4 and Zen 3 are earlier generations; Zen 5.8 and zen6-coder are retired and
never listed.

## Build

```bash
npx pnpm@11 install --frozen-lockfile   # CI uses pnpm 11; pnpm 9 rejects pnpm-workspace.yaml
npm run build                            # next build → scripts/check-zen.mjs out
```

`scripts/check-zen.mjs` reads every built page and fails on a name from
`zen.upstream` outside a `data-upstream` element. Upstream names belong only in
an Architecture value (the loader string) and a License & attribution section.

Static files the site serves live in `public/`. Files at the repo root are not
served; the root once held a stale copy of the zenlm.org build, removed
2026-09-30.

## Serving

docs.zenlm.org is served by the edge's `staticFiles` middleware from
`s3://hanzo-sites/zen/docs` (universe `infra/aws/routes/sites.yaml`, route
`docs-zenlm-org`), a copy of the Pages build. `.github/workflows/pages.yml` still
deploys to GitHub Pages on push, but no DNS name points at Pages, and its runner
label `zenlm-build-linux-amd64` has no runner in the zenlm org. A change reaches
docs.zenlm.org only when `out/` is published into that prefix.
