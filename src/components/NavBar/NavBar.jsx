import styles from "./NavBar.module.css";

export default function NavBar() {
  return <div className={styles.container}>
      <div className={styles.logo}>
          <h1>NeonDoro</h1>
      </div>
      <div className={styles.links}>
          <a href="/github">GitHub</a>
          <a href="/mainpage">Main Page</a>
      </div>
  </div>;
}