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

export default function PostId() {
  const [message, setMessage] = useState([]);

  //링크이동
  const navigate = useNavigate();

  //버튼 링크 이동 함수
  function handleHomeClick() {
    navigate("/");
  }

  //리스트페이지 파라미터
  const { id } = useParams();

  //스크롤 이벤트 상태관리
  const [btnShow, setBtnShow] = useState(false);

  //데이터 상태관리
  const [recentMessages, setRecentMessages] = useState([]);
  console.log(recentMessages);

  //로딩 상태관리
  const [loading, setLoading] = useState(true);

  //데이터 전체 개수 상태관리
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMessageCardClick = ({ postId: postId, messageId: messageId }) => {
    setSelectedPostId(postId);
    setSelectedMessageId(messageId); // 선택된 메시지 ID 설정
    setIsModalOpen(true); // 모달 열기
  };

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

  //메세지카드 데이터 요청
  async function getMessages() {
    try {
      const response = await fetch(
        `${API_URL}/12-4/recipients/${id}/messages/?limit=10&offset=0`
      );
      const result = await response.json();
      setMessage(result.results);
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    getMessages();
    getRecipients();
  }, [id]);

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

  // 버튼 클릭 이벤트 함수
  function handleDeleteRollingPaper() {
    if (!id) {
      console.error("Recipient ID가 전달되지 않았습니다");
      return;
    }

    // 데이터 삭제
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
      });
  }

  // 스타일 객체
  const postBodyStyle = {
    backgroundColor:
      (recentMessages.backgroundColor === "purple"
        ? "var(--Purple200)"
        : recentMessages.backgroundColor === "beige"
        ? "var(--Beige100)"
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
        className={`postBodyWrap ${
          recentMessages.backgroundImageURL ? "imgBg" : ""
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
            {loading ? (
              <Loading />
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
    </>
  );
}
