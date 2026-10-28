let ctx: AudioContext | null = null;

function context() {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

function tone(frequency: number, at: number, duration: number, gain: number) {
  const audio = context();
  const osc = audio.createOscillator();
  const amp = audio.createGain();
  osc.type = "sine";
  osc.frequency.value = frequency;
  amp.gain.setValueAtTime(gain, at);
  amp.gain.exponentialRampToValueAtTime(0.0001, at + duration);
  osc.connect(amp);
  amp.connect(audio.destination);
  osc.start(at);
  osc.stop(at + duration + 0.02);
}

export function chime(kind: "open" | "yes" | "done" = "yes") {
  try {
    if (localStorage.getItem("two-years-mute") === "1") return;
    const audio = context();
    if (audio.state === "suspended") void audio.resume();
    const now = audio.currentTime;
    if (kind === "open") {
      tone(523.25, now, 0.22, 0.03);
      tone(659.25, now + 0.12, 0.28, 0.03);
      return;
    }
    if (kind === "done") {
      tone(523.25, now, 0.18, 0.03);
      tone(659.25, now + 0.12, 0.18, 0.03);
      tone(783.99, now + 0.24, 0.32, 0.035);
      return;
    }
    tone(740, now, 0.16, 0.028);
  } catch {
    // Sound is a courtesy. The story still works if the browser blocks it.
  }
}
