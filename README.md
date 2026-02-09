# TYCORE 2026 - Student Projects Portal

Welcome to the TYCORE 2026 student projects portal! This is a centralized hub where each student can showcase their individual projects and work.

---

## 🚀 Quick Start Guide for Students

### Step 1: Create Your Project Folder

1. Create a new folder with your name (e.g., `John-Doe` or `Jane-Smith`)
2. Keep the folder name simple, use hyphens instead of spaces
3. Create your folder inside the `TYCORE2026` directory

**Example:**
```
TYCORE2026/
├── index.html              (Main dashboard - already created)
├── STUDENT-TEMPLATE/       (Template folder for you to copy)
└── Your-Name/              (Create your folder here)
    └── index.html          (Your project page)
```

---

### Step 2: Copy the Template

1. Go to the `STUDENT-TEMPLATE` folder
2. Copy the `index.html` file from the template
3. Paste it into **your new folder**
4. Now you have a starting point for your project page!

---

### Step 3: Customize Your Project Page

Open your copied `index.html` file and customize:

- **Project title** - Change "Your Project Title" to your actual project name
- **Your name** - Replace "Your Name" with your actual name
- **About section** - Describe what your project does
- **Features** - List your project's key features
- **Technologies** - List the technologies you used
- **Add screenshots** - Create an `images/` folder and add your screenshots
- **Add links** - Link to your GitHub, live demo, etc.

**File Structure Example:**
```
Your-Name/
├── index.html          (Your main project page)
├── images/             (Optional - for screenshots)
│   └── screenshot.png
├── css/                (Optional - for external CSS)
│   └── style.css
└── js/                 (Optional - for external JavaScript)
    └── script.js
```

---

### Step 4: Register Your Project on the Main Dashboard

This is the **MOST IMPORTANT STEP** - Without this, your project won't appear on the homepage!

1. Open the **main `index.html`** file (located at `TYCORE2026/index.html`)
2. Find the `projects` array in the JavaScript section (around line 75)
3. Add your project details:

```javascript
const projects = [
    {
        name: 'Coffee Shop',
        folder: 'Coffee-Shop',
        description: 'A beautiful coffee shop website showcasing menu items and services'
    },
    {
        name: 'Shlok Bajaj',
        folder: 'Shlok-Bajaj',
        description: 'Personal portfolio and project showcase'
    },
    // ADD YOUR PROJECT HERE:
    {
        name: 'Your Name',                    // Your name or project title
        folder: 'Your-Folder-Name',           // Must match your folder name EXACTLY
        description: 'Brief project description'  // One sentence about your project
    }
    // Remember to add a comma after the previous project!
];
```

**⚠️ Important:**
- The `folder` name **MUST EXACTLY MATCH** your folder name (case-sensitive!)
- Add a **comma** after the previous project entry
- Keep your description **short and clear** (1-2 sentences)

---

### Step 5: Test Your Project

1. Open the main `index.html` file in your browser
2. You should see your project card on the dashboard
3. Click on your project card
4. It should open your project page
5. Click "Back to Projects" to return to the dashboard

---

## 📋 Where to Add Your Code

### Option 1: Everything in One File (Simple Projects)

Keep all your HTML, CSS, and JavaScript in your `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Your CSS here */
    </style>
</head>
<body>
    <!-- Your HTML here -->
    
    <script>
        // Your JavaScript here
    </script>
</body>
</html>
```

### Option 2: Separate Files (Larger Projects)

Organize your code into separate files:

```
Your-Name/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── photo.png
```

Then link them in your `index.html`:

```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Your content -->
    <script src="js/script.js"></script>
</body>
```

---

## 🎨 Customization Tips

### Colors
- Change the gradient colors in the `background` property
- Modify header colors, button colors, etc.
- Use tools like [coolors.co](https://coolors.co) for color schemes

### Fonts
- Use Google Fonts: [fonts.google.com](https://fonts.google.com)
- Add font links in the `<head>` section
- Change `font-family` in your CSS

### Layout
- Add more sections as needed
- Use CSS Grid or Flexbox for layouts
- Make it responsive for mobile devices

### Images
1. Create an `images/` folder in your project directory
2. Add your images there
3. Reference them: `<img src="./images/yourimage.png">`

---

## ✅ Checklist Before Submission

- [ ] Created my project folder with a clear name
- [ ] Copied and customized the template `index.html`
- [ ] Added my project to the main `index.html` projects array
- [ ] Folder name in the array **exactly matches** my actual folder name
- [ ] Tested the link from the main dashboard
- [ ] Added meaningful content (not just template text)
- [ ] Included "Back to Projects" link that works
- [ ] All images and links are working
- [ ] Page looks good on both desktop and mobile

---

## 🔗 Project Structure Overview

```
TYCORE2026/
├── index.html                    ← Main dashboard (ADD YOUR LINK HERE)
├── README.md                     ← This guide
├── STUDENT-TEMPLATE/             ← Copy this template
│   └── index.html
├── Coffee-Shop/                  ← Example project 1
│   └── index.html
├── Shlok-Bajaj/                  ← Example project 2
│   └── index.html
└── Your-Name/                    ← YOUR PROJECT FOLDER
    ├── index.html                ← Your project page
    ├── images/                   ← Your images (optional)
    ├── css/                      ← Your CSS files (optional)
    └── js/                       ← Your JavaScript files (optional)
```

---

## ❓ Frequently Asked Questions

**Q: What should I name my folder?**
A: Use your name or project name with hyphens: `John-Doe` or `My-Portfolio`

**Q: Where do I add my project link?**
A: In the main `index.html` file, inside the `projects` array (around line 75-95)

**Q: My project doesn't show on the homepage. What's wrong?**
A: Check that:
   1. You added your project to the `projects` array
   2. The `folder` name exactly matches your actual folder name (case-sensitive)
   3. You added a comma after the previous project
   4. Your folder contains an `index.html` file

**Q: Can I use frameworks like Bootstrap or React?**
A: Yes! Any web technology is allowed. Just make sure your main file is named `index.html`

**Q: Can I add multiple pages?**
A: Yes! Add more HTML files, but `index.html` should be your main entry point

**Q: How do I add images?**
A: Create an `images/` folder in your project folder and reference them as `./images/photo.jpg`

**Q: Can I change the template completely?**
A: Absolutely! The template is just a starting point. Make it your own!

**Q: Do I need to modify the main dashboard styling?**
A: No, only add your project to the `projects` array. Don't modify other parts of the main `index.html`

---

## 🆘 Need Help?

- Check the example projects: `Coffee-Shop` and `Shlok-Bajaj`
- Review the `STUDENT-TEMPLATE` for reference
- Ask your instructor for assistance

---

**Happy coding! 🎓 Showcase your best work in TYCORE 2026!**
