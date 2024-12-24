import styles from "./PostHead.module.css";

function SharedContainer({ handleToastShow, isData }) {
  const currentUrl = window.location.href;
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
  };

  const handleKakaoShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("0e0dab8bbf10e2d9d204bc7b6bf6387f");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Rolling",
          description: `자유롭게 롤링페이퍼를 만들어 보세요!`,
          // 이미지 호스팅이 필요한 주소입니다.
          imageUrl: "https://ifh.cc/g/52pn67.jpg",
          link: {
            mobileWebUrl: "https://rolling-three.vercel.app/",
            webUrl: "https://rolling-three.vercel.app/",
          },
        },
        buttons: [
          {
            title: `${isData?.name}의 롤링페이퍼 보기`,
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <ul className={styles.sharedContainer}>
      <li onClick={handleKakaoShare}>카카오톡 공유</li>
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
