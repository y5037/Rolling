import styles from "./PostHead.module.css";

function SharedContainer() {
  const currentUrl = window.location.href;
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  return (
    <ul className={styles.sharedContainer}>
      <li>카카오톡 공유</li>
      <li onClick={handleCopyUrl}>URL 공유</li>
    </ul>
  );
}

export default SharedContainer;
