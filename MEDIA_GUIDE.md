# Adding Media to Quiz Questions

You can now add images and videos to display when Melissa answers each question correctly!

## How to Add Media

### Step 1: Place Your Media Files

Create these folders in your project:
```
client/public/images/     (for photos)
client/public/videos/     (for videos)
```

### Step 2: Update Quiz Questions

Edit `client/src/pages/Home.tsx` and uncomment the `media` array for each question:

#### Example 1: Adding Images

```typescript
{
  id: 1,
  question: "Where did Melly become Spiderman?",
  options: ["Huashan", "Emeishan", "Huangshan"],
  correctAnswer: 2,
  message: "You remembered! That was such an epic moment! 🕷️",
  media: [
    { type: 'image', src: '/images/huangshan1.jpg' },
    { type: 'image', src: '/images/huangshan2.jpg' }
  ]
}
```

#### Example 2: Adding a Video

```typescript
{
  id: 5,
  question: "Scariest thing I did with you?",
  options: ["Zipline", "Hot-air balloon", "Eating eel"],
  correctAnswer: 1,
  message: "That hot-air balloon ride was unforgettable! 🎈",
  media: [
    { type: 'video', src: '/videos/balloon.mp4' }
  ]
}
```

#### Example 3: Mixing Images and Videos

```typescript
{
  id: 2,
  question: "When did we eat the best chippies?",
  options: ["Turkey Market", "China Mountain", "Japan Lake"],
  correctAnswer: 0,
  message: "Those chippies were absolutely amazing! 🍟",
  media: [
    { type: 'image', src: '/images/chippies1.jpg' },
    { type: 'image', src: '/images/chippies2.jpg' },
    { type: 'video', src: '/videos/eating_chippies.mp4' }
  ]
}
```

## Media Guidelines

### Images
- **Format**: JPG, PNG
- **Size**: 800x600px or larger (will be responsive)
- **File size**: Keep under 2MB for fast loading
- **Location**: `client/public/images/`

### Videos
- **Format**: MP4 (H.264 codec)
- **Duration**: 5-30 seconds recommended
- **File size**: Keep under 5MB
- **Location**: `client/public/videos/`
- **Note**: Videos will have playback controls

## How It Works

When Melissa answers a question correctly:
1. The feedback message appears
2. All media files display above the message
3. Images are shown in full width
4. Videos have playback controls

## Testing Locally

1. Add your media files to the appropriate folders
2. Update the quiz questions with media paths
3. Run `pnpm dev`
4. Test by answering questions correctly
5. Verify media displays properly

## Example Complete Question

Here's a fully configured question with media:

```typescript
{
  id: 3,
  question: "What happened at the back of the bus in Turkey?",
  options: ["Spill drink", "Vomit", "Boil water"],
  correctAnswer: 1,
  message: "Oh no, that was quite the adventure! 🚌",
  media: [
    { type: 'image', src: '/images/bus_memory.jpg' },
    { type: 'video', src: '/videos/bus_moment.mp4' }
  ]
}
```

## Tips

- **Organize your files**: Use descriptive names like `huangshan1.jpg`, `balloon.mp4`
- **Optimize images**: Compress images before uploading to reduce file size
- **Test responsiveness**: Check how media looks on mobile devices
- **Multiple media**: You can add as many images/videos as you want per question
- **Order matters**: Media displays in the order you list them

## Troubleshooting

**Media not showing?**
- Check file path starts with `/`
- Verify file is in `client/public/` folder
- Check file name spelling (case-sensitive on GitHub)
- Make sure file format is supported

**Video won't play?**
- Ensure it's MP4 format with H.264 codec
- Try converting with: `ffmpeg -i input.mov -vcodec h264 -acodec aac output.mp4`
- Check file size isn't too large

**Images look blurry?**
- Use higher resolution images (1200x900px or larger)
- Avoid stretching images

## Next Steps

1. Add your media files to the folders
2. Update the quiz questions in `Home.tsx`
3. Test locally with `pnpm dev`
4. Deploy to GitHub Pages when ready!
