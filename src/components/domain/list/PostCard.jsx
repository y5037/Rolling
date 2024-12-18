import styled, { css } from "styled-components";
import defaultImage from "../../../assets/images/common/defaultProfile.png";
import Emoji from "../../ui/badge/Emoji";

const Color = {
  beige: "var(--Beige100)",
  purple: "var(--Purple200)",
  blue: "var(--Blue200)",
  green: "var(--Green200)",
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props.backgroundImageURL
      ? css`
          background-image: url(${(props) => props.backgroundImageURL});
        `
      : css`
          background-color: ${(props) => props.backgroundColor};
        `};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  min-width: fit-content;
  max-height: 300px;

  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  padding: 24px;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const PostCardForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

const PostCardName = styled.p`
  color: var(--Gray900);
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PostCardProfileForm = styled.div`
  background-color: var(--White);
  width: 81px;
  height: 28px;

  display: flex;
  position: relative;
  width: fit-content;
  background: transparent;

  & div:nth-of-type(2) {
    position: absolute;
    left: 16px;
  }
  & div:nth-of-type(3) {
    position: absolute;
    left: 32px;
  }
  & div:nth-of-type(4) {
    position: absolute;
    left: 48px;
  }
`;

const PostCardProfileImage = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border: 1.5px solid var(--White);
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.2);

  position: relative;

  background: var(--White);

  /* 이미지 겹치기: 인덱스에 따라 왼쪽으로 일정량 이동 */
  /* ${({ $index }) => `
    left: ${$index * -16}px;
  `} */

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const PostCardImgCount = styled.div`
  width: max-content;
  /* position: absolute;
  right: ${({ $right }) => ($right ? "-15px" : 0)}; */
  min-width: 28px;
  height: 28px;
  line-height: 30px;
  padding: 0 6px;
  background: var(--White);
  border-radius: 30px;
  color: var(--Gray500);
  font-weight: 400;
`;

const PostCardMessageCount = styled.p`
  color: var(--Gray700);
  font-size: 16px;
  font-weight: 400;
`;

const ReactionsForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  min-width: 215px;

  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 17px;

  gap: 10px;
`;

const EmptyReaction = styled.div`
  min-width: 65px;
  height: 36px;
  line-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: var(--White);
`;

const EmptyReactionEmoji = styled.div`
  margin-right: 5px;
`;

function PostCard({ item }) {
  const {
    name,
    messageCount,
    recentMessages,
    topReactions,
    backgroundColor,
    backgroundImageURL,
  } = item;

  const sliceMessages = recentMessages.slice(0, 3);
  const sliceReactions = topReactions.slice(0, 3);

  // 이미지 경로의 에러 발생시를 대비
  const handleImgError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <>
      <Container
        backgroundColor={backgroundColor}
        backgroundImageURL={backgroundImageURL}
      >
        <PostCardForm>
          <PostCardContent>
            <PostCardName>To. {name}</PostCardName>
            <PostCardProfileForm>
              {sliceMessages.length > 0 ? (
                sliceMessages.map((item) => {
                  const { id, profileImageURL } = item;
                  return (
                    <PostCardProfileImage key={id}>
                      <img
                        onError={handleImgError}
                        src={profileImageURL}
                        alt="프로필 이미지"
                      />
                    </PostCardProfileImage>
                  );
                })
              ) : (
                <PostCardProfileImage src={defaultImage} alt="프로필 이미지" />
              )}
              <PostCardImgCount>+{messageCount}</PostCardImgCount>
            </PostCardProfileForm>
            <PostCardMessageCount>
              {messageCount}명이 작성했어요!
            </PostCardMessageCount>
          </PostCardContent>
          <ReactionsForm>
            {sliceReactions.length > 0 ? (
              sliceReactions.map((item) => {
                return <Emoji key={item.id} item={item} />;
              })
            ) : (
              <>
                <EmptyReaction>
                  <EmptyReactionEmoji>😅</EmptyReactionEmoji>0
                </EmptyReaction>
              </>
            )}
          </ReactionsForm>
        </PostCardForm>
      </Container>
    </>
  );
}

export default PostCard;
