# 💻 How to Export Pulse Studio to VS Code

Follow these visual steps to get your prototype running locally.

---

## 📥 Step 1: Download the Project

### From Figma Make:
1. Click the **Export** or **Download** button
2. Select **Download as ZIP** (if available)
3. Save to your `Downloads` folder

### From GitHub/Other:
1. Click **Code** → **Download ZIP**
2. Save the ZIP file

### Manual Download:
If downloading files individually, ensure you get:
- All folders (`components/`, `data/`, `styles/`, `src/`, etc.)
- All configuration files (`package.json`, `vite.config.ts`, etc.)
- All documentation files

---

## 📂 Step 2: Extract the Files

### Windows:
1. Right-click the ZIP file
2. Select **Extract All...**
3. Choose a location (e.g., `C:\Users\YourName\Projects\`)
4. Click **Extract**

### Mac:
1. Double-click the ZIP file
2. It automatically extracts to the same folder

### Linux:
```bash
unzip pulse-studio.zip -d ~/projects/
```

**Result:** You should have a folder called `pulse-studio` with all files inside.

---

## 🔍 Step 3: Verify Files (Optional)

Open a terminal/command prompt in the extracted folder:

### Windows:
1. Open the `pulse-studio` folder in File Explorer
2. Hold **Shift** + Right-click in empty space
3. Select **"Open PowerShell window here"**

### Mac:
1. Open **Terminal**
2. Type `cd` then drag the folder into Terminal
3. Press **Enter**

### Verify:
```bash
node verify-files.js
```

This checks that all required files are present.

**Expected Output:**
```
✅ All required files present!

🚀 You can now run:
   npm install
   npm run dev
```

---

## 🎨 Step 4: Open in VS Code

### Method 1: From Terminal
```bash
code .
```

### Method 2: From VS Code
1. Open VS Code
2. **File** → **Open Folder...**
3. Select the `pulse-studio` folder
4. Click **Select Folder** (Windows) or **Open** (Mac)

### Method 3: Drag & Drop
1. Open VS Code
2. Drag the `pulse-studio` folder into VS Code window

---

## 📦 Step 5: Install Dependencies

In VS Code:

1. Open **Terminal** in VS Code:
   - **View** → **Terminal**
   - Or press `` Ctrl+` `` (Windows/Linux) or `` Cmd+` `` (Mac)

2. Run the install command:
   ```bash
   npm install
   ```

3. Wait for installation (2-5 minutes):
   ```
   added 247 packages, and audited 248 packages in 2m
   ```

**What this does:**
- Downloads all required libraries (React, TypeScript, Tailwind, etc.)
- Creates a `node_modules` folder (~300 MB)
- Creates a `package-lock.json` file

---

## 🚀 Step 6: Start the Development Server

In the same terminal:

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.4.2  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Press h + enter to show help
```

**What this does:**
- Starts a local web server
- Compiles your React/TypeScript code
- Enables hot-reload (auto-refresh on file changes)

---

## 🌐 Step 7: Open in Browser

1. **Hold Ctrl** (Windows/Linux) or **Cmd** (Mac)
2. **Click** the link `http://localhost:5173/`

OR:

1. Open your browser (Chrome, Firefox, Safari, Edge)
2. Type in address bar: `http://localhost:5173/`
3. Press **Enter**

**🎉 You should see Pulse Studio running!**

---

## ✅ Verification Checklist

After opening in browser, verify:

- [ ] Dark background with gradient visible
- [ ] Chat panel on the left side
- [ ] "Welcome to Pulse Studio!" message visible
- [ ] No error messages in browser console (F12)
- [ ] No error messages in VS Code terminal

**If any issues, see Troubleshooting below.**

---

## 🔧 Troubleshooting

### Issue: "npm: command not found"

**Cause:** Node.js not installed

**Solution:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download **LTS version** (recommended)
3. Run installer
4. Restart terminal/VS Code
5. Try `npm install` again

**Verify:**
```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show v9.0.0 or higher
```

---

### Issue: "Port 5173 already in use"

**Cause:** Another app using that port

**Solution:**
```bash
# Stop the current server (Ctrl+C)
# Use a different port:
npm run dev -- --port 3000
```

Then open `http://localhost:3000/`

---

### Issue: Blank white page in browser

**Cause:** JavaScript errors

**Solution:**
1. Open browser console (F12)
2. Check for red error messages
3. Look for clues about missing files
4. Run `node verify-files.js` to check files
5. Try clearing browser cache (Ctrl+Shift+Delete)

---

### Issue: TypeScript errors in terminal

**Cause:** Wrong Node.js version or missing files

**Solution:**
```bash
# Check Node version
node --version  # Must be v18+

# Reinstall if needed
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Styles not loading (page looks broken)

**Cause:** CSS not importing correctly

**Solution:**
1. Check that `/styles/globals.css` exists
2. Check that `/src/main.tsx` exists
3. Restart dev server:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

---

### Issue: "Cannot find module" errors

**Cause:** Incomplete npm install

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 VS Code Tips

### Recommended Extensions:

1. **ES7+ React/Redux/React-Native snippets**
   - Quick React component snippets

2. **Tailwind CSS IntelliSense**
   - Autocomplete for Tailwind classes

3. **TypeScript Vue Plugin (Volar)**
   - Better TypeScript support

4. **ESLint**
   - Code quality checking

**Install Extensions:**
1. Click Extensions icon (Ctrl+Shift+X)
2. Search for extension name
3. Click **Install**

---

## 🎯 What to Do Next

### 1. Explore the App
- Try the chat interface
- Upload a logo
- Generate concepts
- Switch templates
- View platform previews

### 2. Check the Code
- Open `App.tsx` to see main app structure
- Look at components in `/components/`
- Review data files in `/data/`

### 3. Make Changes
- Edit `/data/templates.ts` to change templates
- Edit `/data/backgrounds.ts` to change images
- Save file → Browser auto-reloads!

### 4. Learn React Patterns
- See how state is managed
- Study component composition
- Understand TypeScript types

---

## 📁 Your Workspace Layout

```
VS Code Window:
├── 📂 Explorer (Ctrl+Shift+E)
│   └── File tree on left
├── 📝 Editor (Center)
│   └── Open files as tabs
├── 🔍 Search (Ctrl+Shift+F)
├── 🐛 Debug (Ctrl+Shift+D)
└── 🖥️ Terminal (Ctrl+`)
    └── npm run dev running here
```

**Recommended Layout:**
- Left: File explorer
- Center: Code editor
- Bottom: Integrated terminal (running dev server)

---

## ⌨️ Useful Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Open file | `Ctrl+P` | `Cmd+P` |
| Search | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Terminal | `Ctrl+`` | `Cmd+`` |
| Save | `Ctrl+S` | `Cmd+S` |
| Format | `Shift+Alt+F` | `Shift+Option+F` |
| Close tab | `Ctrl+W` | `Cmd+W` |

---

## 🎓 Learning Path

1. **Day 1:** Get it running, explore the UI
2. **Day 2:** Read `/data/README.md`, customize content
3. **Day 3:** Study components, understand structure
4. **Day 4:** Make your first code change
5. **Day 5:** Build something new!

---

## 📚 Documentation Quick Links

- **START_HERE.md** ← Super quick overview
- **SETUP.md** ← Detailed setup guide
- **README.md** ← Project architecture
- **data/README.md** ← Customization guide
- **package-scripts.md** ← NPM commands

---

## 🎉 Success Checklist

After completing all steps:

- [ ] Project downloaded and extracted
- [ ] Opened in VS Code
- [ ] `npm install` completed successfully
- [ ] `npm run dev` running without errors
- [ ] Browser showing Pulse Studio
- [ ] Chat panel visible and interactive
- [ ] Can generate concepts
- [ ] Can switch templates
- [ ] No error messages

**All checked? Congratulations! You're ready to build! 🚀**

---

## 🆘 Still Having Issues?

1. **Re-download** the entire project fresh
2. **Delete** `node_modules` and `package-lock.json`
3. **Reinstall** with `npm install`
4. **Check** Node.js version is v18+
5. **Run** `node verify-files.js` to check files

If problems persist, review all documentation files for specific solutions.

---

**You've got this! Happy coding! 💜✨**
