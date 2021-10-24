import { Link } from "react-router-dom";
import styles from "./Snack.module.scss";

const Snack = ({
    name = "Snack",
    details = "Some information about the snack."
}: {
    name?: string,
    details?: string
}) => (
    <div className={styles.Snack}>
        <h2 className={styles.Name}>{name}</h2>
        <p className={styles.Details}>{details}</p>
        <Link className={styles.Home} to="/">Go Home</Link>
    </div>
);

export default Snack;
