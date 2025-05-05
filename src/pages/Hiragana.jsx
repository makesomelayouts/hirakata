import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll, useInView } from "framer-motion";
import fujiyama from "@/assets/Гора Фудзи.png";
import toriiGate from "@/assets/torii-gate.png";
import japaneseFlag from "@/assets/japan.png";
import { AudioManager } from "@/utils/audioManager";
import { getJapaneseChar } from "@/utils/japaneseChars";
import Quiz from "@/features/Quiz";
import TestOptions from "@/features/TestOptions";
import { Achievements } from "../features/Achievements";
import { useRef, useState } from "react";
import { Footer } from "@/widgets/Footer";

const Hiragana = () => {
  const [testConfig, setTestConfig] = useState(null);
  const { scrollYProgress } = useScroll();

  const useAnimateOnView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -400px 0px",
    });
    return [ref, isInView];
  };
  const [mobileSectionRef, mobileSectionInView] = useAnimateOnView();
  const [desktopSectionRef, desktopSectionInView] = useAnimateOnView();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const [section1Ref, section1InView] = useAnimateOnView();
  const [section2Ref, section2InView] = useAnimateOnView();
  const [section3Ref, section3InView] = useAnimateOnView();
  const [section4Ref, section4InView] = useAnimateOnView();
  const [section5Ref, section5InView] = useAnimateOnView();

  return (
    <motion.div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #C06BC9 -52.19%, #EBAAC1 61.17%)",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />

      {/* Прогресс бар скролла */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#8C5D91] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Основной контент */}
      <motion.section
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="z-20 flex flex-col items-center justify-center lg:flex-row gap-[78px] max-lg:gap-8"
      >
        <motion.div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={itemVariants}
            className="z-30 mt-[64px] text-center font-header text-4xl md:text-5xl"
          >
            Хирагана
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full"
          />

          <motion.img
            variants={itemVariants}
            src={fujiyama}
            alt="Гора Фудзи"
            className="mt-[30px] select-none order-2 max-lg:hidden"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="z-30 flex flex-col w-full max-w-lg items-center justify-center bg-[#8C5D91] px-3 sm:px-6 py-5 rounded-[45px] mt-6 max-lg:mt-0"
        >
          <motion.p className="font-body text-lg min-[505px]:text-2xl font-bold text-center max-[505px]:text-left">
            — японская слоговая азбука, одна из составляющих японской
            письменности наряду с катаканой, иероглифами, арабскими цифрами и
            ромадзи (латинским алфавитом)
          </motion.p>

          <motion.div
            className="relative mt-3 w-full max-w-[467px] min-h-[260px] bg-[#7C5185] hover:bg-[#5B3569] duration-400 ease-in-out transition rounded-4xl cursor-pointer overflow-hidden"
            onClick={() => AudioManager.play("a")}
          >
            <motion.h1
              className="pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[180px] min-[375px]:text-[200px] sm:text-[260px] font-jp select-none"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              あ
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Секция с воротами Тории */}
      <motion.section
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex max-md:mt-16 md:mt-[90px] flex-col items-center justify-between px-4 lg:px-0 max-w-[1100px] mx-auto lg:flex-row gap-8"
      >
        <motion.p
          variants={itemVariants}
          className="font-body text-lg max-w-lg md:text-2xl font-bold text-center lg:text-left px-6 py-8 lg:pl-[26px] lg:pr-[19px] lg:py-[52px] bg-[#8C5D91] rounded-[45px] w-full lg:max-w-[543px]"
        >
          Возникла в Японии как упрощение и адаптация китайских иероглифов
          (кандзи) для обозначения звуков и грамматических элементов японского
          языка
        </motion.p>

        <motion.img
          variants={itemVariants}
          src={toriiGate}
          alt="Ворота Тории"
          className="max-lg:hidden lg:mr-32 max-lg:w-full max-lg:max-w-[400px] max-lg:mt-8"
        />
      </motion.section>

      {/* Секция с флагом */}
      <motion.section
        ref={section3Ref}
        initial="hidden"
        animate={section3InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 max-w-[1000px] mx-auto mt-16 lg:mt-32 gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col max-lg:hidden items-center gap-4 px-4"
        >
          <motion.img
            src={japaneseFlag}
            alt="Флаг Японии"
            whileHover={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-full max-w-[300px] lg:max-w-none"
          />
          <motion.p
            variants={itemVariants}
            className="font-jp text-4xl lg:text-[64px]"
          >
            にほんご
          </motion.p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body max-w-lg font-bold text-center lg:text-right px-6 py-8 lg:pt-[43px] lg:pr-[28px] lg:pl-[14px] lg:pb-[37px] bg-[#8C5D91] rounded-[45px] w-full lg:max-w-[543px] text-lg md:text-2xl"
        >
          Используется для обозначения родных для японцев слов, грамматических
          элементов, окончаний глаголов. Применяется в повседневных письменных
          текстах: романы, газеты личная переписка, в детских книгах и
          материалах, для учащихся начального уровня
        </motion.p>
      </motion.section>

      {/* Секция с алфавитом */}
      <motion.section
        ref={section4Ref}
        initial="hidden"
        animate={section4InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center px-4 lg:px-0 max-w-[1072px] mx-auto mt-16 lg:mt-[162px]"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center w-full"
        >
          <h1 className="text-center font-header text-4xl md:text-5xl">
            Алфавит
          </h1>
          <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full"></div>
        </motion.div>

        <div className="mt-8 w-full space-y-4 px-2">
          {[
            ["a", "i", "u", "e", "o"],
            ["ka", "ki", "ku", "ke", "ko"],
            ["sa", "shi", "su", "se", "so"],
            ["ta", "chi", "tsu", "te", "to"],
            ["na", "ni", "nu", "ne", "no"],
            ["ha", "hi", "fu", "he", "ho"],
            ["ma", "mi", "mu", "me", "mo"],
            ["ya", "", "yu", "", "yo"],
            ["wa", "", "n", "", "wo"],
          ].map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: groupIndex * 0.4 }}
              className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 bg-[#8C5D91]/20 p-3 rounded-xl"
            >
              {group.map((char, charIndex) =>
                char ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={`${groupIndex}-${charIndex}`}
                    className="flex-1 flex flex-col items-center justify-center p-2 min-w-[60px]"
                  >
                    <p
                      className="font-jp text-2xl md:text-4xl cursor-pointer hover:text-[#E7D2D2] active:text-[#3A2647]"
                      onClick={() => AudioManager.play(char)}
                    >
                      {getJapaneseChar(char, "hiragana")}
                    </p>
                    <p className="font-body text-sm md:text-xl mt-1 md:mt-2">
                      {char}
                    </p>
                  </motion.div>
                ) : (
                  <div
                    key={`${groupIndex}-${charIndex}`}
                    className="flex-1 max-md:hidden"
                  />
                )
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Секция с тестом */}
      <motion.section
        ref={section5Ref}
        initial="hidden"
        animate={section5InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mt-16"
      >
        {testConfig ? (
          <Quiz
            config={{ ...testConfig, alphabet: "hiragana" }}
            onFinish={() => setTestConfig(null)}
          />
        ) : (
          <motion.div variants={containerVariants} className="space-y-16">
            <motion.div variants={itemVariants}>
              <TestOptions onStartTest={setTestConfig} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Achievements alphabet="hiragana" />
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Мобильная версия */}
      <motion.section
        ref={mobileSectionRef} // Уникальный реф для мобильной версии
        initial="hidden"
        animate={mobileSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-[41px] max-w-[1200px] mx-auto py-16 lg:hidden"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center md:px-8"
        >
          <h1 className="text-center font-header text-4xl md:text-5xl">
            Примеры слов
          </h1>
          <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-body w-full bg-[#8C5D91] rounded-[28px] p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6">
            {/* Заголовки с анимацией */}
            <motion.div
              variants={itemVariants}
              className="col-span-3 flex justify-between pb-3 border-b-2 border-[#FFD5F3]"
            >
              <span className="text-[#FFF0F9] font-bold text-sm w-1/3 text-center">
                Хирагана
              </span>
              <span className="text-[#FFF0F9] font-bold text-sm w-1/3 text-center">
                Ромадзи
              </span>
              <span className="text-[#FFF0F9] font-bold text-sm w-1/3 text-center">
                Перевод
              </span>
            </motion.div>

            {/* Строки с данными */}
            {[
              ["にほん", "нихон", "Япония"],
              ["にほんご", "нихонго", "японский язык"],
              ["ひと", "хито", "человек"],
              ["おとこ", "отоко", "мужчина"],
              ["おんな", "онна", "женщина"],
              ["あさ", "аса", "утро"],
              ["いい", "ий", "хороший"],
              ["かく", "каку", "писать"],
              ["はなす", "ханасу", "говорить"],
            ].map(([hiragana, romaji, translation], index) => (
              <motion.div
                key={`row-${index}`}
                variants={itemVariants}
                className="contents"
              >
                <div className="font-jp max-sm:text-base sm:text-lg text-center py-3 border-r-2 border-[#FFD5F3]/30">
                  {hiragana}
                </div>
                <div className="text-center py-3 border-r-2 border-[#FFD5F3]/30">
                  {romaji}
                </div>
                <div className="text-center py-3 text-[#FFE5F6]">
                  {translation}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Десктопная версия */}
      <motion.section
        ref={desktopSectionRef} // Уникальный реф для десктопной версии
        initial="hidden"
        animate={desktopSectionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex-col items-center justify-center gap-[41px] max-w-[1200px] mx-auto py-16 hidden lg:flex"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center md:px-8"
        >
          <h1 className="text-center font-header text-4xl md:text-5xl">
            Примеры слов
          </h1>
          <div className="mt-3.5 bg-[#8C5D91] h-2.5 w-full rounded-full" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-body font-bold pt-[43px] pr-[28px] pl-[59px] pb-[37px] bg-[#8C5D91] rounded-[45px] text-2xl"
        >
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            {/* Заголовки */}
            <motion.div variants={itemVariants} className="font-body text-2xl">
              Хирагана
            </motion.div>
            <div className="">Ромадзи</div>
            <div className="">Перевод</div>

            {[
              ["にほん", "нихон", "Япония"],
              ["にほんご", "нихонго", "японский язык"],
              ["ひと", "хито", "человек"],
              ["おとこ", "отоко", "мужчина"],
              ["おんな", "онна", "женщина"],
              ["あさ", "аса", "утро"],
              ["いい", "ий", "хороший, добрый"],
              ["かく", "каку", "писать"],
              ["はなす", "ханасу", "говорить"],
            ].map(([hiragana, romaji, translation], index) => (
              <motion.div
                key={`row-${index}`}
                variants={itemVariants}
                className="contents"
              >
                <motion.div className="font-jp text-2xl">{hiragana}</motion.div>
                <div className="">{romaji}</div>
                <div className="">{translation}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Hiragana;
