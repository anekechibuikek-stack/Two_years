import { useEffect, useMemo, useState } from "react";
import { story } from "../content/story";
import { Photo } from "../components/Photo";
import { chime } from "../lib/chime";
import { cx } from "../lib/cx";
import { useProgress } from "../lib/progress";
import { shuffle } from "../lib/shuffle";
import { useTitle } from "../lib/use-title";

export function Quiz() {
  const { progress, markCorrect, completeQuiz } = useProgress();
  const questions = story.quiz.questions;
  const [index, setIndex] = useState(0);
  const [hint, setHint] = useState("");
  const [wrong, setWrong] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(progress.quizComplete && progress.correct.length >= questions.length);
  const question = questions[index];
  const order = useMemo(() => (question ? shuffle(question.options.map((_, i) => i)) : []), [question]);

  useTitle(story.quiz.title);

  useEffect(() => {
    setHint("");
    setWrong(null);
    setLocked(false);
  }, [index]);

  if (!question && !finished) return null;

  function choose(optionIndex: number) {
    if (!question || locked) return;
    if (optionIndex === question.answer) {
      markCorrect(question.id);
      setLocked(true);
      setHint("");
      chime("yes");
      window.setTimeout(() => {
        if (index + 1 >= questions.length) {
          completeQuiz();
          setFinished(true);
          chime("done");
        } else {
          setIndex((value) => value + 1);
        }
      }, 650);
      return;
    }
    setWrong(optionIndex);
    setHint(question.hint);
  }

  if (finished || !question) {
    return (
      <section className="quiz">
        <p className="kicker">{story.quiz.kicker}</p>
        <h1 className="display">{story.quiz.doneTitle}</h1>
        <p className="lede">{story.quiz.doneNote}</p>
        <div className="stickers">
          {questions.map((item) => {
            const earned = progress.correct.includes(item.id);
            return (
              <span key={item.id} className={cx("sticker", earned && "is-earned")}>
                {earned ? item.sticker : "·"}
              </span>
            );
          })}
        </div>
        <button
          type="button"
          className="btn secondary"
          onClick={() => {
            setFinished(false);
            setIndex(0);
          }}
        >
          {story.quiz.again}
        </button>
      </section>
    );
  }

  const pictorial = question.options.some((option) => option.photo || option.doodle);

  return (
    <section className="quiz">
      <p className="kicker">{story.quiz.kicker}</p>
      <h1 className="display">{story.quiz.title}</h1>
      <p className="lede">{story.quiz.intro}</p>
      <div className="quiz-stage">
      <div className="quiz-ask">
      <p className="quiz-count">
        {index + 1} / {questions.length}
      </p>
      <h2 className="quiz-question">{question.question}</h2>
      <p className="hint" aria-live="polite">
        {locked ? story.quiz.correct : hint}
      </p>
      {progress.correct.length > 0 && (
        <div className="stickers stickers-mini" aria-label="Stickers collected">
          {questions.map((item) => (
            <span key={item.id} className={cx("sticker", progress.correct.includes(item.id) && "is-earned")}>
              {progress.correct.includes(item.id) ? item.sticker : ""}
            </span>
          ))}
        </div>
      )}
      </div>
      <div className={cx("quiz-options", pictorial && "is-pictorial")}>
        {order.map((optionIndex) => {
          const option = question.options[optionIndex];
          if (!option) return null;
          const correct = locked && optionIndex === question.answer;
          return (
            <button
              key={`${question.id}-${optionIndex}`}
              type="button"
              className={cx(
                "quiz-option",
                wrong === optionIndex && "is-wrong",
                correct && "is-correct",
              )}
              onClick={() => choose(optionIndex)}
              disabled={locked}
            >
              {(option.photo || option.doodle) && (
                <span className="quiz-thumb">
                  {option.doodle ? (
                    <Photo src={option.photo} alt="" doodle={option.doodle} />
                  ) : (
                    <Photo src={option.photo} alt="" doodle="heart" />
                  )}
                </span>
              )}
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>
      </div>
    </section>
  );
}
