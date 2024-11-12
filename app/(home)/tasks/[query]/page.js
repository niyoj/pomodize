"use client";

import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/_features";

import styles from "./style.module.css";

const getFilterItems = () => {
  return {
    all: "all tasks",
    pending: "pending",
    completed: "completed",
  };
};

export default function TasksQueryPage({ params }) {
  const [query, setQuery] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function checkQuery() {
      const userQuery = (await params).query;

      if (!["all", "pending", "completed"].includes(userQuery)) {
        router.replace("/tasks/all");
      } else {
        setQuery(userQuery);
      }
    }

    checkQuery();
  }, []);

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

        <div className={styles["tasks__display"]}>{query}</div>

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
