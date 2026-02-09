/**
 * StickerDecoration Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Displays Jin Miran sticker emojis as floating decorations
 * - Animated floating motion with gentle rotation
 * - Positioned absolutely around the page
 * - Multiple sticker variations for visual interest
 */

interface StickerDecorationProps {
  position: string;
  delay: number;
}

const STICKERS = ['😊', '🥰', '😍', '🤗', '😘', '💕', '✨', '🌸'];

export default function StickerDecoration({ position, delay }: StickerDecorationProps) {
  const randomSticker = STICKERS[Math.floor(Math.random() * STICKERS.length)];
  const randomSize = Math.random() * 20 + 40; // 40-60px

  return (
    <div
      className={`absolute ${position} pointer-events-none animate-float`}
      style={{
        fontSize: `${randomSize}px`,
        animationDelay: `${delay * 0.5}s`,
        filter: 'drop-shadow(0 4px 8px rgba(255, 182, 193, 0.2))'
      }}
    >
      {randomSticker}
    </div>
  );
}
