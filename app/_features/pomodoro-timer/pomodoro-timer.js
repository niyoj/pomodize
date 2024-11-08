import { useState, useEffect } from "react";
import {
  pomodoroLength,
  makeDoubleDigit,
  reverseTime,
  cyclePomodoroType,
} from "@/app/_lib";
import { Button } from "@/app/_features";

import styles from "./pomodoro-timer.module.css";

export function PomodoroTimer({ type = "focus", colorfull = false }) {
  const [pomoType, setPomoType] = useState(type);
  const [time, setTime] = useState({
    m: pomodoroLength[pomoType],
    s: 0,
  });
  const [restartTimes, setRestartTimes] = useState(0); // use only for re-running useEffect

  useEffect(() => {
    setTime({
      m: pomodoroLength[pomoType],
      s: 0,
    });

    const timer = setInterval(() => {
      // remember stale closure here
      setTime((prevTime) => reverseTime(prevTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [restartTimes, pomoType]);

  const handleRestart = () => {
    setRestartTimes((prev) => prev + 1);
  };

  const handleSkip = () => {
    setPomoType((prev) => cyclePomodoroType(prev));
  };

  return (
    <div className={styles["pomodoro"]}>
      {makeDoubleDigit(time.m)}m : {makeDoubleDigit(time.s)}s
      <Button onClick={handleRestart}>Restart</Button>
      <Button onClick={handleSkip}>Skip</Button>
    </div>
  );
}
