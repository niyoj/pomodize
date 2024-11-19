"use client";

import { useState, useEffect, useRef } from "react";
import { Play, CirclePause } from "lucide-react";

import { Button } from "../_ui";
import StopWatchDisplay from "./stopwatch-display/stopwatch-display";
import StopWatchTable from "./stopwatch-table/stopwatch-table";

import styles from "./stopwatch.module.css";

export function StopWatch() {
  const [millis, setMillis] = useState(0);
  const [laps, setLaps] = useState([]);

  return (
    <section className={styles["stopwatch"]}>
      <StopWatchDisplay millis={millis} />
      <div className={styles["stopwatch__btns"]}>
        {millis === 0 && (
          <Button>
            Start <Play />
          </Button>
        )}
        {millis !== 0 && (
          <>
            <Button>
              Resume <Play />
            </Button>
            <Button>
              Stop <CirclePause />
            </Button>
          </>
        )}
      </div>
      {millis !== 0 && <StopWatchTable data={laps} />}
    </section>
  );
}
