import PropTypes from "prop-types";

import { millisToStr } from "@/app/_lib";
import styles from "./stopwatch-table.module.css";

// here data is sorted array of lap milliseconds i.e. ellpased time so, we do substraction to get lap time
export default function StopWatchTable({ data = [] }) {
  return (
    <table className={styles["table"]}>
      <thead>
        <tr>
          <td>Count</td>
          <td>Lap Time</td>
          <td>Elpased Time</td>
        </tr>
      </thead>

      <tbody>
        {data.map((elpasedTime, index, arr) => {
          const lapTime = Math.abs((arr[index - 1] ?? 0) - elpasedTime);

          return (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>+{millisToStr(lapTime)}</td>
              <td>{millisToStr(elpasedTime)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

StopWatchTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
