import { useEffect } from "react";
import { EventsSection } from "../sections/EventsSection";

export function EventsPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <EventsSection />;
}
