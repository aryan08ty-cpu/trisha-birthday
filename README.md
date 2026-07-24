# 🎂 Trisha's Birthday Website

A beautiful, romantic birthday website created with love for Trisha's birthday (August 24).

## 📋 Features

✨ **Hero Section** - Beautiful gradient background with animated hearts and greeting
⏱️ **Countdown Timer** - Live countdown to her birthday
📸 **Photo Gallery** - 6 photo slots with smooth hover effects
💌 **Love Letter** - A heartfelt poem and message from Aryan
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
🎨 **Pink Theme** - Romantic pink color scheme throughout

## 🚀 How to Use

### 1. **View Locally**
- Simply open `index.html` in any modern web browser
- All files are self-contained (no dependencies needed)

### 2. **Deploy on GitHub Pages**
- Go to your repository settings
- Scroll to "GitHub Pages"
- Select main branch as source
- Your website will be live at: `https://aryan08ty-cpu.github.io/trisha-birthday/`

### 3. **Deploy on Other Platforms**
- **Netlify**: Connect your GitHub repo and it auto-deploys
- **Vercel**: Same as Netlify
- **Any web hosting**: Simply upload the 3 files (index.html, style.css, script.js)

## 📸 Adding Your Photos

Replace the placeholder images in `index.html`:

1. Find the gallery section (around line 85-105)
2. Replace the image paths in `<img src="...">` with your actual image URLs
3. You can use:
   - Direct image URLs (copy image URL from Google Photos, Instagram, etc.)
   - Imgur links
   - Or upload images to the repository and reference them locally

**Example:**
```html
<!-- Original -->
<img src="data:image/svg+xml,%3Csvg..." alt="Memory 1">

<!-- Updated -->
<img src="your-image-url.jpg" alt="Memory 1">
```

## 🎨 Customization Options

### Change Colors
Edit the `:root` variables in `style.css`:
```css
:root {
    --primary-pink: #FFB6D9;
    --hot-pink: #FF69B4;
    --deep-pink: #FF1493;
    /* ... more colors ... */
}
```

### Change Birthday Date
Edit the target date in `script.js`:
```javascript
const targetDate = new Date('August 24, 2026').getTime();
// Change to your actual date
```

### Change Text Content
Edit the text in `index.html`:
- Greeting message
- Names
- Love letter content
- Photo captions

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 💡 Tips

1. **For best results**: Use high-quality photos in 1:1 aspect ratio (square)
2. **Photo formats**: JPG, PNG, WebP all work great
3. **Optimize images**: Compress photos before adding to reduce load time
4. **Mobile preview**: Test on mobile before sharing
5. **Share the link**: Once deployed, share the live URL with her!

## 🔧 File Structure

```
trisha-birthday/
├── index.html      # Main website structure
├── style.css       # All styling and animations
├── script.js       # Countdown timer and interactivity
└── README.md       # This file
```

## 📝 Notes

- No backend or database required
- No music (as per your request)
- Fully static website (fast loading)
- Dark mode friendly
- Touch-friendly on mobile

## 🎉 Happy Birthday Trisha!

This website was created with love on July 24, 2026.

Made by: **Aryan** ❤️

---

*"She is a normal girl coming from a normal home but my love for her has made her a goddess in front of me."* 💕