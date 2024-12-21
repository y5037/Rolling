import { useEffect, useState } from "react";
import styles from "./PostHead.module.css";
import PostReactions from "../../../../services/PostReactions";

function EmojiContainer({ emojiRef, userId, setReData }) {
  const emojiButton = ["👍", "😍", "🎉", "😅", "🥹", "👻", "🥴", "👿"];

  const [isReaction, setIsReactions] = useState();

  const handleEmojiClick = (i) => {
    setIsReactions(emojiButton[i]);
  };

  const handleUpdate = async (options) => {
    try {
      const response = await PostReactions(options);
      setReData(response);
      setIsReactions("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isReaction &&
      handleUpdate({
        userId,
        emoji: isReaction,
      });
  }, [isReaction]);

  return (
    <ul className={styles.emojiContainer} ref={emojiRef}>
      {emojiButton.map((item, i) => {
        return (
          <li
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              handleEmojiClick(i);
            }}
          >
            <p className={styles.emoji}>{item}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default EmojiContainer;
