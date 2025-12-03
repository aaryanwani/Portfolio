# Professional Portfolio - Aaryan Wani

A modern, interactive portfolio website built with React and Tailwind CSS, featuring smooth animations, glassmorphic design, and an animated network graph background.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scroll Navigation**: Click navigation items to smoothly scroll to sections
- **Interactive Animations**: Fade-in effects, hover animations, and network graph background
- **Professional Sections**:
  - Hero with introduction and key stats
  - Areas of Expertise showcase
  - Professional Experience timeline
  - Featured Projects with detailed descriptions
  - Technical Skills organized by category
  - Contact section with social links

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Create a new React project**:
```bash
npx create-react-app my-portfolio
cd my-portfolio
```

2. **Install dependencies**:
```bash
npm install lucide-react
```

3. **Replace the default App.js**:
   - Copy the contents of `professional-portfolio.jsx` 
   - Paste into `src/App.js`

4. **Update Tailwind CSS**:
   
   Install Tailwind:
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

   Update `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Update `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the development server**:
```bash
npm start
```

Your portfolio should now be running at `http://localhost:3000`

## Customization

### Update Personal Information

1. **Contact Links** (in the Contact section):
   - GitHub: Update the URL to your actual GitHub profile
   - LinkedIn: Already set to your LinkedIn
   - Email: Already set to your email

2. **Projects**: Add or modify projects in the `projectData` array

3. **Skills**: Update the `skillCategories` array with your tech stack

4. **Experience**: Modify the experience section with your job history

### Color Scheme

The portfolio uses a violet/purple gradient theme. To change colors, update the Tailwind classes:
- Primary: `violet-500`, `violet-400`
- Accents: `purple-500`, `purple-400`

Search for these in the code and replace with your preferred colors.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (it will auto-detect React settings)

### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## Resume Integration

To add your resume download:
1. Place your PDF resume in the `public` folder as `Aaryan_Wani_Resume.pdf`
2. The download button in the hero section will link to it

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- The network graph animation is optimized but can be adjusted
- Reduce the number of nodes in the `nodes` array if needed
- Images can be lazy-loaded for faster initial load

## License

MIT License - Feel free to use this template for your own portfolio

## Contact

**Aaryan Wani**
- Email: aaryan272001@gmail.com
- LinkedIn: [linkedin.com/in/aaryan-wani](https://linkedin.com/in/aaryan-wani/)
- GitHub: Check navigation in portfolio

---

Built with ❤️ using React, Tailwind CSS, and Lucide Icons
