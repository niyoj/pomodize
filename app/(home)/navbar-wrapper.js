"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/app/_features";

import styles from "./layout.module.css";

export default function NavbarWrapper() {
  const fullPath = usePathname();
  const rootSegment = fullPath.split("/")[1];

  return (
    <div className={styles["navbar__wrapper"]}>
      <Navbar active={rootSegment} />
    </div>
  );
}
