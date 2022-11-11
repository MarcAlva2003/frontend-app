import styled from "styled-components";

export const InputStyle = styled.div`
  width: 100%;
  input{
    width: 100%;
    height: 36px;
    border-radius: 6px;
    padding-left: 12px;
    border: 1px solid ${props => props.theme.greys.grey400};
    transition: border 0.3s ease;
    color: ${props => props.theme.greys.grey700};
    &::placeholder{
      color: ${props => props.theme.greys.grey400};
    }
    &:focus{
      /* outline: 1px solid red; */
      border: 1px solid ${props => props.theme.blues.blue400};
      outline: none;
    }
  }
`