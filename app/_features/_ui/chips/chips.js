import styles from "./chips.module.css";

export function Chips({ children, inverse = false }) {
  return (
    <span
      className={`${styles["chips"]} ${inverse ? styles["chips--inverse"] : ""}`}
    >
      {children}
    </span>
  );
}
