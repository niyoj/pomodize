import { Trash2, CheckCheck } from "lucide-react";

import styles from "./tasks-card.module.css";

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
const promoteTask = (task) => {
  const taskStatuses = getTaskStatuses();
  const taskIndex = taskStatuses().indexOf(task);

  if (taskIndex === taskStatuses.length - 1) {
    return task;
  }
  return taskStatuses[taskIndex + 1];
};
const getTaskStatus = (name) => statuses.find((item) => item.name === name);

export function TasksCard({
  status = getTaskStatuses[0],
  title = "Task",
  description = "",
}) {
  const taskStatus = getTaskStatus(status);

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

        <taskStatus.icon height="1rem" color={taskStatus.color} />
      </div>
      <small>{description}</small>
    </div>
  );
}
