import { IDB } from "./store";

export async function createNewTask(title, description) {
  const task = {
    date: new Date(),
    status: "pending",
    title,
    description,
  };

  const db = await IDB;
  await db.add("tasks", task);
}
