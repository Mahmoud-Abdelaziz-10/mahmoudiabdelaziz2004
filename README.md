# Mahmoud Ibrahim - Landscape & Irrigation Engineering Portfolio

A modern, responsive, and high-performance portfolio website built specifically for **Landscape & Irrigation Engineer Mahmoud Ibrahim**.

---

## 🚀 How to Run the Website

You have multiple zero-friction ways to view and run your portfolio:

### Option 1: One-Click Instant Open (Easiest)
Simply **double-click** the file:
👉 `start-portfolio.bat` (in the root or inside `portfolio/`)  
It will automatically launch your portfolio directly inside your default web browser (Edge, Chrome, Brave, Firefox, etc.).

### Option 2: Direct File Open
Open `portfolio/` folder and **double-click `index.html`**.  
All styles, scripts, and images use relative paths, so the website works 100% offline without needing any web server.

### Option 3: Local Web Server (Recommended for Testing)
Open a terminal / command prompt inside the `portfolio/` folder and run:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🛠️ How to Add, Edit, or Remove Projects

To keep your portfolio completely editable without touching complex HTML or rebuilding code, all projects are stored in one centralized, clean file:

📁 **`portfolio/projects-data.js`**

### 1. To Edit an Existing Project
1. Open `portfolio/projects-data.js` in VS Code.
2. Locate the project you want to modify (e.g., `title`, `summary`, `description`, `highlights`, `software`).
3. Edit the text and save the file.
4. Refresh your browser to see your updates instantly!

### 2. To Add a New Project
1. Add your project drawings or render images into the appropriate subfolder inside:
   - `portfolio/images/autocad/` for AutoCAD 2D drawings
   - `portfolio/images/realtime/` for Realtime Landscaping renders
   - `portfolio/images/sketchup/` for SketchUp 3D models
   - `portfolio/images/other/` for Lumion, Photoshop, or conceptual work
2. Open `portfolio/projects-data.js`.
3. Copy one of the existing project blocks and paste it inside the `projects: [ ... ]` array:
```javascript
{
  id: "my-new-villa-project",
  title: "Modern Villa Landscape Concept",
  category: "realtime", // Options: "autocad", "sketchup", "realtime", "other"
  categoryLabel: "Realtime Landscaping",
  projectType: "Concept Design Study",
  coverImage: "images/realtime/new_cover.PNG",
  gallery: [
    "images/realtime/new_cover.PNG",
    "images/realtime/view_2.PNG"
  ],
  software: ["Realtime Landscaping Architect", "Photoshop"],
  summary: "Brief one-line summary of the project.",
  description: "Detailed description of design approach, zoning, or hydraulic considerations.",
  highlights: [
    "Key feature 1",
    "Key feature 2"
  ]
},
```
4. Save the file and refresh your browser. The project counter and filters will automatically update!

### 3. To Remove a Project
Delete or comment out (`/* ... */`) the project block in `portfolio/projects-data.js`.

---

## 📁 Project Structure

```
e:\porofolio\
├── start-portfolio.bat       # 1-Click launcher
├── AutoCAD/                  # Original AutoCAD drawings (preserved)
├── Realtime Landscaping/     # Original Realtime renders (preserved)
├── SketchUp/                 # Original SketchUp renders (preserved)
├── Other Projects/           # Original other renders (preserved)
├── Profile Image/            # Original profile photo (preserved)
└── portfolio/
    ├── index.html            # Main semantic HTML structure
    ├── style.css             # Modern design system & responsive styling
    ├── app.js                # Search, filtering, and modal lightbox controller
    ├── projects-data.js      # Centralized editable projects data file
    ├── start-portfolio.bat   # Local 1-click launcher
    └── images/               # Organized project assets & profile photo
        ├── autocad/
        ├── realtime/
        ├── sketchup/
        ├── other/
        └── profile/
```
