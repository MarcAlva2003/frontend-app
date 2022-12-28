import { pageFormat } from "../../../ui/styles/page-format";
import styled from "styled-components";

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
      &-name,
      &-text{
        margin-bottom: 12px;
      }
      &-buttons{
        display: flex;
        &--button{
          margin-right: 12px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
  }
  .companies-empty{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    &--title{
      margin-bottom: 32px;
    }
    &--message{
      padding: 8px;
      display: flex;
      align-items: center;
      &__icon{
        margin-right: 8px;
      }
    }
  }
  .home-title{
    display: flex;
    justify-content: space-between;
    &--button{
      width: fit-content;
    }
  }
`