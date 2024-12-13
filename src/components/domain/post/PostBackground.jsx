import styled from "styled-components";

const Color = {
  orange: "var(--Beige100)",
  purple: "var(--Purple200)",
  blue: "var(--Blue200)",
  green: "var(--Green200)",
};

const PostBackground = styled.button`
  width: 168px;
  height: 168px;

  background-color: ${({ option, value }) =>
    option === "image" ? "transparent" : Color[value] ?? Color["orange"]};
  background-image: ${({ option, value }) =>
    option === "image" ? `url(${value})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 16px;
  border: 1px solid none;
  }
`;

export default PostBackground;