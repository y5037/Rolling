import MessageCard from "../../components/domain/post/MessageCard";
import "./PostId.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/ui/nav/Navigation";
import { HomeButton, PlusButton } from "../../components/ui/button/RoundButton";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { useEffect, useState } from "react";
import PostHead from "../../components/domain/postId/postHead/PostHead";


export default function PostId() {

  /*
 const { postId } = useParams();
  
  const [message, setRecipients] = useEffect();

  useEffect(() => {

    async function getRecipients() {
      try {
        const response = await fetch(`https://rolling-api.vercel.app/12-4/recipients/${id}`);
        const result = await response.json();
        console.log(result);
        setRecipients(result.data);
      } catch (error) {
        console.error('error: ', error);
      }
    }

    getRecipients();

  }, [postId]);
  */

  const [btnShow, setBtnShow] = useState(false);

  useEffect(() => {

    const scrollEvent = function scrollShowEvent() {
      if (window.scrollY > 50) {
        setBtnShow(true);
      } else {
        setBtnShow(false);
      }
    }

    window.addEventListener('scroll', scrollEvent);

  }, [])

  return (
    <>
      <Navigation />
      <PostHead />
      <div className="postBodyWrap">
        <div className="container">
          <div className="postBodyBox">

            <div className="buttonContainer">
              <PrimaryButton className="delBtn">
                롤링페이퍼 삭제하기
              </PrimaryButton>
            </div>

            <ul className="postMessageList">
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <MessageCard />
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <ul className={`linkList ${btnShow ? 'active' : ''}`} >
        <li><HomeButton className="homeBtn" /></li>
        <li><PlusButton className="addBtn" /></li>
      </ul>

    </>
  )

}