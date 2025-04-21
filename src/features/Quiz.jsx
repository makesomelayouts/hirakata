import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hiraganaData = [
  { char: "あ", romaji: "a" },
  { char: "か", romaji: "ka" },
  { char: "ね", romaji: "ne" },
  { char: "む", romaji: "mu" },
  // Добавьте остальные символы
];

// Вынесем функции генерации вне компонента
const generateOptions = (correctAnswer, allData) => {
  const options = new Set([correctAnswer]);
  while (options.size < 4) {
    const random = allData[Math.floor(Math.random() * allData.length)].romaji;
    options.add(random);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
};

const generateQuestions = (data) => {
  return data
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((item) => ({
      ...item,
      options: generateOptions(item.romaji, data),
    }));
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [questions, setQuestions] = useState(() =>
    generateQuestions(hiraganaData)
  );

  // Остальной код без изменений
  useEffect(() => {
    if (!isQuizFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, isQuizFinished]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].romaji) {
      setScore(score + 1);
    }

    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15);
      setSelectedAnswer("");
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
    setSelectedAnswer("");
    setIsQuizFinished(false);
    setQuestions(generateQuestions(hiraganaData));
  };

  if (isQuizFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Результаты</h2>
        <p className="text-2xl">Правильных ответов: {score}/10</p>
        <button
          onClick={restartQuiz}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between mb-8">
          <div className="text-xl">Вопрос: {currentQuestion + 1}/10</div>
          <div className="text-xl">Время: {timeLeft} сек</div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/20 backdrop-blur-lg p-8 rounded-xl"
        >
          <h3 className="text-6xl text-center mb-8 font-jp">
            {questions[currentQuestion].char}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== ""}
                className={`p-4 text-xl rounded-lg transition-all
                  ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].romaji
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-purple-500 hover:bg-purple-600"
                  }
                  ${selectedAnswer && "cursor-not-allowed"}`}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
