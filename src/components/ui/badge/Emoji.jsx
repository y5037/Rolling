import styled from "styled-components";

const LikeNum = styled.p`
  color: var(--White);
`;

const EmojiIcon = styled.div`
  margin-right: 5px;
  font-size: 20px;
`;

const EmojiContainer = styled.div`
  min-width: 65px;
  height: 36px;
  line-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
`;

function Emoji({ item }) {
  const { emoji, count } = item;
  return (
    <EmojiContainer>
      <EmojiIcon>{emoji}</EmojiIcon>
      <LikeNum>{count}</LikeNum>
    </EmojiContainer>
  );
}

export default Emoji;
