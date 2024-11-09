"use client";

import { useEffect, useRef, useReducer } from "react";
import { RotateCcw, ChevronLast, Play } from "lucide-react";

import { makeDoubleDigit, pomodoroReducer } from "@/app/_lib";
import { Button, Chips } from "@/app/_features";

import styles from "./pomodoro-timer.module.css";

const initialState = {
  session: "focus",
  iteration: 0,
  sessionInfo: {
    focus: 0,
    break: 0,
    longBreak: 0,
  },
  time: {
    m: 25,
    s: 0,
  },
  started: false,
  audio: true,
};

const chipsTypes = [
  { name: "focus", displayName: "focus time" },
  { name: "break", displayName: "short break" },
  { name: "longBreak", displayName: "long break" },
];

export function PomodoroTimer({ colorfull = false, audio = true }) {
  const [state, dispatch] = useReducer(pomodoroReducer, initialState);

  // reference to timer
  const timerRef = useRef(null);

  useEffect(() => {
    dispatch({ type: `${audio ? "ENABLE" : "DISABLE"} AUDIO` });

    if (state.started) {
      timerRef.current = setInterval(() => {
        dispatch({ type: "UPDATE" });
      }, 10);
    }

    return () => clearInterval(timerRef.current);
  }, [state.started, audio]);

  const handleStart = () => dispatch({ type: "START" });
  const handleRestart = () => dispatch({ type: "RESTART" });
  const handleSkip = () => dispatch({ type: "SKIP" });

  return (
    <section
      className={`${styles["pomodoro"]} ${colorfull ? styles["pomodoro--colorfull"] : ""}`}
    >
      <div className={styles["pomodoro__chips"]}>
        {chipsTypes.map((item, index) => (
          <Chips key={index} inverse={state.session === item.name}>
            {state.sessionInfo[item.name]} {item.displayName ?? item.name}
          </Chips>
        ))}
      </div>

      <div className={styles["pomodoro__timer__main"]}>
        <div className={styles["pomodoro__timer"]}>
          {makeDoubleDigit(state.time.m)}m : {makeDoubleDigit(state.time.s)}s
        </div>

        <div className={styles["pomodoro__btn"]}>
          {!state.started && (
            <Button onClick={handleStart}>
              Start <Play />
            </Button>
          )}

          {state.started && (
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
