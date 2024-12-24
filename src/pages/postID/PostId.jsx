import MessageCard from "../../components/domain/post/MessageCard";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/ui/nav/Navigation";
import { HomeButton, PlusButton } from "../../components/ui/button/RoundButton";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import PostHead from "../../components/domain/postId/postHead/PostHead";
import { API_URL } from "../../constant/VariableSettings";
import { useInView } from 'react-intersection-observer';

import "./PostId.css";
import Loading from "../../components/ui/loading/Loading";

export default function PostId() {

  //링크이동 
  const navigate = useNavigate();

  //버튼 링크 이동 함수
  function handleHomeClick() {
    navigate("/");
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

  //데이터 전체 개수 상태관리
  const [count, setCount] = useState();

  //데이터 불러오기
  useEffect(() => {

    async function getRecipients() {
      try {
        const response = await fetch(`${API_URL}/12-4/recipients/${id}/messages/?limit=${count}`);
        const result = await response.json();
        setRecentMessages(result.results);
        setCount(result.count);

      } catch (error) {
        console.error('error: ', error);
      } finally {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
      }

    }

    getRecipients();

  }, [id, page]);

  //스크롤이벤트
  useEffect(() => {

    if (recentMessages.length > 0) {
      const scrollEvent = function scrollShowEvent() {
        if (window.scrollY > 50) {
          setBtnShow(true);
        } else {
          setBtnShow(false);
        }
      }
      window.addEventListener('scroll', scrollEvent);
    }

  }, [recentMessages])

  //무한스크롤
  useEffect(() => {

    if (inView && !loading) {
      setPage((prevPage) => prevPage + 1);
    }

  }, [inView, loading])

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
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("삭제 실패");
        }
        navigate('/list');
      })
      .catch((error) => {
        console.error('error :', error);
        alert('삭제 실패. 다시 시도해주세요.');
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
              <PrimaryButton size="small" className="delBtn" onClick={handleDeleteRollingPaper}>
                롤링페이퍼 삭제하기
              </PrimaryButton>
            </div>
            {

              loading ? (

                <Loading />

              ) :
                recentMessages.length > 0 ? (
                  <>
                    <div className="postMessageList">

                      <div className="postMessageBox first">
                        <div className="postMessageLinkBox" onClick={handleNavigateToPostMessage}>
                          <div className="LinkIcon">
                            <span className="blind"></span>
                          </div>
                        </div>
                      </div>

                      {
                        recentMessages.map((post, i) => {
                          return (
                            <div className="postMessageBox" key={i}>
                              <MessageCard post={post} />
                            </div>
                          )
                        })
                      }

                    </div>
                  </>
                ) : (

                  <div className="postMessageList">
                    <div className="postMessageBox first">
                      <div className="postMessageLinkBox" onClick={handleNavigateToPostMessage}>
                        <div className="LinkIcon">
                          <span className="blind"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            }
          </div>

          <div id="scroll" ref={ref}>
          </div>

        </div>
      </div>

      <ul className={`linkList ${btnShow ? 'active' : ''}`} >
        <li><HomeButton className="homeBtn" handleHomeClick={handleHomeClick} /></li>
        <li><PlusButton className="addBtn" onClick={handleNavigateToPostMessage} /></li>
      </ul>

    </>
  )

}