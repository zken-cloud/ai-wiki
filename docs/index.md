# Today's Signal

<small>2026-10-15 · 6 things worth knowing · 3 papers · 60 items reviewed</small>

### 🧠 1. [llm-gemini 0.35 Adds Support for Gemini 4 Argon](https://simonwillison.net/2026/Oct/13/llm-gemini/)

Google's new Gemini 4 Argon model is now accessible via the llm CLI tool and API.

<small>Simon Willison · `model`</small>

### 📢 2. [Cloudflare Acquires Deno to Advance Self-Hostable Workers](https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/)

Cloudflare is acquiring Deno to advance self-hostable Workers while sunsetting official Deno runtime development after one year.

<small>Simon Willison · `vendor`</small>

### 🔒 3. [Quantized LLM Supply Chain Risk: GGUF Models Lack Build Verifiability](https://arxiv.org/abs/2610.19498v1)

Audit reveals zero out of 198 top Hugging Face GGUF models can be independently re-derived bit-for-bit due to missing build environment coordinates.

<small>arXiv cs.CR · `security`</small>

### 🔒 4. [CVE-2026-65616 Details Privilege Escalation Vulnerabilities From RL Training](https://arxiv.org/abs/2610.20437v1)

Forensic analysis shows how RL/RLHF training configurations create exploitable privilege escalation vulnerabilities in deployed AI agents.

<small>arXiv cs.CR · `security`</small>

### ⚙️ 5. [vLLM Adds Push-Based RDMA KV Transfer for Disaggregated Inference](https://vllm.ai/blog/2026-10-14-nixl-push-connector)

Pushing KV cache directly to decode memory over RDMA improves prefill-decode disaggregation performance across accelerator clusters.

<small>vLLM Blog · `infra`</small>

### 🔒 6. [Google DeepMind Releases AI Control Roadmap for Agent Threats](https://cloudsecurityalliance.org/articles/i-love-google-s-agentic-ai-security-roadmap-adding-maestro-will-make-it-more-powerful-an-open-letter-to-google)

DeepMind introduces the TRAIT&R taxonomy to treat advanced internal AI agents as potential insider threats.

<small>Cloud Security Alliance · `security`</small>

---

## 📄 Papers worth reading

**[Continuum Attention Replaces Discrete KV Lookups With Memory Curves](https://arxiv.org/abs/2610.20586v1)**

Replaces discrete key-value lookups in Transformer decoders with continuous piecewise linear memory curve integration.

<small>arXiv cs.AI</small>

**[Latent Compaction Uses Test-Time Training for 32x KV Compression](https://arxiv.org/abs/2610.20582v1)**

Uses test-time training to compress document KV caches up to 32x without updating model weights.

<small>arXiv cs.LG</small>

**[Study Shows NO-THINK RL Reasoning Gains Stem From Thinking Leakage](https://arxiv.org/abs/2610.14270)**

Demonstrates that reasoning gains in non-thinking modes reactivate existing thinking abilities rather than learning novel behaviors.

<small>Hugging Face Daily Papers</small>

<small>[All 25 papers from that day →](papers/2026-10-15.md)</small>

---

## Everything else

- 📄 **[Research Papers](papers/index.md)** — <small>25 today</small>
- 🔒 **[AI Security](security/index.md)** — <small>15 today</small>
- ⚙️ **[AI Infrastructure](infra/index.md)** — <small>5 today</small>
- 📢 **[Lab & Vendor News](vendors/index.md)** — <small>15 today</small>

- 🧠 **[Model Tracker](models.md)** — <small>what each lab currently ships</small>
- 🏟️ **[Benchmark Arena](benchmarks.md)** — <small>where models stand on coding & cyber evals</small>
- 📰 **[Full briefing for 2026-10-15](daily/2026-10-15.md)** — <small>the long version</small>
- 🗂️ **[All briefings](daily/index.md)**
- 🕘 **[Past signals](signal/index.md)** — <small>every previous day's brief</small>
- 📡 **[Subscribe (Atom)](feed.xml)** — <small>this brief in your feed reader</small>

---

<small>Search with the box above or press <kbd>/</kbd>. Install this as an app from your browser's menu to read offline.</small>
