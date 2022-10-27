import styled from "styled-components";
import { pageFormat } from "../../../ui/styles/page-format";

export const HomeStyle = styled.div`
  .home-background{
    padding-top: 60px;
  }
  .home-content{
    ${pageFormat}
  }
  .home{
    background-color: #FFFFFF;
    width: 100%;
    padding: 24px;
    border-radius: 12px;
    &-title{
      margin-bottom: 30px;
    }
    .company-card{
      padding: 20px 10px;
      border-top: 1px solid ${props => props.theme.greys.grey200};
      &:last-child{
        border-bottom: 1px solid ${props => props.theme.greys.grey200};
      }
    }
  }
  .home-title{
    display: flex;
    justify-content: space-between;
  }
`