import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll } from "framer-motion";
import { Footer } from "@/widgets/Footer";

function Katakana() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="h-screen">
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

      <Footer />
    </motion.div>
  );
}

export default Katakana;
