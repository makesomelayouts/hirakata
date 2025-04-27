import { motion } from "framer-motion";
import { ResourceLink } from "./ResourceLink";

export const ResourceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
      },
    },
  };

  return (
    <>
      {/* Заголовок */}
      <motion.div
        className="flex flex-col items-center mt-4 md:mt-16 mx-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-center font-header text-xl lg:text-3xl"
        >
          Полезные ресурсы для изучения японского языка
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-3.5 bg-[#5D4170] h-2 w-full max-w-5xl rounded-full"
        />
      </motion.div>

      {/* Основной контент */}
      <motion.div
        className="flex justify-center items-center mt-16 max-w-[1200px] mx-auto px-4 mb-8 font-body"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.ul className="space-y-8 w-full max-w-3xl">
          {/* Учебные материалы */}
          <motion.li
            variants={itemVariants}
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">📚 Учебные материалы</h3>
            <motion.ul
              className="space-y-4 list-disc pl-6"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <span className="font-semibold">Minna no Nihongo</span> - Один
                из лучших учебников для начинающих, который предлагает системный
                подход к изучению грамматики и лексики. Включает аудиоматериалы
                и рабочие тетради для практики
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-semibold">
                  Making Sense of Japanese Grammar
                </span>{" "}
                - Пособие для понимания грамматики
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-semibold">Japanese for Today</span> -
                Учебник от Gakken
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-semibold">
                  A Dictionary of Japanese Grammar
                </span>{" "}
                - Три книги по грамматике
              </motion.li>
              <motion.li variants={itemVariants}>
                <span className="font-semibold">Genki</span> - Популярная серия
                учебников
              </motion.li>
            </motion.ul>
          </motion.li>

          {/* Онлайн-ресурсы */}
          <motion.li
            variants={itemVariants}
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">🌐 Онлайн-ресурсы</h3>
            <motion.ul
              className="space-y-4 list-disc pl-6"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.wanikani.com/">
                  WaniKani
                </ResourceLink>{" "}
                - Интерактивная система для запоминания кандзи с помощью
                мнемотехник, что значительно облегчает процесс изучения
              </motion.li>
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.jlpt.jp/e/">JLPT</ResourceLink>{" "}
                - Информация о тестах на знание японского языка и подготовка к
                ним
              </motion.li>
              <motion.li variants={itemVariants}>
                <ResourceLink href="http://susi.ru/yarxi/">ЯРКСИ</ResourceLink>{" "}
                - Полезный ресурс для изучения иероглифов
              </motion.li>
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.nekopy.com/">
                  NECOPY
                </ResourceLink>{" "}
                - Ресурс для изучения японского языка
              </motion.li>
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://bunpro.jp">Bunpro</ResourceLink> -
                Изучение грамматики
              </motion.li>
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://jpdb.io/">JPDB</ResourceLink> - База
                данных для карточек с интеграцией с аниме/манга
              </motion.li>
            </motion.ul>
          </motion.li>

          {/* Софт */}
          <motion.li
            variants={itemVariants}
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              💻 Софт для изучения японского
            </h3>
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📖</span> Словари и перевод
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://yomitan.wiki/">
                      Yomitan
                    </ResourceLink>{" "}
                    - Словарь-оверлей с поддержкой майнинга
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://jisho.org/">Jisho</ResourceLink>{" "}
                    - Самый популярный японско-английский словарь
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://github.com/rampaa/JL/">
                      JL (Japanese Learning)
                    </ResourceLink>{" "}
                    - Оверлейный переводчик для игр и видео
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📇</span> Карточки
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://apps.ankiweb.net/">
                      Anki
                    </ResourceLink>{" "}
                    - Система интервальных повторений с плагинами
                  </motion.li>
                </ul>
              </motion.div>

              {/* Видео и аудио */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎬</span> Видео и аудио
                </h4>
                <motion.ul
                  className="space-y-3 list-disc pl-6"
                  variants={containerVariants}
                >
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://mpv.io">MPV</ResourceLink> -
                    Плеер с расширенными возможностями для майнинга
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://github.com/killergerbah/asbplayer">
                      ASB Player
                    </ResourceLink>{" "}
                    - Плеер для работы с онлайн-видео (YouTube/Netflix)
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* Игры и ВН */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎮</span> Игры и Визуальные новеллы
                </h4>
                <motion.ul
                  className="space-y-3 list-disc pl-6"
                  variants={containerVariants}
                >
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://github.com/Artikash/Textractor">
                      Textractor
                    </ResourceLink>{" "}
                    - Извлечение текста из игр и ВН
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://github.com/xupefei/Locale-Emulator">
                      Locale Emulator
                    </ResourceLink>{" "}
                    - Запуск игр с японской локалью
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* Мобильные решения */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Мобильные решения
                </h4>
                <motion.ul
                  className="space-y-3 list-disc pl-6"
                  variants={containerVariants}
                >
                  <motion.li variants={itemVariants}>
                    <ResourceLink href="https://github.com/lrorpilla/jidoujisho">
                      Jidoujisho
                    </ResourceLink>{" "}
                    - Все-в-одном приложение для Android
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.li>
          {/* Практика */}
          <motion.li
            variants={itemVariants}
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">🎧 Практика</h3>
            <motion.ul
              className="space-y-4 list-disc pl-6"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.japanesepod101.com/">
                  JapanesePod101
                </ResourceLink>{" "}
                - <span className="bg-[#c192c6]">Подкасты</span> с разбором
                диалогов для разных уровней, а также культурные заметки, которые
                помогут лучше понять японскую культуру
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.hellotalk.com/ru">
                  HelloTalk
                </ResourceLink>{" "}
                -{" "}
                <span className="bg-[#c192c6]">
                  Платформа для языкового обмена
                </span>{" "}
                с носителями языка через чаты и голосовые сообщения, что
                позволяет практиковать разговорные навыки
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://www.satorireader.com/">
                  Satori Reader
                </ResourceLink>{" "}
                - Адаптированные{" "}
                <span className="bg-[#c192c6]">тексты с озвучкой</span> и
                пояснениями грамматики, что делает процесс чтения более
                доступным
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://vndb.org/">
                  Визуальные новеллы
                </ResourceLink>{" "}
                Отличный способ улучшить навыки чтения и понимания языка через{" "}
                <span className="bg-[#c192c6]">интерактивные истории</span>
              </motion.li>
            </motion.ul>
          </motion.li>

          {/* Культурные ресурсы */}
          <motion.li
            variants={itemVariants}
            className="bg-[#5D4170] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-3">🎌 Культурные ресурсы</h3>
            <motion.ul
              className="space-y-4 list-disc pl-6"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Аниме и Дорамы
                </span>{" "}
                - Смотрите японские аниме и дорамы с субтитрами для улучшения
                навыков аудирования и понимания языка
              </motion.li>

              <motion.li variants={itemVariants}>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Японская литература
                </span>{" "}
                - Читайте книги и мангу на японском языке, чтобы улучшить навыки
                чтения и расширить словарный запас
              </motion.li>

              <motion.li variants={itemVariants}>
                <span className="font-semibold">Рекомендуемая манга:</span>{" "}
                "Yotsubato!", "約束のネバーランド", "ソマリと森神様",
                "甘い々と稲妻", "るろうに剣心", "今際の国のアリス"
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://ttu-ebook.web.app">
                  ッツ Reader
                </ResourceLink>{" "}
                - Онлайн-читалка электронных книг, поддерживающая Yomichan для
                EPUB-формата
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://bilingualmanga.org">
                  Bilingual Manga
                </ResourceLink>{" "}
                - Манга с параллельным переводом + поддержка Yomitan
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://bookwalker.jp">
                  Bookwalker
                </ResourceLink>{" "}
                - Бесплатные манга/ранобэ на японском языке
              </motion.li>

              <motion.li variants={itemVariants}>
                <ResourceLink href="https://github.com/kha-white/mokuro">
                  Mokuro
                </ResourceLink>{" "}
                - Конвертер манги в интерактивный формат с Yomitan
              </motion.li>

              <motion.li variants={itemVariants}>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Кулинарные курсы
                </span>{" "}
                - Изучайте японскую кухню и культуру через кулинарные курсы, что
                поможет вам погрузиться в язык и традиции
              </motion.li>
            </motion.ul>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};
