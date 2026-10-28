import { useState } from "react";
import { story } from "../content/story";
import { Heart } from "../components/Art";
import { cx } from "../lib/cx";
import { formatLongDate, isUnlocked } from "../lib/dates";
import { useTitle } from "../lib/use-title";

export function Later() {
  const unlocked = isUnlocked(story.later.unlockOn);
  const [open, setOpen] = useState(false);
  const [shake, setShake] = useState(false);
  useTitle(story.later.title);

  function tap() {
    if (!unlocked) {
      setShake(true);
      window.setTimeout(() => setShake(false), 520);
      return;
    }
    setOpen(true);
  }

  return (
    <section className="later">
      <p className="kicker">{story.later.kicker}</p>
      <h1 className="display">{story.later.title}</h1>
      {!open && (
        <>
          <p className="lede">{story.later.sealed}</p>
          <button type="button" className={cx("later-seal", shake && "is-shaking")} onClick={tap}>
            <Heart />
            <span>{formatLongDate(story.later.unlockOn)}</span>
          </button>
        </>
      )}
      {open && (
        <article className="stationery">
          {story.later.letter.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="signature script">{story.later.signature}</p>
        </article>
      )}
    </section>
  );
}
