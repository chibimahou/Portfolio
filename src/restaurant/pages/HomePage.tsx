import { useEffect } from "react";
import { HomeSection } from "../sections/HomeSection";

export function HomePage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <HomeSection />;
}
