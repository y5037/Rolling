import styles from "./PostHead.module.css";

function SharedContainer({ handleToastShow }) {
  const currentUrl = window.location.href;
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  return (
    <ul className={styles.sharedContainer}>
      <li>카카오톡 공유</li>
      <li
        onMouseDown={() => {
          handleCopyUrl();
          handleToastShow();
        }}
      >
        URL 공유
      </li>
    </ul>
  );
}

export default SharedContainer;
