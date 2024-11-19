import styles from "./style.module.css";
import { StopWatch } from "@/app/_features";

export default function TimeToolsPage() {
  return (
    <section className={styles["time_tools_page"]}>
      <StopWatch />
    </section>
  );
}
