import { useState } from "react";
import { Link } from "react-router-dom";
import { story } from "../content/story";
import { Confetti } from "../components/Art";
import { Photo } from "../components/Photo";
import { goals, useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

const LINKS = [
  { goal: "memories" as const, to: "/story", label: "the timeline" },
  { goal: "quiz" as const, to: "/quiz", label: "the quiz" },
  { goal: "puzzle" as const, to: "/puzzle", label: "the puzzle" },
  { goal: "notes" as const, to: "/notes", label: "the love notes" },
];

export function Finale() {
  const { progress } = useProgress();
  const status = goals(progress);
  const [open, setOpen] = useState(false);
  const [burst] = useState(status.ready);
  const last = story.finale.lastThing;
  useTitle("The final surprise");

  if (!status.ready) {
    const waiting = LINKS.filter((item) => !status[item.goal]);
    return (
      <section className="finale">
        <p className="kicker">{story.finale.kicker}</p>
        <h1 className="display">{story.finale.waitingTitle}</h1>
        <p className="lede">{story.finale.waiting}</p>
        <ul className="waiting-list">
          {waiting.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="finale">
      <Confetti show={burst} />
      <p className="kicker">{story.finale.kicker}</p>
      <h1 className="display">{story.finale.title}</h1>
      <div className="finale-layout">
      <figure className="finale-photo">
        <span className="tape" aria-hidden="true" />
        <Photo src={story.finale.photo} alt={story.finale.alt} doodle={story.finale.doodle} />
      </figure>
      <div className="finale-copy">
      <article className="stationery">
        {story.finale.letter.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="signature script">{story.finale.signature}</p>
      </article>
      {!open ? (
        <button type="button" className="btn" onClick={() => setOpen(true)}>
          {story.finale.oneLastThing}
        </button>
      ) : (
        <article className="last-thing">
          <h2>{last.title}</h2>
          {last.detail && <p>{last.detail}</p>}
          {last.image && <img src={last.image} alt="" className="last-image" />}
          {last.kind === "video" && last.video && (
            <video className="last-video" src={last.video} controls playsInline />
          )}
          {last.kind === "playlist" && last.href && (
            <a className="btn" href={last.href} target="_blank" rel="noreferrer">
              {last.linkLabel}
            </a>
          )}
        </article>
      )}
      </div>
      </div>
      <p className="closing script">{story.finale.closing}</p>
    </section>
  );
}
