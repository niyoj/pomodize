import { getInProgressTask } from "./read";

export function selectInProgressTask(taskID) {
  if (getInProgressTask)
    throw new Error("Previous in progress task is not completed");

  // do something
  console.log(`${taskID} was set to inprogress`);
}
