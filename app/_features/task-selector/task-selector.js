"use client";

import { useState, useEffect } from "react";
import { X, SquareCheckBig } from "lucide-react";

import { getPendingTasks, selectInProgressTask } from "@/app/_lib";
import { Button } from "../_ui";

import styles from "./task-selector.module.css";

export function TaskSelector({ onClose }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [pendingTasks, setPendingTasks] = useState(null);

  useEffect(() => {
    const fetchFromIDB = async () => {
      setPendingTasks(await getPendingTasks());
    };

    fetchFromIDB();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await selectInProgressTask(selectedTask);

    onClose();
  };

  return (
    <div className={styles["selector__wrapper"]}>
      <div className={styles["selector"]}>
        <div className={styles["selector__header"]}>
          <h2>Select a Task</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className={styles["selector__options"]}>
          <form onSubmit={handleFormSubmit}>
            {pendingTasks &&
              pendingTasks.map((item, index) => (
                <div
                  className={styles["selector__options__option"]}
                  key={index}
                >
                  <label key={index}>
                    <input
                      type="radio"
                      name="task"
                      onChange={setSelectedTask.bind(null, item.id)}
                    />
                    <span>{item.title}</span>
                  </label>
                </div>
              ))}
            <div className={styles["selector__options__btn_wrapper"]}>
              <Button
                style={{ backgroundColor: "var(--color-green-600)" }}
                disabled={selectedTask === null}
              >
                Select Task
                <SquareCheckBig height="1.25rem" strokeWidth="3px" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
