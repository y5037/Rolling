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

export default function PostId() {

  //링크이동 
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
  const [loading, setLoading] = useState(true);
  console.log(recentMessages)

  //데이터 불러오기
  useEffect(() => {

    async function getRecipients() {
      try {
        const response = await fetch(`${API_URL}/12-4/recipients/${id}/messages/?page=${page}`);
        const result = await response.json();
        setRecentMessages((prevMessages) => [...prevMessages, ...result.results]);

      } catch (error) {
        console.error('error: ', error);
      } finally {
        setLoading(false);
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

  return (
    <>
      <Navigation />
      <PostHead />
      <div className="postBodyWrap">
        <div className="container">
          <div className="postBodyBox">

            {

              loading ? (
                <p>
                  로딩중
                </p>
              ) :
                recentMessages.length > 0 ? (
                  <>
                    <div className="buttonContainer">
                      <PrimaryButton className="delBtn">
                        롤링페이퍼 삭제하기
                      </PrimaryButton>
                    </div>

                    <div className="postMessageList">

                      <div className="postMessageBox first">
                        <Link to={`/post/${id}/message`}>
                          <div className="LinkIcon">
                            <span className="blind"></span>
                          </div>
                        </Link>
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
                  <p>
                    데이터가 없습니다.
                  </p>
                )
            }
          </div>

          <div id="scroll" ref={ref}>
          </div>

        </div>
      </div>

      <ul className={`linkList ${btnShow ? 'active' : ''}`} >
        <li><HomeButton className="homeBtn" handleHomeClick={handleHomeClick} /></li>
        <li><PlusButton className="addBtn" handleMessageClick={handleMessageClick} /></li>
      </ul>

    </>
  )

}