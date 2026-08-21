import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { navigate } from "../router";

export function Link({
  href = "",
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
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
    )
      return;

    event.preventDefault();
    navigate(href);
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
