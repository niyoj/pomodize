import styles from "./stopwatch-display.module.css";
import { millisToObj, objToStr } from "@/app/_lib/stopwatch/stopwatch";

export default function StopWatchDisplay({ millis = 0 }) {
  const timeObj = millisToObj(millis);

  return <div className={styles["display"]}>{objToStr(timeObj)}</div>;
}
