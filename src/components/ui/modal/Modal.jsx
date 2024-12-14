import styled from "styled-components";

const Title = styled.h1`
  with: 600px;
  heiht: 476px;
  font-size: 35px;
  color: #9c27b0;
  margin-bottom: 115px;
`;

const Wrapper = styled.div`
  padding: 5em;
  background: #9c27b0;
  text-align: center;
  color: yellow;
  margin-bottom: 115px;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 476px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

const DialogBox = styled.div`
  width: 600px;
  height: 476px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.2);
  background-color: white;
  z-index: 10001;
  padding: 20px;
  overflow: auto;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const Content = styled.div`
  width: 520px;
  height: 256px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 위쪽 여백을 채워 아래로 밀어내기 */
  justify-content: flex-end; /* 하단으로 정렬 */
`;

const Input = styled.textarea`
  with: 520px;
  height: 256px;
  padding: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  overflow-y: auto;
`;

const Button = styled.button`
  background-color: #9c27b0;
  color: white;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 0;
`;

const Modal = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <Backdrop />
      <ModalContainer>
        <DialogBox>
          <Title>메시지 카드 작성</Title>
          <DateText>{currentDate}</DateText>

          <Content>
            <Input placeholder="메시지를 입력하세요" />
            <Button>확인</Button>
          </Content>
        </DialogBox>
      </ModalContainer>
    </>
  );
};

const App = () => {
  return (
    <Wrapper>
      <Modal />
    </Wrapper>
  );
};

export default App;
