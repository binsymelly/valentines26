import { useState, useEffect } from 'react';

/**
 * FinalMessage Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Displays romantic Valentine's Day message
 * - Image gallery for uploaded memories
 * - Celebratory animations and confetti
 * - Floating stickers and romantic elements
 */

export default function FinalMessage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setShowConfetti(true);
    
    // Generate confetti pieces
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFE6F0] to-[#E6D5F0] relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="fixed pointer-events-none animate-confetti"
          style={{
            left: `${piece.x}%`,
            top: '-20px',
            animationDelay: `${piece.delay}s`,
            fontSize: '24px'
          }}
        >
          {['💕', '✨', '🌸', '💐', '🎀'][piece.id % 5]}
        </div>
      ))}

      {/* Floating stickers */}
      <div className="absolute top-10 left-10 text-6xl opacity-70 animate-float">😍</div>
      <div className="absolute top-1/3 right-10 text-7xl opacity-60 animate-float" style={{ animationDelay: '1s' }}>
        💕
      </div>
      <div className="absolute bottom-20 left-1/4 text-6xl opacity-70 animate-float" style={{ animationDelay: '2s' }}>
        🌸
      </div>
      <div className="absolute bottom-10 right-1/4 text-5xl opacity-60 animate-float" style={{ animationDelay: '3s' }}>
        ✨
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Main message */}
        <div className="w-full max-w-3xl mb-12 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Happy Valentine's Day, Melissa! 💕
            </h1>
            
            <p className="text-xl text-[#666666] font-medium mb-8 leading-relaxed">
              You passed the test! I always knew it was you. 
            </p>

            <p className="text-lg text-[#2C2C2C] mb-8 leading-relaxed">
              Every moment with you is special - from the mountains we climbed, to the best chippies we've ever had, 
              to all the crazy adventures we've shared. You make every day an adventure, and I'm so grateful to have you in my life.
            </p>

            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6C1] to-[#E6D5F0] mb-8">
              I love you so much, Melly! 💕
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <span className="text-5xl">😍</span>
              <span className="text-5xl">💕</span>
              <span className="text-5xl">🌸</span>
              <span className="text-5xl">✨</span>
              <span className="text-5xl">💐</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Placeholder */}
        <div className="w-full max-w-4xl animate-fade-in-up">
          <h2 className="text-3xl font-bold text-[#2C2C2C] text-center mb-8">
            Our Memories 📸
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image placeholders - user will upload their own images */}
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-[#FFB6C1]/30 to-[#E6D5F0]/30 rounded-2xl shadow-soft flex items-center justify-center border-2 border-dashed border-[#FFB6C1] hover:shadow-soft-hover transition-all"
              >
                <div className="text-center">
                  <div className="text-5xl mb-2">📸</div>
                  <p className="text-[#666666] font-semibold">Upload your photo #{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-lg text-[#666666] font-medium mb-4">
            Made with love for the most special person in my life 💕
          </p>
          <p className="text-sm text-[#999999]">
            Forever yours, Binsy
          </p>
        </div>
      </div>
    </div>
  );
}
