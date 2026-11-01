# Today's Signal

<small>2026-11-01 · 4 things worth knowing · 3 papers · 37 items reviewed</small>

### 🔒 1. [ChatGPT Vulnerability Allowed Account Takeover via Malicious Share URLs](https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/)

Parameter Labs identified an attack chain in ChatGPT that permitted full account compromise and exfiltration via shared context links.

<small>Simon Willison · `security`</small>

### 🔒 2. [Activation Probing Detects Multi-Agent Secret Leaks Before Generation Begins](https://arxiv.org/abs/2610.40588v1)

Linear probes on intermediate model activations can catch target agents right before they leak secrets to peers, outperforming output-level LLM monitors.

<small>arXiv cs.AI · `security`</small>

### ⚙️ 3. [Speculative Decoding Energy Savings Invert Under Large Production Batches](https://arxiv.org/abs/2610.40287v1)

Benchmarking reveals that speculative decoding turns from an energy saver into a net energy loss as batch sizes scale or acceptance rates drop.

<small>arXiv cs.AI · `infra`</small>

### 🔒 4. [BPE Tokenizers Leak Pre-Training Dataset Membership via Rare Tokens](https://arxiv.org/abs/2610.39919v1)

Rare byte-pair encoding tokens act as persistent artifacts that reveal training set membership without requiring direct model weight access.

<small>arXiv cs.CL · `security`</small>

---

## 📄 Papers worth reading

**[Cognitive Memory Toolset Cuts Agent Token Usage 6x](https://arxiv.org/abs/2610.40350v1)**

Enables long-horizon LLM agents to self-checkpoint progress and flush past context without degrading task success.

<small>arXiv cs.CL</small>

**[Glance Unifies Generation and Reranking Using Shared Prefill Adapters](https://arxiv.org/abs/2610.40454v1)**

Eliminates separate reranker models by scoring candidate passages directly inside the main generator prefill phase.

<small>arXiv cs.CL</small>

**[Synthetic Pre-Pretraining Offers No Benefit Over Pure Natural Language](https://arxiv.org/abs/2610.40051v1)**

Demonstrates that compute-matched synthetic pre-training fails to outperform standard pre-training when accounting for baseline weight initialization.

<small>arXiv cs.CL</small>

<small>[All 25 papers from that day →](papers/2026-11-01.md)</small>

---

## Everything else

- 📄 **[Research Papers](papers/index.md)** — <small>25 today</small>
- 🔒 **[AI Security](security/index.md)** — <small>7 today</small>
- ⚙️ **[AI Infrastructure](infra/index.md)** — <small>1 today</small>
- 📢 **[Lab & Vendor News](vendors/index.md)** — <small>4 today</small>

- 🧠 **[Model Tracker](models.md)** — <small>what each lab currently ships</small>
- 🏟️ **[Benchmark Arena](benchmarks.md)** — <small>where models stand on coding & cyber evals</small>
- 📰 **[Full briefing for 2026-11-01](daily/2026-11-01.md)** — <small>the long version</small>
- 🗂️ **[All briefings](daily/index.md)**
- 🕘 **[Past signals](signal/index.md)** — <small>every previous day's brief</small>
- 📡 **[Subscribe (Atom)](feed.xml)** — <small>this brief in your feed reader</small>

---

<small>Search with the box above or press <kbd>/</kbd>. Install this as an app from your browser's menu to read offline.</small>
