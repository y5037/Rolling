import MessageCard from "../../components/domain/post/MessageCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/ui/nav/Navigation";
import { HomeButton, PlusButton } from "../../components/ui/button/RoundButton";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import PostHead from "../../components/domain/postId/postHead/PostHead";
import { API_URL } from "../../constant/VariableSettings";
import "./PostId.css";
import Loading from "../../components/ui/loading/Loading";
import MessageModal from "../post/message/MessageModal";
import AlarmModal from "../../components/ui/modal/AlarmModal";


export default function PostId() {

  //리스트페이지 파라미터
  const { id } = useParams();

  //무한스크롤 상태관리
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  //메세지 모달 열림/닫힘 상태관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 페이지 로딩 상태 관리
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  //메세지 데이터 상태관리
  const [message, setMessage] = useState([]);

  // 데이터 삭제 모달의 열림/닫힘 상태관리
  const [ModalOpen, setModalOpen] = useState(false);

  //스크롤 이벤트 상태관리
  const [btnShow, setBtnShow] = useState(false);

  //데이터 상태관리
  const [recentMessages, setRecentMessages] = useState([]);

  //모달 열림 함수
  const handleDeleteRollingPaper = () => {
    if (id) {
      setModalOpen(true);
    }
  };

  //모달 닫힘 함수 
  const handleModalClose = () => {
    setModalOpen(false);
  };

  //데이터 삭제 함수
  const handleConfirmDelete = () => {
    const deleteUrl = `${API_URL}/12-4/recipients/${id}/`;
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("삭제 실패");
        }
        navigate("/list");
      })
      .catch((error) => {
        console.error("error :", error);
        alert("삭제 실패. 다시 시도해주세요.");
      })
      .finally(() => {
        setModalOpen(false);
      });
  };

  //링크이동
  const navigate = useNavigate();

  //버튼 링크 이동 함수
  function handleHomeClick() {
    navigate("/");
  }

  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleMessageCardClick = ({ postId: postId, messageId: messageId }) => {
    setSelectedPostId(postId);
    setSelectedMessageId(messageId); // 선택된 메시지 ID 설정
    setIsModalOpen(true); // 모달 열기
  };

  useEffect(() => {
    if (id) {
      setPageLoading(true);
      getMessages(`${API_URL}/12-4/recipients/${id}/messages/?limit=5&offset=0`);
      getRecipients();
    }
  }, [id]);

  // 페이지 로딩 완료 후 처리
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 이벤트 처리 함수
  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight;

    if (bottom && hasMore && nextUrl) {
      getMessages(nextUrl);  // nextUrl로 다음 페이지 데이터 요청
    }
  };

  useEffect(() => {
    if (recentMessages.length > 0) {
      const scrollEvent = () => {
        setBtnShow(window.scrollY > 50);  // 버튼을 스크롤 위치에 따라 표시
      };
      window.addEventListener("scroll", scrollEvent);
      return () => window.removeEventListener("scroll", scrollEvent);
    }
  }, [recentMessages]);

  // 스크롤 이벤트 리스너 추가 및 제거
  useEffect(() => {
    if (nextUrl) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextUrl]);

  // 메세지카드 데이터 요청
  async function getRecipients() {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/12-4/recipients/${id}/?limit=10&offset=0`
      );
      const result = await response.json();
      setRecentMessages(result);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  }

  // 메시지 데이터 요청 함수
  async function getMessages(url) {
    setLoading(true); // 메시지 데이터 로딩 시작
    try {
      const response = await fetch(url);
      const result = await response.json();
      const { next, previous, results, count } = result;

      // 새로운 메시지 추가 (기존 데이터를 덮어쓰지 않도록)
      setMessage((prevData) => [...prevData, ...results]);

      // 다음 페이지 및 이전 페이지 URL 갱신
      setNextUrl(next);
      setPrevUrl(previous);

      // 더 이상 데이터가 없으면 'hasMore'를 false로 설정
      if (!next || results.length === 0 || message.length >= count) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("error:", error);
    }
  }

  //스크롤이벤트
  useEffect(() => {
    if (recentMessages.length > 0) {
      const scrollEvent = function scrollShowEvent() {
        if (window.scrollY > 50) {
          setBtnShow(true);
        } else {
          setBtnShow(false);
        }
      };
      window.addEventListener("scroll", scrollEvent);
    }
  }, [recentMessages]);

  // 메시지 작성 페이지 이동 함수
  function handleNavigateToPostMessage(e) {
    if (!id) {
      console.error("Recipient ID가 전달되지 않았습니다");
      return;
    }
    navigate(`/post/${id}/messages/`);
  }

  // 스타일 객체
  const postBodyStyle = {
    backgroundColor:
      (recentMessages.backgroundColor === "purple"
        ? "var(--Purple200)"
        : recentMessages.backgroundColor === "beige"
          ? "var(--Beige200)"
          : recentMessages.backgroundColor === "blue"
            ? "var(--Blue200)"
            : recentMessages.backgroundColor === "green"
              ? "var(--Green200)"
              : recentMessages.backgroundColor) || "transparent",
    backgroundImage: recentMessages.backgroundImageURL
      ? `url(${recentMessages.backgroundImageURL})`
      : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Navigation />
      <PostHead />
      <div
        className={`postBodyWrap ${recentMessages.backgroundImageURL ? "imgBg" : ""
          }`}
        style={postBodyStyle}
      >
        <div className="container">
          <div className="postBodyBox">
            <div className="buttonContainer">
              <PrimaryButton
                size="small"
                className="delBtn"
                onClick={handleDeleteRollingPaper}
              >
                롤링페이퍼 삭제하기
              </PrimaryButton>
            </div>

            {pageLoading ? (
              <Loading className="poageLoading" />
            ) : message.length > 0 ? (
              <>
                <div className="postMessageList">
                  <div className="postMessageBox first">
                    <div
                      className="postMessageLinkBox"
                      onClick={handleNavigateToPostMessage}
                    >
                      <div className="LinkIcon">
                        <span className="blind"></span>
                      </div>
                    </div>
                  </div>

                  {message.map((post, i) => {
                    return (
                      <div
                        className="postMessageBox"
                        key={i}
                        onClick={() =>
                          handleMessageCardClick({
                            postId: id,
                            messageId: post.id,
                          })
                        }
                      >
                        <MessageCard post={post} />
                      </div>
                    );
                  })}
                </div>

                {!hasMore && message.length > 5 && <p className="noDataText">데이터가 없습니다.</p>}

                {hasMore && loading && !pageLoading && <Loading className="scrollLoading" />}
              </>
            ) : (
              <div className="postMessageList">
                <div className="postMessageBox first">
                  <div
                    className="postMessageLinkBox"
                    onClick={handleNavigateToPostMessage}
                  >
                    <div className="LinkIcon">
                      <span className="blind"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className={`linkList ${btnShow ? "active" : ""}`}>
        <li>
          <HomeButton className="homeBtn" handleHomeClick={handleHomeClick} />
        </li>
        <li>
          <PlusButton
            className="addBtn"
            onClick={handleNavigateToPostMessage}
          />
        </li>
      </ul>
      {isModalOpen && (
        <MessageModal
          postId={selectedPostId}
          messageId={selectedMessageId}
          onClose={isModalOpen}
          // 모달 Hidden 시, messageId 값을 초기화 해서 다시 모달을 출력할 수 있게끔 버그 처리(12.28_혜림)
          setMessageId={setSelectedMessageId}
        />
      )}
      <AlarmModal
        isOpen={ModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
