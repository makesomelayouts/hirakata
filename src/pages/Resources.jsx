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

      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-center font-header text-5xl">
          Полезные ресурсы для изучения японского языка
        </h1>
        <div className="mt-3.5 bg-[#5D4170] h-2.5 w-full rounded-full max-w-[1200px]"></div>
      </div>

      <div className="flex justify-center items-center mt-16 max-w-[1200px] mx-auto px-4 mb-8 font-body">
        <ol className="space-y-8 w-full max-w-3xl">
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
                  ЯРКСИ Японско-русский словарь иероглифов
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
            </ul>
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
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://github.com/Artikash/Textractor/blob/master/README_RU.md"
                  target="_blank"
                >
                  Textractor
                </a>{" "}
                - Приложение для{" "}
                <span className="bg-[#c192c6]">
                  извлечения текста из визуальных новелл
                </span>
                , что позволяет учить язык в контексте
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://apps.ankiweb.net/"
                  target="_blank"
                >
                  Anki
                </a>{" "}
                - Приложение для{" "}
                <span className="bg-[#c192c6]">создания карточек</span>, которое
                помогает запоминать слова и фразы
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://jisho.org/"
                  target="_blank"
                >
                  Jisho
                </a>{" "}
                - <span className="bg-[#c192c6]">Онлайн-словарь</span>, который
                позволяет быстро находить значения слов и иероглифов
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://yomitan.wiki/"
                  target="_blank"
                >
                  Yomitan
                </a>{" "}
                и{" "}
                <a
                  className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out"
                  href="https://chromewebstore.google.com/detail/yomichan/nbfhegiidojdmnahegkphdoabohfmoof?hl=ru"
                  target="_blank"
                >
                  Yomichan
                </a>{" "}
                - Расширения для браузера, которые помогают{" "}
                <span className="bg-[#c192c6]">переводить текст</span> на лету и
                учить новые слова
              </li>
            </ul>
          </li>

          {/* Культурные ресурсы */}
          <li className="bg-[#5D4170] p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🎌 Культурные ресурсы</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>
                <span className="font-semibold">Аниме и Дорамы</span> - Смотрите
                японские аниме и дорамы с субтитрами для улучшения навыков
                аудирования и понимания языка
              </li>
              <li>
                <span className="font-semibold">Японская литература</span> -
                Читайте книги и мангу на японском языке, чтобы улучшить навыки
                чтения и расширить словарный запас
              </li>
              <li>
                <span className="font-semibold">Кулинарные курсы</span> -
                Изучайте японскую кухню и культуру через кулинарные курсы, что
                поможет вам погрузиться в язык и традиции
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <Footer />
    </motion.div>
  );
};
