import { getInProgressTask } from "./read";
import { IDB } from "./store";

export async function selectInProgressTask(taskID) {
  if (await getInProgressTask())
    throw new Error("Previous in progress task is not completed");

  const db = await IDB;
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");

  const task = await store.get(taskID);
  task.status = "inProgress";

  await store.put(task);
  await tx.done;
}
