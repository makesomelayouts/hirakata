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
    <motion.div className="h-screen bg-[url(@/assets/hiragana-bg.jpg)] bg-cover bg-center">
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

      <h1 className="px-6 mt-2 text-2xl font-bold text-center font-body">
        Хирагана
      </h1>
    </motion.div>
  );
}

export default Hiragana;
