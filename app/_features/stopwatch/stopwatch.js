"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Flag, CirclePause, TimerOff } from "lucide-react";

import { Button } from "../_ui";
import StopWatchDisplay from "./stopwatch-display/stopwatch-display";
import StopWatchTable from "./stopwatch-table/stopwatch-table";

import styles from "./stopwatch.module.css";

const clearStopwatchLocals = () => {
  localStorage.removeItem("stopwatch");
  localStorage.removeItem("laps");
  localStorage.removeItem("lastStopwatchTime");
};

export function StopWatch() {
  const [millis, setMillis] = useState(0);
  const [laps, setLaps] = useState([]);
  const [play, setPlay] = useState(false);

  const timerIntervalRef = useRef(null);

  // intialize millis from localstroage
  useEffect(() => {
    // if stopwatch do not present
    if (!localStorage.getItem("stopwatch")) {
      clearStopwatchLocals();
      return;
    }

    const localMillis = +localStorage.getItem("stopwatch");
    const lastTime = +localStorage.getItem("lastStopwatchTime");

    // if both of them are not numbers
    if (!Number.isInteger(localMillis) || !Number.isInteger(lastTime)) {
      clearStopwatchLocals();
      return;
    }

    // if wrong lastTime
    if (lastTime > Date.now()) {
      clearStopwatchLocals();
      return;
    }

    const actualMillis = localMillis + Date.now() - lastTime;

    // if localMillis only present then
    if (!localStorage.getItem("laps")) {
      setMillis(actualMillis);
      setPlay(true);
      return;
    }

    const localLaps = localStorage
      .getItem("laps")
      .split(",")
      .map((item) => +item);

    // validating both
    if (
      Array.isArray(localLaps) &&
      localLaps.every((item) => Number.isInteger(item)) &&
      localLaps.at(-1) <= localMillis
    ) {
      setMillis(actualMillis);
      setLaps(localLaps);
      setPlay(true);
    } else {
      clearStopwatchLocals();
    }
  }, []);

  useEffect(() => {
    if (play) {
      timerIntervalRef.current = setInterval(() => {
        setMillis((prev) => {
          localStorage.setItem("lastStopwatchTime", Date.now());
          localStorage.setItem("stopwatch", prev + 10);
          return prev + 10;
        });
      }, 10);
    } else {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [play]);

  const handleStop = () => {
    setLaps([]);
    setMillis(0);
    setPlay(false);
    clearStopwatchLocals();
  };

  const handleLap = () => {
    localStorage.setItem("laps", [...laps, millis]);
    setLaps((prev) => [...prev, millis]);
  };

  return (
    <section className={styles["stopwatch"]}>
      <div className={styles["stopwatch__display"]}>
        <StopWatchDisplay millis={millis} />
      </div>

      <div className={styles["stopwatch__btns"]}>
        {millis === 0 && (
          <Button onClick={setPlay.bind(null, true)}>
            Start <Play />
          </Button>
        )}
        {millis !== 0 && play && (
          <>
            <Button onClick={handleLap}>
              Lap <Flag />
            </Button>
            <Button onClick={setPlay.bind(null, false)}>
              Pause <CirclePause />
            </Button>
          </>
        )}
        {millis !== 0 && !play && (
          <>
            <Button onClick={setPlay.bind(null, true)}>
              Resume <Play />
            </Button>
            <Button onClick={handleStop}>
              Stop <TimerOff />
            </Button>
          </>
        )}
      </div>
      <div className={styles["stopwatch__table"]}>
        {millis !== 0 && <StopWatchTable data={laps} />}
      </div>
    </section>
  );
}
