import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { story } from "../content/story";

const KEY = "two-years-progress-v1";

export type Progress = {
  started: boolean;
  memories: string[];
  correct: string[];
  quizComplete: boolean;
  puzzleComplete: boolean;
  hunt: string[];
  notes: string[];
  gameWon: boolean;
  jar: string[];
};

const initial: Progress = {
  started: false,
  memories: [],
  correct: [],
  quizComplete: false,
  puzzleComplete: false,
  hunt: [],
  notes: [],
  gameWon: false,
  jar: [],
};

function add(list: string[], id: string) {
  return list.includes(id) ? list : [...list, id];
}

function load(): Progress {
  if (typeof window === "undefined") return initial;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      ...initial,
      ...parsed,
      memories: Array.isArray(parsed.memories) ? parsed.memories : [],
      correct: Array.isArray(parsed.correct) ? parsed.correct : [],
      hunt: Array.isArray(parsed.hunt) ? parsed.hunt : [],
      notes: Array.isArray(parsed.notes) ? parsed.notes : [],
      jar: Array.isArray(parsed.jar) ? parsed.jar : [],
    };
  } catch {
    return initial;
  }
}

export function goals(progress: Progress) {
  const memoryNeed = Math.min(4, story.memories.length);
  const noteNeed = Math.min(4, story.loveNotes.notes.length);
  const memories = progress.memories.length >= memoryNeed;
  const quiz = progress.quizComplete;
  const puzzle = progress.puzzleComplete;
  const hunt = progress.hunt.length >= story.hunt.items.length;
  const notes = progress.notes.length >= noteNeed;
  return {
    memories,
    quiz,
    puzzle,
    hunt,
    notes,
    ready: memories && quiz && puzzle && hunt && notes,
    memoryNeed,
    noteNeed,
  };
}

type ProgressApi = {
  progress: Progress;
  markStarted: () => void;
  seeMemory: (id: string) => void;
  markCorrect: (id: string) => void;
  completeQuiz: () => void;
  completePuzzle: () => void;
  findHunt: (id: string) => void;
  flipNote: (id: string) => void;
  winGame: () => void;
  pullJar: (id: string) => void;
  resetJar: () => void;
  reset: () => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(load);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(progress));
  }, [progress]);

  const markStarted = useCallback(() => {
    setProgress((p) => ({ ...p, started: true }));
  }, []);

  const seeMemory = useCallback((id: string) => {
    setProgress((p) => ({ ...p, memories: add(p.memories, id) }));
  }, []);

  const markCorrect = useCallback((id: string) => {
    setProgress((p) => ({ ...p, correct: add(p.correct, id) }));
  }, []);

  const completeQuiz = useCallback(() => {
    setProgress((p) => ({ ...p, quizComplete: true }));
  }, []);

  const completePuzzle = useCallback(() => {
    setProgress((p) => ({ ...p, puzzleComplete: true }));
  }, []);

  const findHunt = useCallback((id: string) => {
    setProgress((p) => ({ ...p, hunt: add(p.hunt, id) }));
  }, []);

  const flipNote = useCallback((id: string) => {
    setProgress((p) => ({ ...p, notes: add(p.notes, id) }));
  }, []);

  const winGame = useCallback(() => {
    setProgress((p) => ({ ...p, gameWon: true }));
  }, []);

  const pullJar = useCallback((id: string) => {
    setProgress((p) => ({ ...p, jar: add(p.jar, id) }));
  }, []);

  const resetJar = useCallback(() => {
    setProgress((p) => ({ ...p, jar: [] }));
  }, []);

  const reset = useCallback(() => {
    setProgress(initial);
  }, []);

  const api = useMemo(
    () => ({
      progress,
      markStarted,
      seeMemory,
      markCorrect,
      completeQuiz,
      completePuzzle,
      findHunt,
      flipNote,
      winGame,
      pullJar,
      resetJar,
      reset,
    }),
    [
      progress,
      markStarted,
      seeMemory,
      markCorrect,
      completeQuiz,
      completePuzzle,
      findHunt,
      flipNote,
      winGame,
      pullJar,
      resetJar,
      reset,
    ],
  );

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}
