"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/app/_features";

import styles from "./layout.module.css";

export default function HomepageLayout({ children }) {
  const pathname = usePathname().slice(1);    // removes the first slash character

  return (
    <>
      {children}
      <div className={styles["navbar__wrapper"]}>
        <Navbar active={pathname} />
      </div>
    </>
  );
}
