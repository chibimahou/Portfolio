import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600'%3E%3Crect width='100%25' height='100%25' fill='%232b2422'/%3E%3Ctext x='50%25' y='50%25' fill='%23e9d8ba' text-anchor='middle' dominant-baseline='middle' font-family='Verdana' font-size='26'%3EImage unavailable%3C/text%3E%3C/svg%3E";

export function SmartImage({ src, alt, className }: SmartImageProps): JSX.Element {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      loading="lazy"
      src={hasError ? FALLBACK : src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
