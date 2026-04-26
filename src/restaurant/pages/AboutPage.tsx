import { useEffect } from "react";
import { AboutGallerySection } from "../sections/AboutGallerySection";

export function AboutPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AboutGallerySection />;
}
