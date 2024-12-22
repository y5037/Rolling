import { useEffect, useRef, useState } from "react";
import styles from "./PostHead.module.css";
import PostReactions from "../../../../services/PostReactions";
import GetReactions from "../../../../services/GetReactions";

function EmojiContainer({
  emojiRef,
  userId,
  countRendering,
  setCountRendering,
}) {
  const emojiButton = ["👍", "😍", "🎉", "😅", "🥹", "👻", "🥴", "👿"];

  const [isReaction, setIsReactions] = useState();
  const [countBadge, setCountBadge] = useState();
  const [isEmoji, setIsEmoji] = useState();

  const handleEmojiClick = (i) => {
    setIsReactions(emojiButton[i]);
  };

  const handleGetCount = async (options) => {
    try {
      const response = await GetReactions(options);
      const { results } = response;
      setIsEmoji(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCount({
      userId,
      isCount: isEmoji,
    });
  }, [isReaction]);

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
    isReaction &&
      handleUpdate({
        userId,
        emoji: isReaction,
      });
  }, [isReaction]);

  console.log(isEmoji);

  return (
    <ul className={styles.emojiContainer} ref={emojiRef}>
      {emojiButton.map((item, i) => {
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
            <p className={styles.emoji}>{item}</p>
            {/* {countBadge === i && (
              <> */}
            {/* 해당 key값은 리렌더링을 위한 임시 값 */}
            {/* <div key={isReaction} className={styles.fadeBadge}>
                  {countRendering?.count}
                </div> */}
            {/* </> */}
            {/* )} */}
            {isEmoji &&
              isEmoji.map((emoji) => {
                return (
                  <>
                    {item === emoji.emoji && (
                      <p key={emoji?.id}>{emoji.count}</p>
                    )}
                  </>
                );
              })}
          </li>
        );
      })}
    </ul>
  );
}

export default EmojiContainer;
