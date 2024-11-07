import { Navbar } from "@/app/_features";

import styles from "./layout.module.css";

export default function HomepageLayout({ children }) {
  return (
    <>
      {children}
      <div className={styles["navbar__wrapper"]}>
        <Navbar />
      </div>
    </>
  );
}
