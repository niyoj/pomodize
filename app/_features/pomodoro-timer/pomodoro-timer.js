import { useState, useEffect } from "react";
import { makeDoubleDigit, reverseTime } from "@/app/_lib";

import styles from "./pomodoro-timer.module.css";

// initializes the initial pomodoro value
const pomodoroLength = {
  focus: 25,
  break: 5,
  longBreak: 30,
};

export function PomodoroTimer() {
  const [time, setTime] = useState({
    m: pomodoroLength.focus,
    s: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // remember stale closure here
      setTime((prevTime) => reverseTime(prevTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles["pomodoro"]}>
      {makeDoubleDigit(time.m)}m : {makeDoubleDigit(time.s)}s
    </div>
  );
}
