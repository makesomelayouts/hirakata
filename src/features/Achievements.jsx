import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ACHIEVEMENT_CONDITIONS = {
  novice: (progress) => Object.keys(progress).length >= 10,
  perfect10: (progress) => {
    const entries = Object.values(progress);
    const last10 = entries.slice(-10);
    return last10.length >= 10 && last10.every((p) => p.correct === p.total);
  },
  masterKa: (progress) =>
    ["ka", "ki", "ku", "ke", "ko"].every((c) => {
      const entry = progress[c];
      return entry?.total > 0 && entry.correct === entry.total;
    }),
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

export function Achievements({ alphabet = "hiragana" }) {
  const [achievements, setAchievements] = useState(INITIAL_ACHIEVEMENTS);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const storageKey = `${alphabet}Progress`;
    const achievementKey = `${alphabet}Achievements`;

    // Исправляем парсинг данных
    const savedProgress = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const savedAchievements = JSON.parse(
      localStorage.getItem(achievementKey) || "[]"
    );

    setProgress(
      typeof savedProgress === "string"
        ? JSON.parse(savedProgress)
        : savedProgress
    );

    const merged = INITIAL_ACHIEVEMENTS.map((initial) => ({
      ...initial,
      ...(savedAchievements.find((saved) => saved.id === initial.id) || {}),
    }));

    setAchievements(merged);
  }, [alphabet]);

  useEffect(() => {
    const checkUnlocked = () => {
      const updated = achievements.map((ach) => {
        const condition = ACHIEVEMENT_CONDITIONS[ach.id];
        const isUnlocked = condition ? condition(progress) : false;
        return { ...ach, unlocked: ach.unlocked || isUnlocked };
      });

      if (JSON.stringify(updated) !== JSON.stringify(achievements)) {
        setAchievements(updated);
        const achievementKey = `${alphabet}Achievements`;
        localStorage.setItem(
          achievementKey,
          JSON.stringify(updated.map(({ id, unlocked }) => ({ id, unlocked })))
        );
      }
    };

    checkUnlocked();
  }, [progress, achievements, alphabet]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto p-6 bg-[#8C5D91] rounded-[45px] mt-8"
    >
      <h2 className="text-3xl font-header text-center mb-6">Достижения</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl transition-all ${
              achievement.unlocked
                ? "bg-[#5B3569] border-2 border-green-400"
                : "bg-[#46284F] opacity-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{achievement.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
                {!achievement.unlocked && (
                  <p className="text-xs mt-2 italic">Еще не получено</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
