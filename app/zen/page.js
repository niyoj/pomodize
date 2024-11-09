"use client";

import Link from "next/link";
import { useState } from "react";
import { Volume2, ZapOff, VolumeOff } from "lucide-react";
import { PomodoroTimer } from "@/app/_features";

import styles from "./zen.module.css";

export default function ZenPage() {
  const [soundOn, setSoundOn] = useState(true);

  const handleSoundChange = () => {
    setSoundOn((prev) => !prev);
  };

  return (
    <div className={styles["zenpage__wrapper"]}>
      <div className={styles["zenpage__btn_wrapper"]}>
        <button
          className={styles["sound_icon__wrapper"]}
          onClick={handleSoundChange}
        >
          {soundOn ? <Volume2 /> : <VolumeOff />}
        </button>
      </div>

      <div className={styles["pomodoro__wrapper"]}>
        <PomodoroTimer audio={soundOn} />
      </div>

      <Link href="/pomodoro">
        <button className={styles["exit_btn"]}>
          <ZapOff />
          <small>Exit Zen Mode</small>
        </button>
      </Link>
    </div>
  );
}
