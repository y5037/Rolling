import React from "react";
import styled from "styled-components";

// 모달 오버레이 (배경)
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  /* 트랜지션 추가: 모달이 열리고 닫힐 때 부드럽게 페이드 인/아웃 */
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
`;

// 모달 내용 (메시지와 버튼)
const ModalContent = styled.div`
  background-color: white;
  padding: 40px 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;

  /* 트랜지션 추가: 모달이 열리고 닫힐 때 부드럽게 슬라이드 효과 */
  transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0.9)")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const ModalTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 400;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 25px;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) =>
    props.primary ? "var(--Primary)" : "var(--White)"};
  color: ${(props) => (props.primary ? "var(--White)" : "var(--Gray400)")};
  border: 1px solid
    ${(props) => (props.primary ? "var(--Primary)" : "var(--Gray300)")};
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  // 배경 클릭 시 모달 닫기
  const handleOverlayClick = (e) => {
    // ModalContent를 클릭한 경우에는 닫히지 않도록 방지
    if (e.target === e.currentTarget) {
      onClose(); // 배경 클릭 시 모달 닫기
    }
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent isOpen={isOpen}>
        <ModalTitle>정말 삭제하시겠습니까?</ModalTitle>
        <ModalButtonContainer>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton primary onClick={onConfirm}>
            삭제
          </ModalButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteConfirmationModal;
