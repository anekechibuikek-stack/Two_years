import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { story } from "../content/story";
import { useTitle } from "../lib/use-title";

export function Agreement({ onAccept }: { onAccept: () => void }) {
  const [choice, setChoice] = useState<"accept" | "decline" | "">("");
  const [message, setMessage] = useState("");
  const reduce = useReducedMotion();
  const declined = choice === "decline";

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
    <div className="sheet">
      {declined && (
        <>
          <div className="angry-side angry-left">
            <motion.div
              className="angry-frame"
              initial={reduce ? false : { opacity: 0, x: -160, rotate: -18 }}
              animate={{ opacity: 1, x: 0, rotate: -7 }}
              transition={{ duration: reduce ? 0 : 0.85, ease: "easeOut" }}
            >
              <div className="angry-photo">
                <img src={story.agreement.declinePhotos.left} alt="" />
              </div>
            </motion.div>
          </div>
          <div className="angry-side angry-right">
            <motion.div
              className="angry-frame"
              initial={reduce ? false : { opacity: 0, x: 160, rotate: 18 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : 0.12, ease: "easeOut" }}
            >
              <div className="angry-photo">
                <img src={story.agreement.declinePhotos.right} alt="" />
              </div>
            </motion.div>
          </div>
        </>
      )}
      <div className="grain" aria-hidden="true" />
      <main className="page contract-page">
        <article className="contract">
          <h1 className="contract-title">{story.agreement.title}</h1>
          <div className="contract-body">
            {story.agreement.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
