import { useEffect, useRef, useState } from "react";
import styles from "./PostHead.module.css";
import EmojiBadge from "../../../ui/badge/Emoji";
import defaultImg from "../../../../assets/images/common/defaultProfile.png";
import iconArrowDown from "../../../../assets/images/postHead/arrow_down.svg";
import iconShared from "../../../../assets/images/postHead/shared.svg";
import EmojiContainer from "./EmojiContainer";
import SharedContainer from "./SharedContainer";

function PostHead() {
  const [emojiDrop, setEmojiDrop] = useState(false);
  const [sharedDrop, setSharedDrop] = useState(false);

  const emojiRef = useRef(null);
  const sharedRef = useRef(null);

  // 클릭 이벤트 영역 외 클릭 시 DropContainer 비활성화
  useEffect(() => {
    function handleFocus(e) {
      if (
        (emojiRef.current && !emojiRef.current.contains(e.target)) ||
        (sharedRef.current && !sharedRef.current.contains(e.target))
      ) {
        setEmojiDrop(false);
        setSharedDrop(false);
      }
    }
    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [emojiRef, sharedRef]);

  // 이모지 Drop Container 활성화/비활성화
  const handleEmojiDropDown = () => {
    if (!emojiDrop) {
      setEmojiDrop(true);
    } else {
      setEmojiDrop(false);
    }
  };
  // 공유하기 Drop Container 활성화/비활성화
  const handleSharedDropDown = () => {
    if (!sharedDrop) {
      setSharedDrop(true);
    } else {
      setSharedDrop(false);
    }
  };

  return (
    <div className={styles.headBar}>
      <div className={styles.container}>
        <div className={styles.contents}>
          <p className={styles.toName}>To. Ashley Kim</p>
          <div className={styles.servicesContainer}>
            <div className={styles.AuthorContainer}>
              <ul className={styles.list}>
                <li>
                  <img src={defaultImg} alt="프로필" />
                </li>
                <li>
                  <img src={defaultImg} alt="프로필" />
                </li>
                <li>
                  <img src={defaultImg} alt="프로필" />
                </li>
                <li className={styles.num}>+6</li>
              </ul>
              <p className={styles.numText}>
                <span className={styles.strong}>23</span>명이 작성했어요!
              </p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.chooseReaction}>
              <EmojiBadge />
              <EmojiBadge />
              <EmojiBadge />
              <img
                src={iconArrowDown}
                alt="이모티콘 보기"
                className={emojiDrop ? styles.active : ""}
                ref={emojiRef}
                onClick={handleEmojiDropDown}
              />
              {emojiDrop && <EmojiContainer />}
            </div>
            <div className={styles.line}></div>
            <div
              className={styles.sharedLink}
              onClick={handleSharedDropDown}
              ref={sharedRef}
            >
              <img src={iconShared} alt="공유하기" />
              {sharedDrop && <SharedContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHead;
