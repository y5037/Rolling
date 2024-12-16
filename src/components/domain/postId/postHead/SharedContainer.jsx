import styles from "./PostHead.module.css";

function SharedContainer() {
  return (
    <ul className={styles.sharedContainer}>
      <li>카카오톡 공유</li>
      <li>URL 공유</li>
    </ul>
  );
}

export default SharedContainer;
