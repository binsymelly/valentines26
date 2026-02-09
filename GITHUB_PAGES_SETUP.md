# GitHub Pages Deployment Guide

This guide will help you deploy the Valentine's Day application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The application files ready with your media added

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository: `valentines-for-melissa` (or any name you prefer)
4. Choose **Public** (so Melissa can access it)
5. Click **Create repository**

### 2. Prepare Your Local Repository

Open your terminal and navigate to the project directory:

```bash
cd /home/ubuntu/valentines-for-melissa
```

Initialize git and add your repository:

```bash
git init
git add .
git commit -m "Initial commit: Valentine's Day quiz for Melissa"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentines-for-melissa.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/(root)**
5. Click **Save**

### 4. Build and Deploy

The application will automatically build and deploy when you push to GitHub. However, you need to build it first:

```bash
cd /home/ubuntu/valentines-for-melissa
pnpm build
```

This creates a `dist` folder with the built application.

### 5. Update GitHub Pages Configuration

For GitHub Pages to serve your app correctly, update `vite.config.ts` if needed:

```typescript
export default defineConfig({
  base: '/', // or '/repository-name/' if using a project site
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
```

### 6. Access Your Application

Once deployed, your application will be available at:

```
https://YOUR_USERNAME.github.io/valentines-for-melissa/
```

Or if you configured a custom domain:

```
https://your-custom-domain.com/
```

## Updating Your Application

To make changes and redeploy:

1. Make your changes locally
2. Test with `pnpm dev`
3. Build the application: `pnpm build`
4. Commit and push:

```bash
git add .
git commit -m "Update: [describe your changes]"
git push
```

GitHub will automatically rebuild and redeploy your application.

## Troubleshooting

### Application shows 404 error

- Make sure the `base` in `vite.config.ts` is set correctly
- Clear your browser cache
- Wait a few minutes for GitHub Pages to rebuild

### Images/videos not loading

- Verify file paths start with `/` (absolute paths)
- Check that files are in `client/public/` directory
- Ensure file names are correct (case-sensitive on GitHub)

### Styles not applying

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that CSS files are properly imported
- Verify Tailwind CSS is building correctly

## Sharing with Melissa

Once deployed, share the link with Melissa:

```
https://YOUR_USERNAME.github.io/valentines-for-melissa/
```

She can access it from any device with a web browser!

## Tips

- Test the application on mobile devices before sharing
- Make sure all images and videos are optimized for web
- Consider adding a custom domain for a more personal touch
- Keep the repository private if you want to add more surprises later

## Need Help?

- GitHub Pages Documentation: https://pages.github.com/
- Vite Documentation: https://vitejs.dev/
- React Documentation: https://react.dev/
