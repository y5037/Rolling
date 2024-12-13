import styled from "styled-components";

const StyledBadge = styled.div`
  color: var(--Beige500);
  background-color: var(--Beige100);
  padding: 4px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

function Badge() {
  return <StyledBadge>지인</StyledBadge>; // 예시 텍스트
}

export default Badge;
