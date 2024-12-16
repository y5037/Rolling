import EmojiBadge from "../../../ui/badge/Emoji";
import styles from "./PostHead.module.css";
import defaultImg from "../../../../assets/images/common/defaultProfile.png";
import iconArrowDown from "../../../../assets/images/postHead/arrow_down.svg";
import iconShared from "../../../../assets/images/postHead/shared.svg";
import EmojiContainer from "./EmojiContainer";

function PostHead() {
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
              <img src={iconArrowDown} alt="이모티콘 보기" />
              <EmojiContainer />
            </div>
            <div className={styles.line}></div>
            <div className={styles.sharedLink}>
              <img src={iconShared} alt="공유하기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHead;
