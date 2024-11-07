import { Hourglass, Timer, FileCheck, TrendingUp } from "lucide-react";
import styles from "./navbar.module.css";

export function Navbar({ active }) {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li className={styles["navbar__item"]}>
          <Hourglass />
          <small>pomodoro</small>
          <div className={styles["navbar__item__bulb"]} />
        </li>
        <li className={styles["navbar__item"]}>
          <Timer />
          <small>time tools</small>
          <div className={styles["navbar__item__bulb"]} />
        </li>
        <li className={styles["navbar__item"]}>
          <FileCheck />
          <small>tasks</small>
          <div className={styles["navbar__item__bulb"]} />
        </li>
        <li className={styles["navbar__item"]}>
          <TrendingUp />
          <small>statistics</small>
          <div className={styles["navbar__item__bulb"]} />
        </li>
      </ul>
    </nav>
  );
}
