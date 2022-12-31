import styled from "styled-components";

export const SelectStyle = styled.div`
  width: 100%;
  select{
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid ${props => props.theme.greys.grey400};
    transition: border 0.3s ease;
    color: ${props => props.theme.greys.grey700};
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:hover{
      cursor: pointer;
    }
    &:focus{
      border: 1px solid ${props => props.theme.blues.blue400};
      outline: none;
    }
  }
  .select-wrapper{
    position: relative;
    &--icon{
      position: absolute;
      height: 100%;
      top: 0;
      display: flex;
      align-items: center;
      right: 12px;
    }
  }
`