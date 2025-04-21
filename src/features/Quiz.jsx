import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getJapaneseChar } from "@/utils/japaneseChars";

const hiraganaData = [
  // Гласные
  { symbol: "あ", romaji: "a", group: "basic" },
  { symbol: "い", romaji: "i", group: "basic" },
  { symbol: "う", romaji: "u", group: "basic" },
  { symbol: "え", romaji: "e", group: "basic" },
  { symbol: "お", romaji: "o", group: "basic" },

  // Строка K
  { symbol: "か", romaji: "ka", group: "basic" },
  { symbol: "き", romaji: "ki", group: "basic" },
  { symbol: "く", romaji: "ku", group: "basic" },
  { symbol: "け", romaji: "ke", group: "basic" },
  { symbol: "こ", romaji: "ko", group: "basic" },
  { symbol: "が", romaji: "ga", group: "dakuten" },
  { symbol: "ぎ", romaji: "gi", group: "dakuten" },
  { symbol: "ぐ", romaji: "gu", group: "dakuten" },
  { symbol: "げ", romaji: "ge", group: "dakuten" },
  { symbol: "ご", romaji: "go", group: "dakuten" },

  // Строка S
  { symbol: "さ", romaji: "sa", group: "basic" },
  { symbol: "し", romaji: "shi", group: "basic" },
  { symbol: "す", romaji: "su", group: "basic" },
  { symbol: "せ", romaji: "se", group: "basic" },
  { symbol: "そ", romaji: "so", group: "basic" },
  { symbol: "ざ", romaji: "za", group: "dakuten" },
  { symbol: "じ", romaji: "ji", group: "dakuten" },
  { symbol: "ず", romaji: "zu", group: "dakuten" },
  { symbol: "ぜ", romaji: "ze", group: "dakuten" },
  { symbol: "ぞ", romaji: "zo", group: "dakuten" },

  // Строка T
  { symbol: "た", romaji: "ta", group: "basic" },
  { symbol: "ち", romaji: "chi", group: "basic" },
  { symbol: "つ", romaji: "tsu", group: "basic" },
  { symbol: "て", romaji: "te", group: "basic" },
  { symbol: "と", romaji: "to", group: "basic" },
  { symbol: "だ", romaji: "da", group: "dakuten" },
  { symbol: "ぢ", romaji: "ji", group: "dakuten" },
  { symbol: "づ", romaji: "zu", group: "dakuten" },
  { symbol: "で", romaji: "de", group: "dakuten" },
  { symbol: "ど", romaji: "do", group: "dakuten" },

  // Строка N
  { symbol: "な", romaji: "na", group: "basic" },
  { symbol: "に", romaji: "ni", group: "basic" },
  { symbol: "ぬ", romaji: "nu", group: "basic" },
  { symbol: "ね", romaji: "ne", group: "basic" },
  { symbol: "の", romaji: "no", group: "basic" },

  // Строка H
  { symbol: "は", romaji: "ha", group: "basic" },
  { symbol: "ひ", romaji: "hi", group: "basic" },
  { symbol: "ふ", romaji: "fu", group: "basic" },
  { symbol: "へ", romaji: "he", group: "basic" },
  { symbol: "ほ", romaji: "ho", group: "basic" },
  { symbol: "ば", romaji: "ba", group: "dakuten" },
  { symbol: "び", romaji: "bi", group: "dakuten" },
  { symbol: "ぶ", romaji: "bu", group: "dakuten" },
  { symbol: "べ", romaji: "be", group: "dakuten" },
  { symbol: "ぼ", romaji: "bo", group: "dakuten" },
  { symbol: "ぱ", romaji: "pa", group: "handakuten" },
  { symbol: "ぴ", romaji: "pi", group: "handakuten" },
  { symbol: "ぷ", romaji: "pu", group: "handakuten" },
  { symbol: "ぺ", romaji: "pe", group: "handakuten" },
  { symbol: "ぽ", romaji: "po", group: "handakuten" },

  // Строка M
  { symbol: "ま", romaji: "ma", group: "basic" },
  { symbol: "み", romaji: "mi", group: "basic" },
  { symbol: "む", romaji: "mu", group: "basic" },
  { symbol: "め", romaji: "me", group: "basic" },
  { symbol: "も", romaji: "mo", group: "basic" },

  // Строка Y
  { symbol: "や", romaji: "ya", group: "basic" },
  { symbol: "ゆ", romaji: "yu", group: "basic" },
  { symbol: "よ", romaji: "yo", group: "basic" },

  // Строка R
  { symbol: "ら", romaji: "ra", group: "basic" },
  { symbol: "り", romaji: "ri", group: "basic" },
  { symbol: "る", romaji: "ru", group: "basic" },
  { symbol: "れ", romaji: "re", group: "basic" },
  { symbol: "ろ", romaji: "ro", group: "basic" },

  // Строка W/N
  { symbol: "わ", romaji: "wa", group: "basic" },
  { symbol: "を", romaji: "wo", group: "basic" },
  { symbol: "ん", romaji: "n", group: "basic" },

  // Дополнительные маленькие символы
  { symbol: "ゃ", romaji: "ya", group: "small" },
  { symbol: "ゅ", romaji: "yu", group: "small" },
  { symbol: "ょ", romaji: "yo", group: "small" },
  { symbol: "っ", romaji: "(sokuon)", group: "small" },
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

    let filteredChars = hiraganaData.filter((char) => {
      if (config.difficulty === "dakuten") return char.group === "dakuten";
      if (config.difficulty === "basic") return char.group === "basic";
      return true;
    });

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
