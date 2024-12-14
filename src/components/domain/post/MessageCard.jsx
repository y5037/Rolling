import styled from "styled-components";
import defaultImage from "../../../assets/images/common/defaultProfile.png";
import Badge from "../../ui/badge/Badge";

const Container = styled.div`
  width: 384px;
  height: 280px;

  background-color: var(--White);

  border-radius: 16px;
  }
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

function MessageCard({ image }) {
  return (
    <Container>
      <MessageCardTop>
        <MessageCardProfile src={image || defaultImage} alt="프로필 이미지" />
        <MessageSenderForm>
          <MessageSenderInfo>
            <MessageFrom>From.</MessageFrom>
            <MessageSender>박인건</MessageSender>
          </MessageSenderInfo>
          <Badge></Badge>
        </MessageSenderForm>
      </MessageCardTop>
      <MessageContent>
        (테스트용) 자바스크립트 말줄임 처리 필요!!! 자바스크립트 말줄임 처리
        필요!!! 자바스크립트 말줄임 처리 필요!!!
        (테스트용)11111111aaaaaaㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ!!!!!
      </MessageContent>
      <MessageCreateAt>2024.01.01</MessageCreateAt>
    </Container>
  );
}

export default MessageCard;
