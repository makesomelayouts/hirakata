import { useState } from "react";

export default function TestOptions({ onStartTest }) {
  const [testType, setTestType] = useState("symbol-to-romaji");
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStartTest({ testType, questionCount, difficulty });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#8C5D91] rounded-[45px]">
      <h2 className="text-3xl font-header text-center mb-6">Выбор теста</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4 cursor-auto">
          <div>
            <label className="block text-xl cursor-auto font-body mb-2">
              Тип теста:
            </label>
            <select
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              className="w-full p-3 cursor-pointer rounded-lg bg-[#7C5185] border-2 border-[#5B3569]"
            >
              <option value="symbol-to-romaji">Символ → Ромадзи</option>
              <option value="romaji-to-symbol">Ромадзи → Символ</option>
              <option value="mixed">Случайный микс</option>
            </select>
          </div>

          <div>
            <label className="block text-xl cursor-auto font-body mb-2">
              Количество вопросов:
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full p-3 cursor-pointer rounded-lg bg-[#7C5185] border-2 border-[#5B3569]"
            >
              <option value={10}>10 вопросов</option>
              <option value={20}>20 вопросов</option>
              <option value={50}>50 вопросов</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#5B3569] hover:bg-[#46284F] text-white text-xl rounded-lg transition-colors"
        >
          Начать тест
        </button>
      </form>
    </div>
  );
}
