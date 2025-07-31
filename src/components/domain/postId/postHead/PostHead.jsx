import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostHead.module.css";
import EmojiBadge from "../../../ui/badge/Emoji";
import defaultImg from "../../../../assets/images/common/defaultProfile.png";
import iconArrowDown from "../../../../assets/images/postHead/arrow_down.svg";
import iconShared from "../../../../assets/images/postHead/shared.svg";
import EmojiContainer from "./EmojiContainer";
import SharedContainer from "./SharedContainer";
import Toast from "../../../ui/toast/Toast";
import GetRecipientsId from "../../../../services/GetRecipientsId";

function PostHead() {
  const [emojiDrop, setEmojiDrop] = useState(false);
  const [sharedDrop, setSharedDrop] = useState(false);
  const [urlCopy, setUrlCopy] = useState(false);

  const [isTimer, setIsTimer] = useState();
  const [isData, setIsData] = useState();
  const [countRendering, setCountRendering] = useState();

  const emojiRef = useRef(null);
  const sharedRef = useRef(null);
  const urlCopyRef = useRef(null);

  const params = useParams();
  const userId = params.id;

  // 데이터 불러오기
  // 이모지 클릭할 때마다 데이터 호출
  useEffect(() => {
    GetRecipientsId(userId, setIsData);
  }, [countRendering]);

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
    setIsTimer(timer);
  };

  const handleToastHide = () => {
    setUrlCopy(false);
    clearTimeout(isTimer);
  };

  const sliceMessages = isData?.recentMessages.slice(0, 3);
  const sliceReactions = isData?.topReactions.slice(0, 3);

  return (
    <>
      {urlCopy ? <Toast handleToastHide={handleToastHide} /> : ""}
      <div className={styles.headBar}>
        <div className={styles.container}>
          <div className={styles.contents}>
            <p className={styles.toName}>To. {isData?.name}</p>
            <div className={styles.servicesContainer}>
              <div className={styles.AuthorContainer}>
                <ul className={styles.list}>
                  {isData?.recentMessages ? (
                    sliceMessages.map((item) => {
                      console.log(item);
                      return (
                        <li key={item.id}>
                          <img
                            src={
                              item.profileImageURL
                                ? item.profileImageURL
                                : defaultImg
                            }
                            alt=""
                          />
                        </li>
                      );
                    })
                  ) : (
                    <li>
                      <img src={defaultImg} alt="프로필" />
                    </li>
                  )}
                  <li className={styles.num}>
                    +
                    {isData?.messageCount >= 3
                      ? Number(isData?.messageCount - 3)
                      : 0}
                  </li>
                </ul>
                <p className={styles.numText}>
                  <span className={styles.strong}>{isData?.messageCount}</span>
                  명이 작성했어요!
                </p>
                <div className={styles.line}></div>
              </div>
              <div
                className={styles.chooseReaction}
                onClick={handleEmojiDropDown}
              >
                {sliceReactions?.length > 0 ? (
                  sliceReactions.map((item) => {
                    return <EmojiBadge key={item.id} item={item} />;
                  })
                ) : (
                  <div className={styles.emptyReactions}>
                    🥲<p>0</p>
                  </div>
                )}
                <img
                  src={iconArrowDown}
                  alt="이모티콘 보기"
                  className={emojiDrop ? styles.active : ""}
                  // onClick={handleEmojiDropDown}
                />
                {emojiDrop && (
                  <EmojiContainer
                    emojiRef={emojiRef}
                    userId={userId}
                    countRendering={countRendering}
                    setCountRendering={setCountRendering}
                  />
                )}
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
                    isData={isData}
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
