import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuizQuestion from '@/components/QuizQuestion';
import LoadingScreen from '@/components/LoadingScreen';
import FinalMessage from '@/components/FinalMessage';
import StickerDecoration from '@/components/StickerDecoration';

/**
 * Playful Kawaii Minimalism - Valentine's Day Quiz
 * 
 * Design Philosophy:
 * - Soft pastel colors (rose, mint, lavender) create a warm, inviting atmosphere
 * - Jin Miran stickers as emotional anchors throughout the experience
 * - Gentle floating animations and playful interactions
 * - Asymmetric layout with generous whitespace
 * - Celebration animations on correct answers
 */

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  images?: string[];
  message?: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Where did Melly become Spiderman?",
    options: ["Huashan", "Emeishan", "Huangshan"],
    correctAnswer: 2,
    message: "You remembered! That was such an epic moment! 🕷️"
  },
  {
    id: 2,
    question: "When did we eat the best chippies?",
    options: ["Turkey Market", "China Mountain", "Japan Lake"],
    correctAnswer: 0,
    message: "Those chippies were absolutely amazing! 🍟"
  },
  {
    id: 3,
    question: "What happened at the back of the bus in Turkey?",
    options: ["Spill drink", "Vomit", "Boil water"],
    correctAnswer: 1,
    message: "Oh no, that was quite the adventure! 🚌"
  },
  {
    id: 4,
    question: "Hottest place we've been to?",
    options: ["Chengdu", "Japan", "USA"],
    correctAnswer: 0,
    message: "Chengdu was absolutely scorching! 🔥"
  },
  {
    id: 5,
    question: "Scariest thing I did with you?",
    options: ["Zipline", "Hot-air balloon", "Eating eel"],
    correctAnswer: 1,
    message: "That hot-air balloon ride was unforgettable! 🎈"
  },
  {
    id: 6,
    question: "Who is our child?",
    options: ["Alien", "Goodgood", "Zaneh"],
    correctAnswer: 1,
    message: "Goodgood is our precious little one! 👶"
  },
  {
    id: 7,
    question: "Who is the bestest bf?",
    options: ["Binsy", "Someone else"],
    correctAnswer: 0,
    message: "That's right! 💕"
  }
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const evasiveButtonRef = useRef<HTMLDivElement | null>(null);

  // Track mouse position for evasive button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Evasive button logic for the last question
  useEffect(() => {
    if (currentQuestionIndex === 6 && evasiveButtonRef.current) {
      const button = evasiveButtonRef.current;
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distX = mousePos.x - buttonCenterX;
      const distY = mousePos.y - buttonCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // If mouse is within 150px, move the button away
      if (distance < 150) {
        const angle = Math.atan2(distY, distX);
        const moveDistance = 150 - distance;
        const moveX = Math.cos(angle) * moveDistance * 1.5;
        const moveY = Math.sin(angle) * moveDistance * 1.5;
        
        button.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      } else {
        button.style.transform = 'translate(0, 0)';
      }
    }
  }, [mousePos, currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === QUIZ_QUESTIONS[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (isCorrect) {
      setCompletedQuestions([...completedQuestions, currentQuestionIndex]);
      
      if (currentQuestionIndex === QUIZ_QUESTIONS.length - 1) {
        // Last question answered correctly
        setShowFeedback(false);
        setShowLoading(true);
        
        // Show loading screen for 3 seconds
        setTimeout(() => {
          setShowLoading(false);
          setShowFinal(true);
        }, 3000);
      } else {
        // Move to next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      }
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (showLoading) {
    return <LoadingScreen />;
  }

  if (showFinal) {
    return <FinalMessage />;
  }

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F7] via-[#FFF9F7] to-[#FFE6F0] relative overflow-hidden">
      {/* Floating sticker decorations */}
      <StickerDecoration position="top-10 left-10" delay={0} />
      <StickerDecoration position="top-1/3 right-5" delay={1} />
      <StickerDecoration position="bottom-20 left-1/4" delay={2} />
      <StickerDecoration position="bottom-10 right-10" delay={3} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
            Are you really Melissa? 💕
          </h1>
          <p className="text-lg text-[#666666] font-medium">
            Let's verify you with some special memories...
          </p>
          
          {/* Progress bar */}
          <div className="mt-8 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-[#FFB6C1]">
                Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-sm font-semibold text-[#B0E0E6]">
                {completedQuestions.length} correct
              </span>
            </div>
            <div className="w-full h-2 bg-[#FFE6F0] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FFB6C1] to-[#E6D5F0] transition-all duration-500"
                style={{
                  width: `${((completedQuestions.length + (showFeedback && isCorrect ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {/* Quiz Question Card */}
        <div className="w-full max-w-2xl animate-fade-in-up">
          <QuizQuestion
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
            onAnswerSelect={handleAnswerSelect}
            isLastQuestion={currentQuestionIndex === QUIZ_QUESTIONS.length - 1}
            evasiveButtonRef={evasiveButtonRef as React.RefObject<HTMLDivElement>}
          />
        </div>

        {/* Action buttons */}
        <div className="mt-12 flex gap-4 justify-center animate-fade-in-up">
          {showFeedback && (
            <>
              {isCorrect ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-[#FFB6C1] to-[#E6D5F0] text-white px-8 py-6 text-lg font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "See my surprise! 🎁" : "Next question →"}
                </Button>
              ) : (
                <Button
                  onClick={handleTryAgain}
                  className="bg-[#B0E0E6] text-[#2C2C2C] px-8 py-6 text-lg font-semibold rounded-full hover:shadow-lg transition-all"
                >
                  Try again 💭
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
