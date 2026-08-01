# 🏟️ Benchmark Arena

*Where models currently stand. Snapshots of public leaderboards, refreshed on each run — follow the source link for the full board.*

## Freshness at a glance

| Board | Newest entry | Age | Status |
|---|---|---:|---|
| [CyberGym](#cybergym) | 2026-07-31 | 1 day | ✅ current |
| [ExploitGym](#exploitgym) | 2026-07-13 | 19 days | ✅ current |
| [SWE-bench (bash-only)](#swe-bench-bash-only) | 2026-02-26 | 156 days | ⚠️ out of date |
| [SWE-bench Verified](#swe-bench-verified) | 2025-12-15 | 229 days | ⚠️ out of date |
| [Aider Polyglot](#aider-polyglot) | 2025-10-03 | 302 days | ⚠️ out of date |
| [CyberGym End-to-End](#cybergym-end-to-end) | — | — | ❔ no dates published |

## 💻 Coding

### [SWE-bench (bash-only)](https://www.swebench.com/)

*Real GitHub issues resolved with only shell access — the freshest coding board, and the only one reporting cost per instance. Python repos.*

!!! warning "Out of date"
    STALE: newest entry is 156 days old — treat these as historical, not the current state of the art.

| Model | Resolved | $/instance | Date |
|---|---|---|---|
| Claude 4.5 Opus (high reasoning) | 76.8% | $0.75 | 2026-02-17 |
| Gemini 3 Flash (high reasoning) | 75.8% | $0.36 | 2026-02-17 |
| MiniMax M2.5 (high reasoning) | 75.8% | $0.07 | 2026-02-17 |
| Claude Opus 4.6 | 75.6% | $0.55 | 2026-02-17 |
| Claude 4.5 Opus medium (20251101) | 74.4% | $0.72 | 2025-11-24 |
| Gemini 3 Pro Preview (2025-11-18) | 74.2% | $0.46 | 2025-11-18 |
| GLM-5 (high reasoning) | 72.8% | $0.53 | 2026-02-17 |
| GPT-5-2 (high reasoning) | 72.8% | $0.47 | 2026-02-17 |
| GPT 5.2 Codex | 72.8% | $0.45 | 2026-02-19 |
| GPT-5.2 (2025-12-11) (high reasoning) | 71.8% | $0.52 | 2025-12-11 |
| Claude 4.5 Sonnet (high reasoning) | 71.4% | $0.66 | 2026-02-17 |
| Kimi K2.5 (high reasoning) | 70.8% | $0.15 | 2026-02-17 |

<small>25 submissions · newest 2026-02-26</small>

### [SWE-bench Verified](https://www.swebench.com/)

*The most-cited coding benchmark: 500 human-validated GitHub issues. Python repos only.*

!!! warning "Out of date"
    STALE: newest entry is 229 days old — treat these as historical, not the current state of the art.

| Submission | Resolved | Count | Date |
|---|---|---|---|
| Sonar Foundation Agent + Claude 4.5 Opus | 79.2% | 396/500 | 2025-12-05 |
| live-SWE-agent + Claude 4.5 Opus medium (20251101) | 79.2% | 396/500 | 2025-12-15 |
| TRAE + Doubao-Seed-Code | 78.8% | 394/500 | 2025-09-28 |
| 20251127_openhands_claude-opus-4-5 | 77.6% | 388/500 | 2025-11-27 |
| live-SWE-agent + Gemini 3 Pro Preview (2025-11-18) | 77.4% | 387/500 | 2025-11-20 |
| Atlassian Rovo Dev (2025-09-02) | 76.8% | 384/500 | 2025-09-02 |
| ACoder | 76.4% | 382/500 | 2025-08-19 |
| Warp | 75.6% | 378/500 | 2025-09-01 |
| Sonar Foundation Agent + Claude 4.5 Sonnet | 74.8% | 374/500 | 2025-11-03 |
| JoyCode + Claude 4 Sonnet + GPT-4.1 | 74.6% | 373/500 | 2025-09-15 |
| 20251015_Prometheus_v1.2.1_gpt5 | 74.4% | 372/500 | 2025-10-15 |
| Salesforce AI Research SAGE (OpenHands) | 73.8% | 369/500 | 2025-11-03 |

<small>25 of the 25 most recent submissions · newest 2025-12-15</small>

### [Aider Polyglot](https://aider.chat/docs/leaderboards/)

*The only multi-language board here (C++, Go, Java, JS, Python, Rust) — kept for that reason despite being badly out of date.*

!!! warning "Out of date"
    STALE: newest entry is 302 days old — treat these as historical, not the current state of the art.

| Model | Pass rate | Well-formed edits | Date |
|---|---|---|---|
| gpt-5 (high) | 88% | 91.6% | 2025-08-23 |
| gpt-5 (medium) | 86.7% | 88.4% | 2025-08-25 |
| o3-pro (high) | 84.9% | 97.8% | 2025-06-28 |
| gemini-2.5-pro-preview-06-05 (32k think) | 83.1% | 99.6% | 2025-06-06 |
| o3 (high) | 81.3% | 94.7% | 2025-06-25 |
| gpt-5 (low) | 81.3% | 86.7% | 2025-08-25 |
| grok-4 (high) | 79.6% | 97.3% | 2025-07-11 |
| gemini-2.5-pro-preview-06-05 (default think) | 79.1% | 100% | 2025-06-06 |
| o3 (high) + gpt-4.1 | 78.2% | 100% | 2025-06-27 |
| Gemini 2.5 Pro Preview 05-06 | 76.9% | 97.3% | 2025-05-07 |

<small>69 entries · newest 2025-10-03</small>

## 🛡️ Cybersecurity

### [CyberGym](https://cybergym.io/cybergym/)

*Real-world vulnerability discovery by AI agents (level 1).*

| Agent | Model | Score@10 | Date |
|---|---|---|---|
| Wiz Atlas | Multi-model (GPT-5.5, Claude Opus 4.6) | 0.909 | 2026-07-27 |
| Crystalline (with a pre-seeded, test-time-updated knowledge base) | Claude Opus 4.6 | 0.896 | 2026-06-08 |
| MDASH | Multi-model (GPT-5.4, Claude Opus 4.6, Claude Sonnet 4.6) | 0.8845 | 2026-05-12 |
| Sangfor AI | GLM-5.2 | 0.8633 | 2026-07-21 |
| OpenAI Agent | GPT-5.5-Cyber | 0.856 | 2026-06-22 |
| Xuanwu Atuin AI | GLM-5.2 | 0.848 | 2026-07-22 |
| Anthropic Agent | Claude Mythos Preview | 0.831 | 2026-04-07 |
| OpenAI Agent | GPT-5.5 | 0.818 | 2026-04-23 |
| OpenAI Agent | GPT-5.4 | 0.79 | 2026-04-23 |
| DeepSeek Agent | DeepSeek-V4-Flash | 0.767 | 2026-07-31 |
| MopMonk Agent | MiniMax M3 | 0.731 | 2026-06-28 |
| Whitzard \(白泽\) | GLM-5.1-FP8 | 0.689 | 2026-07-21 |

<small>47 entries on level1</small>

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

<small>Snapshot taken 2026-08-01 16:57 UTC. Leaderboards are maintained by their respective authors; figures are reproduced as published.</small>
