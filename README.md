# Indrawan Lisanto - Software Engineer Portfolio

A modern, cyberpunk-themed portfolio built with Vite + React + Tamagui.

## Features

- ⚡ **Fast & Lightweight** - Built with Vite for instant HMR and rapid builds
- 🎨 **Cyberpunk Design** - Terminal-inspired aesthetic with green and amber accents
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Optimized** - High performance with smooth animations
- 📊 **Complete CV** - Showcases 6+ years of experience and 30+ projects

## Tech Stack

- **Framework**: React 19 + Vite
- **UI**: Tamagui
- **Styling**: CSS3 + Tailwind
- **Font**: Kode Mono (monospace)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      - Sticky navigation header
│   ├── Hero.tsx        - Hero section with intro
│   ├── Skills.tsx      - Technical skills by category
│   ├── Projects.tsx    - Featured and other projects
│   ├── Experience.tsx  - Work experience timeline
│   ├── Contact.tsx     - Contact section with links
│   └── *.css          - Component-specific styles
├── data.ts            - All portfolio data (CV, projects, skills)
├── App.tsx            - Main app component
└── index.css          - Global styles
```

## Customization

### Update Your Information

Edit `src/data.ts` to update:
- Personal info (name, title, bio, contact)
- Skills (categories and technologies)
- Projects (featured and other)
- Experience (work history and achievements)

### Customize Colors

Edit `tamagui.config.ts`:
- `--accent-primary`: Terminal green (#00ff00)
- `--accent-secondary`: Amber (#ffaa00)
- `--background`: Dark black (#050505)

### Modify Fonts

Change the font in `src/index.css`:
```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap");
```

## Performance

- **First Contentful Paint (FCP)**: < 1s
- **Largest Contentful Paint (LCP)**: < 2s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: 95+

## Deployment

The portfolio is optimized for deployment on Vercel:

```bash
# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

MIT - Feel free to use this as a template for your own portfolio!

## Author

**Indrawan Lisanto**
- Website: https://indrawan.dev
- Email: me@indrawan.dev
- GitHub: https://github.com/itokun99
