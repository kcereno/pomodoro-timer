import { Fragment } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>NeonPomo</h1>
        </div>
        <div className={styles.links}>
          <a href="/github">GitHub</a>
          <a href="/mainpage">Main Page</a>
        </div>
      </div>
    </Fragment>
  );
}
