/**
 * StickerDecoration Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Displays Jin Miran sticker emojis as floating decorations
 * - Animated floating motion with gentle rotation
 * - Positioned absolutely around the page
 * - Uses fixed stickers per position for consistency
 * - Fixed sizes per position for stability
 */

interface StickerDecorationProps {
  position: string;
  delay: number;
}

// Fixed sticker assignments per position with consistent sizes
const STICKER_MAP: { [key: string]: { emoji: string; size: number } } = {
  'top-10 left-10': { emoji: '😊', size: 48 },
  'top-1/3 right-5': { emoji: '🥰', size: 56 },
  'bottom-20 left-1/4': { emoji: '💕', size: 52 },
  'bottom-10 right-10': { emoji: '✨', size: 44 }
};

export default function StickerDecoration({ position, delay }: StickerDecorationProps) {
  // Get the fixed sticker and size for this position
  const stickerData = STICKER_MAP[position] || { emoji: '😊', size: 48 };

  return (
    <div
      className={`absolute ${position} pointer-events-none animate-float`}
      style={{
        fontSize: `${stickerData.size}px`,
        lineHeight: '1',
        animationDelay: `${delay * 0.5}s`,
        filter: 'drop-shadow(0 4px 8px rgba(255, 182, 193, 0.2))',
        willChange: 'transform'
      }}
    >
      {stickerData.emoji}
    </div>
  );
}
