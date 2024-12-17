import styled from "styled-components";
import defaultImage from "../../../assets/images/common/defaultProfile.png";

const Color = {
  orange: "var(--Beige100)",
  purple: "var(--Purple200)",
  blue: "var(--Blue200)",
  green: "var(--Green200)",
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  background-color: ${({ option, value }) =>
    option === "image" ? "transparent" : Color[value] ?? Color["purple"]};
  background-image: ${({ option, value }) =>
    option === "image" ? `url(${value})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;

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
  font-weight: 700;
`;

const PostCardProfileForm = styled.div`
  background-color: var(--White);
  width: 81px;
  height: 28px;

  display: flex;
  position: relative;
  width: fit-content;
`;

const PostCardProfileImage = styled.img`
  background-color: var(--Blue200);
  width: 28px;
  height: 28px;

  border: 1.5px solid var(--White);
  border-radius: 30px;

  background-image: ${({ image }) => `url(${image || defaultImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;

  /* 이미지 겹치기: 인덱스에 따라 왼쪽으로 일정량 이동 */
  ${({ index }) => `
    left: ${index * 16}px;
  `}
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

  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 17px;

  gap: 10px;
`;

const ReactionContent = styled.p`
  color: var(--White);
  background-color: rgba(0, 0, 0, 0.54);

  font-size: 16px;
  font-weight: 400;

  width: fit-content;
  max-width: 65px;
  height: 36px;

  border-radius: 32px;
  padding: 8px 12px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function PostCard() {
  return (
    <>
      <Container>
        <PostCardForm>
          <PostCardContent>
            <PostCardName>To. 박인건</PostCardName>
            <PostCardProfileForm>
              <PostCardProfileImage
                src={defaultImage}
                alt="프로필 이미지"
                // index={0}
              />
              <PostCardProfileImage
                src={defaultImage}
                alt="프로필 이미지"
                // index={1}
              />
              <PostCardProfileImage
                src={defaultImage}
                alt="프로필 이미지"
                // index={2}
              />
            </PostCardProfileForm>
            <PostCardMessageCount>30명이 작성했어요!</PostCardMessageCount>
          </PostCardContent>
          <ReactionsForm>
            <ReactionContent>👍 10</ReactionContent>
            <ReactionContent>👍 15</ReactionContent>
            <ReactionContent>👍 23</ReactionContent>
          </ReactionsForm>
        </PostCardForm>
      </Container>
    </>
  );
}

export default PostCard;
