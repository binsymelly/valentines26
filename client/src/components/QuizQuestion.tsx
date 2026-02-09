import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

/**
 * QuizQuestion Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Soft card with rounded corners and gentle shadows
 * - Animated question text with fade-in effect
 * - Multiple choice buttons with hover effects
 * - Feedback messages with sticker reactions
 * - Media support (images/videos) for correct answers
 * - Evasive button that moves away on mouseover (inspired by roosafeed/Evasive-Button)
 */

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    message?: string;
    media?: {
      type: 'image' | 'video';
      src: string;
    }[];
  };
  selectedAnswer: number | null;
  showFeedback: boolean;
  isCorrect: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  isLastQuestion: boolean;
  evasiveButtonRef?: React.RefObject<HTMLButtonElement>;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onAnswerSelect,
  isLastQuestion,
  evasiveButtonRef
}: QuizQuestionProps) {
  const [celebrationIndex, setCelebrationIndex] = useState<number | null>(null);
  const [evasivePosition, setEvasivePosition] = useState({ x: 0, y: 0 });
  const localEvasiveRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef = evasiveButtonRef || localEvasiveRef;

  // Handle evasive button mouseover
  const handleEvasiveMouseOver = () => {
    if (selectedAnswer !== null || !isLastQuestion) return;

    // Generate random position to move to
    const randomX = (Math.random() - 0.5) * 300; // -150 to 150px
    const randomY = (Math.random() - 0.5) * 300; // -150 to 150px
    
    setEvasivePosition({ x: randomX, y: randomY });
  };

  const handleEvasiveMouseLeave = () => {
    setEvasivePosition({ x: 0, y: 0 });
  };

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer === null) {
      onAnswerSelect(index);
      if (index === question.correctAnswer) {
        setCelebrationIndex(index);
        setTimeout(() => setCelebrationIndex(null), 600);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 animate-fade-in-up">
        {/* Question Text */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-8 text-center leading-relaxed">
          {question.question}
        </h2>

        {/* Options Grid */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            // Evasive button for the last question's second option
            if (isLastQuestion && index === 1) {
              return (
                <button
                  key={index}
                  ref={buttonRef}
                  onClick={() => handleAnswerClick(index)}
                  onMouseOver={handleEvasiveMouseOver}
                  onMouseLeave={handleEvasiveMouseLeave}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full py-3 px-4 rounded-2xl font-semibold text-base
                    transition-all duration-200 ease-out
                    ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}
                    bg-[#FFE6F0] text-[#2C2C2C] hover:bg-[#FFD4E5]
                    disabled:opacity-50 relative
                  `}
                  style={{
                    transform: `translate(${evasivePosition.x}px, ${evasivePosition.y}px)`,
                    pointerEvents: selectedAnswer !== null ? 'none' : 'auto'
                  }}
                >
                  {option}
                </button>
              );
            }

            // Regular buttons for all other options
            return (
              <div key={index} className="relative">
                <Button
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full py-4 px-6 rounded-2xl font-semibold text-lg
                    transition-all duration-300
                    ${
                      selectedAnswer === index
                        ? isCorrect
                          ? 'bg-gradient-to-r from-[#B0E0E6] to-[#90D5D8] text-white'
                          : 'bg-red-400 text-white'
                        : 'bg-[#FFE6F0] text-[#2C2C2C] hover:bg-[#FFD4E5]'
                    }
                    ${
                      showFeedback && index === question.correctAnswer
                        ? 'ring-4 ring-[#FFB6C1] ring-offset-2'
                        : ''
                    }
                    ${celebrationIndex === index ? 'animate-bounce-celebration' : ''}
                  `}
                >
                  {option}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Feedback Message with Media */}
        {showFeedback && (
          <div className={`
            mt-8 p-6 rounded-2xl text-center animate-fade-in-up
            ${
              isCorrect
                ? 'bg-gradient-to-r from-[#B0E0E6]/20 to-[#E6D5F0]/20 border-2 border-[#B0E0E6]'
                : 'bg-red-100 border-2 border-red-300'
            }
          `}>
            {/* Media Gallery */}
            {isCorrect && question.media && question.media.length > 0 && (
              <div className="mb-6 space-y-4">
                {question.media.map((media, idx) => (
                  <div key={idx} className="w-full">
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={`Memory ${idx + 1}`}
                        className="w-full rounded-2xl shadow-soft object-cover max-h-96"
                      />
                    ) : (
                      <video
                        src={media.src}
                        controls
                        className="w-full rounded-2xl shadow-soft max-h-96"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Message Text */}
            <p className={`text-lg font-semibold ${isCorrect ? 'text-[#2C2C2C]' : 'text-red-700'}`}>
              {isCorrect ? (
                <>
                  <span className="text-2xl mr-2">✨</span>
                  {question.message || 'Correct! You know me so well!'}
                  <span className="text-2xl ml-2">💕</span>
                </>
              ) : (
                <>
                  <span className="text-2xl mr-2">🤔</span>
                  Hmm, that's not quite right... Try again!
                  <span className="text-2xl ml-2">💭</span>
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
