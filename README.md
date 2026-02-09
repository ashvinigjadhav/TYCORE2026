# TYCORE 2026 - Student Projects Portal

This is the main portfolio site for TYCORE 2026 students to showcase their projects.

## 📁 Directory Structure

```
TYCORE2026/
├── index.html              (Main portal page)
├── Coffee-Shop/            (Student project folder 1)
│   └── index.html         (Student's project page)
├── Shlok-Bajaj/           (Student project folder 2)
│   └── index.html         (Student's project page)
└── [More student folders...]
```

## 🚀 How to Add Your Project

### Step 1: Create Your Folder

Create a new folder with your name (or project name) in the root `TYCORE2026/` directory.

### Step 2: Create an index.html File

Add an `index.html` file inside your folder. You can:

- Copy the template from any existing student folder
- Create your own HTML file
- Use any HTML framework (Bootstrap, Tailwind, etc.)

### Step 3: Register Your Project

Edit the main `index.html` file and add your project to the `projects` array in the JavaScript section:

```javascript
{
    name: "Your-Name",
    folder: "Your-Name",
    description: "Your Project Description"
}
```

### Step 4: Add Your Content

Edit your `index.html` file to showcase:

- Project description
- Features and functionality
- Screenshots or demos
- Links to repositories
- Any other relevant information

## 📝 File Organization Tips

Inside your project folder, you can organize your files like this:

```
Your-Name/
├── index.html           (Main page)
├── styles.css          (External CSS)
├── script.js           (External JavaScript)
├── images/             (Project images)
│   ├── screenshot1.png
│   └── screenshot2.png
└── assets/             (Other resources)
    ├── documents/
    └── videos/
```

## 🎨 Styling Ideas

You can customize the styling in your `index.html` file:

- Use inline CSS in the `<style>` tag
- Link to external CSS files
- Use CSS frameworks like Bootstrap or Tailwind
- Add custom fonts and colors

## 🔗 Navigation

Each student project page includes a "Back to Projects" link that navigates back to the main index.html portal.

## 📌 Important Notes

- Each student should have their own folder
- Always include an `index.html` file in your folder
- Register your project in the main `index.html` file
- Keep your files organized with proper folder structure
- Make your project visually appealing and user-friendly

## 🤝 Collaboration

If multiple students work on the same project, you can:

- Create a shared folder
- Use subfolders for each contributor
- Document roles and contributions in your project page

Happy coding! 🎓
