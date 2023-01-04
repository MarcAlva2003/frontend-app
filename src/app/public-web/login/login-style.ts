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
  }
  .error-message{
    margin-bottom: 12px;
  }
  .home-option,
  .register-option{
    margin-top: 30px;
    span{
      text-decoration: underline;
      color: ${props => props.theme.blues.blue400};
      font-weight: 500;
      &:hover{
        cursor: pointer;
        color: ${props => props.theme.blues.blue600};
      }
    }
  }
`