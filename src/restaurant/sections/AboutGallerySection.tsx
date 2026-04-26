import { useMemo, useState } from "react";
import { Dialog } from "../components/Dialog";
import { SmartImage } from "../components/SmartImage";
import { gallery, press } from "../data/mockData";
import type { GalleryImage } from "../types/models";

type GalleryFilter = "all" | "food" | "interior" | "events";

export function AboutGallerySection(): JSX.Element {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? gallery : gallery.filter((item) => item.category === filter)),
    [filter]
  );

  return (
    <>
      <section id="about" className="section">
        <div className="container split">
          <div>
            <h2>About Ember & Ash</h2>
            <p>
              Chef Marcus Rivera built Ember & Ash to celebrate wood fire as both craft and narrative.
              Every menu cycle starts with farm calls, market walks, and ingredient-led iterations.
            </p>
            <p>
              The result is a room where technique feels precise but welcoming: refined service, smoky warmth,
              and plates shaped around seasonality.
            </p>
            <div className="values-grid">
              <article className="card-shell">
                <h3>Local First</h3>
                <p>Regional growers and fishers shape our weekly features.</p>
              </article>
              <article className="card-shell">
                <h3>Wood-Fired Tradition</h3>
                <p>Char, smoke, and embers drive flavor architecture.</p>
              </article>
              <article className="card-shell">
                <h3>Seasonal Menu</h3>
                <p>Menu updates track harvest shifts and chef experimentation.</p>
              </article>
              <article className="card-shell">
                <h3>Zero-Waste Mindset</h3>
                <p>Byproduct-led stocks and thoughtful prep reduce waste.</p>
              </article>
            </div>
          </div>
          <aside className="card-shell">
            <SmartImage
              className="story-image"
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=900&q=80"
              alt="Portrait of chef in kitchen"
            />
            <h3>Chef Marcus Rivera</h3>
            <p>Executive Chef & Owner</p>
            <p>17 years in open-fire kitchens across the Pacific Northwest.</p>
          </aside>
        </div>

        <div className="container press-row">
          {press.map((item) => (
            <p key={item.id}>
              <strong>{item.outlet}</strong> {item.quote}
            </p>
          ))}
        </div>
      </section>

      <section id="gallery" className="section alt-bg">
        <div className="container flow-stack">
          <div className="section-head">
            <h2>Gallery</h2>
            <p>Filter by category and open any image in an accessible lightbox dialog.</p>
          </div>
          <div className="chip-row">
            {(["all", "food", "interior", "events"] as GalleryFilter[]).map((item) => (
              <button
                key={item}
                className={filter === item ? "chip is-active" : "chip"}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No photos in this category yet.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filtered.map((image) => (
                <button
                  key={image.id}
                  className="gallery-tile"
                  onClick={() => setSelected(image)}
                  aria-label={`Open ${image.title}`}
                >
                  <SmartImage src={image.image} alt={image.title} className="gallery-image" />
                  <span>{image.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog isOpen={Boolean(selected)} title={selected?.title ?? "Gallery image"} onClose={() => setSelected(null)}>
        {selected && <SmartImage src={selected.image} alt={selected.title} className="lightbox-image" />}
      </Dialog>
    </>
  );
}
