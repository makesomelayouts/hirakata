import { motion } from "framer-motion";

export const ResourceLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold hover:border-b-2 border-transparent hover:border-gray-300 transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);
