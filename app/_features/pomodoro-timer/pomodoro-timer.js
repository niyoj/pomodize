import { useState, useEffect, useRef } from "react";
import { RotateCcw, ChevronLast, Play } from "lucide-react";

import {
  pomodoroLength,
  makeDoubleDigit,
  reverseTime,
  cyclePomodoroType,
} from "@/app/_lib";
import { Button, Chips } from "@/app/_features";

import styles from "./pomodoro-timer.module.css";

export function PomodoroTimer({ type = "focus", colorfull = false }) {
  const [pomoType, setPomoType] = useState(type);
  const [time, setTime] = useState({
    m: pomodoroLength[pomoType],
    s: 0,
  });
  const [started, setStarted] = useState(false);

  // reference to timer
  const timerRef = useRef(null);

  useEffect(() => {
    setTime({
      m: pomodoroLength[pomoType],
      s: 0,
    });

    if (started) {
      timerRef.current = setInterval(() => {
        // remember stale closure here
        setTime((prevTime) => reverseTime(prevTime));
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [pomoType, started]);

  const handleStart = () => setStarted(true);
  const handleRestart = () => setStarted(false);

  const handleSkip = () => {
    setPomoType((prev) => cyclePomodoroType(prev));
    setStarted(false);
  };

  return (
    <section
      className={`${styles["pomodoro"]} ${colorfull ? styles["pomodoro--colorfull"] : ""}`}
    >
      <div className={styles["pomodoro__chips"]}>
        <Chips inverse={true}>1 focus time</Chips>
        <Chips>1 short break</Chips>
        <Chips>1 long break</Chips>
      </div>

      <div className={styles["pomodoro__timer__main"]}>
        <div className={styles["pomodoro__timer"]}>
          {makeDoubleDigit(time.m)}m : {makeDoubleDigit(time.s)}s
        </div>

        <div className={styles["pomodoro__btn"]}>
          {!started && (
            <Button onClick={handleStart}>
              Start <Play />
            </Button>
          )}

          {started && (
            <Button onClick={handleRestart}>
              Restart <RotateCcw />
            </Button>
          )}

          <Button onClick={handleSkip}>
            Skip <ChevronLast />
          </Button>
        </div>
      </div>
    </section>
  );
}
