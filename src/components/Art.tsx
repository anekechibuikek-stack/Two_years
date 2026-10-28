import { useMemo } from "react";
import type { DoodleName } from "../content/story";

export function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 20.4C6.2 16.1 3.2 12.4 4.4 9.2 5.4 6.6 8.2 6 10.2 7.7 11 8.4 11.5 9.2 12 10c.5-.8 1-1.6 1.8-2.3 2-1.7 4.8-1.1 5.8 1.5 1.2 3.2-1.8 6.9-7.6 11.2z"
      />
    </svg>
  );
}

export function Doodle({ name }: { name: DoodleName }) {
  return (
    <div className="doodle" aria-hidden="true">
      <svg viewBox="0 0 120 100">
        {name === "spark" && (
          <>
            <path d="M60 18l4 14 14 4-14 4-4 14-4-14-14-4 14-4z" />
            <path d="M28 62l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
            <path d="M88 58c8 6 10 16 4 22" />
          </>
        )}
        {name === "mug" && (
          <>
            <path d="M34 38h40v28a16 16 0 0 1-16 16H48A14 14 0 0 1 34 68V38z" />
            <path d="M74 46h8a10 10 0 0 1 0 20H74" />
            <path d="M42 30c2-6 4-6 6 0M54 28c2-6 4-6 6 0" />
          </>
        )}
        {name === "ticket" && (
          <>
            <path d="M22 34h76v10a6 6 0 0 0 0 12v10H22V56a6 6 0 0 0 0-12V34z" />
            <path d="M42 34v32M58 46h24M58 56h16" />
          </>
        )}
        {name === "camera" && (
          <>
            <path d="M28 40h16l6-8h20l6 8h16v36H28V40z" />
            <circle cx="60" cy="58" r="10" />
            <path d="M78 46h8" />
          </>
        )}
        {name === "cake" && (
          <>
            <path d="M30 70h60v12H30zM34 58h52v12H34zM40 46h40v12H40z" />
            <path d="M60 28v14M54 34h12" />
          </>
        )}
        {name === "window" && (
          <>
            <path d="M30 24h60v54H30zM60 24v54M30 50h60" />
            <path d="M26 78h68" />
            <path d="M46 36c6 4 8 4 14 0" />
          </>
        )}
        {name === "waves" && (
          <>
            <circle cx="78" cy="28" r="10" />
            <path d="M16 58c10 8 16 8 26 0s16-8 26 0 16 8 26 0 14-8 22 0" />
            <path d="M16 72c10 8 16 8 26 0s16-8 26 0 16 8 26 0 14-8 22 0" />
          </>
        )}
        {name === "moon" && (
          <>
            <path d="M70 22a24 24 0 1 0 0 48 20 20 0 1 1 0-48z" />
            <path d="M28 70h64" />
            <path d="M36 78l6-8 8 10 8-14 10 18" />
          </>
        )}
        {name === "plant" && (
          <>
            <path d="M48 84h24M52 84V62M68 84V62" />
            <path d="M60 70c-16-4-22-20-12-28 8 8 12 16 12 28zM60 66c14-8 26-6 28 6-12 0-20 2-28 10z" />
            <path d="M46 84h28v8H46z" />
          </>
        )}
        {name === "book" && (
          <>
            <path d="M22 28h34v50H28a8 8 0 0 0-6 6V28zM98 28H64v50h28a8 8 0 0 1 6 6V28z" />
            <path d="M32 40h16M70 40h16M32 50h12" />
          </>
        )}
        {name === "key" && (
          <>
            <circle cx="42" cy="42" r="14" />
            <path d="M54 48l32 18-8 8M70 58l8 6" />
          </>
        )}
        {name === "heart" && (
          <path
            d="M60 78C40 64 26 52 30 38c4-12 18-14 26-4 8-10 22-8 26 4 4 14-8 26-22 40z"
            fill="currentColor"
            stroke="none"
          />
        )}
      </svg>
    </div>
  );
}

export function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        id: i,
        left: 8 + ((i * 13) % 84),
        delay: i * 1.4,
        duration: 16 + (i % 4) * 3,
        size: 8 + (i % 3) * 3,
      })),
    [],
  );

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: petal.size,
            height: petal.size * 0.72,
          }}
        />
      ))}
    </div>
  );
}

export function Confetti({ show }: { show: boolean }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.35,
        duration: 2.6 + Math.random() * 1.5,
        color: ["#9d3148", "#e7a3b0", "#a67c45", "#f3d5c4", "#f7f1e8", "#6d2438"][i % 6],
        rotate: Math.random() * 80 - 40,
        size: 7 + (i % 5),
      })),
    [],
  );

  if (!show) return null;

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          style={{
            left: `${piece.left}%`,
            background: piece.color,
            width: piece.size,
            height: piece.size * 0.55,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
