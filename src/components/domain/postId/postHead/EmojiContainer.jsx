import { useEffect, useState } from "react";
import styles from "./PostHead.module.css";
import PostReactions from "../../../../services/PostReactions";
import GetReactions from "../../../../services/GetReactions";

function EmojiContainer({ emojiRef, userId, setCountRendering }) {
  const EMOJI_BUTTON = [
    { emoji: "👍", count: 0 },
    { emoji: "😍", count: 0 },
    { emoji: "🥴", count: 0 },
    { emoji: "😅", count: 0 },
    { emoji: "🥹", count: 0 },
    { emoji: "🎉", count: 0 },
    { emoji: "👻", count: 0 },
    { emoji: "👿", count: 0 },
  ];

  const [isReaction, setIsReactions] = useState();
  const [countBadge, setCountBadge] = useState();
  const [isEmoji, setIsEmoji] = useState();

  const handleEmojiClick = (i) => {
    setIsReactions(EMOJI_BUTTON[i].emoji);
  };

  const handleGetCount = async (options) => {
    try {
      const response = await GetReactions(options);
      const { results } = response;
      setIsEmoji(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (options) => {
    try {
      const response = await PostReactions(options);
      setCountRendering(response);
      setIsReactions("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCount({
      userId,
      isCount: isEmoji,
    });
    isReaction &&
      handleUpdate({
        userId,
        emoji: isReaction,
      });
  }, [isReaction]);

  return (
    <div className={styles.emojiContainer} ref={emojiRef}>
      <div className={styles.textBox}>Smileys & People</div>
      <ul>
        {EMOJI_BUTTON.map((item, i) => {
          let { emoji, count } = item;
          return (
            <li
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                handleEmojiClick(i);
                setCountBadge(i);
                setCountRendering("");
              }}
            >
              <p className={styles.emoji}>{emoji}</p>
              {/* {countBadge === i && (
              <> */}
              {/* 해당 key값은 리렌더링을 위한 임시 값 */}
              {/* <div key={isReaction} className={styles.fadeBadge}>
                  {countRendering?.count}
                </div> */}
              {/* </> */}
              {/* )} */}
              <p>
                {isEmoji?.map((item) => {
                  if (emoji === item.emoji) {
                    count += item.count;
                  }
                })}
                {count}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmojiContainer;
