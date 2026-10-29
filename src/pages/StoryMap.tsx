import { Link, useNavigate } from "react-router-dom";
import { story } from "../content/story";
import { cx } from "../lib/cx";
import { goals, useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

const CHAPTERS = [
  {
    to: "/story",
    kicker: "Chapter 2",
    title: "Our story so far",
    blurb: "Dates, polaroids, and the notes I kept.",
    goal: "memories" as const,
  },
  {
    to: "/quiz",
    kicker: "Chapter 3",
    title: "How well do you know us?",
    blurb: "A quiz with hints instead of red marks.",
    goal: "quiz" as const,
  },
  {
    to: "/puzzle",
    kicker: "Chapter 4",
    title: "Put us back together",
    blurb: "A picture, in pieces, on purpose.",
    goal: "puzzle" as const,
  },
  {
    to: "/trips",
    kicker: "Chapter 5",
    title: "Our trips",
    blurb: "Every picture, sliding past in a new order.",
    goal: "trips" as const,
  },
  {
    to: "/notes",
    kicker: "Chapter 6",
    title: "Things I love about you",
    blurb: "Cards you can turn over.",
    goal: "notes" as const,
  },
];

export function StoryMap() {
  const navigate = useNavigate();
  const { progress, reset } = useProgress();
  const status = goals(progress);
  useTitle("Our story");

  return (
    <section className="map">
      <p className="kicker">{story.map.kicker}</p>
      <h1 className="display">{story.map.title}</h1>
      <p className="lede">{story.map.intro}</p>

      <div className="map-layout">
      <ol className="path">
        <li className="path-step is-done">
          <span className="path-node" aria-hidden="true" />
          <div className="path-card">
            <span className="path-kicker">Chapter 1</span>
            <span className="path-title">The invitation</span>
            <span className="path-blurb">You opened it.</span>
          </div>
        </li>
        {CHAPTERS.map((chapter) => {
          const done = status[chapter.goal];
          return (
            <li key={chapter.to} className={cx("path-step", done && "is-done")}>
              <span className="path-node" aria-hidden="true" />
              <Link to={chapter.to} className="path-card">
                <span className="path-kicker">{chapter.kicker}</span>
                <span className="path-title">{chapter.title}</span>
                <span className="path-blurb">{chapter.blurb}</span>
                {done && <span className="path-check">Opened</span>}
              </Link>
            </li>
          );
        })}
        <li className={cx("path-step path-last", status.ready && "is-done")}>
          <span className="path-node" aria-hidden="true" />
          {status.ready ? (
            <Link to="/finale" className="path-card path-finale">
              <span className="path-kicker">Chapter 7</span>
              <span className="path-title">{story.map.finaleTitle}</span>
              <span className="path-blurb">{story.map.finaleOpen}</span>
            </Link>
          ) : (
            <div className="path-card path-finale is-locked">
              <span className="wax" aria-hidden="true" />
              <span className="path-kicker">Chapter 7</span>
              <span className="path-title">{story.map.finaleTitle}</span>
              <span className="path-blurb">{story.map.finaleLocked}</span>
            </div>
          )}
        </li>
      </ol>
      </div>

      <button
        type="button"
        className="replay"
        onClick={() => {
          reset();
          navigate("/");
        }}
      >
        {story.map.replay}
      </button>
    </section>
  );
}
