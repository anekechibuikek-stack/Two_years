import { Navigate } from "react-router-dom";
import { story } from "../content/story";
import { useProgress } from "../lib/progress";
import { useTitle } from "../lib/use-title";

export function Secret() {
  const { progress } = useProgress();
  useTitle("A secret page");

  if (progress.hunt.length < story.hunt.items.length) {
    return <Navigate to="/hunt" replace />;
  }

  return (
    <section className="secret">
      <p className="kicker">{story.secret.kicker}</p>
      <h1 className="display">{story.secret.title}</h1>
      {story.secret.paragraphs.map((paragraph) => (
        <p key={paragraph} className="letter-copy">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
