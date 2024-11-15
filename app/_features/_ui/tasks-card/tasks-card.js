"use client";

import { useEffect, useState } from "react";
import { Trash2, CheckCheck } from "lucide-react";

import styles from "./tasks-card.module.css";
import { deleteTask, markTaskComplete } from "@/app/_lib/tasks/update";

const statuses = [
  {
    name: "pending",
    color: "#e5c416",
    icon: Trash2,
  },
  {
    name: "inProgress",
    display: "in progress",
    color: "var(--color-green-400)",
    icon: CheckCheck,
  },
  {
    name: "completed",
    color: "#e5c416",
    icon: CheckCheck,
  },
];

const getTaskStatuses = () => statuses.map((item) => item.name);
const getTaskStatus = (name) => statuses.find((item) => item.name === name);

export function TasksCard({
  id,
  status = getTaskStatuses[0],
  title = "Task",
  description = "",
  onChange = () => {},
}) {
  const taskStatus = getTaskStatus(status);

  const handleTaskButton = async () => {
    if (status === "inProgress") {
      await markTaskComplete(id);
    } else if (status === "pending") {
      await deleteTask(id);
    }
    onChange();
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <p style={{ fontWeight: 700 }}>
          {status !== "pending" && (
            <span
              style={{
                color: taskStatus.color,
                textTransform: "capitalize",
                marginRight: ".5rem",
              }}
            >
              {taskStatus.display ?? status}:
            </span>
          )}
          <span>{title}</span>
        </p>

        <button
          style={{ background: "transparent" }}
          onClick={handleTaskButton}
        >
          <taskStatus.icon height="1rem" color={taskStatus.color} />
        </button>
      </div>
      <small>{description}</small>
    </div>
  );
}
