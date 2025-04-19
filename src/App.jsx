// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TransitionOverlay from "@/shared/TransitionOverlay";
import Home from "@/pages/Home";
import Hiragana from "@/pages/Hiragana";
import Katakana from "@/pages/Katakana";
import { Header } from "@/widgets/Header"; // Import your Header component

// Create a context to manage transitions
import { createContext, useContext } from "react";

// Create the context
export const TransitionContext = createContext({
  startTransition: () => {},
});

export default function App() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState("");
  const [nextPathname, setNextPathname] = useState(null);
  const navigate = useNavigate();

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/hiragana":
        return "ひらがな";
      case "/katakana":
        return "カタカナ";
      default:
        return "ようこそ";
    }
  };

  // Function to start a transition
  const startTransition = (pathname) => {
    setTransitionTitle(getPageTitle(pathname));
    setShowOverlay(true);
    setNextPathname(pathname);
  };

  // Effect to handle navigation after overlay appears
  useEffect(() => {
    if (showOverlay && nextPathname) {
      // Wait a short time for the overlay to appear before navigating
      const timer = setTimeout(() => {
        navigate(nextPathname);

        // Then wait a short time before hiding the overlay
        setTimeout(() => {
          setShowOverlay(false);
          setNextPathname(null);
        }, 400); // Adjust this time to control how long the overlay stays visible
      }, 400); // Adjust this time to control when navigation happens

      return () => clearTimeout(timer);
    }
  }, [showOverlay, nextPathname, navigate]);

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {/* Transition Overlay */}
      <AnimatePresence mode="wait">
        {showOverlay && (
          <TransitionOverlay key="overlay" title={transitionTitle} />
        )}
      </AnimatePresence>
      {/* Page Content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/hiragana" element={<Hiragana />} />
          <Route path="/katakana" element={<Katakana />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
