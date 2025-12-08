# Pulse AI Studio  
> Create ready to post social media graphics in seconds, not minutes.

Pulse AI Studio turns text instructions into visual social media content instantly,  
Instead of generating images with slow AI generation models, the system uses the Pexels API to pull high quality real photos quickly which produces output immediately for fast content publishing.

No rendering delay, no waiting for diffusion, just type, generate, post.

## Features

| Feature | Description |
|---|---|
| Fast results | Pexels API provides instant ready images, no wait time |
| Chat based UI | User describes idea, AI executes search, tagline, formatting |
| Smart query rewriting | Gemini turns vague speech into aesthetic search keywords |
| DeepSeek fallback | OpenRouter takes over when Gemini hits request limits |
| Tagline generation | Auto slogan creation or user supplied text |
| Vision object validation (planned) | AI checks that requested subjects appear in image |
| Quality ranking (planned) | Sorts images by composition, vibe, aesthetic strength |
| Direct social posting (future) | Planned 1 click publish to IG, TikTok, Facebook |

## Why This Exists

Most creators need speed, not heavy generation.  
Image diffusion takes 10–40 seconds and costs compute or tokens.  
Pulse AI Studio fetches real photos instantly through Pexels which is ideal for:

, Daily content  
, Trend reaction  
, Fast brand posting  
, Marketing batches  
, Social operations

## Flow

User input example:
"pastel girl with cat and soft warm mood, generate cute tagline"

Gemini 2.5:
, Understands mood and objects  
, Rewrites into aesthetic search phrase  
, Creates tagline if needed  

Pexels API:
, Returns real publish-ready photos instantly

Vision filter system (v1.1 planned):
, Confirm requested objects visually exist in image

Ranking engine (v1.2 planned):
, Score by beauty, mood, balance and visual composition

End result:
Social media assets generated in seconds.

## Tech

| Layer | Tool |
|---|---|
| Frontend | React + Vite + Tailwind |
| Reasoning | Gemini 2.5 Flash |
| Fallback | DeepSeek Chimera via OpenRouter |
| Images | Pexels API, not AI generated |
| Future | Direct posting integration |

## Benefits vs AI Generation

| System | Speed | Output Type |
|---|---|---|
| Stable Diffusion | slow | artistic renders |
| DALL-E or Imagen | moderate | creative generation |
| Pulse AI Studio | instant | real ready to post content |

Pulse is built for fast paced content work.

## Roadmap

| Version | Feature |
|---|---|
| v1.0 | Prompt to Pexels output |
| v1.1 | Vision object detection |
| v1.2 | Aesthetic ranking |
| v1.3 | Logo + brand overlay |
| v1.4 | Multi-platform export |
| v2.0 | Direct posting to IG TikTok FB |

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

MIT License , Pulse AI Studio
```
