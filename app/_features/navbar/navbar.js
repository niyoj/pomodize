import Link from "next/link";
import { Hourglass, Timer, FileCheck, TrendingUp } from "lucide-react";
import styles from "./navbar.module.css";

// displa the name, and pathname = item.pathname ?? name
const navItems = [
  { name: "pomodoro", icon: Hourglass },
  { name: "time tools", icon: Timer, pathname: "time-tools" },
  { name: "tasks", icon: FileCheck },
  // { name: "statistics", icon: TrendingUp },
];

export function Navbar({ active }) {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        {navItems.map((item, index) => {
          const itemPath = item.pathname ?? item.name;
          const isActive = itemPath === active;

          return (
            <li key={index}>
              <Link href={`/${itemPath}`}>
                <div
                  className={`${styles["navbar__item"]} ${isActive ? styles["navbar__item--active"] : ""}`}
                >
                  <item.icon />
                  <small>{item.name}</small>
                  <div className={styles["navbar__item__bulb"]} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
