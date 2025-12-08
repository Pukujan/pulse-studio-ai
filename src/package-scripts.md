# 📜 Available NPM Scripts

## Development Scripts

### `npm run dev`
Starts the Vite development server with hot module replacement (HMR).
- Opens on `http://localhost:5173/` by default
- Auto-reloads when you save files
- Shows build errors in browser and terminal

**Usage:**
```bash
npm run dev
```

To use a different port:
```bash
npm run dev -- --port 3000
```

---

### `npm run build`
Creates an optimized production build.
- Runs TypeScript compiler to check types
- Bundles and minifies all code
- Outputs to `/dist` folder
- Ready for deployment

**Usage:**
```bash
npm run build
```

---

### `npm run preview`
Previews the production build locally.
- Must run `npm run build` first
- Serves the `/dist` folder
- Tests production behavior locally

**Usage:**
```bash
npm run build
npm run preview
```

---

### `npm run lint`
Runs ESLint to check code quality.
- Checks for TypeScript errors
- Enforces React best practices
- Reports unused variables and imports

**Usage:**
```bash
npm run lint
```

---

## Utility Scripts

### File Verification (Before Install)

Check if all required files are present:

```bash
node verify-files.js
```

This runs BEFORE `npm install` to ensure you have all necessary files.

---

## Common Workflows

### First Time Setup
```bash
# 1. Verify files
node verify-files.js

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

### Daily Development
```bash
# Just start the dev server
npm run dev
```

### Before Committing
```bash
# Check for errors
npm run lint

# Test production build
npm run build
npm run preview
```

### Deploy to Production
```bash
# Build for production
npm run build

# Upload contents of /dist folder to your host
```

---

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Check types without building
npx tsc --noEmit
```

### Clear Cache
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

### Reinstall Dependencies
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## Build Output

After running `npm run build`, you'll get:

```
/dist/
├── assets/
│   ├── index-[hash].js      # Bundled JavaScript
│   ├── index-[hash].css     # Bundled CSS
│   └── [images]             # Optimized images
└── index.html               # Entry HTML file
```

This folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

## Environment-Specific Builds

Currently using development mode only. Future `.env` files:

```bash
# .env.local (not committed to git)
VITE_API_KEY=your_key_here

# .env.production
VITE_API_URL=https://api.production.com
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

**Pro Tip:** Keep `npm run dev` running while developing for instant feedback! 🚀
