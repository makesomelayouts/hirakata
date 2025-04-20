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
    <motion.div
      className="h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #69507D -52.19%, #B98396 61.17%)",
      }}
    >
      <Header />

      <Footer />
    </motion.div>
  );
}

export default Katakana;
