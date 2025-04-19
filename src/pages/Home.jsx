import { Header } from "@/widgets/Header";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <>
      <div className="h-screen bg-[url(@/assets/bg.jpg)] bg-cover">
        <Header />

        <div className="flex flex-col items-baseline justify-center ml-10 text-left text-white mt-52 md:ml-32 xl:ml-80 xl:mt-64">
          <h1 className="text-3xl font-normal md:text-5xl font-header">
            ХираКата
          </h1>

          <p className="max-w-2xl my-[22px] text-base md:text-xl font-bold text-white font-body">
            Хотите освоить японский язык? Мы поможем вам разобраться в теории,
            практике изучения и тестирования иероглифов хираганы и катаканы
          </p>

          <motion.button
            whileTap={{ scale: 0.92 }}
            drag
            dragConstraints={{ left: 0, right: 200, bottom: 100, top: 0 }}
            className="px-4 py-2 mt-2 text-base font-bold text-white bg-red-700 cursor-pointer select-none md:px-6 md:text-xl font-body hover:bg-red-800 active:bg-red-900 rounded-4xl"
          >
            Приступить
          </motion.button>
        </div>
      </div>
    </>
  );
};
