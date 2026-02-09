/**
 * StickerDecoration Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Displays Jin Miran sticker emojis as floating decorations
 * - Animated floating motion with gentle rotation
 * - Positioned absolutely around the page
 * - Uses fixed stickers per position for consistency
 */

interface StickerDecorationProps {
  position: string;
  delay: number;
}

// Fixed sticker assignments per position for consistency
const STICKER_MAP: { [key: string]: string } = {
  'top-10 left-10': '😊',
  'top-1/3 right-5': '🥰',
  'bottom-20 left-1/4': '💕',
  'bottom-10 right-10': '✨'
};

export default function StickerDecoration({ position, delay }: StickerDecorationProps) {
  // Get the fixed sticker for this position, or use a default
  const sticker = STICKER_MAP[position] || '😊';
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
      {sticker}
    </div>
  );
}
