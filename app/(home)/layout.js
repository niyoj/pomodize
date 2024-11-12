import Link from "next/link";
import { Zap } from "lucide-react";

import styles from "./layout.module.css";
import NavbarWrapper from "./navbar-wrapper";

export default function HomepageLayout({ children }) {
  return (
    <div className={styles["homepage__wrapper"]}>
      <main className={styles["homepage__content"]}>
        {children}

        <div className={styles["zen_fab"]}>
          <Link href="/zen" prefetch={true}>
            <Zap size="2rem" />
          </Link>
        </div>
      </main>

      <NavbarWrapper />
    </div>
  );
}
