"use client";

import { useState } from "react";
import { PomodoroTimer, PomodoroDetails, TasksCard } from "@/app/_features";
import { cyclePomodoroType } from "@/app/_lib";

import styles from "./style.module.css";

const getCurrentCycleStack = (fullStack) => {
  let lastLongBreak = fullStack.lastIndexOf("longBreak");

  // if there is no lastbreak or currently it is lastbreak then
  if (lastLongBreak === -1 || fullStack.at(-1) === "longBreak")
    return fullStack;

  return fullStack.slice(lastLongBreak + 1);
};

export default function PomodoroPage() {
  const [pomoStack, setPomoStack] = useState(["focus"]);
  const [invPercent, setInvPercent] = useState(0);

  const handlePomodoroUpdate = (sessionName, percentage) => {
    // since pommodoro is reverse counting we do 100 - percentage
    setInvPercent(100 - percentage);

    // if the last element in stack is same as now do not push
    setPomoStack((stack) =>
      stack.at(-1) === sessionName ? [...stack] : [...stack, sessionName],
    );
  };

  const currPomoStack = getCurrentCycleStack(pomoStack);

  return (
    <div className={styles["page"]}>
      <PomodoroTimer colorfull={true} onChange={handlePomodoroUpdate} />
      <PomodoroDetails
        cycle={
          pomoStack.filter((item, index, arr) => {
            // search for occurence of a longBreak followed by occurence of focus
            if (
              item === "longBreak" &&
              arr[Math.min(index + 1, arr.length - 1)] === "focus"
            )
              return true;
          }).length + 1
        }
        now={pomoStack.at(-1)}
        next={cyclePomodoroType(pomoStack.length - 1)}
        currPomoStack={currPomoStack}
        percentage={invPercent}
      />

      <section className={styles["page__tasks"]}>
        <h1>Active Task</h1>

        <TasksCard
          status="inProgress"
          title="Theory of computation"
          description="This is a silly task and silly is love but love is blind and si it so oh my fow hello is my name name is my hello oh my god"
        />

        <small>
          Next:{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "600",
            }}
          >
            Theory og superposition
          </span>
        </small>
      </section>
    </div>
  );
}
