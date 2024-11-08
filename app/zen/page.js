import { Volume2, ZapOff } from "lucide-react";

import styles from "./zen.module.css";

export default function ZenPage() {
  return (
    <>
      <button className={styles["sound_icon__wrapper"]}>
        <Volume2 />
      </button>

      <button className={styles["exit_btn"]}>
        <ZapOff />
        <small>Exit Zen Mode</small>
      </button>
    </>
  );
}
