import { useEffect, useState } from 'react';

/**
 * LoadingScreen Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Shows a loading animation with romantic messaging
 * - Displays a video placeholder (user will upload their video)
 * - Animated loading bar with soft colors
 * - Celebratory message
 */

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFE6F0] to-[#E6D5F0] flex flex-col items-center justify-center px-4">
      {/* Video Container Placeholder */}
      <div className="w-full max-w-2xl mb-12 animate-fade-in-up">
        <div className="aspect-video bg-gradient-to-br from-[#FFB6C1] to-[#E6D5F0] rounded-3xl shadow-soft flex items-center justify-center overflow-hidden">
          {/* Video will be embedded here - for now showing placeholder */}
          <div className="text-center">
            <div className="text-6xl mb-4">🎥</div>
            <p className="text-white text-xl font-semibold">Loading something special...</p>
          </div>
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
