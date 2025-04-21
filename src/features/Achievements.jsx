// features/Achievements.jsx
import { useState, useEffect } from "react";

// Выносим условия в отдельный объект
const ACHIEVEMENT_CONDITIONS = {
  novice: (progress) => Object.keys(progress).length >= 10,
  perfect10: (progress) => {
    const entries = Object.values(progress);
    const last10 = entries.slice(-10);
    return last10.length >= 10 && last10.every((p) => p.correct === p.total);
  },
  masterKa: (progress) =>
    ["ka", "ki", "ku", "ke", "ko"].every(
      (c) => progress[c]?.correct / progress[c]?.total === 1
    ),
};

const INITIAL_ACHIEVEMENTS = [
  {
    id: "novice",
    title: "Новичок 🌱",
    description: "Выучить 10 символов",
    icon: "🌱",
    unlocked: false,
  },
  {
    id: "perfect10",
    title: "Без ошибок! 💯",
    description: "10 правильных ответов подряд",
    icon: "💯",
    unlocked: false,
  },
  {
    id: "masterKa",
    title: "Мастер か行 🎯",
    description: "Идеальное знание строки か",
    icon: "🎯",
    unlocked: false,
  },
];

export function Achievements() {
  const [achievements, setAchievements] = useState(INITIAL_ACHIEVEMENTS);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const savedProgress = JSON.parse(
      localStorage.getItem("hiraganaProgress") || "{}"
    );
    const savedAchievements = JSON.parse(
      localStorage.getItem("achievements") || "[]"
    );

    // Объединяем сохраненные достижения с начальными
    const merged = INITIAL_ACHIEVEMENTS.map((initial) => ({
      ...initial,
      ...(savedAchievements.find((saved) => saved.id === initial.id) || {}),
    }));

    setAchievements(merged);
    setProgress(savedProgress);
  }, []);

  useEffect(() => {
    const checkUnlocked = () => {
      const updated = achievements.map((ach) => {
        const condition = ACHIEVEMENT_CONDITIONS[ach.id];
        return {
          ...ach,
          unlocked: ach.unlocked || (condition ? condition(progress) : false),
        };
      });

      if (JSON.stringify(updated) !== JSON.stringify(achievements)) {
        setAchievements(updated);
        // Сохраняем только необходимые данные
        localStorage.setItem(
          "achievements",
          JSON.stringify(updated.map(({ id, unlocked }) => ({ id, unlocked })))
        );
      }
    };

    checkUnlocked();
  }, [progress, achievements]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#8C5D91] rounded-[45px] mt-8">
      <h2 className="text-3xl font-header text-center mb-6">Достижения</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`p-4 rounded-xl transition-all ${
              ach.unlocked
                ? "bg-[#5B3569] border-2 border-green-400"
                : "bg-[#46284F] opacity-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{ach.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{ach.title}</h3>
                <p className="text-sm">{ach.description}</p>
                {!ach.unlocked && (
                  <p className="text-xs mt-2 italic">Еще не получено</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
