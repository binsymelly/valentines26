import { Button } from '@/components/ui/button';
import { useState } from 'react';

/**
 * QuizQuestion Component
 * 
 * Design: Playful Kawaii Minimalism
 * - Soft card with rounded corners and gentle shadows
 * - Animated question text with fade-in effect
 * - Multiple choice buttons with hover effects
 * - Feedback messages with sticker reactions
 * - Special handling for the evasive "someone else" button
 */

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    message?: string;
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
          {question.options.map((option, index) => (
            <div key={index} className="relative">
              {isLastQuestion && index === 1 ? (
                // Evasive button for "someone else"
                <button
                  ref={evasiveButtonRef}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`
                    w-full py-4 px-6 rounded-2xl font-semibold text-lg
                    transition-all duration-300 ease-out
                    ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}
                    ${
                      selectedAnswer === index
                        ? 'bg-red-200 text-red-800'
                        : 'bg-[#FFE6F0] text-[#2C2C2C] hover:bg-[#FFD4E5]'
                    }
                    ${showFeedback && index === question.correctAnswer ? 'ring-4 ring-[#FFB6C1]' : ''}
                    disabled:opacity-50
                  `}
                >
                  {option}
                </button>
              ) : (
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
              )}
            </div>
          ))}
        </div>

        {/* Feedback Message */}
        {showFeedback && (
          <div className={`
            mt-8 p-6 rounded-2xl text-center animate-fade-in-up
            ${
              isCorrect
                ? 'bg-gradient-to-r from-[#B0E0E6]/20 to-[#E6D5F0]/20 border-2 border-[#B0E0E6]'
                : 'bg-red-100 border-2 border-red-300'
            }
          `}>
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
