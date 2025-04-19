// shared/TransitionOverlay.jsx
import { motion } from "framer-motion";

export default function TransitionOverlay({ title }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2F2F2F]"
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1],
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-white md:text-6xl"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
