import { useEffect } from "react";
import { VisitSection } from "../sections/VisitSection";

export function VisitPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <VisitSection />;
}
