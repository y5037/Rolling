import MessageCard from "../../components/domain/post/MessageCard";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/ui/nav/Navigation";
import { HomeButton, PlusButton } from "../../components/ui/button/RoundButton";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import PostHead from "../../components/domain/postId/postHead/PostHead";
import { API_URL } from "../../constant/VariableSettings";
import { useInView } from "react-intersection-observer";

import "./PostId.css";
import Loading from "../../components/ui/loading/Loading";

export default function PostId() {
  const navigate = useNavigate();

  //버튼 링크 이동 함수
  function handleHomeClick() {
    navigate("/");
  }

  //버튼 링크 이동 함수
  function handleMessageClick() {
    navigate(`/post/${id}/message`);
  }

  //무한스크롤
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);

  //리스트페이지 파라미터
  const { id } = useParams();

  //스크롤 이벤트 상태관리
  const [btnShow, setBtnShow] = useState(false);

  //데이터 상태관리
  const [recentMessages, setRecentMessages] = useState([]);

  //로딩 상태관리
  const [loading, setLoading] = useState(true);

  //데이터 불러오기
  useEffect(() => {
    async function getRecipients() {
      try {
        const response = await fetch(
          `${API_URL}/12-4/recipients/?results=${id}`
        );
        const result = await response.json();

        const recipient = result.results.find((rec) => rec.id === parseInt(id));

        if (recipient && recipient.recentMessages) {
          setRecentMessages(recipient.recentMessages);
        } else {
          setRecentMessages([]);
        }
      } catch (error) {
        console.error("error: ", error);
      } finally {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
      }
    }

    getRecipients();
  }, [id]);

  //스크롤이벤트
  useEffect(() => {
    const scrollEvent = function scrollShowEvent() {
      if (window.scrollY > 50) {
        setBtnShow(true);
      } else {
        setBtnShow(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
  }, []);

  // 메시지 작성 페이지 이동 함수
  function handleNavigateToPostMessage() {
    if (!id) {
      console.error("Recipient ID가 전달되지 않았습니다");
      return;
    }
    navigate(`/post/${id}/messages/`);
  }

  return (
    <>
      <Navigation />
      <PostHead />
      <div className="postBodyWrap">
        <div className="container">
          <div className="postBodyBox">
            {loading ? (
              <Loading />
            ) : recentMessages.length > 0 ? (
              <>
                <div className="buttonContainer">
                  <PrimaryButton className="delBtn">
                    롤링페이퍼 삭제하기
                  </PrimaryButton>
                </div>

                <ul className="postMessageList">
                  {recentMessages.map((post, i) => {
                    return (
                      <li key={i}>
                        <MessageCard post={post} />
                      </li>
                    );
                  })}
                </ul>

                <PrimaryButton onClick={handleNavigateToPostMessage}>
                  메시지 작성하기
                </PrimaryButton>
              </>
            ) : (
              <p>데이터가 없습니다.</p>
            )}
          </div>

          <div id="scroll" ref={ref}></div>
        </div>
      </div>
      <ul className={`linkList ${btnShow ? "active" : ""}`}>
        <li>
          <HomeButton className="homeBtn" handleClick={handleHomeClick} />
        </li>
        {/* 메세지 작성 페이지 이동 */}
        <li>
          <PlusButton
            className="addBtn"
            onClick={handleNavigateToPostMessage}
          />
        </li>
      </ul>
    </>
  );
}
