import styles from "./NavLinks.module.css";

export default function NavLinks() {
  return (
    <div className={styles.linkGroup}>
      <a href="/github">Git Hub</a>
      <a href="/Homepage">HomePage</a>
    </div>
  );
}
