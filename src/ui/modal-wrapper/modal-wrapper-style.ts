import styled from "styled-components";

export const ModalWrapperStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000080;
  z-index: -10;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active{
    z-index: 1000;
    opacity: 1;
  }
  .modal-content{
    padding: 24px;
    background-color: #FFFFFF;
    border-radius: 12px;
    max-width: 100%;
  }
`;