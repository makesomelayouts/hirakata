import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { motion, useScroll, useSpring } from "framer-motion";
import { ResourceSection } from "./ResourceSection";
import { RoadmapStage } from "./RoadmapStage";

export const Resources = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(179.92deg, #A873AE -52.19%, #EBAAC1 61.17%)",
      }}
    >
      <Header />

      {/* Прогресс бар */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#8C5D91] origin-left z-50"
        style={{ scaleX }}
      />

      <ResourceSection />

      <RoadmapStage />

      <Footer />
    </motion.div>
  );
};
