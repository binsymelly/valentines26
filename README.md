# Valentine's Day Quiz for Melissa 💕

A cute and romantic interactive web application to verify that your girlfriend is really Melissa through a series of personalized questions about your memories together.

## Features

✨ **Interactive Quiz System**
- 7 personalized questions about your shared memories
- Multiple choice answers with instant feedback
- Celebratory animations on correct answers
- Encouraging messages on incorrect answers

🎯 **Special Interactions**
- Physics-based evasive button on the final question (the "someone else" button moves away from the cursor!)
- Floating Jin Miran sticker decorations throughout
- Smooth animations and transitions
- Playful Kawaii Minimalism design aesthetic

🎁 **Final Surprise**
- Loading screen with video placeholder
- Romantic Valentine's Day message
- Image gallery for your shared memories
- Celebratory confetti animation

📱 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile devices
- Touch-friendly interface for all screen sizes
- Fast loading and smooth performance

## Questions Included

1. Where did Melly become Spiderman? (Huangshan)
2. When did we eat the best chippies? (Turkey Market)
3. What happened at the back of the bus in Turkey? (Vomit)
4. Hottest place we've been to? (Chengdu)
5. Scariest thing I did with you? (Hot-air balloon)
6. Who is our child? (Goodgood)
7. Who is the bestest bf? (Binsy) - with evasive button!

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (`npm install -g pnpm`)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd valentines-for-melissa
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Adding Your Media

Add images under `client/public/images/` and videos under `client/public/videos/`. You can reference them in `client/src/pages/Home.tsx` in the `QUIZ_QUESTIONS` array (e.g. `media: [{ type: 'image', src: '/images/photo.jpg' }]`) and in the final message gallery.

### Building for Production

Build the application:

```bash
pnpm build
```

This creates a `dist` folder with the production-ready files.

Preview the production build:

```bash
pnpm preview
```

## Deployment

### GitHub Pages (Recommended)

The project is set up to deploy with **GitHub Actions**. The current file layout works as-is.

1. **Create a repo** named `valentines26` (so the URL is `https://YOUR_USERNAME.github.io/valentines26/`).
2. **Push** this folder as the repo root (so `valentines26` is the repository root, not a subfolder).
3. In the repo: **Settings → Pages** → under "Build and deployment", choose **GitHub Actions** (not "Deploy from a branch").
4. Push to `main` (or trigger the workflow). The workflow builds the app and deploys the contents of `dist/public` to GitHub Pages.

Your site will be live at `https://YOUR_USERNAME.github.io/valentines26/`.

### Other Hosting Options

The application can also be deployed to:
- Vercel
- Netlify
- Any static hosting service
- Your own web server

## Design Philosophy

The application follows a **Playful Kawaii Minimalism** design aesthetic:

- **Colors**: Soft rose (#FFB6C1), mint green (#B0E0E6), lavender (#E6D5F0)
- **Typography**: Quicksand (titles) + Poppins (body)
- **Animations**: Gentle floating motions, bounce effects, smooth transitions
- **Stickers**: Jin Miran emoji stickers as emotional anchors
- **Layout**: Asymmetric, spacious, with generous whitespace

## Technology Stack

- **React 19**: Modern UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Smooth animations (via Tailwind)

## Project Structure

```
valentines-for-melissa/
├── client/
│   ├── public/
│   │   ├── images/        (add your images here)
│   │   └── videos/        (add your video here)
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuizQuestion.tsx    (quiz card component)
│   │   │   ├── LoadingScreen.tsx   (loading/buffering screen)
│   │   │   ├── FinalMessage.tsx    (Valentine's message)
│   │   │   └── StickerDecoration.tsx (floating stickers)
│   │   ├── pages/
│   │   │   └── Home.tsx            (main quiz page)
│   │   ├── index.css               (design tokens & animations)
│   │   └── main.tsx                (entry point)
│   └── index.html
└── README.md               (this file)
```

## Customization

### Change the Questions

Edit `client/src/pages/Home.tsx` and modify the `QUIZ_QUESTIONS` array:

```tsx
const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Your custom question?",
    options: ["Option 1", "Option 2", "Option 3"],
    correctAnswer: 0,  // Index of correct answer
    message: "Custom feedback message!"
  },
  // ... more questions
];
```

### Change the Colors

Edit `client/src/index.css` and modify the CSS variables in the `:root` section:

```css
:root {
  --primary: #FFB6C1;      /* Soft rose */
  --secondary: #B0E0E6;    /* Mint green */
  --accent: #E6D5F0;       /* Lavender */
  --background: #FFF9F7;   /* Off-white */
  --foreground: #2C2C2C;   /* Dark text */
}
```

### Change the Final Message

Edit `client/src/components/FinalMessage.tsx` and update the text content.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for fast loading
- Smooth 60fps animations
- Responsive images and videos
- Minimal JavaScript bundle

## Troubleshooting

### Application won't load
- Clear browser cache
- Check that all dependencies are installed: `pnpm install`
- Restart the dev server: `pnpm dev`

### Styles not applying
- Verify Tailwind CSS is building: check `client/src/index.css`
- Clear browser cache
- Rebuild: `pnpm build`

### Images/videos not showing
- Check file paths in components (should start with `/`)
- Verify files are in `client/public/` directory
- Check browser console for 404 errors

### Evasive button not working
- Make sure you're on the last question
- Try moving your cursor towards the "someone else" button
- Check browser console for JavaScript errors

## Tips for the Best Experience

1. **Test on Mobile**: Open the link on a phone to ensure it looks good
2. **Optimize Media**: Compress images and videos for faster loading
3. **Use Quality Photos**: Choose your best memories for the gallery
4. **Test the Quiz**: Go through all questions to verify everything works
5. **Share the Link**: Send Melissa the deployed URL (not the GitHub repo)

## Made with ❤️

This Valentine's Day application was created with love to celebrate your special relationship. Customize it with your memories and share it with the one you love!

## License

MIT License - Feel free to use and modify as needed.

---

**Questions or issues?** Check the troubleshooting section or review the deployment guides.

Happy Valentine's Day! 💕✨
# Updated at Mon Feb  9 16:34:44 EST 2026
