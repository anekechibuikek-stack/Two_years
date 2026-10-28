import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { story } from "../content/story";
import { Photo } from "../components/Photo";
import { useTitle } from "../lib/use-title";

const ENTRANCES = [
  { x: -150, y: 36, rotate: -18, delay: 0.05 },
  { x: 150, y: 28, rotate: 18, delay: 0.16 },
  { x: -20, y: 140, rotate: 12, delay: 0.28 },
];
const REST_ROTATE = [-7, 6, 4];

const WRONG = "you are not the one i love";

export function Login({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);
  const reduce = useReducedMotion();

  useTitle("For you");

  function submit(event: FormEvent) {
    event.preventDefault();
    const attempt = value.trim().toLowerCase().replace(/[\s-]+/g, "");
    const accepted = story.gate.answers.some(
      (answer) => answer.trim().toLowerCase().replace(/[\s-]+/g, "") === attempt,
    );
    if (attempt.length > 0 && accepted) {
      onUnlock();
      return;
    }
    setWrong(true);
  }

  return (
    <div className="sheet sheet-login">
      <div className="login-bgs" aria-hidden="true">
        {story.gate.backgrounds.map((spot, index) => (
          <motion.div
            key={spot.photo}
            className={`login-bg login-bg-${index + 1}`}
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    x: ENTRANCES[index].x,
                    y: ENTRANCES[index].y,
                    rotate: ENTRANCES[index].rotate,
                  }
            }
            animate={{ opacity: 1, x: 0, y: 0, rotate: REST_ROTATE[index] }}
            transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : ENTRANCES[index].delay, ease: "easeOut" }}
          >
            <div className="login-bg-photo">
              <Photo src={spot.photo} alt="" doodle={spot.doodle} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grain" aria-hidden="true" />
      <main className="page page-home">
        <section className="login">
          <motion.figure
            className="login-frame"
            initial={reduce ? false : { opacity: 0, y: 36, scale: 0.92, rotate: -6 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
            transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.2, ease: "easeOut" }}
          >
            <div className="login-photo">
              <Photo src={story.gate.photo} alt={story.gate.photoAlt} doodle="heart" />
            </div>
          </motion.figure>
          <p className="kicker">{story.gate.kicker}</p>
          <h1 className="login-title">{story.gate.prompt}</h1>
          <p className="login-phrase">{story.gate.phrase}</p>
          <form className="login-form" onSubmit={submit}>
            <input
              className="login-input"
              type="text"
              value={value}
              placeholder={story.gate.placeholder}
              autoComplete="off"
              autoFocus
              aria-label={story.gate.prompt}
              aria-invalid={wrong}
              onChange={(event) => {
                setValue(event.target.value);
                setWrong(false);
              }}
            />
            <button className="btn" type="submit">
              {story.gate.button}
            </button>
          </form>
          {wrong && (
            <p className="login-no" role="alert">
              {WRONG}
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
