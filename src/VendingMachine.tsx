import { Link } from "react-router-dom";
import styles from "./VendingMachine.module.scss";

const VendingMachine = () => (
    <section className={styles.VendingMachine}>
        <h1 className={styles.Title}>Welcome to the vending machine!</h1>
        <p className={styles.Description}>Pick out a snack while you're here.</p>
        <ul className={styles.Links}>
            <li className={styles.Link}>
                <Link to="/chips">Chips</Link>
            </li>
            <li className={styles.Link}>
                <Link to="/soda">Soda</Link>
            </li>
            <li className={styles.Link}>
                <Link to="/gum">Gum</Link>
            </li>
            <li className={styles.Link}>
                <Link to="/demo">Demo</Link>
            </li>
        </ul>
    </section>
);

export default VendingMachine;
