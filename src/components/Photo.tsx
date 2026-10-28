import { useEffect, useState } from "react";
import type { DoodleName } from "../content/story";
import { Doodle } from "./Art";

export function Photo({
  src,
  alt,
  doodle,
}: {
  src?: string;
  alt: string;
  doodle: DoodleName;
}) {
  const [ok, setOk] = useState(Boolean(src));

  useEffect(() => {
    setOk(Boolean(src));
  }, [src]);

  if (!src || !ok) return <Doodle name={doodle} />;
  return <img src={src} alt={alt} onError={() => setOk(false)} />;
}
