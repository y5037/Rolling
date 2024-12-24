import { useEffect, useState } from "react";
import Modal from "../../../components/ui/modal/Modal";
import GetMessages from "../../../services/GetMessages";

// 클릭하면 모달 출력 (message카드의 id값 받아와야함. 거기에 맞는 데이터 추출)
// 모달의 뒷 배경 블러처리 후 스크롤 비활성화
// API 호출하여 모달에 데이터 추가

function MessageModal({ postId, messageId, onClose }) {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(onClose);

  const handleLoadMessages = async () => {
    try {
      const response = await GetMessages(postId);

      const filterResponse = response.results.filter(
        (messageInfo) => messageInfo.id === messageId
      );

      setData(filterResponse.length > 0 ? filterResponse[0] : null);
      setIsModalOpen(true);
    } catch (e) {
      console.log("에러 발생: ", e);
    }
  };

  useEffect(() => {
    handleLoadMessages();
  }, [messageId]);

  if (!data) return null;

  // const handleClick = () => {
  //   handleLoadMessages(messageId);
  //   setIsModalOpen(true);
  // };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        ></Modal>
      ) : null}
    </>
  );
}

export default MessageModal;
