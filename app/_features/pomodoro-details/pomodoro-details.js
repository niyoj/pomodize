"use client";

import {
  cyclePomodoroType,
  getIntervalPercentage,
  pomodoroLength,
} from "@/app/_lib";
import styles from "./pomodoro-details.module.css";

const pomodoroSessionInfo = [
  { name: "focus", display: "focus time", color: "#023A8E" },
  { name: "break", display: "short break", color: "#263247" },
  { name: "longBreak", display: "long break", color: "#8E0202" },
];

export function PomodoroDetails({
  now,
  next,
  cycle,
  currPomoStack,
  percentage,
}) {
  const tabsPercentage = getIntervalPercentage();

  const getColor = (name) =>
    pomodoroSessionInfo.find((item) => item.name === name).color;

  const getDisplayName = (name) =>
    pomodoroSessionInfo.find((item) => item.name === name).display;

  return (
    <section className={styles["details"]}>
      <p>Pomodoro #{cycle}</p>
      <small>
        <span style={{ textTransform: "capitalize" }}>
          {getDisplayName(now)}
        </span>
        - {pomodoroLength[now]} mins.
      </small>

      <div className={styles["details__bar__wrapper"]}>
        <small>
          next:
          <span
            style={{ color: "var(--color-neutral-700)", marginLeft: "4px" }}
          >
            {getDisplayName(next)}
          </span>
        </small>

        <div className={styles["details__bar"]}>
          {currPomoStack
            .slice(0, currPomoStack.length - 1)
            .map((item, index) => (
              <div
                key={index}
                style={{ width: `${tabsPercentage[item]}%` }}
                className={`${styles["details__bar__tab"]} ${styles[`details__bar__tab--${item}`]}`}
              >
                <div style={{ backgroundColor: getColor(item) }} />
              </div>
            ))}

          <div
            style={{ width: `${tabsPercentage[currPomoStack.at(-1)]}%` }}
            className={`${styles["details__bar__tab"]} ${styles[`details__bar__tab--${currPomoStack.at(-1)}`]}`}
          >
            <div
              style={{
                width: `${percentage}%`,
                backgroundColor: getColor(currPomoStack.at(-1)),
              }}
            />
          </div>
        </div>

        <div className={styles["details__legends"]}>
          {pomodoroSessionInfo.map((item) => (
            <div key={item.name} className={styles["legend"]}>
              <div
                className={styles["legend__color"]}
                style={{ backgroundColor: item.color }}
              />
              <small>{item.display}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
