# Today's Signal

<small>2026-11-10 · 8 things worth knowing · 3 papers · 54 items reviewed</small>

### 📢 1. [DeepMind introduces AlphaProof Code, generating 3M Lean proof lines for Signal](https://deepmind.google/blog/introducing-alphaproof-code/)

Demonstrates deep automated formal verification of production-grade cryptographic implementations.

<small>Google DeepMind · `vendor`</small>

### 🧠 2. [Anthropic releases Claude Fable 5.2 and Mythos 5.2 models on AWS](https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/)

Brings Anthropic's newest autonomous reasoning and technical workload models to AWS enterprise infrastructure.

<small>AWS Machine Learning Blog · `model`</small>

### 🧠 3. [Meta launches Muse Ember 1.0 with 1M-token context for agent subtasks](https://simonwillison.net/2026/Nov/10/muse-ember/)

Provides an efficient, small reasoning model specifically optimized for low-latency tool calls and routing.

<small>Simon Willison · `model`</small>

### 📢 4. [OpenAI deploys Control Room system to forcibly halt hazardous research workloads](https://openai.com/index/control-room)

Establishes centralized infrastructure kill-switches to isolate and terminate training or inference during safety incidents.

<small>OpenAI · `vendor`</small>

### 🔒 5. [Microsoft AI vulnerability scanner uncovers memory safety bugs in Rust core](https://www.microsoft.com/en-us/security/blog/2026/11/09/forge-lab-uses-agentic-tools-to-identify-memory-safety-issues-in-rust/)

Demonstrates that agentic systems can find real, non-trivial soundness issues in heavily audited core systems libraries.

<small>Microsoft Security Blog · `security`</small>

### 🔒 6. [Coding agents propagate existing repo vulnerabilities into new code](https://arxiv.org/abs/2611.11455v1)

Quantifies the risk of autonomous coding tools amplifying legacy vulnerable contexts in C/C++ projects by up to 35%.

<small>arXiv cs.CR · `security`</small>

### 🔒 7. [LoRA backdoor defenses fail under fine-tuning despite zero-percent initial attack rate](https://arxiv.org/abs/2611.12807v1)

Reveals that subspace projection merely suppresses triggers, allowing full backdoor reactivation after just two fine-tuning epochs.

<small>arXiv cs.CR · `security`</small>

### ⚙️ 8. [Meta and community extend LLDB to debug unified CPU and GPU sessions](https://engineering.fb.com/2026/11/09/developer-tools/extending-lldb-to-debug-applications-that-span-cpus-and-gpus/)

Eliminates context switching in low-level AI engineering by bridging CPU and accelerator execution inside a single lldb session.

<small>Meta Engineering · `infra`</small>

---

## 📄 Papers worth reading

**[FP4 pretraining requires 1.52x more exposures than BF16 for rare facts](https://arxiv.org/abs/2611.12832v1)**

Proves that 4-bit floating-point quantization degrades rare-fact memorization even when validation loss curves look identical.

<small>arXiv cs.LG</small>

**[Internal model representations and interpretability probes transfer across LLM architectures](https://arxiv.org/abs/2611.12675v1)**

Shows that refusal vectors and linear probes can be mapped between distinct models using purely unlabeled prompt alignments.

<small>arXiv cs.AI</small>

**[Bfloat16 rounding errors in recurrent states bloat hybrid reasoning outputs](https://arxiv.org/abs/2611.12127v1)**

Identifies that round-to-nearest in bfloat16 recurrent states increases reasoning trajectory lengths, fixable with stochastic rounding.

<small>arXiv cs.CL</small>

<small>[All 25 papers from that day →](papers/2026-11-10.md)</small>

---

## Everything else

- 📄 **[Research Papers](papers/index.md)** — <small>25 today</small>
- 🔒 **[AI Security](security/index.md)** — <small>15 today</small>
- ⚙️ **[AI Infrastructure](infra/index.md)** — <small>6 today</small>
- 📢 **[Lab & Vendor News](vendors/index.md)** — <small>8 today</small>

- 🧠 **[Model Tracker](models.md)** — <small>what each lab currently ships</small>
- 🏟️ **[Benchmark Arena](benchmarks.md)** — <small>where models stand on coding & cyber evals</small>
- 📰 **[Full briefing for 2026-11-10](daily/2026-11-10.md)** — <small>the long version</small>
- 🗂️ **[All briefings](daily/index.md)**
- 🕘 **[Past signals](signal/index.md)** — <small>every previous day's brief</small>
- 📡 **[Subscribe (Atom)](feed.xml)** — <small>this brief in your feed reader</small>

---

<small>Search with the box above or press <kbd>/</kbd>. Install this as an app from your browser's menu to read offline.</small>
