import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header-background{
    width: 100%;
    height: 90px;
    background-color: ${props => props.theme.type.white};
  }
  .header-content{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav ul {
    display: flex;
    li {
      margin-left: 18px;
    }
  }
  .logout-button{
    cursor: pointer;
  }
  @media (max-width: 1024px){
    .header-content{
      padding: 0 40px;
    }
  }
  @media (max-width: 768px){
    .header-content{
      padding: 0 24px;
    }
  }
  @media (max-width: 520px){
    .header-content{
      padding: 0 10px;
    }
  }
`