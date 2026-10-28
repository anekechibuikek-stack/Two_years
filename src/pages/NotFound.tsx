import { Link } from "react-router-dom";
import { useTitle } from "../lib/use-title";

export function NotFound() {
  useTitle("For you");
  return (
    <section>
      <h1 className="display">This page wandered off.</h1>
      <p className="lede">The rest of the story is still here.</p>
      <Link to="/map" className="btn">
        Back to the map
      </Link>
    </section>
  );
}
