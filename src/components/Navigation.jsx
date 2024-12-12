import styled from "styled-components";
import logoImg from "../assets/logo.png";

const Logo = styled.img`
  width: 107px;
  height: 42px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 0 24px;
  margin: 0 auto;
  height: 64px;
  line-height: 64px;
  box-sizing: border-box;
`;

const Navigation = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid var(--Gray300);
  z-index: 1;
  box-sizing: border-box;
`;

function Nav() {
  return (
    <Navigation>
      <Container>
        <Logo src={logoImg} alt="Rolling" />
        {/* 롤링페이퍼 버튼은 해당 컴포넌트가 작업 되면 진행 예정 */}
      </Container>
    </Navigation>
  );
}

export default Nav;
