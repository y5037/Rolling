import { useEffect, useState } from "react";
import Modal from "../../../components/ui/modal/Modal";
import GetMessages from "../../../services/GetMessages";

function MessageModal({ postId, messageId, onClose }) {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(onClose);
  const [selectedMessageId, setSelectedMessageId] = useState(messageId); // messageId 상태 관리

  const handleLoadMessage = async () => {
    try {
      const response = await GetMessages(postId);

      const filterResponse = response.results.filter(
        (messageInfo) => messageInfo.id === messageId
      );

      setData(filterResponse[0]);
      setIsModalOpen(true);
    } catch (e) {
      console.log("에러 발생: ", e);
    }
  };

  useEffect(() => {
    handleLoadMessage();
  }, [messageId]);

  if (!data) return null;

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        ></Modal>
      ) : null}
    </>
  );
}

export default MessageModal;
