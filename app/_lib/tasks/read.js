import { IDB } from "./store";

export async function getAllTasks() {
  const db = await IDB();
  const tasks = await db.getAll("tasks");

  return tasks;
}

export async function getPendingTasks() {
  return (await getAllTasks()).filter((item) => item.status === "pending");
}

export async function getInProgressTask() {
  return (await getAllTasks()).find((item) => item.status === "inProgress");
}

export async function getCompletedTasks() {
  return (await getAllTasks()).filter((item) => item.status === "completed");
}
