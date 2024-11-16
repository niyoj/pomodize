"use client";

import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, TasksCard } from "@/app/_features";
import { getAllTasks, getPendingTasks, getCompletedTasks } from "@/app/_lib";

import styles from "./style.module.css";

const getFilterItems = () => {
  return {
    all: "all tasks",
    pending: "pending",
    completed: "completed",
  };
};

const getTaskByType = (type) => {
  const map = {
    all: getAllTasks,
    pending: getPendingTasks,
    completed: getCompletedTasks,
  };

  if (!map) throw new Error("Invalid task type passed");
  return map[type];
};

export default function TasksQueryPage({ params }) {
  const [query, setQuery] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkQueryAndFetchTask() {
      const userQuery = (await params).query;

      if (!["all", "pending", "completed"].includes(userQuery)) {
        router.replace("/tasks/all");
      } else {
        setQuery(userQuery);

        // get tasks
        const tasks = await getTaskByType(userQuery)();
        setTasks(tasks);
      }
    }

    checkQueryAndFetchTask();
  }, [refresh]);

  const handleTaskChange = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <div className={styles["tasks"]}>
        <div className={styles["tasks__filter"]}>
          {Object.keys(getFilterItems()).map((item) => (
            <Link key={item} href={`/tasks/${item}`}>
              <div
                className={`${styles["filter__item"]} ${query === item ? styles["filter__item--active"] : ""}`}
              >
                {getFilterItems()[item]}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles["tasks__display"]}>
          {tasks &&
            tasks.map((task, index) => (
              <TasksCard
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                description={task.description}
                onChange={handleTaskChange}
              />
            ))}
        </div>

        <div className={styles["page__btn_wrapper"]}>
          <Link href="/tasks/add">
            <Button style={{ backgroundColor: "var(--color-green-700)" }}>
              Add Tasks <CirclePlus />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
