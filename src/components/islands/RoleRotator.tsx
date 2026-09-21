import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function RoleRotator() {
  const roles = ["Software Developer", "Creative Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % roles.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="role-rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
export default RoleRotator;

