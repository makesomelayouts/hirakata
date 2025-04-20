import { Header } from "@/widgets/Header";
import { motion, useSpring, useScroll } from "framer-motion";
import { useState } from "react";

function Hiragana() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  const [activeTab, setActiveTab] = useState("theory");

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
          backgroundColor: "#7C5185",
        }}
      />

      <section>
        <h1 className="text-2xl text-center font-header text-5xl">Хирагана</h1>
      </section>
    </motion.div>
  );
}

export default Hiragana;
