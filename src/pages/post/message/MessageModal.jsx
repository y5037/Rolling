import { useState } from "react";
import Modal from "../../../components/ui/modal/Modal";
import GetMessages from "../../../services/GetMessages";

// 클릭하면 모달 출력 (message카드의 id값 받아와야함. 거기에 맞는 데이터 추출)
// 모달의 뒷 배경 블러처리 후 스크롤 비활성화
// API 호출하여 모달에 데이터 추가

function MessageModal({ messageId = 16746 }) {
  const [data, setData] = useState(null);

  const handleLoadMessages = async () => {
    try {
      const response = await GetMessages();
      console.log("id 확인: ", messageId);
      console.log(typeof messageId);
      console.log("API 호출 결과:", response);

      const filterResponse = response.results.filter(
        (messageInfo) => messageInfo.id === messageId
      );

      console.log("filterResponse: ", filterResponse);

      setData(filterResponse.length > 0 ? filterResponse[0] : null);
    } catch (e) {
      console.log("에러 발생: ", e);
    }
  };

  const handleClick = () => {
    handleLoadMessages(messageId);
  };

  return (
    <>
      <button style={{ width: "100px", height: "100px" }} onClick={handleClick}>
        클릭
      </button>
      {data ? (
        <Modal
          id={messageId}
          sender={data.sender}
          profileImageURL={data.profileImageURL}
          relationship={data.relationship}
          createdAt={data.createdAt}
          content={data.content}
        ></Modal>
      ) : (
        <Modal content="데이터를 가져오지 못했습니다."></Modal>
      )}
    </>
  );
}

export default MessageModal;
