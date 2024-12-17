import React from "react";
import styled from "styled-components";
import completedIcon from "../../../assets/images/toast/completed.svg"; // 경로 수정
import closeIcon from "../../../assets/images/toast/close.svg"; // 경로 수정

// 🛠️ Toast 스타일 정의
const ToastWrapper = styled.div`
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom) + 50px);
  left: 50%;
  transform: translate(-50%);
  width: 520px;
  height: 64px;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.8); /* 검은색 배경 사용 */
  color: var(--White); /* 흰색 텍스트 사용 */
  font-size: 16px; /* 글자 크기 설정 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex; /* 아이콘과 텍스트가 가로로 배치되도록 설정 */
  align-items: center; /* 아이콘과 텍스트 수직 정렬 */
  justify-content: space-between; /* 아이콘과 텍스트 간격을 적절하게 분배 */

  @media (max-width: 768px) {
    width: auto;
    left: 20px;
    right: 20px;
    transform: translate(0);
  }
`;

const Icon = styled.img`
  width: 24px; /* 아이콘 크기 설정 */
  height: 24px;
  cursor: ${({ $none }) =>
    $none ? "auto" : "pointer"}; /* 클릭 가능하게 설정 */
`;

const TextWrapper = styled.div`
  display: flex;
`;

const UrlText = styled.span`
  margin-left: 12px; /* 체크박스 아이콘과 'URL' 텍스트 사이의 간격을 12px로 설정 */
`;

const Toast = () => {
  return (
    <ToastWrapper>
      <TextWrapper>
        <Icon $none src={completedIcon} alt="Completed" />
        <UrlText>URL이 복사되었습니다!</UrlText>
      </TextWrapper>
      <Icon src={closeIcon} alt="Close" />
    </ToastWrapper>
  );
};

export default Toast;
