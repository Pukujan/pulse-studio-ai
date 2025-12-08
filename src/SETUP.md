# 🚀 Pulse Studio - Local Setup Guide

This guide will help you get Pulse Studio running on your local machine in VS Code.

---

## 📋 Prerequisites

Make sure you have these installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional, for version control)

---

## 🛠️ Setup Instructions

### 1. **Download the Project**

If you received this as a ZIP file:
```bash
# Extract the ZIP and navigate to the folder
cd pulse-studio
```

If using Git:
```bash
git clone <your-repo-url>
cd pulse-studio
```

### 2. **Open in VS Code**

```bash
code .
```

Or open VS Code manually:
- File → Open Folder → Select the `pulse-studio` folder

### 3. **Install Dependencies**

Open the integrated terminal in VS Code (`Ctrl+` ` or View → Terminal`):

```bash
npm install
```

This will install all required packages (React, Tailwind, Radix UI components, etc.)

**⏱️ Note:** This may take 2-5 minutes depending on your internet connection.

### 4. **Start the Development Server**

```bash
npm run dev
```

You should see output like:

```
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 5. **Open in Browser**

- Click the link `http://localhost:5173/` or
- Open your browser and go to `http://localhost:5173/`

🎉 **Pulse Studio should now be running!**

---

## 📁 Project Structure

```
pulse-studio/
├── components/          # React components
│   ├── ChatPanel.tsx    # AI chat interface
│   ├── MoodboardGallery.tsx  # Concept cards
│   ├── SocialPreview.tsx     # Platform previews
│   ├── TemplateModal.tsx     # Template selector
│   └── ui/              # Reusable UI components (buttons, dialogs, etc.)
├── data/                # Separated data files
│   ├── backgrounds.ts   # Background images by feel
│   ├── templates.ts     # 12 template definitions
│   ├── mockConcepts.ts  # Mock generated concepts
│   ├── mockData.ts      # Chat and user data
│   └── socialPlatforms.ts  # Platform definitions
├── styles/
│   └── globals.css      # Global styles & Tailwind config
├── App.tsx              # Main app component
├── package.json         # Dependencies
└── vite.config.ts       # Vite configuration
```

---

## 🎨 How to Use the Prototype

1. **Chat with the AI** - Ask about feel (cozy, luxury, bold), topic, and tagline
2. **Upload a Logo** - Click the upload area in the chat panel
3. **Generate Concepts** - Click "Generate Concepts" button
4. **View Moodboards** - See 4-6 AI-generated concept cards
5. **Customize Templates** - Click any concept card to swap templates
6. **Preview on Platforms** - View your post on Instagram, TikTok, Facebook
7. **Swipe Effects** - Flash effect when switching between templates

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is taken:
```bash
npm run dev -- --port 3000
```

### Dependencies Won't Install
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Make sure you're using Node.js v18+:
```bash
node --version
```

### Module Not Found Errors
Restart the dev server:
```bash
# Press Ctrl+C to stop, then:
npm run dev
```

---

## 📝 Current State (Static Prototype)

This is a **fully functional static prototype** with:

✅ Complete UI/UX with dark studio aesthetic  
✅ Mock AI chat conversation flow  
✅ Logo upload (stores in browser memory)  
✅ 12 customizable post templates  
✅ 4 background feels (cozy, luxury, bold, minimal)  
✅ Platform previews (Instagram, TikTok, Facebook)  
✅ Template swapping with flash effects  
✅ Fully responsive design  
✅ Data-driven architecture (all data in `/data/` folder)  

🚫 **Not Included (Yet):**
- Real AI integration (Gemini API)
- Firebase/database persistence
- User authentication
- Image export functionality

---

## 🎯 Next Steps (Future Enhancements)

When you're ready to add backend functionality:

1. **Gemini AI Integration** - Replace mock chat with real AI
2. **Firebase/Firestore** - Add data persistence
3. **Image Export** - Export posts as PNG/JPG
4. **Multiple Projects** - Save and load different projects
5. **Custom Fonts** - Upload custom fonts for posts

---

## 💡 Tips for Development

- **Hot Reload**: Changes auto-refresh in browser
- **Component Isolation**: Each component is in its own file
- **Data Separation**: Edit `/data/*.ts` files to change content
- **Tailwind Classes**: Styled with Tailwind CSS utility classes
- **TypeScript**: Full type safety for better DX

---

## 📞 Need Help?

- Check the `/data/README.md` for data structure documentation
- Review `/guidelines/Guidelines.md` for project architecture
- All components are well-commented for clarity

---

**Enjoy building with Pulse Studio! 🎨✨**
