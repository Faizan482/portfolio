"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-primary/30 mix-blend-difference"
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          />
          {/* Following ball */}
          <motion.div
            className="fixed pointer-events-none z-50 w-3 h-3 rounded-full bg-primary mix-blend-difference"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              mass: 0.5,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CursorAnimation;