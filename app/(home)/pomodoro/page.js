"use client";

import { useState } from "react";
import { PomodoroTimer, PomodoroDetails } from "@/app/_features";

export default function PomodoroPage() {
  const [sessionInfo, setSessionInfo] = useState({
    current: "focus",
    info: {
      focus: 0,
      break: 0,
      longBreak: 0,
    },
  });

  return (
    <>
      <PomodoroTimer colorfull={true} />
      <PomodoroDetails />
    </>
  );
}
