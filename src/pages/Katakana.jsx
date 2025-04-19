import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

import { motion, useSpring, useScroll } from "motion/react";

export const Katakana = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
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
          backgroundColor: "#EBAAC1",
        }}
      />

      <h1 className="px-6 mt-2 pb-[10000px] text-2xl font-bold text-center">
        Катакана
      </h1>
    </>
  );
};
