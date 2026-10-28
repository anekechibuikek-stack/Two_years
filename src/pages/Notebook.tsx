import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { story } from "../content/story";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

const LEFT_TILT = [-7, 4];
const RIGHT_TILT = [6, -4];

export function Notebook() {
  const { memoryId } = useParams();
  const { seeMemory } = useProgress();
  const reduce = useReducedMotion();
  const memory = story.memories.find((item) => item.id === memoryId);
  const photos = memory?.photos ?? [];
  const leftPhotos = photos.slice(0, Math.ceil(photos.length / 2));
  const rightPhotos = photos.slice(Math.ceil(photos.length / 2));

  useTitle(memory?.title ?? "A page");

  useEffect(() => {
    if (memory) seeMemory(memory.id);
  }, [memory, seeMemory]);

  if (!memory) return <Navigate to="/story" replace />;

  return (
    <section className="notebook-wrap">
      {leftPhotos.length > 0 && (
        <div className="notebook-side notebook-side-left">
          {leftPhotos.map((src, index) => (
            <motion.div
              key={`${memory.id}-left-${index}`}
              className="notebook-frame"
              initial={reduce ? false : { opacity: 0, x: -140, rotate: -16 }}
              animate={{ opacity: 1, x: 0, rotate: LEFT_TILT[index % LEFT_TILT.length] }}
              transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : index * 0.12, ease: "easeOut" }}
            >
              <div className="notebook-shot">
                {src ? <img src={src} alt="" /> : null}
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {rightPhotos.length > 0 && (
        <div className="notebook-side notebook-side-right">
          {rightPhotos.map((src, index) => (
            <motion.div
              key={`${memory.id}-right-${index}`}
              className="notebook-frame"
              initial={reduce ? false : { opacity: 0, x: 140, rotate: 16 }}
              animate={{ opacity: 1, x: 0, rotate: RIGHT_TILT[index % RIGHT_TILT.length] }}
              transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.08 + index * 0.12, ease: "easeOut" }}
            >
              <div className="notebook-shot">
                {src ? <img src={src} alt="" /> : null}
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <Link className="notebook-back" to="/story">
        Back to the polaroids
      </Link>
      <article className="notebook">
        <span className="notebook-holes" aria-hidden="true" />
        <p className="notebook-date">{memory.date}</p>
        <h1>{memory.title}</h1>
        <div className="notebook-body">
          {memory.entry.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
