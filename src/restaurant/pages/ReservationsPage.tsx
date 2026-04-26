import { useEffect } from "react";
import { ReservationSection } from "../sections/ReservationSection";

export function ReservationsPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ReservationSection />;
}
