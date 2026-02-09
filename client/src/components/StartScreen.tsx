/**
 * StartScreen Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Welcome screen with romantic messaging
 * - Cute sticker decorations
 * - Call-to-action button to start the quiz
 * - Animated entrance
 */

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFE6F0] to-[#E6D5F0] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Floating stickers */}
      <div className="absolute top-10 left-10 text-6xl opacity-60 animate-float">😊</div>
      <div className="absolute top-1/3 right-10 text-7xl opacity-50 animate-float" style={{ animationDelay: '1s' }}>
        💕
      </div>
      <div className="absolute bottom-20 left-1/4 text-6xl opacity-70 animate-float" style={{ animationDelay: '2s' }}>
        🌸
      </div>
      <div className="absolute bottom-10 right-1/4 text-5xl opacity-60 animate-float" style={{ animationDelay: '3s' }}>
        ✨
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl text-center animate-fade-in-up">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2C2C2C] mb-4">
            Hey Melissa! 💕
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] font-medium mb-6">
            I have something special for you...
          </p>
        </div>

        {/* Description Card */}
        <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 mb-8">
          <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
            I've created a little quiz to verify that you're really you. 
            It's all about our amazing memories together! 
          </p>
          
          <p className="text-lg text-[#666666] leading-relaxed">
            Answer the questions correctly and you'll unlock some special surprises. 
            Good luck! 🎉
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="
            bg-gradient-to-r from-[#FFB6C1] to-[#E6D5F0] text-white
            px-12 py-4 rounded-full font-bold text-xl
            transition-all duration-300 hover:shadow-lg
            transform hover:scale-105
            inline-block
          "
        >
          Let's Begin! 🚀
        </button>

        {/* Footer message */}
        <p className="text-sm text-[#999999] mt-8">
          Made with love just for you 💕
        </p>
      </div>
    </div>
  );
}
