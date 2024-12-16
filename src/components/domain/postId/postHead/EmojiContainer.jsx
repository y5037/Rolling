import styles from "./PostHead.module.css";

const emojiButton = [
  {
    emoji: "👍",
    num: 0,
  },
  {
    emoji: "😍",
    num: 0,
  },
  {
    emoji: "🎉",
    num: 0,
  },
  {
    emoji: "😂",
    num: 0,
  },
  {
    emoji: "🥹",
    num: 0,
  },
  {
    emoji: "👻",
    num: 0,
  },
  {
    emoji: "🥴",
    num: 0,
  },
  {
    emoji: "👿",
    num: 0,
  },
];

function EmojiContainer({ emojiRef }) {
  return (
    <ul className={styles.emojiContainer} ref={emojiRef}>
      {emojiButton.map((item, i) => {
        return (
          <li key={i}>
            <p className={styles.emoji}>{item.emoji}</p>
            <p className={styles.num}>{item.num}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default EmojiContainer;
