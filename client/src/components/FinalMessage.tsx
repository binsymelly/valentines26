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
  const [confettiPieces, setConfettiPieces] = useState([]);

  const memories = [
    { url: "videos/wedding.mp4", caption: "Naughty gf!", type: "video" },
    { url: "images/takoyaki.jpg", caption: "Looking youthful :)", type: "image" },
    { url: "images/calling.jpg", caption: "Blind box era hehe", type: "image" },
    { url: "images/balloon.jpg", caption: "Lovie dovie", type: "image" },
    { url: "images/huashan.jpg", caption: "Huashan Conquerors.. before rushing to airport", type: "image" },
    { url: "videos/turkeyboat.mp4", caption: "Naughty gf pt2", type: "video" },
    { url: "images/gbtb.jpg", caption: "Cycling with jiejie & jacon", type: "image" },
    { url: "images/cny.jpg", caption: "Choo choo face haha", type: "image" },
    { url: "images/huanglong.jpg", caption: "Attempt on boomer-style", type: "image" },
    { url: "images/littleindia.jpg", caption: "Random flowers on a random adventure", type: "image" },
    { url: "images/sam.jpg", caption: "Snortingg..... lego??", type: "image" },
    { url: "images/birdpark.jpg", caption: "Gf like animals!", type: "image" },
    { url: "videos/snow.mp4", caption: "Snowy Central Park", type: "video" },
    { url: "videos/zanebday.mp4", caption: "Naughty gf pt3!", type: "video" },
    { url: "images/ladder.jpg", caption: "ZhangJiaJie Conquerors!! 一步登天", type: "image" },
    { url: "images/grottoes.jpg", caption: "✌️", type: "image" },
    { url: "images/house.jpg", caption: "Our big purchase, our home 🏡", type: "image" }
  ];

  useEffect(() => {
    setShowConfetti(true);
    
    // Generate 30 confetti pieces
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFE6F0] to-[#E6D5F0] relative overflow-x-hidden">
      
      {/* 1. Confetti animation */}
      {showConfetti && confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="fixed pointer-events-none animate-confetti z-50"
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

      {/* 2. Floating stickers (Background) */}
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

      {/* 3. Main content wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-12">
        
        {/* Header Message - Kept contained for readability */}
        <div className="w-full max-w-3xl mb-16 animate-fade-in-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-8 md:p-12 text-center border border-white/50">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              ❤️ Happy Valentine's Day Melly! ❤️
            </h1>
            
            <p className="text-xl text-[#666666] font-medium mb-8 leading-relaxed">
              You passed the test! I always knew it was YOU. 
            </p>

            <p className="text-lg text-[#2C2C2C] mb-8 leading-relaxed">
              Every moment with you is special - from the mountains we climbed, to the best chippies we've ever had, 
              to all the crazy adventures we've shared. You make every day an adventure, and I'm so grateful to have you in my life.
            </p>

            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6C1] to-[#D8B4FE] mb-8">
              I love you so much, Melly bb! ❤️
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <span className="text-5xl hover:scale-110 transition-transform cursor-default">❤️</span>
              <span className="text-5xl hover:scale-110 transition-transform cursor-default delay-75">✨</span>
              <span className="text-5xl hover:scale-110 transition-transform cursor-default delay-100">💐</span>
              <span className="text-5xl hover:scale-110 transition-transform cursor-default delay-150">😍</span>
              <span className="text-5xl hover:scale-110 transition-transform cursor-default delay-200">💕</span>
            </div>
          </div>
        </div>

        {/* 4. Expanded Gallery Section */}
        <div className="w-full max-w-[95%] xl:max-w-[1400px] animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] text-center mb-10 drop-shadow-sm">
            Our Memories Together 📸💕
          </h2>

          {/* Masonry Layout: 1 col (mobile), 2 col (tablet), 3 col (laptop), 4 col (desktop) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {memories.map((item, i) => (
              <div
                key={i}
                className="relative break-inside-avoid bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-[#FFB6C1]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {item.type === "video" ? (
                  <video
                    src={item.url}
                    className="w-full h-auto block"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-auto block"
                  />
                )}

                {/* Caption Overlay - Reveals on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Footer message */}
        <div className="mt-20 pb-12 text-center animate-fade-in-up">
          <p className="text-lg text-[#666666] font-medium mb-2">
            Made with love for the most special person in my life 💕
          </p>
          <p className="text-sm text-[#999999] italic">
            Forever yours, Binsy
          </p>
        </div>

      </div>
    </div>
  );
}