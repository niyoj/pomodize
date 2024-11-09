import styles from "./pomodoro-details.module.css";

const pomodoroSessionInfo = [
  { name: "focus", display: "focus time", color: "#023A8E" },
  { name: "break", display: "short break", color: "#263247" },
  { name: "longBreak", display: "long break", color: "#8E0202" },
];

export function PomodoroDetails() {
  return (
    <section className={styles["details"]}>
      <p>Pomodoro #1</p>
      <small>Focus Time - 25 mins.</small>

      <div className={styles["details__bar__wrapper"]}>
        <small>
          next:
          <span
            style={{ color: "var(--color-neutral-700)", marginLeft: "4px" }}
          >
            short break
          </span>
        </small>

        <div className={styles["details__bar"]}></div>

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
