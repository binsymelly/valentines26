import { useEffect, useState } from 'react';

/**
 * LoadingScreen Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Shows a loading animation with romantic messaging
 * - Displays a video that plays for its full duration
 * - Animated loading bar with soft colors
 * - Celebratory message
 */

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(3); // Default 3 seconds

  useEffect(() => {
    // Simulate progress based on video duration
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = (elapsed / videoDuration) * 100;
      
      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(newProgress);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [videoDuration]);

  const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setVideoDuration(video.duration);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFE6F0] to-[#E6D5F0] flex flex-col items-center justify-center px-4">
      {/* Video Container */}
      <div className="w-full max-w-2xl mb-12 animate-fade-in-up">
        <div className="aspect-video bg-gradient-to-br from-[#FFB6C1] to-[#E6D5F0] rounded-3xl shadow-soft flex items-center justify-center overflow-hidden">
          {/* Video element - replace with your video path */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            onLoadedMetadata={handleVideoLoadedMetadata}
            style={{
              display: 'block'
            }}
          >
            {/* Replace this with your actual video path */}
            <source src="/videos/surprise.mp4" type="video/mp4" />
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-xl font-semibold">Loading something special...</p>
            </div>
          </video>
        </div>
      </div>

      {/* Loading Message */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
          I knew you were her! 💕
        </h2>
        <p className="text-lg text-[#666666] font-medium">
          Getting your Valentine's surprise ready...
        </p>
      </div>

      {/* Loading Bar */}
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="h-3 bg-[#FFE6F0] rounded-full overflow-hidden shadow-soft">
          <div
            className="h-full bg-gradient-to-r from-[#FFB6C1] via-[#B0E0E6] to-[#E6D5F0] transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-center text-sm text-[#666666] mt-4 font-semibold">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>

      {/* Floating stickers */}
      <div className="absolute top-10 left-10 text-5xl opacity-60 animate-float">😊</div>
      <div className="absolute top-1/4 right-10 text-6xl opacity-50 animate-float" style={{ animationDelay: '1s' }}>
        💕
      </div>
      <div className="absolute bottom-20 left-1/4 text-5xl opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        ✨
      </div>
    </div>
  );
}
