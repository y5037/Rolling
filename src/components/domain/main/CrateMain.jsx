import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import groupImage from "../../../assets/images/main/section1.png";
import groupTwoImage from "../../../assets/images/main/section2.png";
import Navigation from "../../../components/ui/nav/Navigation.jsx";
import { Link } from "react-router-dom";
import PrimaryButton from "../../ui/button/PrimaryButton.jsx";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 24px;
    padding: 0;
    overflow-x: hidden;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
`;

const CreateMainWrapper = styled.div`
  width: 1200px;
  height: 324px;
  background-color: #f5f7fe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px auto 30px auto;
  gap: 30px;
  border-radius: 16px;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    margin: 113px 0 24px 0;
    gap: 30px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: left;
    padding: 24px;
    width: 100%;
  }

  @media (max-width: 360px) {
    .pc-text,
    .tablet-text {
      display: none;
    }

    .mobile-text {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: auto;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-align: center;
      padding: 8px;
      box-sizing: border-box;
    }
  }
`;

const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px auto 108px 60px;
  padding-bottom: 60px;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
    width: 100%;
  }
`;

const FrameWrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px auto 108px 60px;
  padding-bottom: 60px;
  gap: 16px;
  order: 2;

  @media (max-width: 768px) {
    order: 1;
    align-items: flex-start;
    text-align: left;
    margin: 0;
    width: 100%;
  }
`;

const Frame = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 50px;
  background-color: #9935ff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 206px 16px 0;
`;

const FrameText = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: #555;
  font-weight: bold;
  text-align: left;

  .pc-text,
  .tablet-text,
  .mobile-text {
    display: none;
  }

  .emoji {
    display: block;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    .pc-text {
      display: none;
    }
    .tablet-text {
      display: inline;
    }
    .emoji .pc-text {
      display: none;
    }
  }

  @media (max-width: 768px) and (min-width: 361px) {
    text-align: left;
    line-height: 1.5;
    font-size: 20px;

    .tablet-text {
      display: inline-block; /* 태블릿에서 표시 */

      overflow: visible; /* 넘치는 텍스트 표시 */
      text-overflow: clip; /* 말줄임표 제거 */
      max-width: 100%; /* 너비 제한 */
    }
    .emoji .tablet-text {
      display: block;
    }
  }

  @media (max-width: 360px) {
    text-align: center;
    line-height: 1.5;
    font-size: 18px;

    .mobile-text {
      display: block;
    }
    .emoji .mobile-text {
      display: block;
      white-space: nowrap; /* 한 줄로 유지 */
      overflow: hidden; /* 넘치는 텍스트 숨김 */
      text-overflow: ellipsis; /* 말줄임표 처리 */
      max-width: 100%;
      padding: 0 10px;
    }
  }
`;
const Tb = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const Emoji = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: normal;
  opacity: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  margin: 60px 0px 60px auto;

  @media (max-width: 768px) {
    order: 2;
    margin: 20px auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 360px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const BrowseButtonContainer = styled(PrimaryButton)`
  display: flex;
  width: 280px;
  height: 56px;
  border-radius: 12px;
  background-color: #9935ff;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 40px auto;
`;

const CreateMainOwn = () => (
  <>
    <GlobalStyle />
    <Navigation />
    <CreateMainWrapper>
      <FrameWrapper>
        <Frame>Point. 01</Frame>
        <FrameText>
          <Tb />
          <span className="pc-text">
            누구나 손쉽게, 온라인
            <br />
            롤링 페이퍼를 만들 수 있어요.
          </span>
          <div className="Tb">
            <span className="tablet-text">
              누구나 손쉽게 ,온라인
              <br />
              롤링 페이퍼를 만들 수 있어요.
            </span>
          </div>
          <span className="mobile-text">
            누구나 손쉽게, 온라인
            <br />
            롤링 페이퍼를 만들 수 있어요.
          </span>
          <br />

          <Emoji>
            <span className="pc-text">로그인 없이 자유롭게 만들 수 있어요</span>
            <span className="tablet-text">
              로그인 없이 자유롭게 만들 수 있어요
            </span>
            <span className="mobile-text">
              로그인 없이 자유롭게 만들 수 있어요
            </span>
          </Emoji>
        </FrameText>
      </FrameWrapper>
      <ImageWrapper>
        <img src={groupImage} alt="point1" />
      </ImageWrapper>
    </CreateMainWrapper>
  </>
);

const CreateMainTwo = () => (
  <>
    <GlobalStyle />
    <NavigationWrapper />
    <CreateMainWrapper>
      <Emoji />
      <FrameWrapperTwo>
        <Frame>Point. 02</Frame>
        <FrameText>
          <div className="pc-text">
            서로에게 이모지로, 감정을
            <br />
            표현해보세요
          </div>

          <div className="tablet-text">
            서로에게 이모지로, 감정을
            <br />
            표현해보세요
          </div>

          <div className="mobile-text">
            서로에게 이모지로, 감정을
            <br />
            표현해보세요
          </div>
          <br />
          <Emoji>
            <span className="pc-text">
              롤링 페이퍼에 이모지를 추가 할 수 있어요
            </span>
            <span className="tablet-text">
              롤링 페이퍼에 이모지를 추가 할 수 있어요
            </span>
            <span className="mobile-text">
              롤링 페이퍼에 이모지를 추가 할 수 있어요
            </span>
          </Emoji>
        </FrameText>
      </FrameWrapperTwo>
      <ImageWrapper>
        <img src={groupTwoImage} alt="point2" />
      </ImageWrapper>
    </CreateMainWrapper>
  </>
);

function CreateMain() {
  return (
    <>
      <CreateMainOwn />
      <CreateMainTwo />
      <Link to="/list">
        <BrowseButtonContainer>구경해보기</BrowseButtonContainer>
      </Link>
    </>
  );
}

export default CreateMain;
