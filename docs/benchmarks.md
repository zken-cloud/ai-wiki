# 🏟️ Benchmark Arena

*Where models currently stand. Snapshots of public leaderboards, refreshed on each run — follow the source link for the full board.*

## Freshness at a glance

| Board | Newest entry | Age | Status |
|---|---|---:|---|
| [CyberGym](#cybergym) | 2026-08-03 | 1 day | ✅ current |
| [SWE-rebench](#swe-rebench) | 2026-07-24 | 11 days | ✅ current |
| [ExploitGym](#exploitgym) | 2026-07-13 | 22 days | ✅ current |
| [CyberGym End-to-End](#cybergym-end-to-end) | — | — | ❔ no dates published |

## 💻 Coding

### [SWE-rebench](https://swe-rebench.com/)

*Continuously refreshed SWE-bench-style tasks drawn from new pull requests, so it is contamination-resistant and tracks frontier models within days. Covers Python, Go, Java and Rust; reports cost per instance.*

| Model | Lab | Resolved | $/instance | Model released |
|---|---|---|---|---|
| Fable 5 (high) | anthropic | 64.5% | $4.40 | 2026-06-09 |
| Grok 4.5 (high) | xai | 63.8% | $1.47 | 2026-07-08 |
| Opus 5 (high) | anthropic | 63.4% | $3.47 | 2026-07-24 |
| GLM-5.1 | zhipu | 62.7% | $0.76 | 2026-04-07 |
| gpt-5.5-2026-04-23-xhigh | openai | 62.7% | $2.25 | 2026-04-23 |
| GPT-5.6 Sol (medium) | openai | 62.3% | $0.85 | 2026-06-26 |
| Junie | jetbrains | 60.5% | $1.13 | 2025-12-17 |
| Qwen3.5-397B-A17B | alibaba | 59.9% | $1.18 | 2026-02-15 |
| Step-3.5-Flash | stepfun | 59.6% | $0.14 | 2026-02-01 |
| gpt-5.2-2025-12-11-medium | openai | 59.3% | $0.68 | 2025-12-11 |
| Qwen3.5-27B | alibaba | 58.9% | $0.53 | 2026-02-15 |
| gpt-5.5-2026-04-23-medium | openai | 58.9% | $0.98 | 2026-04-23 |
| Claude Code | anthropic | 58.8% | $2.70 | 2025-11-24 |
| gpt-5.3-codex-xhigh | openai | 58.6% | $0.89 | 2026-02-05 |
| gpt-5.3-codex | openai | 58.2% | $0.40 | 2026-02-05 |

<small>117 models · language split: all · newest model 2026-07-24</small>

## 🛡️ Cybersecurity

### [CyberGym](https://cybergym.io/cybergym/)

*Real-world vulnerability discovery by AI agents (level 1).*

| Agent | Model | Score@10 | Date |
|---|---|---|---|
| MDASH | Multi-model (GPT-5.4, Claude Opus 4.6, Claude Sonnet 4.6) | 0.92 | 2026-06-17 |
| Wiz Atlas | Multi-model (GPT-5.5, Claude Opus 4.6) | 0.909 | 2026-07-27 |
| Crystalline (with a pre-seeded, test-time-updated knowledge base) | Claude Opus 4.6 | 0.896 | 2026-06-08 |
| Sangfor AI | GLM-5.2 | 0.8633 | 2026-07-21 |
| OpenAI Agent | GPT-5.5-Cyber | 0.856 | 2026-06-22 |
| Velldepth Agent | XekRung | 0.8534 | 2026-08-03 |
| Xuanwu Atuin AI | GLM-5.2 | 0.848 | 2026-07-22 |
| Anthropic Agent | Claude Mythos Preview | 0.831 | 2026-04-07 |
| OpenAI Agent | GPT-5.5 | 0.818 | 2026-04-23 |
| OpenAI Agent | GPT-5.4 | 0.79 | 2026-04-23 |
| DeepSeek Agent | DeepSeek-V4-Flash | 0.767 | 2026-07-31 |
| MopMonk Agent | MiniMax M3 | 0.731 | 2026-06-28 |

<small>49 entries on level1</small>

### [CyberGym End-to-End](https://cybergym.io/cybergym-e2e/)

*Patch-and-exploit success under a fixed time and cost budget.*

| Model | Harness | Patch only | S1 | S2 | Budget |
|---|---|---|---|---|---|
| GPT-5.4 | Codex | 87.1% | 67.9% | 66.2% | $10 / 90 min |
| Claude Opus 4.6 | Claude Code | 85.8% | 66.3% | 65% | No cost cap / 90 min |
| Claude Opus 4.6 | Claude Code | 84.1% | 39.7% | 39.5% | $10 / 90 min |
| Gemini 3.1 Pro | Gemini CLI | 83% | 47.4% | 44.3% | $10 / 90 min |
| Claude Opus 4.5 | Claude Code | 82.3% | 24.9% | 21.9% | $10 / 90 min |
| Gemini 3 Pro | Gemini CLI | 77.6% | 29.6% | 23.6% | $10 / 90 min |
| Claude Sonnet 4.5 | Claude Code | 77.4% | 18.1% | 12.1% | $10 / 90 min |
| Claude Sonnet 4.5 | OpenHands | 68.9% | 9.3% | 7.2% | $10 / 90 min |
| GPT-5.2 | Codex | 58.5% | 30.2% | 22% | $10 / 90 min |

<small>9 entries · upstream publishes no dates</small>

### [ExploitGym](https://cybergym.io/exploitgym/)

*Exploit-development capability on real userspace targets.*

| Model | Agent | Userspace | Date | Eval |
|---|---|---|---|---|
| GPT-5.6 Sol (reasoning max) | Codex CLI | 149 | 2026-07-13 | 6h timeout |
| Claude Mythos Preview (Results obtained in collaboration with Anthropic.) | Claude Code | 107 | 2026-05-13 | 2h timeout |
| GPT-5.5 (OpenAI's default safety filters block all GPT-5.5 exploit attempts under default prompting.) | Codex CLI | 70 | 2026-06-16 | 2h timeout |
| GPT-5.4 | Codex CLI | 38 | 2026-06-16 | 2h timeout |
| Claude Opus 4.6 (Results obtained in collaboration with Anthropic.) | Claude Code | 12 | 2026-06-16 | 2h timeout |
| Gemini 3.1 Pro | Gemini CLI | 10 | 2026-05-13 | 2h timeout |
| Muse Spark 1.1 (helpful-only versoin) | Meta Agent (off-the-shelf agent harness) | 4 | 2026-07-09 | 4h timeout |
| Claude Opus 4.7 | Claude Code | 4 | 2026-06-16 | 2h timeout |
| GLM-5.1 | Claude Code | 4 | 2026-06-16 | 2h timeout |

<small>9 entries</small>

---

<small>Snapshot taken 2026-08-04 09:08 UTC. Leaderboards are maintained by their respective authors; figures are reproduced as published.</small>
