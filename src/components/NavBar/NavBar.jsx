import { Fragment } from "react";
import Logo from "./Logo/Logo";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks/NavLinks";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.container}>
        <Logo />
        <NavLinks />
      </div>
      <hr />
    </Fragment>
  );
}
