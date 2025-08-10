import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing"> pricing </NavLink>
        </li>
        <li>
          <NavLink to="/product"> product </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            {" "}
            login{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
