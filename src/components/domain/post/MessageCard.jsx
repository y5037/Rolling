import styled from "styled-components";
import defaultImage from "../../../assets/images/common/defaultProfile.png";
import Badge from "../../ui/badge/Relation";

const Container = styled.div`
  width: 384px;
  height: 280px;

  background-color: var(--White);

  border-radius: 16px;
`;

const MessageCardTop = styled.div`
  display: flex;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 16px;
  margin-left: 24px;
  margin-right: 24px;

  gap: 14px;
  border-bottom: 1px solid var(--Gray200);
`;

const MessageSenderForm = styled.div``;

const MessageSenderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;
  margin-bottom: 6px;
`;

const MessageCardProfile = styled.img`
  width: 56px;
  height: 56px;

  background-image: ${({ image }) => `url(${image || defaultImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 100px;
`;

const MessageFrom = styled.p`
  color: var(--Black);
  font-size: 20px;
  font-weight: 400;
`;

const MessageSender = styled.p`
  color: var(--Black);
  font-size: 20px;
  font-weight: 700;
`;

const MessageContent = styled.p`
  color: var(--Gray600);

  width: 336px;
  height: 106px;
  font-size: 18px;
  font-weight: 400;

  margin: 16px 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MessageCreateAt = styled.p`
  color: var(--Gray400);
  font-size: 12px;
  font-weight: 400;

  margin: 16px 24px 16px 24px;
`;

function MessageCard({ post }) {
  return (
    <Container>
      <MessageCardTop className="messageCardTop">
        <MessageCardProfile src={post.profileImageURL || defaultImage} alt="프로필 이미지" />
        <MessageSenderForm>
          <MessageSenderInfo>
            <MessageFrom>From.</MessageFrom>
            <MessageSender>{post.sender}</MessageSender>
          </MessageSenderInfo>
          <Badge
            $value={
              post.relationship === "가족" ? "type3" :
                post.relationship === "친구" ? "type4" :
                  post.relationship === "지인" ? "type1" :
                    post.relationship === "동료" ? "type2" :
                      "default" // 여기에 기본값을 설정합니다.
            }
          >
            {post.relationship}
          </Badge>
        </MessageSenderForm>
      </MessageCardTop>
      <MessageContent className="messageContent" style={{ fontFamily: post.font }}>
        {post.content}
      </MessageContent>
      <MessageCreateAt className="messageDate">
        {new Date(post.createdAt).toLocaleDateString('ko-KR')}
      </MessageCreateAt>
    </Container >
  );
}

export default MessageCard;
