import { useEffect, useRef, useState } from "react";
import styles from "./PostHead.module.css";
import EmojiBadge from "../../../ui/badge/Emoji";
import defaultImg from "../../../../assets/images/common/defaultProfile.png";
import iconArrowDown from "../../../../assets/images/postHead/arrow_down.svg";
import iconShared from "../../../../assets/images/postHead/shared.svg";
import EmojiContainer from "./EmojiContainer";
import SharedContainer from "./SharedContainer";
import Toast from "../../../ui/toast/Toast";

function PostHead() {
  const [emojiDrop, setEmojiDrop] = useState(false);
  const [sharedDrop, setSharedDrop] = useState(false);
  const [urlCopy, setUrlCopy] = useState(false);

  const emojiRef = useRef(null);
  const sharedRef = useRef(null);
  const urlCopyRef = useRef(null);

  // 클릭 이벤트 영역 외 클릭 시 DropContainer 비활성화
  useEffect(() => {
    const handleFocus = (e) => {
      if (emojiRef.current && !emojiRef.current.contains(e.target)) {
        setEmojiDrop(false);
      }
      if (sharedRef.current && !sharedRef.current.contains(e.target)) {
        setSharedDrop(false);
      }
    };
    window.addEventListener("mouseup", handleFocus, true);
    return () => {
      window.removeEventListener("mouseup", handleFocus, true);
    };
  }, []);

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

  // URL 복사하기 클릭 시 관련 Toast 활성화/비활성화
  const handleToastShow = () => {
    setUrlCopy(true);
    const timer = setTimeout(() => setUrlCopy(false), 3000);
    clearTimeout(timer);
  };

  const handleToastHide = () => {
    setUrlCopy(false);
  };

  return (
    <>
      {urlCopy ? <Toast handleToastHide={handleToastHide} /> : ""}
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
                  onClick={handleEmojiDropDown}
                />
                {emojiDrop && <EmojiContainer emojiRef={emojiRef} />}
              </div>
              <div className={styles.line}></div>
              <div
                className={styles.sharedLink}
                onClick={handleSharedDropDown}
                ref={sharedRef}
              >
                <img src={iconShared} alt="공유하기" />
                {sharedDrop && (
                  <SharedContainer
                    urlCopyRef={urlCopyRef}
                    handleToastShow={handleToastShow}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostHead;
