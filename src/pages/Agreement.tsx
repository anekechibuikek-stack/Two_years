import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { story } from "../content/story";
import { cx } from "../lib/cx";
import { useTitle } from "../lib/use-title";

const OUT = { duration: 0.75, ease: [0.4, 0, 1, 1] as const };

export function Agreement({ onAccept }: { onAccept: () => void }) {
  const [choice, setChoice] = useState<"accept" | "decline" | "">("");
  const [message, setMessage] = useState("");
  const [framesOn, setFramesOn] = useState(false);
  const choiceRef = useRef(choice);
  const reduce = useReducedMotion();
  const declined = choice === "decline";
  choiceRef.current = choice;

  useEffect(() => {
    if (declined) setFramesOn(true);
  }, [declined]);

  useTitle(story.agreement.title);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (choice === "accept") {
      onAccept();
      return;
    }
    setMessage(choice === "decline" ? story.agreement.declined : story.agreement.choose);
  }

  return (
    <div className={cx("sheet", (declined || framesOn) && "sheet-declined")}>
      <AnimatePresence
        onExitComplete={() => {
          if (choiceRef.current !== "decline") setFramesOn(false);
        }}
      >
        {declined && (
          <motion.div
            key="angry-left"
            className="angry-side angry-left"
            initial={reduce ? false : { opacity: 0, x: -180, y: "-50%", rotate: -18 }}
            animate={{ opacity: 1, x: 0, y: "-50%", rotate: -7 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -180, y: "-50%", rotate: -18, transition: OUT }}
            transition={{ duration: reduce ? 0 : 0.85, ease: "easeOut" }}
          >
            <div className="angry-frame">
              <div className="angry-photo">
                <img src={story.agreement.declinePhotos.left} alt="" />
              </div>
            </div>
          </motion.div>
        )}
        {declined && (
          <motion.div
            key="angry-right"
            className="angry-side angry-right"
            initial={reduce ? false : { opacity: 0, x: 180, y: "-50%", rotate: 18 }}
            animate={{ opacity: 1, x: 0, y: "-50%", rotate: 6 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: 180, y: "-50%", rotate: 18, transition: OUT }}
            transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.12, ease: "easeOut" }}
          >
            <div className="angry-frame">
              <div className="angry-photo">
                <img src={story.agreement.declinePhotos.right} alt="" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grain" aria-hidden="true" />
      <main className="page contract-page">
        <article className="contract">
          <h1 className="contract-title">{story.agreement.title}</h1>
          <div className="contract-body">
            {story.agreement.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {story.agreement.articles.map((article) => (
              <section key={article.title}>
                <h2>{article.title}</h2>
                {article.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <form className="contract-form" onSubmit={submit}>
            <fieldset className="contract-choice">
              <legend>{story.agreement.question}</legend>
              <label className="contract-option">
                <input
                  type="radio"
                  name="terms"
                  value="accept"
                  checked={choice === "accept"}
                  onChange={() => {
                    setChoice("accept");
                    setMessage("");
                  }}
                />
                {story.agreement.accept}
              </label>
              <label className="contract-option">
                <input
                  type="radio"
                  name="terms"
                  value="decline"
                  checked={choice === "decline"}
                  onChange={() => {
                    setChoice("decline");
                    setMessage("");
                  }}
                />
                {story.agreement.decline}
              </label>
            </fieldset>
            <button className="btn btn-confirm" type="submit" disabled={declined}>
              {story.agreement.confirm}
            </button>
            {declined && (
              <p className="contract-note" role="alert">
                {story.agreement.declined}
              </p>
            )}
            {message && !declined && (
              <p className="contract-note" role="alert">
                {message}
              </p>
            )}
          </form>
        </article>
      </main>
    </div>
  );
}
