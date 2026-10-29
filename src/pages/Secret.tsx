import { story } from "../content/story";
import { useTitle } from "../lib/use-title";

export function Secret() {
  useTitle("A secret page");

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
