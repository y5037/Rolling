import { Link } from "react-router-dom";
import React from "react";
import styled, { css } from "styled-components";
import section1Img from "../../../assets/images/main/section1.svg";
import section2Img from "../../../assets/images/main/section2.png";
import Navigation from "../../../components/ui/nav/Navigation.jsx";
import PrimaryButton from "../../ui/button/PrimaryButton.jsx";

const Container = styled.div`
  width: 1200px;
  margin: 125px auto 0;

  @media (max-width: 1248px) {
    width: auto;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding-bottom: calc(env(safe-area-inset-bottom) + 150px);
  }
`;

const CreateMainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 0;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: var(--Surface);

  @media (max-width: 1248px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${({ $reverse }) =>
      $reverse &&
      css`
        flex-direction: column-reverse;
      `};
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    overflow: hidden;
  }
`;

const FrameWrapper1 = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1248px) {
    width: 100%;
    padding-left: 40px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding: 0 24px;
  }

  br {
    @media (max-width: 1248px) {
      display: none;
    }
  }

  p:last-child {
    margin-bottom: 15px;
  }
`;

const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 70px;

  @media (max-width: 1248px) {
    width: 100%;
    margin-right: 0;
    padding-left: 40px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    padding: 0 24px;
  }

  br {
    @media (max-width: 1248px) {
      display: none;
    }
  }

  p:last-child {
    margin-bottom: 35px;
  }
`;

const Keyword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 0 12px;
  margin-bottom: 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  background-color: var(--Primary);
  color: var(--White);
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4em;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--Gray500);
`;

const EmptyBox = styled.div`
  height: 30px;
`;

const ImageWrapper = styled.div`
  display: flex;

  img {
    width: 100%;
  }

  @media (max-width: 1248px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    ${({ $mobile }) =>
      $mobile &&
      css`
        width: 125%;
      `}
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    padding: 0 24px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: calc(env(safe-area-inset-bottom) + 24px);
  }
`;

const LinkButton = styled(PrimaryButton)`
  display: flex;
  width: 280px;
  height: 56px;
  border-radius: 12px;
  background-color: var(--Primary);
  color: var(--White);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 40px auto;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Section1 = () => (
  <>
    <CreateMainWrapper>
      <FrameWrapper1>
        <Keyword>Point. 01</Keyword>
        <Title>
          누구나 손쉽게, 온라인
          <br /> 롤링 페이퍼를 만들 수 있어요
        </Title>
        <Description>로그인 없이 자유롭게 만들 수 있어요</Description>
      </FrameWrapper1>
      <ImageWrapper $mobile>
        <img src={section1Img} alt="point1" />
      </ImageWrapper>
    </CreateMainWrapper>
  </>
);

const Section2 = () => (
  <>
    <CreateMainWrapper $reverse>
      <ImageWrapper>
        <img src={section2Img} alt="point2" />
      </ImageWrapper>
      <FrameWrapper2>
        <Keyword>Point. 02</Keyword>
        <Title>
          서로에게 이모지로, 감정을
          <br /> 표현해보세요{" "}
        </Title>
        <Description>롤링 페이퍼에 이모지를 추가 할 수 있어요</Description>
      </FrameWrapper2>
    </CreateMainWrapper>
  </>
);

function CreateMain() {
  return (
    <>
      <Navigation />
      <Container>
        <Section1 />
        <EmptyBox />
        <Section2 />
        <Link to="/list">
          <ButtonContainer>
            <LinkButton>구경해보기</LinkButton>
          </ButtonContainer>
        </Link>
      </Container>
    </>
  );
}

export default CreateMain;
