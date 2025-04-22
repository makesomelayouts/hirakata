import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TransitionContext } from "../App";

const MotionLink = motion(Link);

export const TransitionLink = ({ to, children, ...props }) => {
  const { startTransition } = useContext(TransitionContext);

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(to);
  };

  return (
    <MotionLink to={to} onClick={handleClick} {...props}>
      {children}
    </MotionLink>
  );
};
