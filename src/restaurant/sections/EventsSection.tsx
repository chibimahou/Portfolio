import type { FormEvent } from "react";
import { useState } from "react";
import { events, packages } from "../data/mockData";

export function EventsSection(): JSX.Element {
  const [eventType, setEventType] = useState("Private Dinner");
  const [guestCount, setGuestCount] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("$5k-$10k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const submit = (event: FormEvent): void => {
    event.preventDefault();
    if (!guestCount || !date || !name || !email || !phone) {
      return;
    }

    setSuccess("Inquiry submitted. Our events team will reach out within one business day.");
    setGuestCount("");
    setDate("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="events" className="section alt-bg">
      <div className="container flow-stack">
        <div className="section-head">
          <h2>Private Events & Catering</h2>
          <p>Host private dinners, team gatherings, and full buyouts with coordinated hospitality.</p>
        </div>

        <div className="card-grid">
          {packages.map((item) => (
            <article className={`card-shell ${item.featured ? "featured" : ""}`} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.guestRange}</p>
              <strong>{item.price}</strong>
              <ul>
                {item.included.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <button className="btn btn-secondary" onClick={() => setMessage(`Interested in ${item.title}. `)}>
                Request This Package
              </button>
            </article>
          ))}
        </div>

        <div className="events-grid">
          {events.map((item) => (
            <article className="card-shell" key={item.id}>
              <p className="eyebrow">{item.date}</p>
              <h3>{item.title}</h3>
              <p>
                {item.time} · {item.price} · {item.seats}
              </p>
              <p>{item.description}</p>
              <button className="btn btn-ghost" onClick={() => setMessage(`Interested in event: ${item.title}. `)}>
                Reserve Your Spot
              </button>
            </article>
          ))}
        </div>

        <form className="card-shell" onSubmit={submit}>
          <h3>Inquiry Form</h3>
          <label htmlFor="event-type">Event type</label>
          <select id="event-type" value={eventType} onChange={(event) => setEventType(event.target.value)}>
            <option>Private Dinner</option>
            <option>Corporate Event</option>
            <option>Wedding Reception</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
          <label htmlFor="event-guests">Guest count</label>
          <input
            id="event-guests"
            value={guestCount}
            onChange={(event) => setGuestCount(event.target.value)}
            required
          />
          <label htmlFor="event-date">Preferred date</label>
          <input id="event-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
          <p>Budget range</p>
          <div className="chip-row">
            {["<$5k", "$5k-$10k", "$10k-$20k", "$20k+"].map((value) => (
              <button
                className={budget === value ? "chip is-active" : "chip"}
                key={value}
                type="button"
                onClick={() => setBudget(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <label htmlFor="event-name">Name</label>
          <input id="event-name" value={name} onChange={(event) => setName(event.target.value)} required />
          <label htmlFor="event-email">Email</label>
          <input
            id="event-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="event-phone">Phone</label>
          <input id="event-phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          <label htmlFor="event-message">Message</label>
          <textarea
            id="event-message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Send Inquiry
          </button>
          {success && <p role="status">{success}</p>}
        </form>
      </div>
    </section>
  );
}
