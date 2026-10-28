import { useEffect, useRef, useState } from "react";
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { story } from "../content/story";
import { cx } from "../lib/cx";
import { goals, useProgress } from "../lib/progress";
import { Heart, Petals } from "./Art";

const TITLES: Record<string, string> = {
  "/map": "The map",
  "/story": "Our story",
  "/quiz": "The quiz",
  "/puzzle": "The puzzle",
  "/hunt": "Treasure hunt",
  "/notes": "Love notes",
  "/secret": "A secret",
  "/finale": "The ending",
  "/wrapped": "Wrapped",
  "/jar": "The jar",
  "/game": "A tiny game",
  "/later": "For later",
};

export function Frame() {
  const location = useLocation();
  const reduce = useReducedMotion();
  const { progress } = useProgress();
  const home = location.pathname === "/";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(() => localStorage.getItem("two-years-mute") === "1");
  const [playing, setPlaying] = useState(false);
  const [songBroken, setSongBroken] = useState(false);

  useEffect(() => {
    localStorage.setItem("two-years-mute", muted ? "1" : "0");
    if (muted && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [muted]);

  if (!home && !progress.started) return <Navigate to="/" replace />;

  const tone =
    location.pathname === "/wrapped" ? "tone-wine" : location.pathname === "/game" ? "tone-night" : "";
  const status = goals(progress);
  const hearts = [status.memories, status.quiz, status.puzzle, status.hunt, status.notes];

  return (
    <div className={cx("sheet", tone)}>
      <div className="grain" aria-hidden="true" />
      {!home && tone === "" && <Petals />}
      {!home && (
        <header className="topbar">
          <NavLink to="/map" className="wordmark">
            for you
          </NavLink>
          <p className="topbar-chapter">
            {story.memories.find((memory) => location.pathname === `/story/${memory.id}`)?.title ??
              TITLES[location.pathname] ??
              "Our story"}
          </p>
          <div className="topbar-actions">
            <div className="heart-meter" aria-label="Chapters opened">
              {hearts.map((filled, index) => (
                <Heart key={index} className={cx("meter-heart", filled && "is-on")} />
              ))}
            </div>
            {story.song && !songBroken && (
              <>
                <audio
                  ref={audioRef}
                  src={story.song}
                  loop
                  preload="none"
                  onError={() => setSongBroken(true)}
                  onEnded={() => setPlaying(false)}
                />
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => {
                    const audio = audioRef.current;
                    if (!audio || muted) return;
                    if (playing) {
                      audio.pause();
                      setPlaying(false);
                      return;
                    }
                    void audio.play().then(() => setPlaying(true));
                  }}
                >
                  {playing ? "Pause" : "Our song"}
                </button>
              </>
            )}
            <button
              type="button"
              className="icon-btn"
              aria-pressed={muted}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              onClick={() => setMuted((value) => !value)}
            >
              {muted ? "Sound" : "Mute"}
            </button>
          </div>
        </header>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className={cx("page", home && "page-home")}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
