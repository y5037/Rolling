import { useEffect, useState } from "react";
import GetPostCard from "../../../services/GetRecipients";
import "./ViewPost.css";

function ViewPost() {
  const [postCard, setPostCard] = useState([]);

  const loadPostCard = async () => {
    try {
      const response = await GetPostCard();
      setPostCard(response.results);
    } catch (error) {
      console.error("상품 정보 로드 실패:", error.message);
    }
  };

  useEffect(() => {
    loadPostCard();
  }, []);

  return (
    <>
      {postCard.map((post) => (
        <div className="PostCard-Container">
          <div className="PostCard-Form">
            <div className="PostCard-Wrap" key={post.id}>
              <div className="PostCard-Content">
                <p className="Name">To. {post.name}</p>
                <p className="messageProfileImage">{post.messageCount}</p>
                <p className="messageCount">
                  {post.messageCount}명이 작성했어요!
                </p>
              </div>
              <div className="Reactions-Form">
                {post.topReactions.map((reactions) => (
                  <p className="Reaction-Content">
                    {reactions.emoji} {reactions.count}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ViewPost;
