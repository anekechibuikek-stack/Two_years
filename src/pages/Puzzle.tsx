import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { story } from "../content/story";
import { Confetti } from "../components/Art";
import { chime } from "../lib/chime";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { shuffle } from "../lib/shuffle";
import { useTitle } from "../lib/use-title";

const COUNT = 9;

type Board = {
  slots: Array<number | null>;
  tray: number[];
};

function freshBoard(): Board {
  return {
    slots: Array.from({ length: COUNT }, () => null),
    tray: shuffle(Array.from({ length: COUNT }, (_, index) => index)),
  };
}

function place(board: Board, pieceId: number, slotIndex: number): Board {
  const slots = [...board.slots];
  let tray = board.tray.filter((id) => id !== pieceId);
  const from = slots.indexOf(pieceId);
  const occupant = slots[slotIndex];
  if (from >= 0) slots[from] = null;
  slots[slotIndex] = pieceId;
  if (occupant !== null && occupant !== pieceId) {
    if (from >= 0) slots[from] = occupant;
    else tray = [...tray, occupant];
  }
  return { slots, tray };
}

function toTray(board: Board, pieceId: number): Board {
  return {
    slots: board.slots.map((slot) => (slot === pieceId ? null : slot)),
    tray: board.tray.includes(pieceId) ? board.tray : [...board.tray, pieceId],
  };
}

function sliceStyle(id: number, image: string): CSSProperties {
  const col = id % 3;
  const row = Math.floor(id / 3);
  return {
    backgroundImage: `url("${image}")`,
    backgroundSize: "300% 300%",
    backgroundPosition: `${col * 50}% ${row * 50}%`,
  };
}

export function Puzzle() {
  const { progress, completePuzzle } = useProgress();
  const [board, setBoard] = useState<Board>(freshBoard);
  const [solved, setSolved] = useState(progress.puzzleComplete);
  const [selected, setSelected] = useState<number | null>(null);
  const [peek, setPeek] = useState(false);
  const [dragging, setDragging] = useState<number | null>(null);
  const [ghost, setGhost] = useState<{ id: number; x: number; y: number; size: number } | null>(null);
  const drag = useRef<{ id: number; moved: boolean } | null>(null);
  const skipSlotClick = useRef(false);
  const celebrated = useRef(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const image = story.puzzle.image || "/illustrations/together.svg";

  useTitle(story.puzzle.title);

  useEffect(() => {
    const done = board.slots.every((slot, index) => slot === index);
    if (!done || celebrated.current || solved) return;
    celebrated.current = true;
    completePuzzle();
    setSolved(true);
    setNoteOpen(true);
    setSelected(null);
    chime("done");
  }, [board, completePuzzle, solved]);

  function onPointerDown(event: ReactPointerEvent<HTMLButtonElement>, id: number) {
    if (solved) return;
    const rect = event.currentTarget.getBoundingClientRect();
    drag.current = { id, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
    setGhost({ id, x: event.clientX, y: event.clientY, size: rect.width });
  }

  function onPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!drag.current) return;
    if (!drag.current.moved) {
      drag.current.moved = true;
      setDragging(drag.current.id);
    }
    setGhost((current) => (current ? { ...current, x: event.clientX, y: event.clientY } : current));
  }

  function finishDrag(event: ReactPointerEvent<HTMLButtonElement>, id: number) {
    const moved = drag.current?.moved ?? false;
    drag.current = null;
    setGhost(null);
    setDragging(null);
    if (event.currentTarget.closest("[data-slot]")) skipSlotClick.current = true;
    if (!moved) {
      setSelected((current) => (current === id ? null : id));
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const slot = target?.closest<HTMLElement>("[data-slot]");
    const tray = target?.closest<HTMLElement>("[data-tray]");
    if (slot?.dataset.slot) {
      setBoard((current) => place(current, id, Number(slot.dataset.slot)));
      setSelected(null);
      return;
    }
    if (tray) setBoard((current) => toTray(current, id));
  }

  function onSlotClick(slotIndex: number) {
    if (skipSlotClick.current) {
      skipSlotClick.current = false;
      return;
    }
    if (selected === null) {
      const sitting = board.slots[slotIndex];
      if (sitting !== null && sitting !== undefined) setSelected(sitting);
      return;
    }
    setBoard((current) => place(current, selected, slotIndex));
    setSelected(null);
  }

  return (
    <section className="puzzle">
      <Confetti show={solved} />
      <p className="kicker">{story.puzzle.kicker}</p>
      <h1 className="display">{story.puzzle.title}</h1>
      <p className="lede">{solved ? story.puzzle.message : story.puzzle.intro}</p>
      <div className={cx("puzzle-stage", solved && "is-solved")}>
      <div className={cx("board-wrap", solved && "is-solved")}>
        {solved ? (
          <img className="solved-photo" src={image} alt={story.puzzle.alt} />
        ) : (
          <div className="board" aria-label="Puzzle board">
            {board.slots.map((pieceId, index) => (
              <div
                key={index}
                className={cx("slot", pieceId === null && "is-empty")}
                data-slot={index}
                role="button"
                tabIndex={0}
                aria-label={pieceId === null ? `Empty space ${index + 1}` : `Filled space ${index + 1}`}
                onClick={() => onSlotClick(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSlotClick(index);
                  }
                }}
              >
                {pieceId !== null && (
                  <Piece
                    id={pieceId}
                    image={image}
                    selected={selected === pieceId}
                    hidden={dragging === pieceId}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={finishDrag}
                  />
                )}
              </div>
            ))}
            {peek && <img className="peek" src={image} alt="" />}
          </div>
        )}
      </div>
      {!solved && (
        <div className="puzzle-side">
          <div className="tray" data-tray>
            {board.tray.map((id) => (
              <Piece
                key={id}
                id={id}
                image={image}
                selected={selected === id}
                hidden={dragging === id}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={finishDrag}
              />
            ))}
          </div>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              setPeek(true);
              window.setTimeout(() => setPeek(false), 900);
            }}
          >
            {story.puzzle.peek}
          </button>
        </div>
      )}
      </div>
      {solved && (
        <button
          type="button"
          className="btn secondary"
          onClick={() => {
            celebrated.current = false;
            setNoteOpen(false);
            setSolved(false);
            setBoard(freshBoard());
          }}
        >
          {story.puzzle.again}
        </button>
      )}
      {ghost && (
        <span
          className="ghost-piece"
          style={{
            width: ghost.size,
            height: ghost.size,
            left: ghost.x,
            top: ghost.y,
            ...sliceStyle(ghost.id, image),
          }}
        />
      )}
      {noteOpen && (
        <div className="puzzle-note" role="dialog" aria-modal="true" aria-labelledby="puzzle-note-title">
          <button
            type="button"
            className="puzzle-note-backdrop"
            aria-label={story.puzzle.note.close}
            onClick={() => setNoteOpen(false)}
          />
          <div className="puzzle-note-card">
            <h2 id="puzzle-note-title">{story.puzzle.note.title}</h2>
            {story.puzzle.note.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <button type="button" className="btn" onClick={() => setNoteOpen(false)}>
              {story.puzzle.note.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Piece({
  id,
  image,
  selected,
  hidden,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: {
  id: number;
  image: string;
  selected: boolean;
  hidden: boolean;
  onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>, id: number) => void;
  onPointerMove: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLButtonElement>, id: number) => void;
}) {
  return (
    <button
      type="button"
      className={cx("piece", selected && "is-selected", hidden && "is-hidden")}
      aria-label={`Puzzle piece ${id + 1}`}
      style={sliceStyle(id, image)}
      onPointerDown={(event) => onPointerDown(event, id)}
      onPointerMove={onPointerMove}
      onPointerUp={(event) => onPointerUp(event, id)}
      onPointerCancel={(event) => onPointerUp(event, id)}
    />
  );
}
