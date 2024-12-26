import MessageCard from "../../components/domain/post/MessageCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/ui/nav/Navigation";
import { HomeButton, PlusButton } from "../../components/ui/button/RoundButton";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import PostHead from "../../components/domain/postId/postHead/PostHead";
import { API_URL } from "../../constant/VariableSettings";
import { useInView } from "react-intersection-observer";

import "./PostId.css";
import Loading from "../../components/ui/loading/Loading";
import MessageModal from "../post/message/MessageModal";

export default function PostId() {
  const { ref, inView } = useInView({
    triggerOnce: true, // 한번만 트리거
    threshold: 1.0, // 100% 하단에 도달했을 때 트리거
  });

  //무한스크롤
  const [nextPageUrl, setNextPageUrl] = useState(null); // next URL을 상태로 관리

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
  const [count, setCount] = useState();
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMessageCardClick = ({ postId: postId, messageId: messageId }) => {
    setSelectedPostId(postId);
    setSelectedMessageId(messageId); // 선택된 메시지 ID 설정
    setIsModalOpen(true); // 모달 열기
  };

  // 데이터 요청
  async function getRecipients(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setRecentMessages((prevMessages) => [...prevMessages, ...result.results]);
      setCount(result.count);
      setNextPageUrl(result.next);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }

  // 무한 스크롤을 위한 loadMore
  const loadMoreMessages = () => {
    if (!loading && nextPageUrl) {
      getRecipients(nextPageUrl);
    }
  };

  useEffect(() => {
    const initialUrl = `${API_URL}/12-4/recipients/${id}/messages/?limit=10&offset=0`;
    getRecipients(initialUrl);
  }, [id]);

  useEffect(() => {
    if (nextPageUrl) {
      getRecipients(nextPageUrl);
    }
  }, [nextPageUrl]);

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

  return (
    <>
      <Navigation />
      <PostHead />
      <div className="postBodyWrap">
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
            ) : recentMessages.length > 0 ? (
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

                  {recentMessages.map((post, i) => {
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

          {/* Load more 버튼 */}
          <ul className="linkList">
            {nextPageUrl && !loading ? (
              <li ref={ref} className="load-more-container">
                <button onClick={loadMoreMessages} className="load-more-btn">
                  더 많은 메시지 로드
                </button>
              </li>
            ) : nextPageUrl === null ? (
              <li className="no-more-data">더 이상 데이터가 없습니다.</li>
            ) : null}
          </ul>
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
        />
      )}
    </>
  );
}
