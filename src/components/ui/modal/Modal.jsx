import styled from "styled-components";
import defaultImg from "../../../assets/images/common/defaultProfile.png";
import iconTrashImg from "../../../assets/images/modal/trash.svg";
import RelationBadge from "../badge/Relation";
import DeleteIconButton from "../button/DeleteIconButton";
import PrimaryButton from "../button/PrimaryButton";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw * (600 / 1920));
  min-width: 600px;
  padding: 40px;
  border-radius: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background: var(--White);
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.2);

  @media (max-width: 768px) {
    min-width: 85%;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
    overflow-y: visible;
  }
`;

const DateText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--Gray400);
  margin-top: 0;

  @media (max-width: 480px) {
    margin-top: 7px;
  }
`;

const ContentText = styled.p`
  height: calc(100vh * (255 / 1200));
  overflow-y: scroll;
  padding: 15px 10px 15px 0;
  font-size: 18px;
  border-top: 1px solid var(--Gray200);
  color: var(--Gray600);
  font-weight: 400;
`;

const Button = styled(PrimaryButton)`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 6px;
  margin: 25px 0 0 0;
  cursor: pointer;
  align-self: center;
  background: var(--Primary);
  color: var(--White);
  font-size: 16px;
  font-weight: 400;
`;

const ModalHead = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const HeadLeft = styled.div`
  display: flex;
  flex: 1;
`;

const HeadRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const UserNameContainer = styled.div``;

const UserName = styled.p`
  margin-bottom: 2px;
  font-size: 20px;
  font-weight: 400;
`;

const Strong = styled.span`
  font-weight: 600;
`;

const ProfileImgContainer = styled.div`
  width: 56px;
  min-width: 56px;
  height: 56px;
  margin-right: 15px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

const ProfileImg = styled.img.attrs({
  // 프로필 이미지 데이터 작업 시 이미지 경로를 prop으로 받아서 이쪽으로 연결 작업 해주시면 됩니다. _12.14 혜림
  src: defaultImg,
})`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const BtnTrash = styled(DeleteIconButton)`
  margin-left: 15px;
  margin-top: -5px;
`;

const Modal = () => {
  const currentDate = new Date().toLocaleDateString();
  const date = currentDate.slice(0, 12);
  return (
    <>
      <Backdrop />
      <ModalContainer>
        <ModalHead>
          <HeadLeft>
            <ProfileImgContainer>
              <ProfileImg />
            </ProfileImgContainer>
            <UserNameContainer>
              <UserName>
                From. <Strong>김동훈</Strong>
              </UserName>
              <RelationBadge $value="type1">동료</RelationBadge>
            </UserNameContainer>
          </HeadLeft>
          <HeadRight>
            <DateText>{date}</DateText>
            <BtnTrash />
          </HeadRight>
        </ModalHead>
        <ContentText>
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
          또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
          조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력
          모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강,
          체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요.
          건강, 체력 모두 조심 또 하세요!
        </ContentText>
        <Button>확인</Button>
      </ModalContainer>
    </>
  );
};

export default Modal;
