# CUSTOMIZATION GUIDE

A step-by-step guide to personalize your portfolio website.

## Step 1: Update Personal Information

### Navbar Logo & Name
**File: `index.html`**
```html
<!-- Find this section (around line 30) -->
<div class="navbar-logo">
    <i class="fas fa-code"></i>
    <span>YourName</span>  <!-- ← CHANGE THIS TO YOUR NAME -->
</div>
```

### Hero Section
**File: `index.html`** (around line 45-50)
```html
<h1 class="hero-title">Your Name</h1>              <!-- ← YOUR NAME -->
<p class="hero-subtitle">Aspiring Software Developer</p>  <!-- ← YOUR TITLE/ROLE -->
<p class="hero-description">
    I'm passionate about building beautiful, functional web applications...
    <!-- ← WRITE YOUR OWN INTRO HERE -->
</p>
```

---

## Step 2: Update Contact Information

### Email Address
**File: `index.html`**
Search for `your.email@example.com` and replace with your actual email:
- Navbar contact link
- Contact section
- Footer

**Example:**
```html
<!-- BEFORE: -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- AFTER: -->
<a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
```

### GitHub Profile
Search for `https://github.com` and replace with your profile:
```html
<!-- BEFORE: -->
<a href="https://github.com" target="_blank">github.com/yourprofile</a>

<!-- AFTER: -->
<a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a>
```

### LinkedIn Profile
Search for `https://linkedin.com` and replace:
```html
<!-- BEFORE: -->
<a href="https://linkedin.com" target="_blank">linkedin.com/in/yourprofile</a>

<!-- AFTER: -->
<a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a>
```

---

## Step 3: Customize Your About Section

**File: `index.html`** (Around line 70)

Replace the placeholder text:
```html
<div class="about-text">
    <p>
        I'm a passionate developer with a keen interest in creating elegant solutions...
        <!-- ← REPLACE WITH YOUR BIO -->
    </p>
</div>
```

**Example:**
```html
<p>
    I'm a full-stack developer based in New York with 3 years of experience.
    I specialize in React and Node.js, and I love building user-friendly applications.
    When I'm not coding, you can find me contributing to open source or writing tech blogs.
</p>
```

---

## Step 4: Update Your Skills

**File: `index.html`** (Around line 80-100)

Replace each skill placeholder with your actual skills:

**BEFORE:**
```html
<div class="skill-card">
    <i class="fas fa-globe"></i>
    <span>Add your skills here</span>
</div>
```

**AFTER:**
```html
<div class="skill-card">
    <i class="fas fa-code"></i>
    <span>JavaScript</span>
</div>

<div class="skill-card">
    <i class="fab fa-react"></i>
    <span>React.js</span>
</div>

<div class="skill-card">
    <i class="fab fa-node"></i>
    <span>Node.js</span>
</div>

<div class="skill-card">
    <i class="fas fa-database"></i>
    <span>MongoDB</span>
</div>
```

**Find icons here:** https://fontawesome.com/icons

---

## Step 5: Add Your Projects

**File: `index.html`** (Around line 130-180)

Replace each project card placeholder:

**BEFORE:**
```html
<div class="project-card">
    <div class="project-placeholder">
        <i class="fas fa-plus"></i>
        <p>Add Project</p>
    </div>
    <h3 class="project-title">Project Title</h3>
    <p class="project-description">Description goes here...</p>
    <div class="project-tech">
        <span class="tech-tag">Tech Stack</span>
    </div>
    <a href="#" class="project-link">
        <span>View Project</span>
        <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

**AFTER:**
```html
<div class="project-card">
    <!-- Remove the placeholder div if you have a project -->
    <h3 class="project-title">E-Commerce Platform</h3>
    <p class="project-description">
        A full-stack e-commerce solution with user authentication, product catalog, 
        shopping cart, and payment integration.
    </p>
    <div class="project-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
        <span class="tech-tag">MongoDB</span>
        <span class="tech-tag">Stripe</span>
    </div>
    <a href="https://github.com/yourprofile/ecommerce-platform" class="project-link">
        <span>View Project</span>
        <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

**Option: Keep Placeholder**
If you don't have projects yet, keep the placeholder div but just update the title:
```html
<div class="project-placeholder">
    <i class="fas fa-plus"></i>
    <p>Add Project</p>
</div>
```

---

## Step 6: Customize Colors

**File: `styles.css`** (Around line 10-20)

Find and update the CSS variables:

```css
:root {
    --primary-color: #2563eb;      /* Main color (links, buttons) */
    --secondary-color: #1e40af;    /* Darker shade of primary */
    --accent-color: #ec4899;       /* Highlight color (CTA button) */
    --text-dark: #1f2937;          /* Main text color */
    --text-light: #6b7280;         /* Secondary text color */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
    --border-color: #e5e7eb;       /* Border color */
    --success-color: #10b981;      /* Success messages */
}
```

**Popular Color Combinations:**

**Option 1: Professional Blue**
```css
--primary-color: #0066cc;
--secondary-color: #004399;
--accent-color: #ff6b6b;
```

**Option 2: Fresh Green**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #f59e0b;
```

**Option 3: Purple Gradient**
```css
--primary-color: #7c3aed;
--secondary-color: #5b21b6;
--accent-color: #ec4899;
```

**Option 4: Teal/Cyan**
```css
--primary-color: #06b6d4;
--secondary-color: #0891b2;
--accent-color: #f59e0b;
```

---

## Step 7: Update Page Title & Meta Tags

**File: `index.html`** (Around line 5)

```html
<!-- BEFORE: -->
<title>Your Portfolio - Aspiring Software Developer</title>

<!-- AFTER: -->
<title>John Doe - Full Stack Developer</title>
```

Optional: Add more SEO tags:
```html
<meta name="description" content="Portfolio of John Doe, a full-stack developer specializing in React and Node.js">
<meta name="keywords" content="developer, react, nodejs, web development">
<meta name="author" content="John Doe">
```

---

## Step 8: Connect the Contact Form (Optional)

The contact form currently shows a success message. To actually receive emails:

### Option A: Using Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Create an account and new form
3. In `index.html`, update the form:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Your form fields stay the same -->
</form>
```

### Option B: Using EmailJS

1. Visit [emailjs.com](https://emailjs.com)
2. Create account and get your Service ID, Template ID, and Public Key
3. In `script.js`, find the form submission handler and update it with EmailJS code

### Option C: Use Your Own Backend

If you have a backend server, update `script.js`:
```javascript
// Around line 80, replace the fetch call with:
fetch('https://your-backend.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
    contactForm.reset();
})
.catch(error => {
    showNotification('Failed to send message', 'error');
});
```

---

## Step 9: Add a Profile Picture (Optional)

To add a profile picture, modify the HTML to include an image section.

Add this to the About section in `index.html`:
```html
<div class="about-content">
    <div class="about-image">
        <img src="your-image.jpg" alt="Your Name">
    </div>
    <div class="about-text">
        <!-- existing content -->
    </div>
</div>
```

Add CSS to `styles.css`:
```css
.about-image {
    flex: 1;
    text-align: center;
}

.about-image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
    .about-image img {
        width: 200px;
        height: 200px;
    }
}
```

---

## Step 10: Publish Your Website

### Option 1: Netlify (Recommended for Beginners)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub/Google
3. Create new site → Drag and drop your project folder
4. Your site is live! Get a free `.netlify.app` domain

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy (automatically)
4. Get a free `.vercel.app` domain

### Option 3: GitHub Pages
1. Create a GitHub repository named `username.github.io`
2. Push your files to the main branch
3. Your site is live at `https://username.github.io`

### Option 4: Custom Domain
Buy a domain and point it to any of the above services.

---

## Checklist Before Publishing

✓ Update name and title  
✓ Add email and social links  
✓ Write your bio  
✓ Add your skills with appropriate icons  
✓ Add your projects (or keep placeholders)  
✓ Choose your color scheme  
✓ Test all links work  
✓ Test on mobile (inspect in browser → Toggle Device Toolbar)  
✓ Spell check everything  
✓ Deploy!  

---

## Questions?

If anything is unclear, refer to:
- `README.md` - Overview and features
- `index.html` - Comments throughout the code
- `styles.css` - Well-organized sections
- `script.js` - Documented functions

Good luck! 🚀
