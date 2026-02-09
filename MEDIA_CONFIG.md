# Media Configuration Guide

This file explains how to add your images and videos to the Valentine's Day application.

## How to Add Your Media

### 1. Images for the Final Message Gallery

Replace the image placeholders in `client/src/components/FinalMessage.tsx` with your own images.

**Steps:**
1. Place your image files in `client/public/images/` (create the folder if it doesn't exist)
2. Update the FinalMessage component to reference your images

**Example:**
```tsx
// In FinalMessage.tsx, replace the image placeholder grid with:
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <img src="/images/memory1.jpg" alt="Memory 1" className="w-full h-full object-cover rounded-2xl shadow-soft" />
  <img src="/images/memory2.jpg" alt="Memory 2" className="w-full h-full object-cover rounded-2xl shadow-soft" />
  <img src="/images/memory3.jpg" alt="Memory 3" className="w-full h-full object-cover rounded-2xl shadow-soft" />
  <img src="/images/memory4.jpg" alt="Memory 4" className="w-full h-full object-cover rounded-2xl shadow-soft" />
</div>
```

### 2. Video for the Loading Screen

The loading screen shows a video placeholder. To add your video:

**Steps:**
1. Place your video file in `client/public/videos/` (create the folder if it doesn't exist)
2. Update the LoadingScreen component to embed your video

**Example:**
```tsx
// In LoadingScreen.tsx, replace the video container with:
<div className="w-full max-w-2xl mb-12 animate-fade-in-up">
  <video 
    className="w-full rounded-3xl shadow-soft"
    autoPlay 
    muted 
    loop
    style={{ maxHeight: '400px', objectFit: 'cover' }}
  >
    <source src="/videos/surprise.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

### 3. Images for Quiz Questions (Optional)

Each quiz question can display images when answered correctly. To add these:

**Steps:**
1. Place your image files in `client/public/images/`
2. Update the QUIZ_QUESTIONS array in `client/src/pages/Home.tsx`

**Example:**
```tsx
const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Where did Melly become Spiderman?",
    options: ["Huashan", "Emeishan", "Huangshan"],
    correctAnswer: 2,
    images: ["/images/huangshan1.jpg", "/images/huangshan2.jpg"],
    message: "You remembered! That was such an epic moment! 🕷️"
  },
  // ... rest of questions
];
```

## File Structure

After adding your media, your project structure should look like:

```
client/
├── public/
│   ├── images/
│   │   ├── memory1.jpg
│   │   ├── memory2.jpg
│   │   ├── memory3.jpg
│   │   ├── memory4.jpg
│   │   └── ... (quiz question images)
│   └── videos/
│       └── surprise.mp4
├── src/
│   ├── components/
│   │   ├── FinalMessage.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── QuizQuestion.tsx
│   │   └── ...
│   └── pages/
│       └── Home.tsx
```

## Image Recommendations

- **Final Message Gallery**: 4 images (1080x1080px or similar square format)
- **Loading Screen Video**: MP4 format, 5-15 seconds, 1920x1080px or similar
- **Quiz Question Images**: Optional, 800x600px or similar

## Testing Locally

1. Add your media files to the appropriate folders
2. Update the component files with your image/video paths
3. Run `pnpm dev` to test locally
4. Verify all images and videos load correctly
5. When ready, deploy to GitHub Pages

## Notes

- Keep file sizes reasonable (images < 2MB, videos < 10MB) for faster loading
- Use common formats: JPG/PNG for images, MP4 for videos
- Test on mobile devices to ensure responsive layout
- The application is fully responsive and will work on all screen sizes
