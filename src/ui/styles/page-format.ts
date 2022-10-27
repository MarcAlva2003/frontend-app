import { css } from "styled-components"

export const pageFormat = css`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 70px;
  @media (max-width: 1024px){
    padding: 0 40px;  
  }
  @media (max-width: 768px){
    padding: 0 24px;  
  }
  @media (max-width: 520px){
    padding: 0 10px;  
  }
`