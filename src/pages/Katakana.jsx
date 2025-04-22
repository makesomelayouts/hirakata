import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll, useInView } from "framer-motion";
import geisha from "@/assets/Гейша.png";
import teaCeremony from "@/assets/Чайная церемония.png";
import japanMap from "@/assets/Карта Японии.png";
import { AudioManager } from "@/utils/audioManager";
import { getJapaneseChar } from "@/utils/japaneseChars";
import Quiz from "@/features/Quiz";
import TestOptions from "@/features/TestOptions";
import { Achievements } from "../features/Achievements";
import { useRef, useState } from "react";
import { Footer } from "@/widgets/Footer";

function Katakana() {
  const [testConfig, setTestConfig] = useState(null);
  const { scrollYProgress } = useScroll();
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
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const useAnimateOnView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "200px 0px -250px 0px",
    });
    return [ref, isInView];
  };

  const [section1Ref, section1InView] = useAnimateOnView();
  const [section2Ref, section2InView] = useAnimateOnView();
  const [section3Ref, section3InView] = useAnimateOnView();
  const [section4Ref, section4InView] = useAnimateOnView();
  const [section5Ref, section5InView] = useAnimateOnView();
  const [section6Ref, section6InView] = useAnimateOnView();

  return (
    <motion.div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #69507D -52.19%, #B98396 61.17%)",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />

      {/* Прогресс бар скролла */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#5D4170] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Основной контент */}
      <motion.section
        ref={section1Ref}
        initial="hidden"
        animate={section1InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="z-20 flex flex-col items-center justify-center lg:flex-row gap-[78px]"
      >
        <motion.div className="flex flex-col items-center justify-center">
          <motion.h1
            variants={itemVariants}
            className="z-30 mt-[64px] text-center font-header text-5xl"
          >
            Катакана
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-3.5 bg-[#5D4170] h-2.5 w-full rounded-full"
          />

          <motion.img
            variants={itemVariants}
            src={geisha}
            alt="Гейша"
            className="mt-[30px] select-none order-2"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="z-30 flex flex-col max-w-lg items-center justify-center bg-[#5D4170] px-6 py-5 rounded-[45px] mt-6"
        >
          <motion.p className="font-body text-2xl font-bold text-right">
            — это японская азбука, которая состоит из 46 слогов и обладает своей
            уникальной графикой. Каждый символ катаканы обозначает определённый
            звук
          </motion.p>

          <motion.div
            className="relative mt-3 w-[467px] h-[260px] bg-[#4A315A] hover:bg-[#3A2647] transition duration-400 ease-in-out rounded-4xl cursor-pointer"
            onClick={() => AudioManager.play("a")}
          >
            <motion.h1 className="pointer-events-none absolute top-[-30%] left-[22%] text-[260px] font-jp select-none">
              ア
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={section2Ref}
        initial="hidden"
        animate={section2InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex mt-[90px] flex-col items-center justify-between max-w-[1100px] mx-auto lg:flex-row"
      >
        <motion.p
          variants={itemVariants}
          className="font-body text-2xl font-bold text-left pl-[26px] pr-[19px] py-[52px] bg-[#5D4170] rounded-[45px] max-w-[543px]"
        >
          Основное назначение катаканы — обозначать иностранные слова и имена, а
          также выделять слова и фразы в тексте для акцента. Например, слово
          «кофе» на японском может быть написано катаканой как «コーヒー»
          (ко-о-хи)
        </motion.p>

        <motion.img
          variants={itemVariants}
          src={teaCeremony}
          alt="Чайная церемония"
          className="lg:mr-32 lg:mt-0 mt-20"
        />
      </motion.section>

      <motion.section
        ref={section3Ref}
        initial="hidden"
        animate={section3InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center justify-between lg:flex-row max-w-[1200px] mx-auto mt-32"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center px-8 ml-32"
        >
          <motion.img
            src={japanMap}
            alt="Карта Японии"
            whileHover={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.p variants={itemVariants} className="font-jp text-[64px]">
            カタカナ
          </motion.p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body font-bold text-right pt-[43px] pr-[28px] pl-[14px] pb-[37px] bg-[#5D4170] mr-10 rounded-[45px] max-w-[543px] text-2xl"
        >
          Катакана возникла в IX веке как упрощённая форма угловатых штрихов
          кандзи. Первоначально выполняла служебную функцию, аналогичную
          скорописи, позже превратилась в независимую систему письма
        </motion.p>
      </motion.section>

      {/* Секция с алфавитом */}
      <motion.section
        ref={section4Ref}
        initial="hidden"
        animate={section4InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center max-w-[1072px] mx-auto mt-[162px]"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-center font-header text-5xl">Алфавит</h1>
          <div className="mt-3.5 bg-[#5D4170] h-2.5 w-full rounded-full"></div>
        </motion.div>

        <div className="mt-8 w-full space-y-4">
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
              transition={{ delay: groupIndex * 0.2 }}
              className="flex justify-between space-x-4 bg-[#5D4170]/20 p-3 rounded-xl"
            >
              {group.map((char, charIndex) =>
                char ? (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={`${groupIndex}-${charIndex}`}
                    className="flex-1 flex flex-col items-center justify-center p-2"
                  >
                    <p
                      className="font-jp text-4xl cursor-pointer hover:text-[#E7D2D2] active:text-[#3A2647]"
                      onClick={() => AudioManager.play(char)}
                    >
                      {getJapaneseChar(char, "katakana")}
                    </p>
                    <p className="font-body text-xl mt-2">{char}</p>
                  </motion.div>
                ) : (
                  <div key={`${groupIndex}-${charIndex}`} className="flex-1" />
                )
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        ref={section5Ref}
        initial="hidden"
        animate={section5InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="my-16"
      >
        {testConfig ? (
          <Quiz
            config={{ ...testConfig, alphabet: "katakana" }}
            onFinish={() => setTestConfig(null)}
          />
        ) : (
          <motion.div variants={containerVariants} className="space-y-16">
            <motion.div variants={itemVariants}>
              <TestOptions onStartTest={setTestConfig} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Achievements alphabet="katakana" />
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      <motion.section
        ref={section6Ref}
        initial="hidden"
        animate={section6InView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-[41px] max-w-[1200px] mx-auto py-16"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center px-8"
        >
          <h1 className="text-center font-header text-5xl">Примеры слов</h1>
          <div className="mt-3.5 bg-[#5D4170] h-2.5 w-full rounded-full"></div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-body font-bold pt-[43px] pr-[28px] pl-[59px] pb-[37px] bg-[#5D4170] rounded-[45px] text-2xl"
        >
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            <motion.div variants={itemVariants} className="font-body text-2xl">
              Катакана
            </motion.div>
            <div className="">Ромадзи</div>
            <div className="">Перевод</div>

            {[
              ["レストラン", "resutoran", "ресторан"],
              ["タクシ", "takushī", "такси"],
              ["フォーク", "fōku", "вилка"],
              ["ベッド", "beddo", "кровать"],
              ["ペン", "pen", "ручка"],
              ["モスクワ", "mosukuwa", "Москва"],
              ["キリン", "kirin", "жираф"],
              ["カラス", "karasu", "ворона"],
              ["マグロ", "maguro", "тунец"],
            ].map(([katakana, romaji, translation], index) => (
              <motion.div
                key={`row-${index}`}
                variants={itemVariants}
                className="contents"
              >
                <div className="font-jp text-2xl">{katakana}</div>
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
}

export default Katakana;
