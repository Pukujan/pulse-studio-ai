# 🎨 Pulse Studio

An AI-powered social media post maker with a conversational interface. Users chat with AI to generate personalized post concepts with different templates, fonts, and curated background images.

---

## 📚 Documentation Quick Links

**New to this project?**
- 🚀 [**START_HERE.md**](./START_HERE.md) - 60-second quick start guide
- 💻 [**EXPORT_TO_VSCODE.md**](./EXPORT_TO_VSCODE.md) - Visual step-by-step setup
- 📋 [**QUICK_REFERENCE.md**](./QUICK_REFERENCE.md) - One-page cheat sheet

**Installation & Setup:**
- [SETUP.md](./SETUP.md) - Detailed setup instructions
- [EXPORT_INSTRUCTIONS.md](./EXPORT_INSTRUCTIONS.md) - How to download
- [DOWNLOAD_CHECKLIST.md](./DOWNLOAD_CHECKLIST.md) - Verify all files

**Reference & Customization:**
- [data/README.md](./data/README.md) - Customize templates & content
- [package-scripts.md](./package-scripts.md) - NPM commands explained
- [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) - Complete doc index

---

## 🚀 Getting Started Locally

**New to this project?** See **[START_HERE.md](./START_HERE.md)** ⭐

**Ready to install?** See **[SETUP.md](./SETUP.md)** for detailed setup guide.

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## ✨ Features

- **Conversational AI Interface** - Chat-based post generation
- **12 Distinct Templates** - Various layouts, fonts, and styles
- **Multi-Platform Previews** - See posts on Instagram, TikTok, and Facebook
- **Swipeable Template Navigation** - Easily browse and switch templates
- **Mobile-Optimized** - Fully responsive design
- **Dark Creative Studio Aesthetic** - Modern, professional UI
- **Randomize Feature** - Generate random concepts for inspiration

## 🏗️ Architecture

### Component-Based Structure

```
/components/
├── ChatPanel.tsx          - Conversational AI interface
├── MoodboardGallery.tsx   - Gallery of generated concepts
├── MoodboardCard.tsx      - Individual concept card
├── SocialPreview.tsx      - Platform preview panel
├── PlatformPreview.tsx    - Individual platform mockup
└── TemplateModal.tsx      - Template selection modal
```

### Data Configuration Files

```
/data/
├── templates.ts           - All template configurations
├── backgrounds.ts         - Background image URLs by feel
├── mockData.ts           - Random generation data
├── mockConcepts.ts       - Default concept configurations
├── socialPlatforms.ts    - Platform preview settings
└── README.md             - Data configuration guide
```

### Key Design Decisions

**Separation of Concerns:**
- Component logic is isolated from data/configuration
- All dynamic content lives in `/data/` files
- Easy to customize without touching component code

**Data-Driven Architecture:**
- Templates, backgrounds, and content are all configurable
- Add new templates by editing data files, not components
- Helper functions for easy data access

**Type Safety:**
- Full TypeScript support
- Interfaces for all data structures
- Compile-time error checking

## 📱 User Flow

1. User opens app → sees chat interface
2. User chats with AI or clicks "Randomize"
3. AI generates 4-6 moodboard concepts
4. User clicks a concept → template modal appears
5. User selects a template → preview updates
6. User swipes through templates in preview panel
7. User can preview on Instagram, TikTok, Facebook

## 🎯 Key Features Explained

### Green Flash Effect
When a template is selected, the preview panel flashes green for 1 second with a smooth fade animation to provide visual feedback.

### Swipe Tooltip
A tooltip appears for 3 seconds when switching templates, showing users they can swipe to change templates. Works on both mobile and desktop.

### Collapsible Chat
Chat panel can expand/collapse to give more room for the gallery and preview.

### Template Swipe Navigation
Users can swipe left/right (or click arrows on desktop) to cycle through all 12 templates while previewing a concept.

### Responsive Design
Full mobile optimization with:
- Tab switching between gallery and preview on mobile
- Touch-optimized swipe gestures
- Adaptive layout for different screen sizes

## 🛠️ Tech Stack

- **React** - Component-based UI
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Vite** - Fast build tool

## 📂 Project Structure

```
pulse-studio/
├── /components/           # React components
│   ├── /ui/              # Reusable UI components
│   └── *.tsx             # Feature components
├── /data/                # Configuration data
│   ├── templates.ts      # Template definitions
│   ├── backgrounds.ts    # Image URLs
│   ├── mockData.ts       # Random data
│   └── README.md         # Data config guide
├── /styles/              # Global styles
│   └── globals.css       # CSS variables & animations
├── App.tsx               # Main app component
└── README.md             # This file
```

## 🎨 Design System

### Typography
- **Headings:** Sora font family
- **UI Text:** Inter font family
- **Template Fonts:** Poppins, Space Grotesk, Playfair Display, Satisfy

### Colors
- **Background:** Gradient from slate-950 via slate-900
- **Accents:** Blue (500) to Purple (600)
- **Text:** White primary, Slate-400 secondary
- **Borders:** Slate-700/800 with transparency

### Animations
- Flash fade (1s) - Green flash effect
- Tooltip fade (3s) - Swipe tooltip
- Pulse - Arrow indicators
- Smooth transitions on all interactive elements

## 🔄 State Management

App state is managed locally with React hooks:
- `selectedConcept` - Currently selected concept
- `concepts` - Array of generated concepts
- `userInputs` - User's chat inputs (feel, topic, tagline, logo)
- `isGenerating` - Loading state
- `showTemplateModal` - Modal visibility
- `showArrowIndicator` - Swipe tooltip visibility
- `showPreviewFlash` - Green flash effect state

## 🎓 Learning Resources

- **Component Architecture:** See `/components/` for modular design patterns
- **Data Configuration:** Check `/data/README.md` for customization guide
- **Type Definitions:** All interfaces are exported from `App.tsx`
- **Helper Functions:** Utilities in each data file for common operations

## 🚧 Future Enhancements (Ready for Integration)

This is a production-ready React + Vite app. To make it fully functional:

1. **Firebase Integration**
   - Authentication (user accounts)
   - Firestore database (save concepts)
   - Storage (user-uploaded logos)

2. **Gemini AI Integration**
   - Replace mock generation with real AI
   - Context-aware suggestions
   - Natural language understanding

3. **Export Functionality**
   - Download posts as images
   - Share directly to social media
   - Save to user library

## 📄 License

This project is built as a demonstration of clean architecture and data-driven design in React.

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**