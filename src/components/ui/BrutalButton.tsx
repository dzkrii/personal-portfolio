import type { MouseEvent, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { navigate } from "../../router";

type BrutalButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  tone?: "primary" | "secondary";
};

export function BrutalButton({
  children,
  className = "",
  tone = "primary",
  href = "",
  onClick,
  ...props
}: BrutalButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !href.startsWith("/")
    ) return;

    event.preventDefault();
    navigate(href);
  }

  return (
    <motion.a
      className={`brutal-button brutal-button--${tone} ${className}`}
      href={href}
      onClick={handleClick}
      whileHover={{ x: -2, y: -2, boxShadow: "var(--shadow-button-hover)" }}
      whileTap={{ x: 4, y: 4, boxShadow: "var(--shadow-none)" }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
