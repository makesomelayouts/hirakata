import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { motion } from "framer-motion";

export const Criteria = () => {
  return (
    <>
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

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-header text-5xl">
            Критерии оценивания
          </h1>
          <div className="mt-3.5 bg-[#5D4170] h-2.5 w-full rounded-full"></div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};
