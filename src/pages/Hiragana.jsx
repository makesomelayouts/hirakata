import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

import { motion, useSpring, useScroll } from "motion/react";

export const Hiragana = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <>
      <Header />

      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 90,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#C192C6",
        }}
      />

      <h1 className="px-6 mt-2 mb-[10000px] text-2xl font-bold text-center">
        Хирагана
      </h1>

      <Footer />
    </>
  );
};
