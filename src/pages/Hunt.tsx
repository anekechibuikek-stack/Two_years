import { useState } from "react";
import { Link } from "react-router-dom";
import { story } from "../content/story";
import { Heart } from "../components/Art";
import { chime } from "../lib/chime";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

const SPOTS: Record<string, { top: string; left: string; label: string }> = {
  frame: { top: "24%", left: "72%", label: "A framed picture" },
  camera: { top: "42%", left: "46%", label: "A camera" },
  plant: { top: "78%", left: "16%", label: "A plant" },
  mug: { top: "70%", left: "38%", label: "A mug" },
  book: { top: "72%", left: "58%", label: "A book" },
  key: { top: "78%", left: "82%", label: "A key" },
};

export function Hunt() {
  const { progress, findHunt } = useProgress();
  const [message, setMessage] = useState("");
  const [whisper, setWhisper] = useState("");
  const next = story.hunt.items.find((item) => !progress.hunt.includes(item.id));
  const done = !next;
  useTitle(story.hunt.title);

  function press(id: string) {
    const item = story.hunt.items.find((entry) => entry.id === id);
    if (!item) return;
    if (progress.hunt.includes(id)) {
      setMessage(item.reveal);
      setWhisper(story.hunt.again);
      return;
    }
    if (next?.id !== id) {
      setWhisper(story.hunt.later);
      setMessage("");
      return;
    }
    findHunt(id);
    setMessage(item.reveal);
    setWhisper("");
    const finished = story.hunt.items.every((entry) => entry.id === id || progress.hunt.includes(entry.id));
    chime(finished ? "done" : "yes");
  }

  return (
    <section className="hunt">
      <p className="kicker">{story.hunt.kicker}</p>
      <h1 className="display">{story.hunt.title}</h1>
      <p className="lede">{story.hunt.intro}</p>
      <blockquote className="clue">{done ? story.hunt.done : next.clue}</blockquote>
      <div className="hunt-layout">
      <div className="room" aria-label="A little room to search">
        <div className="room-window" aria-hidden="true">
          <span className="room-moon" />
        </div>
        <div className="room-lights" aria-hidden="true" />
        <div className="room-shelf" aria-hidden="true" />
        <div className="room-desk" aria-hidden="true" />
        {story.hunt.items.map((item) => {
          const spot = SPOTS[item.id];
          if (!spot) return null;
          const found = progress.hunt.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={cx("spot", `spot-${item.id}`, found && "is-found")}
              style={{ top: spot.top, left: spot.left }}
              aria-label={spot.label}
              onClick={() => press(item.id)}
            >
              <SpotArt id={item.id} />
              {found && <Heart className="spot-heart" />}
            </button>
          );
        })}
      </div>
      <div className="hunt-copy">
      <p className="whisper" aria-live="polite">
        {whisper}
      </p>
      {message && <article className="reveal">{message}</article>}
      {done && (
        <Link to="/secret" className="btn">
          {story.hunt.secretCta}
        </Link>
      )}
      </div>
      </div>
    </section>
  );
}

function SpotArt({ id }: { id: string }) {
  if (id === "frame") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="8" width="44" height="48" rx="3" />
        <rect x="16" y="14" width="32" height="28" />
        <path d="M20 38l8-10 6 7 4-4 8 7" />
      </svg>
    );
  }
  if (id === "camera") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 24h12l4-6h12l4 6h8v24H12z" />
        <circle cx="32" cy="36" r="7" />
      </svg>
    );
  }
  if (id === "plant") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 40c-12-2-16-14-8-20 6 6 8 12 8 20zM32 38c10-6 18-4 20 4-8 0-14 1-20 8z" />
        <path d="M24 46h16v8H24z" />
      </svg>
    );
  }
  if (id === "mug") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 22h24v18a10 10 0 0 1-10 10H26A10 10 0 0 1 16 40z" />
        <path d="M40 28h6a7 7 0 0 1 0 14h-6" />
      </svg>
    );
  }
  if (id === "book") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 16h20v32H16a8 8 0 0 0-6 4zM54 16H34v32h14a8 8 0 0 1 6 4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="24" cy="26" r="8" />
      <path d="M30 30l18 12-6 6M40 38l6 4" />
    </svg>
  );
}
