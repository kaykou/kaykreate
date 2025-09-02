# Kaykreate Portfolio Website

A modern, elegant portfolio website featuring a sophisticated dark/light theme system and code protection measures.

## ✨ Features

- **Elegant Two-Color Theme System** - Clean design using only #1E1E1E and #409EDD
- **Dark/Light Mode Toggle** - Smooth transitions with dynamic favicon switching
- **Code Protection** - Minified JavaScript and anti-inspection measures
- **Responsive Design** - Works perfectly on all devices
- **Glass Morphism UI** - Modern blur effects and smooth animations
- **Interactive Service Cards** - Detailed modal popups for services
- **Contact Form Integration** - Ready for Formspree or similar services

## 🎨 Design Highlights

- Soft, eye-friendly color palette in light mode
- Smooth cubic-bezier transitions throughout
- Professional code editor styling with syntax highlighting
- Dynamic logo system that adapts to theme changes
- Elegant hover effects and animations

## 🔒 Security Features

- Minified and obfuscated JavaScript
- Disabled developer tools access
- Protected source code viewing
- DevTools detection with access denial

## 🚀 Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Inter)
- **Deployment:** Ready for Netlify, GitHub Pages, or any static hosting

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with theme system
├── script.min.js       # Minified JavaScript (production)
├── protect.js          # Code protection measures
├── k-logo-*.svg        # Theme-aware logo files
├── netlify.toml        # Deployment configuration
└── .gitignore          # Git ignore rules
```

## 🛠️ Setup & Deployment

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Local Development**
   - Open `index.html` in your browser
   - Or use a local server for testing

3. **GitHub Pages Deployment**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Select main branch as source

4. **Netlify Deployment**
   - Connect GitHub repository to Netlify
   - Auto-deploy on push enabled
   - Custom domain support available

## 📧 Contact Form Setup

The contact form is configured for Formspree. To activate:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action URL in `index.html`

## 🎯 Customization

- **Colors:** Modify CSS variables in `:root` and `[data-theme="dark"]`
- **Content:** Update text and images in `index.html`
- **Services:** Modify service details in the modal content
- **Logo:** Replace SVG files with your own branding

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Kaykreate**
