# Personal Portfolio Website - MVP

A clean, modern, and responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Perfect for showcasing your projects and getting in touch with potential clients or employers.

## 📋 Features

✅ **Responsive Design** - Mobile-first approach, works on all devices  
✅ **Modern UI** - Clean design with smooth animations and hover effects  
✅ **No Framework Bloat** - Pure HTML, CSS, and JavaScript (no jQuery, React, Vue, etc.)  
✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation  
✅ **Performance** - Lightweight, fast-loading, optimized for web vitals  
✅ **Icon Library** - Font Awesome 6 for professional icons  
✅ **Smooth Navigation** - Smooth scrolling and mobile hamburger menu  
✅ **Contact Form** - Beautiful form UI with validation (ready for backend integration)  
✅ **Placeholder Structure** - Clear placeholders to add your own content  
✅ **Security** - No hardcoded secrets, production-ready structure  

## 🎨 Sections Included

1. **Navbar** - Sticky navigation with smooth scroll links and mobile menu
2. **Hero Section** - Eye-catching banner with CTA button
3. **About Me** - Personal introduction with skills showcase
4. **Projects** - Placeholder cards for your portfolio projects
5. **Contact** - Contact information, social links, and contact form
6. **Footer** - Social media links and copyright

## 🚀 Quick Start

### Option 1: Direct File Usage
1. Download the three files: `index.html`, `styles.css`, `script.js`
2. Open `index.html` in your browser
3. No build process required - it just works!

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server Extension
# Right-click on index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` (or the port shown in your terminal)

## ✏️ Customization Guide

### 1. Update Your Name & Details

**In `index.html`:**
```html
<!-- Update these placeholders -->
<span>YourName</span>              <!-- Navbar logo -->
<h1 class="hero-title">Your Name</h1>  <!-- Hero section -->
<a href="mailto:your.email@example.com">...</a>  <!-- Contact info -->
```

### 2. Customize Skills

In the **About Me** section, replace placeholder skill cards:
```html
<div class="skill-card">
    <i class="fas fa-globe"></i>
    <span>Your Skill Here</span>
</div>
```

Choose icons from [Font Awesome Icon Library](https://fontawesome.com/icons)

### 3. Add Your Projects

Update the **Projects** section with real project details:
```html
<div class="project-card">
    <div class="project-placeholder">
        <!-- Remove or keep the placeholder overlay -->
    </div>
    <h3 class="project-title">My Awesome Project</h3>
    <p class="project-description">Built with React and Node.js...</p>
    <div class="project-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
    </div>
    <a href="https://github.com/yourprofile/project" class="project-link">
        <span>View Project</span>
        <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

### 4. Update Social Links

Replace all instances of placeholder URLs:
- `https://github.com` → Your GitHub profile URL
- `https://linkedin.com` → Your LinkedIn profile URL
- `your.email@example.com` → Your actual email

### 5. Change Color Scheme

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Change this */
    --secondary-color: #1e40af;    /* And this */
    --accent-color: #ec4899;       /* And this */
    /* ... other colors ... */
}
```

Popular color palettes:
- **Blue**: `#0066cc`, `#003d99`, `#ff6b6b`
- **Green**: `#10b981`, `#059669`, `#f59e0b`
- **Purple**: `#7c3aed`, `#5b21b6`, `#ec4899`
- **Teal**: `#06b6d4`, `#0891b2`, `#f59e0b`

### 6. Connect Contact Form to Backend

Currently, the form shows a success message but doesn't send data. To make it work:

**Option A: Email Service (Firebase, EmailJS, SendGrid)**
```javascript
// In script.js, replace the form submission handler
// with your email service's API

// Example with EmailJS:
fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_PUBLIC_KEY',
        template_params: { name, email, message }
    })
});
```

**Option B: Your Own Backend**
```javascript
// Send data to your server
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
.then(response => response.json())
.then(data => showNotification('Message sent!', 'success'))
.catch(error => showNotification('Error sending message', 'error'));
```

## 📱 Responsive Breakpoints

- **Mobile**: Below 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Large**: Above 1200px

All components automatically adapt to screen size.

## 🎯 Key Files Explained

### `index.html`
- Page structure with semantic HTML5
- All sections marked with comments
- Font Awesome CDN included
- Google Fonts for typography

### `styles.css`
- CSS variables for easy theming
- Flexbox and Grid layouts
- Mobile-first responsive design
- Smooth transitions and animations
- No CSS framework dependency

### `script.js`
- Smooth scrolling navigation
- Mobile hamburger menu toggle
- Contact form validation
- Intersection Observer for scroll animations
- Keyboard accessibility (Escape key)
- Lightweight (~8KB uncompressed)

## 🔒 Security Best Practices

✅ **No hardcoded secrets** - Placeholders for all credentials  
✅ **No sensitive data in frontend** - Contact form doesn't expose backend details  
✅ **Clean code** - Well-commented for future developers  
✅ **Production-ready** - Can be deployed to any static host  

**If you add an API key:**
1. **NEVER** commit it to version control
2. Use environment variables or a `.env` file (add to `.gitignore`)
3. Access from backend, not frontend

## 🚀 Deployment Options

### Free Hosting:
- **Netlify** - Drag & drop deploy
- **Vercel** - Perfect for static sites
- **GitHub Pages** - Free hosting with git push
- **Firebase Hosting** - Google's solution
- **AWS S3 + CloudFront** - Scalable option

### Quick Netlify Deploy:
1. Drag and drop your project folder into Netlify
2. Done! Your site is live

## 📝 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🛠️ Troubleshooting

**Icons not showing?**
- Check Font Awesome CDN link in `index.html`
- Ensure internet connection (CDN requires internet)

**Smooth scrolling not working?**
- Check browser support (all modern browsers support it)
- Verify `scroll-behavior: smooth` in CSS

**Form not working?**
- Form currently just shows success message
- Connect to backend service (see instructions above)

**Mobile menu stuck?**
- Clear browser cache or hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📚 Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Web.dev - Performance](https://web.dev/)

## 📄 License

This template is free to use for personal and commercial projects. No attribution required.

## 🎓 Learning Resources

This template is great for learning:
- HTML semantic structure
- Modern CSS techniques (Flexbox, Grid, Variables)
- Vanilla JavaScript (DOM manipulation, event listeners)
- Responsive design principles
- Web accessibility standards

---

**Ready to customize?** Start by updating your name and contact information, then add your projects and skills. Good luck! 🚀
#   N a t h a n i e l p o r f o l i o  
 