import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { reservationSlots } from "../data/mockData";

interface ReservationResult {
  number: string;
  date: string;
  time: string;
  party: string;
}

const partySizes = ["1-2", "3-4", "5-6", "7-8", "9+"];
const occasions = ["None", "Birthday", "Anniversary", "Business", "Date Night", "Other"];
const seatingOptions = ["Indoor", "Outdoor", "Bar", "Chef's Counter"];

export function ReservationSection(): JSX.Element {
  const [step, setStep] = useState(1);
  const [party, setParty] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("None");
  const [seating, setSeating] = useState("Indoor");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [waitlistMessage, setWaitlistMessage] = useState("");
  const [result, setResult] = useState<ReservationResult | null>(null);

  const slots = useMemo(() => {
    return reservationSlots.find((item) => item.date === date)?.slots ?? [];
  }, [date]);

  const canStepTwo = Boolean(party && date);
  const hasAvailability = slots.some((item) => item.status !== "unavailable");
  const canStepThree = Boolean(time);

  const submitReservation = (event: FormEvent): void => {
    event.preventDefault();
    if (!name || !email || !phone || !time) {
      return;
    }

    setResult({
      number: `EA-${Math.floor(100000 + Math.random() * 900000)}`,
      date,
      time,
      party
    });
  };

  return (
    <section id="reservations" className="section alt-bg">
      <div className="container flow-stack">
        <div className="section-head">
          <h2>Reserve Your Table</h2>
          <p>Three quick steps with availability simulation and waitlist fallback.</p>
        </div>

        <ol className="stepper" aria-label="Reservation steps">
          <li className={step >= 1 ? "is-active" : ""}>Details</li>
          <li className={step >= 2 ? "is-active" : ""}>Availability</li>
          <li className={step >= 3 ? "is-active" : ""}>Confirm</li>
        </ol>

        {result ? (
          <div className="success-panel" role="status">
            <h3>Reservation Confirmed</h3>
            <p>Reservation #{result.number}</p>
            <p>
              {result.date} at {result.time} for {result.party}
            </p>
            <div className="row-inline">
              <button className="btn btn-secondary">Modify</button>
              <button className="btn btn-ghost">Cancel</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setResult(null);
                  setStep(1);
                  setParty("");
                  setDate("");
                  setOccasion("None");
                  setSeating("Indoor");
                  setTime("");
                  setName("");
                  setEmail("");
                  setPhone("");
                }}
              >
                New Reservation
              </button>
            </div>
          </div>
        ) : (
          <div className="reservation-grid">
            <div className="card-shell">
              {step === 1 && (
                <div>
                  <h3>Step 1: Details</h3>
                  <p>Party Size</p>
                  <div className="chip-row">
                    {partySizes.map((size) => (
                      <button
                        key={size}
                        className={party === size ? "chip is-active" : "chip"}
                        onClick={() => setParty(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                  <p>Occasion</p>
                  <div className="chip-row">
                    {occasions.map((item) => (
                      <button
                        key={item}
                        className={occasion === item ? "chip is-active" : "chip"}
                        onClick={() => setOccasion(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <button className="btn btn-primary" disabled={!canStepTwo} onClick={() => setStep(2)}>
                    Check Availability
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3>Step 2: Availability</h3>
                  <p>
                    {date} for party {party}
                  </p>
                  <p>Seating preference</p>
                  <div className="chip-row">
                    {seatingOptions.map((option) => (
                      <button
                        key={option}
                        className={seating === option ? "chip is-active" : "chip"}
                        onClick={() => setSeating(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {!hasAvailability ? (
                    <div className="empty-state">
                      <p>No availability for this date.</p>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setWaitlistMessage("You are on the waitlist. We will contact you shortly.")}
                      >
                        Join Waitlist
                      </button>
                      {waitlistMessage && <p role="status">{waitlistMessage}</p>}
                    </div>
                  ) : (
                    <div className="chip-row">
                      {slots.map((slot) => (
                        <button
                          key={slot.time}
                          disabled={slot.status === "unavailable"}
                          className={time === slot.time ? "chip is-active" : "chip"}
                          onClick={() => setTime(slot.time)}
                        >
                          {slot.time} {slot.status === "limited" ? "(limited)" : ""}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="row-inline">
                    <button className="btn btn-ghost" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button className="btn btn-primary" disabled={!canStepThree} onClick={() => setStep(3)}>
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={submitReservation}>
                  <h3>Step 3: Confirm</h3>
                  <label htmlFor="res-name">Full name</label>
                  <input id="res-name" value={name} onChange={(event) => setName(event.target.value)} required />
                  <label htmlFor="res-email">Email</label>
                  <input
                    id="res-email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    required
                  />
                  <label htmlFor="res-phone">Phone</label>
                  <input
                    id="res-phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                  <label htmlFor="res-notes">Special requests</label>
                  <textarea id="res-notes" rows={3} placeholder="Any dietary notes or celebration details" />
                  <div className="summary-box">
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Party: {party}</p>
                    <p>Seating: {seating}</p>
                    <p>Occasion: {occasion}</p>
                  </div>
                  <div className="row-inline">
                    <button className="btn btn-ghost" type="button" onClick={() => setStep(2)}>
                      Back
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
