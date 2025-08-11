import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={styles.btn}>
      {children}
    </div>
  );
}
