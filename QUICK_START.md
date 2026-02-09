# Quick Start Guide 🚀

Get your Valentine's Day application live in 5 minutes!

## Step 1: Prepare Your Media (Optional but Recommended)

Before deploying, add your personal touches:

1. **Add images to the gallery**:
   - Create folder: `client/public/images/`
   - Add 4 of your favorite photos (JPG/PNG)
   - Update `client/src/components/FinalMessage.tsx` with image paths

2. **Add a video to the loading screen** (optional):
   - Create folder: `client/public/videos/`
   - Add your video file (MP4)
   - Update `client/src/components/LoadingScreen.tsx` with video path

See [MEDIA_CONFIG.md](./MEDIA_CONFIG.md) for detailed instructions.

## Step 2: Test Locally

```bash
cd /home/ubuntu/valentines-for-melissa
pnpm dev
```

Open `http://localhost:3000` in your browser and test the quiz!

## Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **+** → **New repository**
3. Name it: `valentines-for-melissa`
4. Choose **Public**
5. Click **Create repository**

## Step 4: Deploy to GitHub Pages

Run these commands in your terminal:

```bash
cd /home/ubuntu/valentines-for-melissa

# Initialize git
git init
git add .
git commit -m "Valentine's Day quiz for Melissa"
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/valentines-for-melissa.git
git push -u origin main

# Build for production
pnpm build
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** section
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
5. Click **Save**

Wait 1-2 minutes for GitHub to build and deploy.

## Step 6: Share with Melissa! 💕

Your app is now live at:

```
https://YOUR_USERNAME.github.io/valentines-for-melissa/
```

Send her this link and watch her solve the quiz!

## Making Updates

If you want to make changes after deployment:

```bash
# Make your changes to the code
# Then:
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub will automatically rebuild and redeploy within 1-2 minutes.

## Troubleshooting

**App shows 404 error?**
- Wait a few minutes for GitHub Pages to rebuild
- Clear your browser cache (Ctrl+Shift+Delete)

**Images not loading?**
- Check file paths start with `/`
- Verify files are in `client/public/`
- File names are case-sensitive on GitHub

**Styles look wrong?**
- Clear browser cache
- Wait for GitHub Pages to rebuild

## Next Steps

- Customize the questions in `client/src/pages/Home.tsx`
- Change colors in `client/src/index.css`
- Add more memories in the final message
- Share the link with Melissa!

## Need More Help?

- Full deployment guide: [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
- Media configuration: [MEDIA_CONFIG.md](./MEDIA_CONFIG.md)
- Complete documentation: [README.md](./README.md)

---

**Happy Valentine's Day!** 💕✨

Made with love for Melissa 🥰
