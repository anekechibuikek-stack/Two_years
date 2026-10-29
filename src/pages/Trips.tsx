import { useEffect, useState } from "react";
import tripPhotos from "virtual:trip-photos";
import { story } from "../content/story";
import { useProgress } from "../lib/progress";
import { shuffle } from "../lib/shuffle";
import { useTitle } from "../lib/use-title";

export function Trips() {
  const { seeTrips } = useProgress();
  const [photos] = useState(() => shuffle(tripPhotos));
  const loop = [...photos, ...photos];

  useTitle(story.trips.title);

  useEffect(() => {
    seeTrips();
  }, [seeTrips]);

  return (
    <section className="trips">
      {photos.length > 0 ? (
        <div className="trips-stage">
          <div
            className="trips-track"
            style={{ animationDuration: `${Math.max(photos.length, 1) * 5}s` }}
          >
            {loop.map((src, index) => (
              <figure className="trips-card" key={`${src}-${index}`}>
                <img src={src} alt="" />
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <p className="lede">The pictures are not in the folder yet.</p>
      )}
      <div className="trips-scroll">
        <article className="notebook trips-notebook">
          <span className="notebook-holes" aria-hidden="true" />
          <h1>{story.trips.title}</h1>
          <div className="notebook-body">
            {story.trips.entry.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
