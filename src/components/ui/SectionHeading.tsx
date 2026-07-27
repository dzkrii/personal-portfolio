import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  children: ReactNode;
  description?: string;
  eyebrow?: string;
};

export function SectionHeading({
  as: Heading = "h2",
  children,
  description,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{children}</Heading>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </header>
  );
}
