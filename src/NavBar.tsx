import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => (
    <nav className={styles.NavBar}>
        <NavLink className={styles.Link} activeClassName={styles.active} exact to="/">
            Home
        </NavLink>
        <NavLink className={styles.Link} activeClassName={styles.active} exact to="/chips">
            Chips
        </NavLink>
        <NavLink className={styles.Link} activeClassName={styles.active} exact to="/soda">
            Soda
        </NavLink>
        <NavLink className={styles.Link} activeClassName={styles.active} exact to="/gum">
            Gum
        </NavLink>
        <NavLink className={styles.Link} activeClassName={styles.active} exact to="/demo">
            Demo
        </NavLink>
    </nav>
);

export default NavBar;
