import JapaneseTransition from "@/shared/JapaneseTransition";
import { Header } from "@/widgets/Header";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div className="h-screen bg-[url(@/assets/bg.jpg)] bg-cover">
        <Header />

        <div className="flex flex-col items-baseline justify-center ml-10 text-left text-white mt-52 md:ml-32 xl:ml-80 xl:mt-64">
          <motion.h1
            className="text-3xl font-normal md:text-5xl font-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            drag
            dragConstraints={{ left: 0, right: 500, bottom: 300, top: 0 }}
          >
            ХираКата
          </motion.h1>

          <motion.p
            className="max-w-2xl my-[22px] text-base md:text-xl font-bold text-white font-body"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            drag
            dragConstraints={{ left: 0, right: 500, bottom: 300, top: 0 }}
          >
            Хотите освоить японский язык? Мы поможем вам разобраться в теории,
            практике изучения и тестирования иероглифов хираганы и катаканы
          </motion.p>

          <motion.button
            drag
            dragConstraints={{ left: 0, right: 500, bottom: 300, top: 0 }}
            className="px-4 py-2 mt-2 text-base font-bold text-white bg-red-700 cursor-pointer select-none md:px-6 md:text-xl font-body hover:bg-red-800 active:bg-red-900 rounded-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Приступить
          </motion.button>
        </div>
      </motion.div>
      <div className="h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-slate-800 dark:text-slate-100">
            Japanese Writing Systems
          </h1>
          <p className="mb-8 text-slate-600 dark:text-slate-300">
            Explore the transition between hiragana (ひらがな) and katakana
            (カタカナ)
          </p>
        </div>

        <JapaneseTransition />

        <div className="mt-12 text-sm text-center text-slate-500 dark:text-slate-400">
          <p>
            Click on a character to see the transition between writing systems
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
