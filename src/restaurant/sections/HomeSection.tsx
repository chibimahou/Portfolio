import { Link } from "react-router-dom";
import { dishes, hours, press, restaurant, reviews } from "../data/mockData";
import { SmartImage } from "../components/SmartImage";

interface GroupedHoursEntry {
  startDay: string;
  endDay: string;
  open: string;
  close: string;
  closed: boolean;
  key: string;
}

interface GroupedHoursSegment {
  dayLabel: string;
  timeLabel: string;
  key: string;
}

function toShortDayName(day: string): string {
  return day.slice(0, 3);
}

function groupHoursBySchedule(): GroupedHoursSegment[] {
  const groupedHours: GroupedHoursEntry[] = [];

  for (const entry of hours) {
    const isClosed = Boolean(entry.closed);
    const scheduleKey = isClosed ? "closed" : `${entry.open}|${entry.close}`;
    const previousGroup = groupedHours[groupedHours.length - 1];

    if (previousGroup && previousGroup.key === scheduleKey) {
      previousGroup.endDay = entry.day;
      continue;
    }

    groupedHours.push({
      startDay: entry.day,
      endDay: entry.day,
      open: entry.open,
      close: entry.close,
      closed: isClosed,
      key: scheduleKey
    });
  }

  return groupedHours.map((group) => {
    const startDay = toShortDayName(group.startDay);
    const endDay = toShortDayName(group.endDay);
    const dayLabel = startDay === endDay ? startDay : `${startDay}-${endDay}`;

    if (group.closed) {
      return {
        dayLabel,
        timeLabel: "Closed",
        key: `${group.key}-${dayLabel}`
      };
    }

    return {
      dayLabel,
      timeLabel: `${group.open} - ${group.close}`,
      key: `${group.key}-${dayLabel}`
    };
  });
}

export function HomeSection(): JSX.Element {
  const featured = dishes.filter((dish) => dish.featured).slice(0, 4);
  const groupedHoursSegments = groupHoursBySchedule();

  return (
    <>
      <section id="home" className="hero section">
        <div className="hero-overlay" />
        <SmartImage
          className="hero-bg"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Restaurant interior with warm lighting"
        />
        <div className="container hero-content">
          <div className="hero-intro-card">
            <p className="eyebrow">Wood-Fired American Cuisine · Portland, OR</p>
            <h1>{restaurant.tagline}</h1>
            <p>{restaurant.description}</p>
            <div className="hero-cta">
              <Link to="/reservations" className="btn btn-secondary">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn btn-ghost">
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Restaurant quick info">
        <div className="container quick-strip-inner">
          <div className="quick-strip-card" aria-label="Restaurant quick information">
            <p className="quick-strip-item quick-strip-line quick-strip-hours-line" aria-label="Business hours">
              {groupedHoursSegments.map((segment, index) => (
                <span key={segment.key} className="quick-strip-hours-segment">
                  {index > 0 && <span className="quick-strip-separator" aria-hidden="true"> • </span>}
                  <span className="quick-strip-day">{segment.dayLabel}</span>{" "}
                  <span className="quick-strip-time">{segment.timeLabel}</span>
                </span>
              ))}
            </p>
            <p className="quick-strip-item quick-strip-line">{restaurant.address} • {restaurant.phone}</p>
            <p className="quick-strip-item quick-strip-line">Dine-In • Takeout • Private Events</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container flow-stack">
          <div className="section-head">
            <h2>Signature Dishes</h2>
            <Link to="/menu">View Full Menu</Link>
          </div>
          <div className="card-grid">
            {featured.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <SmartImage className="dish-card-img" src={dish.image} alt={dish.name} />
                <div className="dish-card-body">
                  <div className="row-between">
                    <h3>{dish.name}</h3>
                    <strong>${dish.price.toFixed(2)}</strong>
                  </div>
                  <p>{dish.description}</p>
                  <div className="tag-row">
                    {dish.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container split">
          <div>
            <h2>A Story Told in Smoke and Fire</h2>
            <p>
              Ember & Ash began as a neighborhood chef-counter and evolved into a full dining experience,
              centered on seasonal sourcing and wood-fired depth.
            </p>
            <div className="stats-row">
              <p>
                <strong>Est. 2019</strong>
              </p>
              <p>
                <strong>Local farms weekly</strong>
              </p>
              <p>
                <strong>Fire-led technique</strong>
              </p>
            </div>
          </div>
          <SmartImage
            className="story-image"
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80"
            alt="Chef preparing food over open flame"
          />
        </div>
      </section>

      <section className="section">
        <div className="container flow-stack">
          <h2>What Our Guests Say</h2>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <p>{"★".repeat(review.rating)}</p>
                <blockquote>{review.text}</blockquote>
                <p>
                  {review.author} • {review.source}
                </p>
              </article>
            ))}
          </div>
          <div className="press-row" aria-label="Press mentions">
            {press.map((item) => (
              <p key={item.id}>
                <strong>{item.outlet}:</strong> {item.quote}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section map-band">
        <div className="container split">
          <div className="map-placeholder" role="img" aria-label="Map preview placeholder">
            <p>Map Preview</p>
            <p>
              {restaurant.address}, {restaurant.cityState}
            </p>
            <a className="btn btn-secondary" href="#visit">
              Get Directions
            </a>
          </div>
          <div>
            <h2>Visit Tonight</h2>
            <ul className="hours-list">
              {hours.slice(0, 4).map((item) => (
                <li key={item.day}>
                  <strong>{item.day}</strong>
                  <span>{item.closed ? "Closed" : `${item.open} - ${item.close}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>Ready to Experience It?</h2>
          <div>
            <a href="#reservations" className="btn btn-secondary">
              Reserve a Table
            </a>
            <a href="#order" className="btn btn-primary">
              Order Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
