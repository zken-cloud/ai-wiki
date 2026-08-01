# AI Wiki

Automatically curated daily digest of AI research, security, infrastructure,
and lab announcements.

**📖 Read it: https://zken-cloud.github.io/ai-wiki/**

Everything here is collected from public sources, triaged for relevance, and
summarised by [zken-cloud/ai-wiki-app](https://github.com/zken-cloud/ai-wiki-app).

## Layout

| Path | Contents |
|---|---|
| `docs/daily/` | Cross-category briefing, one page per day |
| `docs/papers/` | Research papers (Hugging Face daily + arXiv cs.AI/LG/CL/CR) |
| `docs/security/` | AI security news and research |
| `docs/infra/` | AI infrastructure and systems |
| `docs/vendors/` | Anthropic, OpenAI, Google, Hugging Face and others |
| `data/items/` | Machine-readable JSON export, one file per day |
| `data/seen.json` | Dedupe ledger — prevents re-publishing an item |

## Caveats

Summaries are machine-generated. They are meant to help you decide **what to
read**, not to substitute for reading it. Always follow the link to the source
before relying on anything here.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```
