
# Pulse AI Studio  
> Create ready-to-post social media graphics in seconds, not minutes.

Pulse AI Studio is a speed-first media creation tool.  
Instead of generating AI images through heavy rendering models, this app uses the Pexels API to pull real high-quality photos instantly which enables fast turnaround and usable content without delays.

This project was designed as a **learning and workflow experiment**, built to prove that rapid AI-assisted development can lead to scalable, adaptable real-world tools. The entire UI was **prototyped in Figma Make** then **built from scratch in VSCode**, proving how quickly ideas can move from concept to product using AI co-building.

No slow generation, no waiting for diffusion, just type, generate, post.

## Features

| Feature | Description |
|---|---|
| Instant image results | Pexels API returns real photography instantly |
| Chat-driven creation | User describes concept, AI converts into output |
| Smart search language | Gemini rewrites messy prompts into aesthetic search terms |
| DeepSeek fallback | If Gemini limits hit, OpenRouter handles reasoning |
| Auto tagline generator | Can produce slogan or accept one from user |
| Vision validation *(planned)* | AI will check that required subjects appear visually |
| Quality ranking *(planned)* | Sort by composition, clarity, emotional tone |
| One-click publishing *(future)* | Direct posting to Instagram, TikTok, Facebook |

---

## Workflow & Development

This entire product was built around **speed, iteration, and adaptability**.  
The workflow demonstrates how modern development can be accelerated using AI guidance and live prototyping:

**1. Figma Make Prototype**  
, Full UI drafted visually before code  
, Components, layout, flow tested interactively  
, No guessing during build phase

**2. VSCode Build + AI Pairing**  
, Code written with AI assisted refinement  
, Problems solved through iterative prompt + fix cycles  
, Architecture kept modular for future scaling

**3. Rapid Deploy Mentality**  
, Working demo > too-perfect architecture  
, Can be expanded with ranking, vision detection and posting features  
, A base anyone can study, modify, and adapt

This project’s purpose was not just to ship a tool but to prove that **one person can build a functional AI product quickly using structured workflow and smart APIs**.

---

## Why This Approach

Most AI apps generate images which is powerful but slow.  
For daily marketing output and fast content cycles, speed matters more than novelty.

Pulse AI Studio is ideal for:

, Daily posting workflows  
, Trend reactions while it’s relevant  
, Startup marketing sprints  
, Rapid social testing  
, Content pipelines where volume beats perfection

---

## System Flow

**Example input:**  
> "pastel theme, girl with a cat, warm cozy tagline"

Gemini 2.5  
, Understands mood + nouns  
, Converts into optimized visual search string  
, Optional tagline generation  

Pexels API  
, Fetches real photos instantly  

Future Vision Filter  
, Confirms requested objects appear in image  

Future Ranking Layer  
, Returns most aesthetic balanced compositions first  

Output delivered in seconds.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vite + React + TailwindCSS |
| AI Core | Gemini 2.5 Flash |
| Fallback Model | DeepSeek Chimera via OpenRouter |
| Image Provider | Pexels API (not generative) |
| Planned Expansion | Direct social platform posting |

---

## Advantages Over Generation Models

| System | Speed | Output |
|---|---|---|
| Midjourney / Diffusion | slow | artistic renders |
| DALL-E / Imagen | moderate | creative generation |
| Pulse AI Studio | instant | real content, ready for posting |

This tool is not here to replace artistic render engines —  
it exists to **produce publishable content fast**.

---

## Roadmap

| Version | Feature |
|---|---|
| v1.0 | Prompt to Pexels image retrieval (current) |
| v1.1 | Vision object detection accuracy |
| v1.2 | Aesthetic scoring and ranking |
| v1.3 | Logo drop + brand mode |
| v1.4 | Multi-platform export |
| v2.0 | Direct publishing to IG, TikTok, FB |

---

## Install

```bash
git clone https://github.com/you/pulse-ai-studio
cd pulse-ai-studio
npm install
npm run dev
```

## Environment

```bash
VITE_GEMINI_API_KEY=
VITE_OPENROUTER_API_KEY=
VITE_PEXELS_API_KEY=
```

## License

MIT License , Pulse AI Studio
```
