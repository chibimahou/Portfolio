import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { faqItems, hours, restaurant } from "../data/mockData";
import type { FaqItem } from "../types/models";

type FaqFilter = "all" | "reservations" | "dining" | "menu" | "parking";

export function VisitSection(): JSX.Element {
  const [faqFilter, setFaqFilter] = useState<FaqFilter>("all");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("General");
  const [contactMessage, setContactMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [status, setStatus] = useState("");

  const filteredFaq = useMemo(() => {
    if (faqFilter === "all") {
      return faqItems;
    }
    return faqItems.filter((item) => item.category === faqFilter);
  }, [faqFilter]);

  const todayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  const submitContact = (event: FormEvent): void => {
    event.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      return;
    }
    setStatus("Message sent successfully.");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const submitNewsletter = (event: FormEvent): void => {
    event.preventDefault();
    if (!newsletterEmail.includes("@")) {
      setStatus("Please enter a valid newsletter email.");
      return;
    }
    setStatus("Subscribed to newsletter updates.");
    setNewsletterEmail("");
  };

  return (
    <section id="visit" className="section">
      <div className="container flow-stack">
        <div className="section-head">
          <h2>Visit & Contact</h2>
          <p>Find us, send a message, and browse common guest questions.</p>
        </div>

        <div className="split">
          <div className="map-placeholder" role="img" aria-label="Map placeholder for directions">
            <p>{restaurant.address}</p>
            <p>{restaurant.cityState}</p>
            <a className="btn btn-secondary" href="https://maps.google.com" target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
          <div className="card-shell">
            <h3>Hours</h3>
            <ul className="hours-list">
              {hours.map((entry) => (
                <li key={entry.day} className={entry.day === todayName ? "today-row" : ""}>
                  <strong>
                    {entry.day} {entry.day === todayName ? "(Today)" : ""}
                  </strong>
                  <span>{entry.closed ? "Closed" : `${entry.open} - ${entry.close}`}</span>
                </li>
              ))}
            </ul>
            <p>
              <a href="tel:+15035550162">{restaurant.phone}</a>
            </p>
            <p>
              <a href="mailto:reservations@emberandash.demo">{restaurant.email}</a>
            </p>
          </div>
        </div>

        <div className="split mt-24">
          <form className="card-shell" onSubmit={submitContact}>
            <h3>Contact Form</h3>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              required
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              required
            />
            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              value={contactSubject}
              onChange={(event) => setContactSubject(event.target.value)}
            >
              <option>General</option>
              <option>Reservation Question</option>
              <option>Events</option>
              <option>Feedback</option>
              <option>Press</option>
            </select>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={4}
              value={contactMessage}
              onChange={(event) => setContactMessage(event.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>

          <div className="card-shell">
            <h3>FAQ</h3>
            <div className="chip-row">
              {(["all", "reservations", "dining", "menu", "parking"] as FaqFilter[]).map((item) => (
                <button
                  key={item}
                  className={faqFilter === item ? "chip is-active" : "chip"}
                  onClick={() => setFaqFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {filteredFaq.map((item: FaqItem) => {
              const isOpen = openFaq === item.id;
              return (
                <article key={item.id} className="faq-item">
                  <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${item.id}`}
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                  >
                    {item.question}
                  </button>
                  {isOpen && <p id={`faq-${item.id}`}>{item.answer}</p>}
                </article>
              );
            })}
          </div>
        </div>

        <form className="newsletter" onSubmit={submitNewsletter}>
          <label htmlFor="newsletter-email">Newsletter</label>
          <input
            id="newsletter-email"
            value={newsletterEmail}
            onChange={(event) => setNewsletterEmail(event.target.value)}
            placeholder="you@example.com"
          />
          <button className="btn btn-secondary" type="submit">
            Subscribe
          </button>
        </form>

        {status && (
          <p className="toast" role="alert" aria-live="polite">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
