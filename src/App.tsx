import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Frame } from "./components/Frame";
import { ProgressProvider } from "./lib/progress";
import { Agreement } from "./pages/Agreement";
import { Login } from "./pages/Login";
import { Finale } from "./pages/Finale";
import { HeartGame } from "./pages/HeartGame";
import { Invitation } from "./pages/Invitation";
import { Jar } from "./pages/Jar";
import { Later } from "./pages/Later";
import { LoveNotes } from "./pages/LoveNotes";
import { Notebook } from "./pages/Notebook";
import { NotFound } from "./pages/NotFound";
import { Puzzle } from "./pages/Puzzle";
import { Quiz } from "./pages/Quiz";
import { Secret } from "./pages/Secret";
import { StoryMap } from "./pages/StoryMap";
import { Timeline } from "./pages/Timeline";
import { Trips } from "./pages/Trips";
import { Wrapped } from "./pages/Wrapped";

export function App() {
  const [step, setStep] = useState<"login" | "agreement" | "story">("login");

  if (step === "login") {
    return <Login onUnlock={() => setStep("agreement")} />;
  }

  if (step === "agreement") {
    return <Agreement onAccept={() => setStep("story")} />;
  }

  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Frame />}>
            <Route path="/" element={<Invitation />} />
            <Route path="/map" element={<StoryMap />} />
            <Route path="/story" element={<Timeline />} />
            <Route path="/story/:memoryId" element={<Notebook />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/puzzle" element={<Puzzle />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/notes" element={<LoveNotes />} />
            <Route path="/secret" element={<Secret />} />
            <Route path="/finale" element={<Finale />} />
            <Route path="/wrapped" element={<Wrapped />} />
            <Route path="/jar" element={<Jar />} />
            <Route path="/game" element={<HeartGame />} />
            <Route path="/later" element={<Later />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
