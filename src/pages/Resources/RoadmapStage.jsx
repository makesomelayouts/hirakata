import { motion } from "framer-motion";
import { ResourceLink } from "./ResourceLink";

export const RoadmapStage = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center mt-4 md:mt-16 mx-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center font-header text-xl lg:text-3xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Японский язык: Roadmap для энтузиастов 🇯🇵
        </motion.h1>
        <motion.div
          className="mt-3.5 bg-[#5D4170] h-2 w-full max-w-5xl rounded-full"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div
        className="flex justify-center items-center mt-16 max-w-[1200px] mx-auto px-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.ol className="space-y-8 w-full max-w-3xl">
          {/* 🔰 Этап 1: Фундамент */}
          <motion.li
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              🎌 Этап 1: Основа основ (0-2 месяца)
            </h3>
            <ul className="space-y-4 list-disc pl-6">
              <motion.li>
                <span className="font-semibold">КАНА:</span>
                <br />• Используйте{" "}
                <ResourceLink href="https://realkana.com">
                  RealKana
                </ResourceLink>{" "}
                для запоминания хираганы/катаканы.
                <br />• Прописи{" "}
                <span className="text-pink-200">
                  «A Guide to Writing Kanji & Kana»
                </span>{" "}
                — идеальны для отработки почерка.
                <br />• <span className="text-yellow-100">Почему?</span> Без
                каны вы не прочитаете ни одного учебника!
              </motion.li>

              <motion.li>
                <span className="font-semibold">Базовые фразы:</span>
                <br />• Курс{" "}
                <ResourceLink href="https://www.nhk.or.jp/lesson/russian/">
                  NHK «Легкий японский»
                </ResourceLink>{" "}
                — аудиоуроки с диалогами.
              </motion.li>
            </ul>
          </motion.li>

          {/* 📚 Этап 2: Погружение */}
          <motion.li
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              🎎 Этап 2: Грамматика и лексика (3-12 месяцев)
            </h3>
            <ul className="space-y-4 list-disc pl-6">
              <motion.li>
                <span className="font-semibold">Учебники:</span>
                <br />•{" "}
                <span className="text-pink-200">«Minna no Nihongo»</span> —
                «золотой стандарт» с аудио и рабочими тетрадями.
                <br />•{" "}
                <span className="text-pink-200">
                  «Making Sense of Japanese Grammar»
                </span>{" "}
                — объясняет логику языка.
              </motion.li>
              <motion.li>
                <span className="font-semibold">Кандзи:</span>
                <br />•{" "}
                <ResourceLink href="https://wanikani.com">
                  WaniKani
                </ResourceLink>{" "}
                — мнемотехники + контекстные примеры.
                <br />• <span className="text-pink-200">*Аниме сайт*</span> —
                учите иероглифы через субтитры к аниме.
              </motion.li>
            </ul>
          </motion.li>

          {/* 🎧 Этап 3: Прокачка навыков */}
          <motion.li
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              🗻 Этап 3: Продвинутый уровень (1+ год)
            </h3>
            <ul className="space-y-4 list-disc pl-6">
              <motion.li>
                <span className="font-semibold">Аудирование:</span>
                <br />• Подкасты{" "}
                <ResourceLink href="https://www.japanesepod101.com">
                  JapanesePod101
                </ResourceLink>{" "}
                — адаптированные диалоги.
                <br />• Дорамы с субтитрами
              </motion.li>
              <motion.li>
                <span className="font-semibold">Говорение:</span>
                <br />•{" "}
                <ResourceLink href="https://hellotalk.com">
                  HelloTalk
                </ResourceLink>{" "}
                — языковой обмен с японцами.
                <br />• Виртуальные экскурсии на{" "}
                <ResourceLink href="https://www.erin.jpf.go.jp/">
                  Erin's Challenge
                </ResourceLink>
                .
              </motion.li>
            </ul>
          </motion.li>

          {/* 💡 Советы от носителей */}
          <motion.li
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">🌸 Лайфхаки</h3>
            <ul className="space-y-4 list-disc pl-6">
              <motion.li>
                <span className="font-semibold">
                  «Не учите по русским учебникам!»
                </span>
                <br />• В них часты ошибки (например, «Курс Лаврентьева»
                критикуют за устаревшие конструкции).
              </motion.li>
              <motion.li>
                <span className="font-semibold">«Смотрите токийское ТВ»</span>
                <br />• Канал{" "}
                <ResourceLink href="https://www3.nhk.or.jp/nhkworld">
                  NHK World
                </ResourceLink>{" "}
                — новости на медленном японском.
              </motion.li>
              <motion.li>
                <span className="font-semibold">«Пишите от руки»</span>
                <br />• Те, кто прописывает иероглифы, запоминают их в 3 раза
                быстрее (исследование Journal of Cognitive Neuroscience).
              </motion.li>
            </ul>
          </motion.li>
        </motion.ol>
      </motion.div>

      <motion.div
        className="text-center mt-12 pb-16 px-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-white font-semibold">
          [ ❕ ] Помните: японский — это не спринт, а марафон.
          <br />
          Начните с 15 минут в день, а когда «затянет» — не остановитесь даже
          перед N1! 🏯
        </p>
      </motion.div>
    </>
  );
};
