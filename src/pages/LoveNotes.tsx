import { useState } from "react";
import { story } from "../content/story";
import { Photo } from "../components/Photo";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

export function LoveNotes() {
  const { flipNote } = useProgress();
  const [open, setOpen] = useState<string[]>([]);
  useTitle(story.loveNotes.title);

  return (
    <section>
      <p className="kicker">{story.loveNotes.kicker}</p>
      <h1 className="display">{story.loveNotes.title}</h1>
      <p className="lede">{story.loveNotes.intro}</p>
      <div className="notes">
        {story.loveNotes.notes.map((note, index) => {
          const flipped = open.includes(note.id);
          return (
            <button
              key={note.id}
              type="button"
              className={cx("note", flipped && "is-flipped")}
              style={{ transform: `rotate(${index % 2 === 0 ? -1.2 : 1.1}deg)` }}
              onClick={() => {
                flipNote(note.id);
                setOpen((current) =>
                  current.includes(note.id) ? current.filter((id) => id !== note.id) : [...current, note.id],
                );
              }}
              aria-expanded={flipped}
            >
              <span className="note-inner">
                <span className="note-face note-front">
                  <span className="script note-script">{note.label}</span>
                </span>
                <span className="note-face note-back">
                  {"photo" in note && (
                    <span className="note-photo">
                      <Photo src={note.photo} alt={note.alt ?? note.label} doodle={note.doodle ?? "heart"} />
                    </span>
                  )}
                  {"video" in note && note.video ? (
                    <video className="note-video" src={note.video} controls playsInline />
                  ) : (
                    <span>{note.message}</span>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
