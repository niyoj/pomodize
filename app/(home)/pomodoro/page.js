"use client";

import { useState } from "react";
import { PomodoroTimer, PomodoroDetails } from "@/app/_features";
import { cyclePomodoroType } from "@/app/_lib";

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
    <>
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
    </>
  );
}
