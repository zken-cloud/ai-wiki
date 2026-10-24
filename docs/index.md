# Today's Signal

<small>2026-10-24 · 6 things worth knowing · 3 papers · 50 items reviewed</small>

### 🔒 1. [LiteLLM PyPI package compromised to execute credential theft on startup](https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/)

A supply chain attack against LiteLLM version 1.107.0 uses Python startup hooks to automatically steal credentials upon interpreter initialization.

<small>Microsoft Security Blog · `security`</small>

### 📢 2. [Moonshot launches Kimi K3.1 Pro with open weights scheduled for November](https://simonwillison.net/2026/Oct/23/kimi-k31-pro/)

Moonshot introduced Kimi K3.1 Pro via API alongside a high-speed variant and committed to releasing open weights by November 4, 2026.

<small>Simon Willison · `vendor`</small>

### 📢 3. [OpenAI details offline environment isolation for frontier model training](https://openai.com/index/securing-our-frontier-model-training-environment)

OpenAI outlined updated security protocols for training frontier models, shifting to isolated offline environments and high-compute red-teaming.

<small>OpenAI · `vendor`</small>

### ⚙️ 4. [vLLM optimizes GLM-5.3 serving for 1M-token contexts on 16 H200s](https://vllm.ai/blog/2026-10-23-glm53-part2-pcp-dcp-hisparse)

Combining Context Parallelism techniques with Hybrid HiSparse enables efficient long-context prefill and decode for 1M-token serving.

<small>vLLM Blog · `infra`</small>

### 📢 5. [OpenAI details Habitat storage architecture supporting 1B ChatGPT users](https://openai.com/index/scaling-storage-one-billion-users-part-two)

Multi-tenancy, global caching, and Azure Cosmos DB integration delivered a 12x read speedup for ChatGPT online state storage.

<small>OpenAI · `vendor`</small>

### ⚙️ 6. [NVIDIA TensorRT 11.1 adds Global Performance Tuner across build routes](https://developer.nvidia.com/blog/scaling-nvidia-tensorrt-performance-optimization-beyond-a-single-build-route-with-the-global-performance-tuner-part-2/)

The tuner treats graph compilation as a global scheduling problem to automate multi-route performance tuning without sacrificing model accuracy.

<small>NVIDIA Developer Blog · `infra`</small>

---

## 📄 Papers worth reading

**[Naive RAG beats complex agentic memory in long-term conversation benchmarks](https://arxiv.org/abs/2610.30755)**

Direct dense retrieval and reranking over raw unmutated conversation histories outperforms complex agentic memory frameworks across long-term dialogue tasks.

<small>Hugging Face Daily Papers</small>

**[Reasoning models inherit pause markers from training data, not RL](https://arxiv.org/abs/2610.30882)**

Data provenance tracing reveals that reasoning models inherit pause tokens like wait from pretraining data rather than inventing them during reinforcement learning.

<small>Hugging Face Daily Papers</small>

**[Pairwise evaluation masks prompt-level scoring errors in LLM reward models](https://arxiv.org/abs/2610.31090v1)**

Standard pairwise evaluations hide major prompt-level reward model errors because models over-cluster scores by prompt compared to human raters.

<small>arXiv cs.CL</small>

<small>[All 25 papers from that day →](papers/2026-10-24.md)</small>

---

## Everything else

- 📄 **[Research Papers](papers/index.md)** — <small>25 today</small>
- 🔒 **[AI Security](security/index.md)** — <small>15 today</small>
- ⚙️ **[AI Infrastructure](infra/index.md)** — <small>5 today</small>
- 📢 **[Lab & Vendor News](vendors/index.md)** — <small>5 today</small>

- 🧠 **[Model Tracker](models.md)** — <small>what each lab currently ships</small>
- 🏟️ **[Benchmark Arena](benchmarks.md)** — <small>where models stand on coding & cyber evals</small>
- 📰 **[Full briefing for 2026-10-24](daily/2026-10-24.md)** — <small>the long version</small>
- 🗂️ **[All briefings](daily/index.md)**
- 🕘 **[Past signals](signal/index.md)** — <small>every previous day's brief</small>
- 📡 **[Subscribe (Atom)](feed.xml)** — <small>this brief in your feed reader</small>

---

<small>Search with the box above or press <kbd>/</kbd>. Install this as an app from your browser's menu to read offline.</small>
