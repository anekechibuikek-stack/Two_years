import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { story } from "../content/story";
import { Photo } from "../components/Photo";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

export function Timeline() {
  const { progress, seeMemory } = useProgress();
  useTitle("Our story so far");

  return (
    <section>
      <p className="kicker">Chapter 2</p>
      <h1 className="display">Our story so far</h1>
      <p className="lede">Tap a polaroid. Each one opens a page in the notebook.</p>
      <div className="polaroids">
        {story.memories.map((memory, index) => {
          const seen = progress.memories.includes(memory.id);
          return (
            <Link
              key={memory.id}
              to={`/story/${memory.id}`}
              className={cx("polaroid", seen && "is-seen")}
              style={{ "--tilt": `${index % 2 === 0 ? -1.6 : 1.5}deg` } as CSSProperties}
              onClick={() => seeMemory(memory.id)}
            >
              <span className="tape" aria-hidden="true" />
              <span className="polaroid-photo">
                <span className="polaroid-fill">
                  {memory.photo ? (
                    <Photo src={memory.photo} alt={memory.alt} doodle={memory.doodle} />
                  ) : null}
                </span>
              </span>
              <span className="polaroid-caption">
                <span className="tap-hint">{memory.date}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
