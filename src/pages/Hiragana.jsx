import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll } from "framer-motion";

function Hiragana() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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

      <h1 className="px-6 mt-2 pb-[10000px] font-body text-2xl font-bold text-center">
        Хирагана
      </h1>
    </motion.div>
  );
}

export default Hiragana;
