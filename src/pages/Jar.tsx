import { useState } from "react";
import { story } from "../content/story";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

export function Jar() {
  const { progress, pullJar, resetJar } = useProgress();
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [refilled, setRefilled] = useState(false);
  const current = story.jar.notes.find((note) => note.id === currentId) ?? null;
  useTitle(story.jar.title);

  function pull() {
    const remaining = story.jar.notes.filter((note) => !progress.jar.includes(note.id));
    if (remaining.length === 0) {
      resetJar();
      setRefilled(true);
      const fresh = story.jar.notes[Math.floor(Math.random() * story.jar.notes.length)];
      if (!fresh) return;
      setCurrentId(fresh.id);
      pullJar(fresh.id);
      return;
    }
    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    if (!pick) return;
    setRefilled(false);
    setCurrentId(pick.id);
    pullJar(pick.id);
  }

  return (
    <section className="jar-page">
      <p className="kicker">{story.jar.kicker}</p>
      <h1 className="display">{story.jar.title}</h1>
      <p className="lede">{story.jar.intro}</p>
      <div className="jar-stage">
      <button type="button" className="jar" onClick={pull} aria-label="Pull a note from the jar">
        <span className="jar-lip" />
        <span className="jar-glass">
          <span className="folded one" />
          <span className="folded two" />
          <span className="folded three" />
        </span>
      </button>
      {current && (
        <article className="pulled">
          <p>{current.text}</p>
          <button type="button" className="btn secondary" onClick={() => setCurrentId(null)}>
            {story.jar.tuck}
          </button>
        </article>
      )}
      </div>
      {refilled && <p className="whisper">{story.jar.again}</p>}
    </section>
  );
}
