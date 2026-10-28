import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { story } from "../content/story";
import { daysTogether } from "../lib/dates";
import { useTitle } from "../lib/use-title";

export function Wrapped() {
  const slides = story.wrapped.slides;
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  useTitle("Two years, wrapped");

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setIndex((value) => Math.min(slides.length - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  if (!slide) return null;

  return (
    <section className="wrapped">
      <p className="kicker light">{story.wrapped.kicker}</p>
      <div className="wrap-slide" key={index}>
        {slide.kind === "intro" && (
          <>
            <h1 className="display giant">{slide.title}</h1>
            <p className="wrap-note">{slide.subtitle}</p>
          </>
        )}
        {slide.kind === "days" && (
          <>
            <CountUp value={daysTogether(story.togetherSince)} />
            <p className="wrap-label">{slide.label}</p>
            <p className="wrap-note">{slide.note}</p>
          </>
        )}
        {slide.kind === "stat" && (
          <>
            <CountUp value={Number(slide.value) || 0} text={slide.value} />
            <p className="wrap-label">{slide.label}</p>
            <p className="wrap-note">{slide.note}</p>
          </>
        )}
        {slide.kind === "text" && (
          <>
            <p className="kicker light">{slide.kicker}</p>
            <h2 className="display wrap-value">{slide.value}</h2>
            <p className="wrap-note">{slide.note}</p>
          </>
        )}
        {slide.kind === "award" && (
          <>
            <p className="kicker light">An award, unofficially</p>
            <div className="ribbon">
              <h2 className="display wrap-value">{slide.value}</h2>
            </div>
            <p className="wrap-note">{slide.note}</p>
          </>
        )}
      </div>
      <div className="wrap-nav">
        <button type="button" className="btn secondary light" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>
          Back
        </button>
        <div className="dots" aria-hidden="true">
          {slides.map((item, dot) => (
            <span key={item.kind + dot} className={dot === index ? "is-on" : ""} />
          ))}
        </div>
        {index < slides.length - 1 ? (
          <button type="button" className="btn" onClick={() => setIndex((value) => value + 1)}>
            Next
          </button>
        ) : (
          <Link to="/map" className="btn">
            Back to the map
          </Link>
        )}
      </div>
    </section>
  );
}

function CountUp({ value, text }: { value: number; text?: string }) {
  const [shown, setShown] = useState(0);
  const numeric = text === undefined || text === String(value);

  useEffect(() => {
    if (!numeric) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      setShown(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric, value]);

  return <p className="wrap-stat">{numeric ? shown.toLocaleString() : text}</p>;
}
