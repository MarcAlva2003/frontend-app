import styled from "styled-components";

export const InputCalendarStyle = styled.div`
  width: 100%;
  input{
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid ${props => props.theme.greys.grey400};
    transition: border 0.3s ease;
    color: ${props => props.theme.greys.grey700};
    border-radius: 6px;
    &:focus{
      border: 1px solid ${props => props.theme.blues.blue400};
      outline: none;
    }
  }
`