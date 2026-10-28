import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { story } from "../content/story";
import { Heart } from "../components/Art";
import { chime } from "../lib/chime";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

type Item = {
  id: number;
  x: number;
  y: number;
  vy: number;
  kind: "heart" | "alarm";
};

type Hud = {
  hearts: number;
  strikes: number;
  player: number;
  items: Item[];
  won: boolean;
  over: boolean;
};

export function HeartGame() {
  const { winGame } = useProgress();
  const dir = useRef(0);
  const player = useRef(50);
  const items = useRef<Item[]>([]);
  const hearts = useRef(0);
  const strikes = useRef(0);
  const wonRef = useRef(false);
  const overRef = useRef(false);
  const [hud, setHud] = useState<Hud>({
    hearts: 0,
    strikes: 0,
    player: 50,
    items: [],
    won: false,
    over: false,
  });
  useTitle(story.game.title);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    let spawn = 0;
    let acc = 0;
    let nextId = 1;

    const tick = (now: number) => {
      const dt = Math.min(0.034, (now - last) / 1000);
      last = now;
      if (!wonRef.current && !overRef.current) {
        player.current = clamp(player.current + dir.current * 46 * dt, 8, 92);
        spawn += dt;
        if (spawn > 0.72) {
          spawn = 0;
          const kind = Math.random() < 0.74 ? "heart" : "alarm";
          items.current.push({
            id: nextId,
            x: 8 + Math.random() * 84,
            y: -8,
            vy: 22 + Math.random() * 12 + hearts.current,
            kind,
          });
          nextId += 1;
        }
        const next: Item[] = [];
        for (const item of items.current) {
          const y = item.y + item.vy * dt;
          const caught = y > 78 && y < 96 && Math.abs(item.x - player.current) < 9;
          if (caught) {
            if (item.kind === "heart") hearts.current += 1;
            else strikes.current += 1;
            continue;
          }
          if (y < 108) next.push({ ...item, y });
        }
        items.current = next;
        if (hearts.current >= story.game.heartsToWin) {
          wonRef.current = true;
          winGame();
          chime("done");
        } else if (strikes.current >= 3) {
          overRef.current = true;
        }
      }
      acc += dt;
      if (acc > 0.03) {
        acc = 0;
        setHud({
          hearts: hearts.current,
          strikes: strikes.current,
          player: player.current,
          items: items.current,
          won: wonRef.current,
          over: overRef.current,
        });
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "a") dir.current = -1;
      if (event.key === "ArrowRight" || event.key === "d") dir.current = 1;
    };
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "a" || event.key === "d") {
        dir.current = 0;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [winGame]);

  function retry() {
    hearts.current = 0;
    strikes.current = 0;
    items.current = [];
    wonRef.current = false;
    overRef.current = false;
    player.current = 50;
  }

  function hold(value: number) {
    return {
      onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        dir.current = value;
      },
      onPointerUp: () => {
        dir.current = 0;
      },
      onPointerCancel: () => {
        dir.current = 0;
      },
    };
  }

  return (
    <section className="game">
      <p className="kicker light">{story.game.kicker}</p>
      <h1 className="display">{story.game.title}</h1>
      <p className="lede light">{story.game.intro}</p>
      <div className="hud-row">
        <span>
          <Heart className="inline-heart" /> {hud.hearts}/{story.game.heartsToWin}
        </span>
        <span>Alarms {hud.strikes}/3</span>
      </div>
      <div className="field" aria-label="Heart catching game">
        {hud.items.map((item) => (
          <span
            key={item.id}
            className={cx("floater", item.kind === "alarm" && "is-alarm")}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            {item.kind === "heart" ? <Heart /> : <Alarm />}
          </span>
        ))}
        <span className="player" style={{ left: `${hud.player}%` }} aria-hidden="true">
          <Heart />
        </span>
        {hud.won && (
          <div className="game-card">
            <h2>{story.game.prizeTitle}</h2>
            <p>{story.game.prize}</p>
            <button type="button" className="btn" onClick={retry}>
              {story.game.again}
            </button>
          </div>
        )}
        {hud.over && !hud.won && (
          <div className="game-card">
            <p>{story.game.alarms}</p>
            <button type="button" className="btn" onClick={retry}>
              {story.game.again}
            </button>
          </div>
        )}
      </div>
      <div className="pads">
        <button type="button" className="pad" aria-label={story.game.left} {...hold(-1)}>
          ←
        </button>
        <button type="button" className="pad" aria-label={story.game.right} {...hold(1)}>
          →
        </button>
      </div>
    </section>
  );
}

function Alarm() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="18" r="8" />
      <path d="M16 14v5l3 2M8 8l4 3M24 8l-4 3" />
    </svg>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
