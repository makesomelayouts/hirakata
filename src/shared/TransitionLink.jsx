// components/TransitionLink.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransitionContext } from "../App"; // Adjust the import path as needed

export const TransitionLink = ({ to, children, ...props }) => {
  const { startTransition } = useContext(TransitionContext);

  const handleClick = (e) => {
    e.preventDefault();
    startTransition(to);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};