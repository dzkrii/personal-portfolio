import { useState } from "react";

type MediaFrameProps = {
  alt: string;
  className?: string;
  fallbackLabel: string;
  portrait?: boolean;
  recommendedSize: string;
  src?: string | null;
};

export function MediaFrame({
  alt,
  className = "",
  fallbackLabel,
  portrait = false,
  recommendedSize,
  src,
}: MediaFrameProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    src ? "loading" : "error",
  );

  return (
    <figure
      className={`media-frame${portrait ? " media-frame--portrait" : ""} ${className}`}
      aria-busy={status === "loading"}
    >
      {src && status !== "error" ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
          className={status === "ready" ? "is-ready" : ""}
        />
      ) : null}
      {status === "loading" ? <span className="media-frame__skeleton" aria-hidden="true" /> : null}
      {status === "error" ? (
        <figcaption className="media-frame__fallback">
          <strong>{fallbackLabel}</strong>
          <small>{recommendedSize}</small>
        </figcaption>
      ) : null}
    </figure>
  );
}
