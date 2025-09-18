import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={` ${styles.btn} ${styles[type]} `}>
      {children}
    </button>
  );
}
// import styles from "./Button.module.css";

// export default function Button({ children, onClick, type = "button" }) {
//   return (
//     <button
//       onClick={onClick}
//       type={type}
//       className={`${styles.btn} ${styles[type]}`}
//     >
//       {children}
//     </button>
//   );
// }
// import styles from "./Button.module.css";
