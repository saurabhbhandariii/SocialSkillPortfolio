# Saurabh Bhandari - Professional Portfolio

A modern, responsive portfolio website showcasing projects, skills, and experience with GitHub integration and dark/light theme support.

## Features

- ✨ Modern design with dark/light theme toggle
- 📱 Fully responsive across all devices
- 🚀 Fast loading with optimized performance
- 📊 Real-time GitHub repository integration
- 🎨 Smooth animations and transitions
- 📧 Contact form with validation
- 🔍 SEO optimized

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **UI Components**: Radix UI, Shadcn/ui
- **Icons**: Lucide React, Font Awesome
- **Deployment**: Replit (or any Node.js hosting)

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git
- VS Code (recommended)

## Local Development Setup

### 1. Extract and Setup Project

1. Extract the downloaded ZIP file to your desired location
2. Open VS Code
3. Go to `File > Open Folder` and select the extracted project folder

### 2. Install Dependencies

Open the integrated terminal in VS Code (`Ctrl+` ` or `Terminal > New Terminal`) and run:

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Environment Setup

The project includes your resume file. Make sure `attached_assets/resume_2025.pdf` is in the project root.

### 4. Start Development Server

Run the development server:

```bash
npm run dev
```

The application will start on `http://localhost:5000`

### 5. Development Workflow

- The server automatically restarts when you make changes
- Frontend uses Vite for hot module replacement
- Backend uses tsx for TypeScript execution

## Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── pages/         # Page components
│   │   └── types/         # TypeScript type definitions
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/               # Shared types and schemas
└── attached_assets/      # Static assets (resume, images)
```

## Customization

### Updating Personal Information

1. **Contact Information**: Edit `client/src/components/Contact.tsx`
2. **About Section**: Modify `client/src/components/About.tsx`
3. **Skills**: Update `client/src/components/Skills.tsx`
4. **Projects**: Add/modify projects in `client/src/components/Projects.tsx`
5. **Experience**: Edit `client/src/components/Experience.tsx`

### Adding New Projects

In `client/src/components/Projects.tsx`, add to the `projects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Project description',
  tech: ['React', 'Node.js', 'Other Tech'],
  github: 'https://github.com/username/repo',
  image: 'image-url',
  stats: 'Optional stats'
}
```

### Theme Customization

Colors and styling can be modified in:
- `client/src/index.css` - CSS variables and custom styles
- `tailwind.config.ts` - Tailwind configuration

## Deployment Options

### Option 1: Replit (Recommended)

1. Create a Replit account at replit.com
2. Click "Create Repl" > "Import from GitHub" 
3. Upload your project files
4. Replit will auto-detect the configuration
5. Click "Deploy" to make it live

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Option 3: Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Option 4: Traditional Hosting

1. Build: `npm run build`
2. Upload files to your hosting provider
3. Configure Node.js environment
4. Start with `npm start`

## GitHub Integration

The portfolio automatically fetches repository data from GitHub. To update the repositories:

1. Edit the `githubRepos` array in `client/src/components/Projects.tsx`
2. Add your repository names (without the full URL)

## Troubleshooting

### Common Issues

1. **Port already in use**: Kill processes on port 5000 or change port in `server/index.ts`
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **Build errors**: Check TypeScript errors in VS Code and fix them

### Performance Optimization

- Images are optimized automatically
- Code splitting is handled by Vite
- CSS is optimized and purged in production

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript checks

## VS Code Extensions (Recommended)

- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter

## Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Check the terminal for build errors

## License

This project is for personal use. Feel free to customize it for your own portfolio.

---

Built with ❤️ using modern web technologies