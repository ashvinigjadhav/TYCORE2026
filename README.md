# TYCORE 2026 - Student Projects Portal

Welcome to the TYCORE 2026 student projects portal! This is a centralized hub where each student can showcase their individual projects and work.

## 📋 What's Been Set Up

### Main Entry Point: `index.html`

- Beautiful, responsive dashboard displaying all student projects
- Grid layout that adapts to different screen sizes
- Links to each student's individual project page
- Easy to maintain and add more students

### Student Folders with Templates

- **Coffee-Shop/** - Coffee Shop project page with template
- **Shlok-Bajaj/** - Shlok Bajaj's project page with template
- Each folder contains its own `index.html` file

### Documentation

- **README.md** - Complete guide for students and instructors

## 🎯 How It Works

### Main Dashboard

- Opens to a grid of all student projects
- Each project appears as a clickable card
- Displays project name and description
- Beautiful gradient design with hover effects

### Student Project Pages

- Each student folder contains their own `index.html`
- Has its own unique color scheme and styling
- Includes a "Back to Projects" link for easy navigation
- Students can fully customize their project page

### Easy Navigation

- Click on any project card from the main dashboard
- Each project page links back to the main dashboard
- Seamless navigation between all projects

## ➕ How to Add More Students

### Step 1: Create Your Folder

```
TYCORE2026/
├── Student-Name/
│   └── index.html
```

### Step 2: Create an `index.html` File

Copy the template from an existing student folder or create your own HTML file.

### Step 3: Register Your Project

Edit the main `index.html` file and add your project to the `projects` array:

```javascript
const projects = [
  // ... existing projects ...
  {
    name: 'Your-Name',
    folder: 'Your-Name',
    description: 'Your Project Description',
  },
];
```

### Step 4: Customize Your Project Page

Edit your `index.html` file to showcase:

- Project description
- Features and functionality
- Screenshots or demos
- Links to repositories
- Any other relevant information

## 📁 Recommended File Organization

Inside your project folder, organize your files like this:

```
Your-Name/
├── index.html          (Main page)
├── styles.css         (External CSS - optional)
├── script.js          (External JavaScript - optional)
├── README.md          (Project documentation - optional)
├── images/            (Folder for project images)
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── demo.gif
└── assets/            (Folder for other resources)
    ├── documents/
    └── data/
```

## 🎨 Styling Tips

You can customize your project page by:

- Using CSS in the `<style>` tag within `index.html`
- Linking to external CSS files
- Using CSS frameworks (Bootstrap, Tailwind, etc.)
- Adding custom fonts and colors
- Including images and media

## 💡 Project Ideas

Each student project page could include:

- **Overview Section** - Brief introduction to your project
- **Features Section** - Key features and functionality
- **Demo Section** - Live demo or screenshots
- **Tech Stack Section** - Technologies used
- **Code Section** - Code snippets or links to repository
- **Results Section** - Outcomes and achievements
- **Contact Section** - Links to your GitHub, portfolio, etc.

## 🔗 Navigation Structure

```
Main Dashboard (index.html)
    ├── Coffee-Shop/index.html → [Back to Dashboard]
    ├── Shlok-Bajaj/index.html → [Back to Dashboard]
    └── Student-Name/index.html → [Back to Dashboard]
```

## 📌 Important Notes

- Each student should have their own **separate folder**
- Always include an `index.html` file in your folder
- **Register your project** in the main `index.html` file
- Keep your files **well-organized** with proper folder structure
- Make your project page **visually appealing** and user-friendly
- You can have **multiple files** and **subfolders** in your project folder

## 🤝 Collaboration

If multiple students work on the same project:

- You can create a **shared folder** with a main `index.html`
- Use **subfolders** for each contributor's work
- Document **roles and contributions** in your project page
- Link to each team member's individual work

## 🚀 Getting Started

1. **Choose a name** for your project folder
2. **Create the folder** in the `TYCORE2026/` directory
3. **Add your `index.html`** file
4. **Edit the main `index.html`** to add your project link
5. **Customize your page** with your project content
6. **Test your page** by clicking the link from the main dashboard

## ❓ FAQ

**Q: Can I use CSS frameworks?**
A: Yes! You can use Bootstrap, Tailwind, or any other framework.

**Q: Can I add JavaScript?**
A: Absolutely! Feel free to add interactivity with JavaScript.

**Q: Can I have multiple HTML files in my folder?**
A: Yes! Just make sure your main file is named `index.html`.

**Q: How do I add images?**
A: Create an `images/` folder and reference them with relative paths like `./images/photo.jpg`.

**Q: Can I delete or modify the template text?**
A: Yes! Customize everything to match your project.

---

Happy coding! 🎓 Good luck with your TYCORE 2026 projects!
