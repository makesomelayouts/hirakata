import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getJapaneseChar } from "@/utils/japaneseChars";

const hiraganaData = [
  // Гласные
  { symbol: "あ", romaji: "a" },
  { symbol: "い", romaji: "i" },
  { symbol: "う", romaji: "u" },
  { symbol: "え", romaji: "e" },
  { symbol: "お", romaji: "o" },

  // Строка K
  { symbol: "か", romaji: "ka" },
  { symbol: "き", romaji: "ki" },
  { symbol: "く", romaji: "ku" },
  { symbol: "け", romaji: "ke" },
  { symbol: "こ", romaji: "ko" },

  // Строка S
  { symbol: "さ", romaji: "sa" },
  { symbol: "し", romaji: "shi" },
  { symbol: "す", romaji: "su" },
  { symbol: "せ", romaji: "se" },
  { symbol: "そ", romaji: "so" },

  // Строка T
  { symbol: "た", romaji: "ta" },
  { symbol: "ち", romaji: "chi" },
  { symbol: "つ", romaji: "tsu" },
  { symbol: "て", romaji: "te" },
  { symbol: "と", romaji: "to" },

  // Строка N
  { symbol: "な", romaji: "na" },
  { symbol: "に", romaji: "ni" },
  { symbol: "ぬ", romaji: "nu" },
  { symbol: "ね", romaji: "ne" },
  { symbol: "の", romaji: "no" },

  // Строка H
  { symbol: "は", romaji: "ha" },
  { symbol: "ひ", romaji: "hi" },
  { symbol: "ふ", romaji: "fu" },
  { symbol: "へ", romaji: "he" },
  { symbol: "ほ", romaji: "ho" },

  // Строка M
  { symbol: "ま", romaji: "ma" },
  { symbol: "み", romaji: "mi" },
  { symbol: "む", romaji: "mu" },
  { symbol: "め", romaji: "me" },
  { symbol: "も", romaji: "mo" },

  // Строка Y
  { symbol: "や", romaji: "ya" },
  { symbol: "ゆ", romaji: "yu" },
  { symbol: "よ", romaji: "yo" },

  // Строка R
  { symbol: "ら", romaji: "ra" },
  { symbol: "り", romaji: "ri" },
  { symbol: "る", romaji: "ru" },
  { symbol: "れ", romaji: "re" },
  { symbol: "ろ", romaji: "ro" },

  // Строка W/N
  { symbol: "わ", romaji: "wa" },
  { symbol: "を", romaji: "wo" },
  { symbol: "ん", romaji: "n" },
];

const Quiz = ({ config, onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Генерация вопросов при монтировании
  useEffect(() => {
    setQuestions(generateQuestions(config));
  }, [config]);

  const generateQuestions = (config) => {
    // Добавляем проверку на наличие символов
    if (!hiraganaData.length) return [];

    // Упрощенная фильтрация - используем все символы
    const filteredChars = hiraganaData;

    // Добавляем проверку на минимальное количество символов
    if (filteredChars.length < 4) {
      console.error("Недостаточно символов для генерации теста");
      return [];
    }

    return Array.from({ length: config.questionCount }, () => {
      const type =
        config.testType === "mixed"
          ? ["symbol-to-romaji", "romaji-to-symbol"][
              Math.floor(Math.random() * 2)
            ]
          : config.testType;

      const correctChar =
        filteredChars[Math.floor(Math.random() * filteredChars.length)];
      const wrongAnswers = filteredChars
        .filter((c) => c.romaji !== correctChar.romaji)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const answers = [correctChar, ...wrongAnswers].sort(
        () => 0.5 - Math.random()
      );

      return {
        type,
        correctAnswer: correctChar.romaji,
        symbol: correctChar.symbol,
        answers: answers.map((c) => c.romaji),
        symbols: answers.map((c) => c.symbol),
      };
    });
  };

  const handleAnswer = (answer) => {
    if (isAnswered) return;

    // Добавляем защиту от отсутствия вопросов
    if (!questions.length || !questions[currentQuestion]) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    // TODO: Add sounds
    // AudioManager.play(answer === questions[currentQuestion].correctAnswer ? 'correct' : 'wrong');

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((c) => c + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        updateProgress();
        onFinish();
      }
    }, 1500);
  };

  const updateProgress = () => {
    const progress = JSON.parse(
      localStorage.getItem("hiraganaProgress") || "{}"
    );

    questions.forEach((q, index) => {
      const symbol =
        q.type === "symbol-to-romaji"
          ? q.symbol
          : hiraganaData.find((c) => c.romaji === q.correctAnswer)?.symbol ||
            "";

      if (!symbol) return;

      if (!progress[symbol]) {
        progress[symbol] = { correct: 0, total: 0 };
      }
      progress[symbol].total += 1;

      if (index === currentQuestion && q.correctAnswer === selectedAnswer) {
        progress[symbol].correct += 1;
      }
    });

    localStorage.setItem("hiraganaProgress", JSON.stringify(progress));
  };

  if (!questions.length) return <div>Loading...</div>;

  const currentQ = questions[currentQuestion];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#8C5D91] rounded-[45px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-header">
          Вопрос {currentQuestion + 1}/{questions.length}
        </h2>
        <div className="text-xl font-bold">Счёт: {score}</div>
      </div>

      <div className="bg-[#7C5185] rounded-3xl p-8 mb-8">
        {currentQ.type === "symbol-to-romaji" ? (
          <h3 className="text-center text-[120px] font-jp">
            {getJapaneseChar(currentQ.correctAnswer)}
          </h3>
        ) : (
          <h3 className="text-center text-6xl font-bold">
            {currentQ.correctAnswer}
          </h3>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {(currentQ.type === "symbol-to-romaji"
          ? currentQ.answers
          : currentQ.symbols
        ).map((answer, idx) => {
          const isCorrect =
            currentQ.type === "symbol-to-romaji"
              ? answer === currentQ.correctAnswer
              : answer ===
                hiraganaData.find((c) => c.romaji === currentQ.correctAnswer)
                  ?.symbol;

          return (
            <motion.button
              key={idx}
              onClick={() =>
                handleAnswer(
                  currentQ.type === "symbol-to-romaji"
                    ? answer
                    : hiraganaData.find((c) => c.symbol === answer)?.romaji
                )
              }
              disabled={isAnswered}
              className={`p-4 rounded-xl text-xl font-bold transition-all ${
                !isAnswered
                  ? "bg-[#5B3569] hover:bg-[#46284F]"
                  : isCorrect
                  ? "bg-green-500"
                  : selectedAnswer === answer
                  ? "bg-red-500"
                  : "bg-[#5B3569]/50"
              }`}
              whileHover={!isAnswered ? { scale: 1.05 } : undefined}
            >
              {currentQ.type === "symbol-to-romaji"
                ? answer
                : getJapaneseChar(
                    hiraganaData.find((c) => c.symbol === answer)?.romaji || ""
                  )}
            </motion.button>
          );
        })}
      </div>

      {isAnswered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-xl"
        >
          {selectedAnswer === currentQ.correctAnswer ? (
            <span className="text-green-300">Правильно! 😊</span>
          ) : (
            <span className="text-red-300">
              Неверно. Правильный ответ: {currentQ.correctAnswer}
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;
