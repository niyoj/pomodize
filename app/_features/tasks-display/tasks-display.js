"use client";

import styles from "./tasks-module.css";

export function TasksDisplay() {
  const onChangeFilter = (name) => {
    setFilter(name);
    router.push("/hello", undefined, { shallow: true });
  };

  return (
    <div className={styles["tasks_display"]}>
      <div className={styles["tasks__filter_list"]}>
        <button onClick={onChangeFilter.bind(null, "all tasks")}>
          all tasks
        </button>
        <button onClick={onChangeFilter.bind(null, "pending")}>pending</button>
        <button onClick={onChangeFilter.bind(null, "completed")}>
          completed
        </button>
      </div>
    </div>
  );
}
