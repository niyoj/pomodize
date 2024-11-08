"use client";

import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";
import { Navbar } from "@/app/_features";

import styles from "./layout.module.css";

export default function HomepageLayout({ children }) {
  const pathname = usePathname().slice(1); // removes the first slash character

  return (
    <div className={styles["homepage__wrapper"]}>
      <main className={styles["homepage__content"]}>
        {children}

        <div className={styles["zen_fab"]}>
          <Zap size="2rem" />
        </div>
      </main>

      <div className={styles["navbar__wrapper"]}>
        <Navbar active={pathname} />
      </div>
    </div>
  );
}
