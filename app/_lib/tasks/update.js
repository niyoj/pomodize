import { getInProgressTask } from "./read";
import { IDB } from "./store";

export async function selectInProgressTask(taskID) {
  if (await getInProgressTask())
    throw new Error("Previous in progress task is not completed");

  const db = await IDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");

  const task = await store.get(taskID);
  task.status = "inProgress";

  await store.put(task);
  await tx.done;
}

export async function deleteTask(taskID) {
  const db = await IDB();
  await db.delete("tasks", taskID);
}

export async function markTaskComplete(taskID) {
  const db = await IDB();
  const tx = db.transaction("tasks", "readwrite");
  const store = tx.objectStore("tasks");

  const task = await store.get(taskID);
  task.status = "completed";

  await store.put(task);
  await tx.done;
}
