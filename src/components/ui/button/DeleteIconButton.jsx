import styled from "styled-components";
import deleteIcon from "../../../assets/images/button/delete_icon.png";
import deleteHoverIcon from "../../../assets/images/button/delete_hover_icon.png";

const DeleteIconButton = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  border: 1px solid var(--Gray300);
  background: url(${deleteIcon}) no-repeat center;
  border-radius: 6px;
  transition: all 0.3s;

  &:disabled {
    background: var(--Gray300) url(${deleteHoverIcon}) no-repeat center;
    border: 0;
    cursor: auto;
  }

  &:not(:disabled):hover {
    background-color: var(--Gray100);
  }
`;

export default DeleteIconButton;
