import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-container{
    width: 100%;
    max-width: 500px;
    background: red;
    padding: 24px;
    border-radius: 12px;
    background-color: #FFFFFF;
  }
  .login-header{
    margin-bottom: 16px;
  }
  .input-group{
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    label{
      margin-bottom: 4px;
    }
    input{
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
  }
  .error-message{
    margin-bottom: 12px;
  }
`