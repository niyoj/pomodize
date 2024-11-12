import styles from "./layout.module.css";

export default function TaskLayout({ children }) {
  return (
    <section className={styles["page"]}>
      <h1>Tasks</h1>

      <div className={styles["page__tasks_display"]}>{children}</div>
    </section>
  );
}
