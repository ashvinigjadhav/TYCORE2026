# TYCORE 2026 - Student Projects Portal

Welcome to the TYCORE 2026 student projects portal! This is a centralized hub where each student can showcase their individual projects and work.

---

## 🚀 Quick Start Guide for Students

### Step 1: Create Your Project Folder

1. Navigate to the `minimal-startpage-template` folder
2. Create a new folder with your project name (e.g., `John-Doe-Portfolio` or `My-Coffee-Shop`)
3. Keep the folder name simple, use hyphens instead of spaces

**Folder Structure:**
```
TYCORE2026/
├── index.html                      (Auto-redirects to projects page)
├── README.md                       (This guide)
└── minimal-startpage-template/     ← MAIN PROJECTS HUB
    ├── index.html                  ← ADD YOUR LINK HERE
    ├── css/
    ├── js/
    ├── fonts/
    └── Projects/
        └── Shlok/
            └── index.html          (Shlok's project page)
```

---

### Step 2: Create Your Project Website

Inside your new folder, create an `index.html` file with your project:

**Simple Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project Name</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            background: rgba(255,255,255,0.2);
            border-radius: 5px;
        }
        .back-link:hover {
            background: rgba(255,255,255,0.3);
        }
    </style>
</head>
<body>
    <a href="../index.html" class="back-link">← Back to All Projects</a>
    
    <h1>Your Project Title</h1>
    <p>Welcome to my project! This is where I showcase my work.</p>
    
    <!-- Add your content here -->
    
</body>
</html>
```

You can also copy the template from `STUDENT-TEMPLATE` folder for a more complete starting point!

---

### Step 3: Add Your Link to the Main Projects Page

This is the **MOST IMPORTANT STEP** - Your project won't be accessible without this!

1. Open `minimal-startpage-template/index.html`
2. Find the section that says `<!-- STUDENTS: ADD YOUR PROJECT LINK BELOW THIS LINE -->`
3. Add your project link following this format:

**Copy and customize this code:**
```html
<section class="link-section">
    <h2 class="link-section-title blue">Your Name's Projects</h2>
    <hr />
    <ul class="link-list">
        <li class="link-list-item"><a class="link" href="Your-Folder-Name/index.html">Your Project Title</a></li>
    </ul>
</section>
```

**Available section title colors:**
- `red`
- `blue`
- `green`
- `yellow`
- `purple`
- `orange`

**Example with multiple projects:**
```html
<section class="link-section">
    <h2 class="link-section-title green">John Doe's Projects</h2>
    <hr />
    <ul class="link-list">
        <li class="link-list-item"><a class="link" href="John-Portfolio/index.html">My Portfolio</a></li>
        <li class="link-list-item"><a class="link" href="Coffee-Website/index.html">Coffee Shop Website</a></li>
        <li class="link-list-item"><a class="link" href="Calculator-App/index.html">Calculator App</a></li>
    </ul>
</section>
```

---

### Step 4: Test Your Project

1. Open `TYCORE2026/index.html` in your browser (or directly open `minimal-startpage-template/index.html`)
2. You should see your project link on the page
3. Click your link to view your project
4. Click "Back to All Projects" to return to the main page

---

## 📁 Recommended Project Organization

Inside your project folder, organize files like this:

```
Your-Project-Name/
├── index.html          (Main entry point - REQUIRED)
├── css/                (Your stylesheets)
│   └── style.css
├── js/                 (Your JavaScript files)
│   └── script.js
├── images/             (Your images)
│   ├── screenshot.png
│   └── logo.png
└── assets/             (Other resources)
    └── data.json
```

---

## 🎨 Where to Add Your Code

### Option 1: Single HTML File (Simple Projects)

Keep everything in one `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Your CSS here */
        body { background: #f0f0f0; }
    </style>
</head>
<body>
    <a href="../index.html">← Back to All Projects</a>
    
    <!-- Your HTML content here -->
    
    <script>
        // Your JavaScript here
        console.log('Hello!');
    </script>
</body>
</html>
```

### Option 2: Multiple Files (Complex Projects)

Separate your code into multiple files:

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <a href="../index.html">← Back</a>
    <!-- Your content -->
    <script src="js/script.js"></script>
</body>
</html>
```

**css/style.css:**
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}
```

**js/script.js:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
});
```

---

## ✅ Step-by-Step Checklist

Before submitting, make sure you've completed:

- [ ] Created my project folder inside `minimal-startpage-template/`
- [ ] Created `index.html` file in my project folder
- [ ] Added my project link to `minimal-startpage-template/index.html`
- [ ] The `href` in my link exactly matches my folder name
- [ ] Added a "Back to All Projects" link in my project page
- [ ] Tested clicking my link from the main page
- [ ] Tested the back button works correctly
- [ ] All my images and resources load properly
- [ ] My project displays correctly on different screen sizes

---

## 🔗 Complete Project Structure Example

```
TYCORE2026/
│
├── index.html                          (Auto-redirects to projects hub)
├── README.md                           (This documentation)
│
└── minimal-startpage-template/         (Main projects hub)
    │
    ├── index.html                      (Projects homepage with clock & links)
    ├── css/
    │   └── main.css                    (Startpage styling)
    ├── js/
    │   └── main.js                     (Clock functionality)
    ├── fonts/
    │   └── Roboto-Regular.ttf
    │
    └── Projects/
        └── Shlok/
            └── index.html              (Shlok's project page)
        └── Coffee-Shop/
            └── index.html              (Coffee Shop project page)
        └── Calculator-App/
            └── index.html              (Calculator App project)
        └── Weather-Dashboard/
            └── index.html              (Weather Dashboard project)
        └── Portfolio-Alex/
            └── index.html              (Alex's portfolio project)
```

---

## 📝 Code Examples

### Adding Your Link (in minimal-startpage-template/index.html)

Find this section:
```html
<!-- ================================================= -->
<!-- STUDENTS: ADD YOUR PROJECT LINK BELOW THIS LINE  -->
<!-- ================================================= -->
```

Add your section after it:
```html
<section class="link-section">
    <h2 class="link-section-title purple">Sarah's Projects</h2>
    <hr />
    <ul class="link-list">
        <li class="link-list-item"><a class="link" href="Sarah-Portfolio/index.html">My Portfolio</a></li>
        <li class="link-list-item"><a class="link" href="Sarah-Game/index.html">JavaScript Game</a></li>
    </ul>
</section>
```

### Adding a Back Link (in your project's index.html)

Add this link at the top of your page:
```html
<a href="../index.html" style="display: inline-block; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin-bottom: 20px;">
    ← Back to All Projects
</a>
```

---

## ❓ Frequently Asked Questions

**Q: Where exactly do I create my project folder?**
A: Inside `minimal-startpage-template/` - NOT in the main `TYCORE2026/` folder

**Q: What file must I edit to add my project link?**
A: Edit `minimal-startpage-template/index.html` and add your section with links

**Q: Can I have multiple projects?**
A: Yes! Create multiple folders and add multiple links in your section

**Q: My link doesn't work. What's wrong?**
A: Check that:
   - Your `href` matches your folder name exactly (case-sensitive!)
   - You included `/index.html` at the end of the link
   - Your folder is inside `minimal-startpage-template/`
   - Your folder contains an `index.html` file

**Q: Can I use CSS frameworks like Bootstrap?**
A: Yes! Any web technology is allowed

**Q: Can I add images?**
A: Yes! Create an `images/` folder in your project and reference them as `./images/photo.jpg`

**Q: Do I need to modify anything in the css/js/fonts folders?**
A: No! Leave those alone - they're for the startpage design

**Q: Can I change the colors of my section title?**
A: Yes! Use: `red`, `blue`, `green`, `yellow`, `purple`, or `orange` in the `link-section-title` class

**Q: What if I want to delete the example projects?**
A: You can remove the Coffee-Shop and Shlok-Bajaj folders and their links from `index.html`

---

## 🆘 Troubleshooting

### Problem: My project link doesn't appear on the homepage
**Solution:** Make sure you added your `<section>` to `minimal-startpage-template/index.html`

### Problem: Clicking my link shows "404 Not Found"
**Solution:** 
- Check that your folder name in the `href` matches exactly
- Make sure your folder contains `index.html`
- Verify you're inside `minimal-startpage-template/` folder

### Problem: My back link doesn't work
**Solution:** Use `../index.html` to go back one folder level to the startpage

### Problem: Images don't load
**Solution:** Use relative paths like `./images/photo.jpg` or `images/photo.jpg`

---

## 🎯 Summary

**1. Create folder** → Inside `minimal-startpage-template/`  
**2. Add your website** → Create `index.html` with your project  
**3. Add your link** → Edit `minimal-startpage-template/index.html`  
**4. Test it** → Open main page and click your link  

---

**Happy coding! 🎓 Showcase your amazing work in TYCORE 2026!**
