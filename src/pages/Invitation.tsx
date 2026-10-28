import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { story } from "../content/story";
import { Heart } from "../components/Art";
import { chime } from "../lib/chime";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

export function Invitation() {
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const { progress, markStarted } = useProgress();
  const [phase, setPhase] = useState<"sealed" | "opening" | "open">(
    progress.started ? "open" : "sealed",
  );

  useTitle("For you");

  function open() {
    if (phase !== "sealed") return;
    setPhase(reduce ? "open" : "opening");
    chime("open");
    if (!reduce) {
      window.setTimeout(() => setPhase("open"), 900);
    }
  }

  return (
    <section className="inv">
      <p className="kicker">{story.invitation.kicker}</p>
      <h1 className="inv-message">{story.invitation.message}</h1>
      <button
        type="button"
        className={cx("env", phase !== "sealed" && "is-open")}
        onClick={open}
        disabled={phase !== "sealed"}
        aria-label={story.invitation.openLabel}
      >
        <span className="env-body">
          <span className="letter">
            <Heart className="letter-heart" />
            <span>{story.invitation.letter}</span>
          </span>
          <span className="pocket" />
          <span className="flap">
            <span className="seal">
              <Heart />
            </span>
          </span>
        </span>
      </button>
      <p className="inv-hint">{phase === "sealed" ? "Tap the seal." : ""}</p>
      <AnimatePresence>
        {phase !== "sealed" && (
          <motion.span
            className="fly-heart"
            initial={reduce ? false : { x: "-10vw", y: 30, opacity: 0, scale: 0.7 }}
            animate={{ x: "62vw", y: -90, opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: reduce ? 0 : 2.1, ease: "easeInOut" }}
          >
            <Heart />
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {phase === "open" && (
          <motion.button
            type="button"
            className="btn inv-start"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.15 }}
            onClick={() => {
              markStarted();
              navigate("/map");
            }}
          >
            {story.invitation.start}
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
