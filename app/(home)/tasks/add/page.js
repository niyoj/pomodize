"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { createNewTask } from "@/app/_lib";
import { Button } from "@/app/_features";

import styles from "./style.module.css";

export default function AddTasksPage() {
  const [taskName, setTaskName] = useState(null);
  const [description, setDescription] = useState(null);
  const router = useRouter();

  const handleInputChange = (name, event) => {
    if (name === "taskName") {
      setTaskName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createNewTask(taskName, description);
    router.push("/tasks/all");
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <div className={styles["input__wrapper"]}>
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Task Name"
          minLength={5}
          maxLength={20}
          onChange={handleInputChange.bind(null, "taskName")}
        />
      </div>

      <div className={styles["input__wrapper"]}>
        <label>Description</label>
        <textarea
          minLength={5}
          maxLength="120"
          placeholder="I have to ..."
          rows={2}
          onChange={handleInputChange.bind(null, "description")}
        />
      </div>

      <div className={styles["button__wrapper"]}>
        <Button type="submit" style={{ background: "var(--color-green-600)" }}>
          Add Task
        </Button>
        <Link href="../tasks">
          <Button style={{ background: "var(--color-neutral-500)" }}>
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
}
