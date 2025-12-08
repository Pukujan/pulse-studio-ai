# ⚡ Pulse Studio - Quick Reference Card

Your one-page cheat sheet for everything Pulse Studio.

---

## 🚀 Installation (One Time)

```bash
cd pulse-studio
npm install
npm run dev
```

Open: `http://localhost:5173/`

---

## 💻 Daily Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `node verify-files.js` | Verify all files present |

**To stop server:** Press `Ctrl+C` in terminal

---

## 📁 Key Folders

| Folder | What's Inside | Edit? |
|--------|--------------|-------|
| `/components/` | React components | ✅ Yes |
| `/components/ui/` | Reusable UI elements | ⚠️ Rarely |
| `/data/` | Configuration files | ✅ **Edit these!** |
| `/styles/` | Global CSS | ✅ Yes |
| `/src/` | Entry point | ⚠️ Rarely |

---

## 🎨 Quick Customization

### Change Templates
**File:** `/data/templates.ts`

```typescript
export const TEMPLATES: TemplateConfig[] = [
  {
    id: 'center-classic',
    name: 'Center Classic',
    fontFamily: 'Poppins',
    position: 'center',
    // ... edit properties
  }
]
```

### Change Backgrounds
**File:** `/data/backgrounds.ts`

```typescript
export const BACKGROUNDS: BackgroundsByFeel = {
  cozy: [
    'https://images.unsplash.com/...', // Replace URLs
  ],
  // ...
}
```

### Change Mock Chat
**File:** `/data/mockData.ts`

```typescript
export const MOCK_CHAT_DATA = {
  feels: ['cozy', 'luxury', 'bold', 'minimal'],
  topics: ['coffee', 'travel', 'fashion'],
  // ... edit arrays
}
```

---

## 🧩 Component Quick Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| `App.tsx` | Root | Main app logic |
| `ChatPanel.tsx` | `/components/` | Chat interface |
| `MoodboardGallery.tsx` | `/components/` | Concept grid |
| `MoodboardCard.tsx` | `/components/` | Single concept |
| `SocialPreview.tsx` | `/components/` | Platform previews |
| `TemplateModal.tsx` | `/components/` | Template selector |

---

## 🎯 TypeScript Interfaces

```typescript
// Main data structures
interface PostConcept {
  id: string;
  title: string;
  description: string;
  feel: 'cozy' | 'luxury' | 'bold' | 'minimal';
  backgroundUrl: string;
  selectedTemplate: string;
  tagline: string;
}

interface UserInputs {
  feel: string;
  topic: string;
  tagline: string;
  logo: string | null;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}
```

---

## 🎨 Template Properties

```typescript
interface TemplateConfig {
  id: string;              // Unique ID
  name: string;            // Display name
  fontFamily: string;      // Font (Poppins, Space Grotesk, etc.)
  fontSize: string;        // Size (text-4xl, text-5xl, etc.)
  position: string;        // top, center, bottom
  overlayType: string;     // gradient, solid, blur, none
  overlayOpacity: number;  // 0.0 to 1.0
  textColor: string;       // white, black, etc.
}
```

---

## 🔧 Common Tasks

### Add a New Template
1. Edit `/data/templates.ts`
2. Add new object to `TEMPLATES` array
3. Save → Auto-reloads

### Add New Background Images
1. Get image URL from Unsplash
2. Edit `/data/backgrounds.ts`
3. Add URL to appropriate feel array

### Change Color Scheme
1. Edit `/styles/globals.css`
2. Modify CSS variables in `:root`
3. Save → See changes instantly

### Add New Feel/Mood
1. Add to `/data/backgrounds.ts`
2. Add to `/data/mockData.ts`
3. Update TypeScript types if needed

---

## 🐛 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| "npm not found" | Install Node.js from nodejs.org |
| Port in use | `npm run dev -- --port 3000` |
| Dependencies won't install | `npm cache clean --force && npm install` |
| TypeScript errors | Check Node.js version: `node --version` (need v18+) |
| Blank page | Check browser console (F12) for errors |
| Missing files | `node verify-files.js` |

---

## ⌨️ VS Code Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Open file | `Ctrl+P` | `Cmd+P` |
| Search all | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Terminal | `Ctrl+`` | `Cmd+`` |
| Save | `Ctrl+S` | `Cmd+S` |
| Format | `Shift+Alt+F` | `Shift+Option+F` |
| Find/Replace | `Ctrl+H` | `Cmd+Option+F` |

---

## 📦 File Structure Cheat Sheet

```
pulse-studio/
├── App.tsx                    # Main app
├── package.json               # Dependencies
├── vite.config.ts             # Build config
├── src/main.tsx               # Entry point
├── styles/globals.css         # Global styles
├── components/
│   ├── ChatPanel.tsx          # Chat UI
│   ├── MoodboardGallery.tsx   # Grid
│   ├── SocialPreview.tsx      # Previews
│   └── ui/                    # Reusable components
└── data/
    ├── templates.ts           # ← Edit this
    ├── backgrounds.ts         # ← Edit this
    ├── mockData.ts            # ← Edit this
    └── mockConcepts.ts        # ← Edit this
```

---

## 🎯 Template Font Options

Available fonts:
- `Poppins` - Modern sans-serif
- `Space Grotesk` - Geometric sans
- `Playfair Display` - Elegant serif
- `Satisfy` - Handwritten script

**To use:** Set `fontFamily` in template config

---

## 🌈 Available Feels

| Feel | Vibe | Image Style |
|------|------|-------------|
| `cozy` | Warm, intimate | Coffee, books, soft lighting |
| `luxury` | Elegant, premium | Marble, gold, sophisticated |
| `bold` | Vibrant, energetic | Bright colors, dynamic |
| `minimal` | Clean, simple | Whitespace, subtle |

---

## 🔍 Where to Find Things

| I want to... | File to Edit |
|-------------|-------------|
| Change a template | `/data/templates.ts` |
| Add background image | `/data/backgrounds.ts` |
| Modify chat flow | `/components/ChatPanel.tsx` |
| Change mock data | `/data/mockData.ts` |
| Update styles | `/styles/globals.css` |
| Modify app logic | `/App.tsx` |

---

## 📊 Data Helper Functions

```typescript
// From data/templates.ts
getTemplateById(id: string)      // Get template by ID
getTemplateMap()                 // Get all as object

// From data/backgrounds.ts
getBackgroundsByFeel(feel: Feel) // Get images for feel
getRandomBackground(feel: Feel)   // Get random image

// From data/mockData.ts
generateRandomConcept()          // Create random concept
getRandomLogo()                  // Generate placeholder logo
```

---

## 🚀 Performance Tips

- Keep dev server running while coding
- Use hot reload (auto-refresh on save)
- Open DevTools (F12) to check performance
- Build for production before deploying: `npm run build`

---

## 📚 Essential Documentation

| Document | When to Read |
|----------|-------------|
| START_HERE.md | First time setup |
| SETUP.md | Troubleshooting |
| data/README.md | Customizing content |
| README.md | Understanding architecture |
| DOCUMENTATION_INDEX.md | Finding specific docs |

---

## 💡 Pro Tips

1. **Edit `/data/` files first** - No React knowledge needed
2. **Keep terminal open** - See errors immediately
3. **Use browser DevTools** - F12 to debug
4. **Save often** - Hot reload is instant
5. **Experiment freely** - Hard to break things!

---

## ✅ Daily Workflow

```bash
# Morning:
npm run dev

# During work:
# Edit files → Save → See changes

# Before commit:
npm run lint
npm run build

# End of day:
# Press Ctrl+C to stop server
```

---

## 🎨 Color Reference

From `/styles/globals.css`:

```css
--background: #0f172a (slate-900)
--primary: #3b82f6 (blue-500)
--secondary: #8b5cf6 (purple-600)
--accent: #10b981 (green-500)
```

---

## 🌐 Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

---

## 📦 Production Build

```bash
# Build
npm run build

# Output location
/dist/

# Deploy this folder to:
# - Vercel
# - Netlify
# - GitHub Pages
# - Any static host
```

---

## 🎉 Quick Wins

Want to see immediate results?

1. **Change a background:**
   - Edit `/data/backgrounds.ts`
   - Replace an image URL
   - Refresh browser

2. **Add a new template:**
   - Copy existing template in `/data/templates.ts`
   - Change `id`, `name`, and properties
   - Save → See it appear!

3. **Modify colors:**
   - Edit `/styles/globals.css`
   - Change CSS variables
   - Save → Instant color change!

---

**Print this page for quick reference! 📌**

*Last updated: December 2024*
