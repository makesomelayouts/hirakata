import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { motion } from "framer-motion";

export const Resources = () => {
  return (
    <motion.div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #C06BC9 -52.19%, #EBAAC1 61.17%)",
      }}
      initial="hidden"
      animate="visible"
    >
      <Header />

      <div className="flex flex-col items-center justify-center mt-4 md:mt-16 mx-8">
        <h1 className="text-center font-header text-xl lg:text-3xl">
          Полезные ресурсы для изучения японского языка
        </h1>
        <div className="mt-3.5 bg-[#5D4170] h-2 w-full max-w-5xl rounded-full"></div>
      </div>

      <div className="flex justify-center items-center mt-16 max-w-[1200px] mx-auto px-4 mb-8 font-body">
        <ul className="space-y-8 w-full max-w-3xl">
          {/* Учебные материалы */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">📚 Учебные материалы</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <span className="font-semibold">Minna no Nihongo</span> - Один
                из лучших учебников для начинающих, который предлагает системный
                подход к изучению грамматики и лексики. Включает аудиоматериалы
                и рабочие тетради для практики
              </li>
              <li>
                <span className="font-semibold">
                  Making Sense of Japanese Grammar
                </span>{" "}
                - Полезное пособие для понимания грамматики
              </li>
              <li>
                <span className="font-semibold">Japanese for Today</span> -
                Учебник от Gakken
              </li>
              <li>
                <span className="font-semibold">
                  A Dictionary of Basic/Intermediate/Advanced Japanese Grammar
                </span>{" "}
                - Три книги по грамматике
              </li>
              <li>
                <span className="font-semibold">Genki</span> - Популярная серия
                учебников для начинающих с аудиоматериалами и рабочими тетрадями
              </li>
            </ul>
          </li>

          {/* Онлайн-ресурсы */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🌐 Онлайн-ресурсы</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.wanikani.com/"
                  target="_blank"
                >
                  WaniKani
                </a>{" "}
                - Интерактивная система для запоминания кандзи с помощью
                мнемотехник, что значительно облегчает процесс изучения
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.jlpt.jp/e/"
                  target="_blank"
                >
                  JLPT
                </a>{" "}
                - Информация о тестах на знание японского языка и подготовка к
                ним
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.japanesepod101.com/"
                  target="_blank"
                >
                  JapanesePod101
                </a>{" "}
                - Подкасты с разбором диалогов для разных уровней, а также
                культурные заметки, которые помогут лучше понять японскую
                культуру
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="http://susi.ru/yarxi/"
                  target="_blank"
                >
                  ЯРКСИ (Японско-русский словарь иероглифов)
                </a>{" "}
                - Полезный ресурс для изучения иероглифов
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.nekopy.com/"
                  target="_blank"
                >
                  NECOPY
                </a>{" "}
                - Ресурс для изучения японского языка
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://bunpro.jp"
                  target="_blank"
                >
                  Bunpro
                </a>{" "}
                - Интерактивное изучение грамматики с SRS
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://jpdb.io"
                  target="_blank"
                >
                  JPDB
                </a>{" "}
                - База данных для карточек с интеграцией с аниме/манга
              </li>
            </ul>
          </li>
          {/* Софт */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              💻 Софт для изучения японского
            </h3>
            <div className="space-y-6">
              {/* Словари и перевод */}
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📖</span> Словари и перевод
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://yomitan.wiki/"
                      target="_blank"
                    >
                      Yomitan/Yomichan
                    </a>{" "}
                    - Словарь-оверлей с поддержкой майнинга
                  </li>
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://jisho.org/"
                      target="_blank"
                    >
                      Jisho
                    </a>{" "}
                    - Самый популярный японско-английский словарь
                  </li>
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://github.com/rampaa/JL"
                      target="_blank"
                    >
                      JL (Japanese Learning)
                    </a>{" "}
                    - Оверлейный переводчик для игр и видео
                  </li>
                </ul>
              </div>

              {/* Карточки и SRS */}
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📇</span> Карточки и SRS
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://apps.ankiweb.net/"
                      target="_blank"
                    >
                      Anki
                    </a>{" "}
                    - Система интервальных повторений с плагинами
                  </li>
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://jpdb.io"
                      target="_blank"
                    >
                      JPDB
                    </a>{" "}
                    - Альтернатива Anki с готовыми колодами
                  </li>
                </ul>
              </div>

              {/* Видео и аудио */}
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎬</span> Видео и аудио
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://mpv.io"
                      target="_blank"
                    >
                      MPV
                    </a>{" "}
                    - Плеер с расширенными возможностями для майнинга
                  </li>
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://github.com/killergerbah/asbplayer"
                      target="_blank"
                    >
                      ASB Player
                    </a>{" "}
                    - Плеер для работы с онлайн-видео (YouTube/Netflix)
                  </li>
                </ul>
              </div>

              {/* Игры и ВН */}
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎮</span> Игры и Визуальные новеллы
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://github.com/Artikash/Textractor"
                      target="_blank"
                    >
                      Textractor
                    </a>{" "}
                    - Извлечение текста из игр и ВН
                  </li>
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://github.com/xupefei/Locale-Emulator"
                      target="_blank"
                    >
                      Locale Emulator
                    </a>{" "}
                    - Запуск игр с японской локалью
                  </li>
                </ul>
              </div>

              {/* Мобильные решения */}
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Мобильные решения
                </h4>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <a
                      className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                      href="https://github.com/lrorpilla/jidoujisho"
                      target="_blank"
                    >
                      Jidoujisho
                    </a>{" "}
                    - Все-в-одном приложение для Android
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Практика */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🎧 Практика</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.japanesepod101.com/"
                  target="_blank"
                >
                  JapanesePod101
                </a>{" "}
                - <span className="bg-[#c192c6]">Подкасты</span> с разбором
                диалогов для разных уровней, а также культурные заметки, которые
                помогут лучше понять японскую культуру
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.hellotalk.com/ru"
                  target="_blank"
                >
                  HelloTalk
                </a>{" "}
                -{" "}
                <span className="bg-[#c192c6]">
                  Платформа для языкового обмена
                </span>{" "}
                с носителями языка через чаты и голосовые сообщения, что
                позволяет практиковать разговорные навыки
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://www.satorireader.com/"
                  target="_blank"
                >
                  Satori Reader
                </a>{" "}
                - Адаптированные{" "}
                <span className="bg-[#c192c6]">тексты с озвучкой</span> и
                пояснениями грамматики, что делает процесс чтения более
                доступным
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://vndb.org/"
                  target="_blank"
                >
                  Визуальные новеллы
                </a>{" "}
                - Отличный способ улучшить навыки чтения и понимания языка через{" "}
                <span className="bg-[#c192c6]">интерактивные истории</span>
              </li>
            </ul>
          </li>

          {/* Культурные ресурсы */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🎌 Культурные ресурсы</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Аниме и Дорамы
                </span>{" "}
                - Смотрите японские аниме и дорамы с субтитрами для улучшения
                навыков аудирования и понимания языка
              </li>
              <li>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Японская литература
                </span>{" "}
                - Читайте книги и мангу на японском языке, чтобы улучшить навыки
                чтения и расширить словарный запас
              </li>
              <li>
                <span className="font-semibold">Рекомендуемая манга:</span>{" "}
                "Yotsubato!", "約束のネバーランド", "ソマリと森神様",
                "甘い々と稲妻", "るろうに剣心", "今際の国のアリス"
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://ttu-ebook.web.app"
                  target="_blank"
                >
                  ッツ Reader
                </a>{" "}
                - Онлайн-читалка электронных книг, поддерживающая Yomichan для
                EPUB-формата
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://bilingualmanga.org"
                  target="_blank"
                >
                  Bilingual Manga
                </a>{" "}
                - Манга с параллельным переводом + поддержка Yomitan
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://bookwalker.jp"
                  target="_blank"
                >
                  Bookwalker
                </a>{" "}
                - Бесплатные манга/ранобэ на японском
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://github.com/kha-white/mokuro"
                  target="_blank"
                >
                  Mokuro
                </a>{" "}
                - Конвертер манги в интерактивный формат с Yomitan
              </li>
              <li>
                <span className="font-semibold bg-[#c192c6] rounded-md px-2 py-1">
                  Кулинарные курсы
                </span>{" "}
                - Изучайте японскую кухню и культуру через кулинарные курсы, что
                поможет вам погрузиться в язык и традиции
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Footer />
    </motion.div>
  );
};
