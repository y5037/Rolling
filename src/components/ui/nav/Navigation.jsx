import styled from "styled-components";
import logoImg from "../../../assets/images/nav/logo.svg";
import OutlinedButton from "../button/OutlinedButton";

const LinkButton = styled(OutlinedButton)`
  display: ${(props) => (props.hide ? "none" : "block")};
  min-width: 157px;
  height: 42px;
`;

const Logo = styled.img`
  width: 106px;
  height: 42px;
`;

const Content = styled.div`
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

const NavigationBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid var(--Gray300);
  z-index: 1;
  box-sizing: border-box;
`;

function Navigation() {
  return (
    <NavigationBar>
      <Content>
        <Logo src={logoImg} alt="Rolling" />
        {/* hide 속성의 유무에 따라 버튼이 활성화/비활성화 됩니다. _12.13 혜림 */}
        <LinkButton hide>롤링 페이퍼 만들기</LinkButton>
      </Content>
    </NavigationBar>
  );
}

export default Navigation;