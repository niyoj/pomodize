"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Flag, CirclePause, TimerOff } from "lucide-react";

import { Button } from "../_ui";
import StopWatchDisplay from "./stopwatch-display/stopwatch-display";
import StopWatchTable from "./stopwatch-table/stopwatch-table";

import styles from "./stopwatch.module.css";

export function StopWatch() {
  const [millis, setMillis] = useState(0);
  const [laps, setLaps] = useState([]);
  const [play, setPlay] = useState(false);

  const timerIntervalRef = useRef(null);

  useEffect(() => {
    timerIntervalRef.current = play
      ? setInterval(() => {
        setMillis((prev) => prev + 10);
      }, 10)
      : null;

    return () => timerIntervalRef && clearInterval(timerIntervalRef.current);
  }, [play]);

  const handleStop = () => {
    setLaps([]);
    setMillis(0);
    setPlay(false);
  };

  const handleLap = () => setLaps((prev) => [...prev, millis]);

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
