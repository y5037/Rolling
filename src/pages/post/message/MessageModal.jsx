import { useEffect, useState } from "react";
import Modal from "../../../components/ui/modal/Modal";
import GetMessages from "../../../services/GetMessages";

function MessageModal({ postId, messageId, onClose, font, setMessageId }) {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(onClose);
  const [selectedMessageId, setSelectedMessageId] = useState(messageId); // messageId 상태 관리
  const [isFont, setIsFont] = useState(null);

  const handleLoadMessage = async () => {
    try {
      const response = await GetMessages(postId);

      const filterResponse = response.results.filter(
        (messageInfo) => messageInfo.id === messageId
      );
      setIsFont(filterResponse[0].font);
      setData(filterResponse[0]);
      setIsModalOpen(true);
    } catch (e) {
      console.log("에러 발생: ", e);
    }
  };

  useEffect(() => {
    // 모달 Hidden 시, messageId 값을 초기화 해서 다시 모달을 출력할 수 있게끔 버그 처리와 동시에 빈 값으로 인한 에러 발생을 막기 위해 if문 추가(12.29_혜림)
    if (messageId) {
      handleLoadMessage();
    }
  }, [messageId]);

  if (!data) return null;

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 모달 Hidden 시, messageId 값을 초기화 해서 다시 모달을 출력할 수 있게끔 버그 처리(12.28_혜림)
    setMessageId(null);
    // window.location.reload();
  };

  // 삭제 시 selectedMessageId를 업데이트하는 함수
  const handleDelete = (messageId) => {
    setSelectedMessageId(messageId);
    window.location.reload();
  };

  return (
    <>
      {isModalOpen ? (
        <Modal
          id={messageId}
          sender={data.sender}
          profileImageURL={data.profileImageURL}
          relationship={data.relationship}
          createdAt={data.createdAt}
          content={data.content}
          onClose={handleCloseModal}
          onDelete={handleDelete}
          font={isFont}
        ></Modal>
      ) : null}
    </>
  );
}

export default MessageModal;
