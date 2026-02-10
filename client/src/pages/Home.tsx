import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuizQuestion from '@/components/QuizQuestion';
import LoadingScreen from '@/components/LoadingScreen';
import FinalMessage from '@/components/FinalMessage';
import StickerDecoration from '@/components/StickerDecoration';
import StartScreen from '@/components/StartScreen';

/**
 * Playful Kawaii Minimalism - Valentine's Day Quiz
 * 
 * Design Philosophy:
 * - Soft pastel colors (rose, mint, lavender) create a warm, inviting atmosphere
 * - Jin Miran stickers as emotional anchors throughout the experience
 * - Gentle floating animations and playful interactions
 * - Asymmetric layout with generous whitespace
 * - Celebration animations on correct answers
 * - Media support (images/videos) for personalized memories
 */

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  message?: string;
  media?: {
    type: 'image' | 'video';
    src: string;
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Where did Melly become Spiderman?",
    options: ["Huashan", "New York City", "West Coast Park"],
    correctAnswer: 0,
    message: "'No, it must look like im climbing' indeed... Such an epic moment my cheeky girlfriend!💥",
    // Uncomment and add your media:
    media: [
      { type: 'video', src: '/videos/spiderman.mp4' },
    //   { type: 'image', src: '/images/huangshan2.jpg' }
    ]
  },
  {
    id: 2,
    question: "When did we eat the best chippies?",
    options: ["Turkey Grand Bazaar", "E Meishan", "Lake Kawaguchiko"],
    correctAnswer: 1,
    message: "Those chippies were absolutely amazing! Fresh and KRISPP-EEE 🍟",
    media: [
      { type: 'image', src: '/images/chippies.jpg' }
    ]
  },
  {
    id: 3,
    question: "What happened at the back of the bus in Turkey?",
    options: ["Spilled our drinks", "Vomitted on the cushion", "Boiled water unattended"],
    correctAnswer: 2,
    message: "What were we thinking? Went from panic to acceptance, and later just ignoring it and enjoying the views. I remember how we were thinking of explaining the situation prior to boarding the bus and the RELIEF we felt when we realised all was good, CLUTCHHH!! 🚌🤙",
    media: [
      { type: 'image', src: '/images/pamukkale.jpg' },
      { type: 'image', src: '/images/bus.jpg' }
    ]
  },
  {
    id: 4,
    question: "Hottest place we've been to?",
    options: ["Chengdu", "Japan", "USA"],
    correctAnswer: 0,
    message: "Chengdu was absolutely scorching! and we had to go from one entrance to another to get our bags, even the pandas were like 'bruhhhhh' 🔥",
    media: [
      { type: 'image', src: '/images/pandas.jpg' }
    ]
  },
  {
    id: 5,
    question: "Scariest thing I did with you?",
    options: ["Chairlift", "Hot-air balloon", "Eating eel noodles"],
    correctAnswer: 0,
    message: "The audacity to enjoy a drink on THAT chairlift! My girlfriend is a fearless legend 💪 sippies!!!",
    media: [
      { type: 'video', src: '/videos/chairlift.mp4' }
    ]
  },
  {
    id: 6,
    question: "Who is our child?",
    options: ["Alien", "Good-good", "Zaneh"],
    correctAnswer: 0,
    message: "Look at this cutie zaneh boy boy 👶 but A-LIAN is the real child hahahaha 👽 -antenna connected-",
    media: [
      { type: 'image', src: '/images/zaneh.jpg' },
      { type: 'image', src: '/images/alien.jpg' }
    ]
  },
  {
    id: 7,
    question: "And lastly, Who is the BESTEST bf? 😍",
    options: ["Binsy", "Someone else"],
    correctAnswer: 0,
    message: "That's right! YOU HAVE NO CHOICE MUAHAHAHA💕"
  }
];

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);
  const evasiveButtonRef = useRef<HTMLDivElement | null>(null);

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
    return (
      <LoadingScreen
        onComplete={() => {
          setShowLoading(false);
          setShowFinal(true);
        }}
      />
    );
  }

  if (showFinal) {
    return <FinalMessage />;
  }

  if (!hasStarted) {
    return <StartScreen onStart={() => setHasStarted(true)} />;
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
