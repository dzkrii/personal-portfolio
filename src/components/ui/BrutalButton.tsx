import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

type BrutalButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  tone?: "cobalt" | "sky";
};

export function BrutalButton({
  children,
  className = "",
  tone = "cobalt",
  ...props
}: BrutalButtonProps) {
  return (
    <motion.a
      className={`brutal-button brutal-button--${tone} ${className}`}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 4, y: 4, boxShadow: "0 0 0 var(--color-ink)" }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
