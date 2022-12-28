import { pageFormat } from "../../../ui/styles/page-format";
import styled from "styled-components";

export const ProfileStyle = styled.div`
  .profile-container{
    ${pageFormat};
    margin-top: 60px;
    .profile{
      border-radius: 12px;
      background-color: #FFFFFF;
      padding: 24px;
      &-title{
        padding-bottom: 30px;
        border-bottom: 1px solid ${props => props.theme.greys.grey200};
      }
      &-body{
        padding: 20px 10px 0;
        &-row{
          &.username-row{
            margin-bottom: 18px;
          }
          margin-bottom: 8px;
          display: flex;
          &:last-child{
            margin-bottom: 0;
          }
          &--item{
            &:first-child{
              margin-right: 12px;
            }
          }
        }
      }
    }
  }
  .modify-button{
    cursor: pointer;
    margin-left: 8px;
    p{
      user-select: none;
      color: ${props => props.theme.blues.blue300};
    }
    &:hover{
      p{
        color: ${props => props.theme.blues.blue500};
        text-decoration: underline;
      }
    }
    &:active{
      p{
        color: ${props => props.theme.blues.blue800};
        text-decoration: underline;
      }
    }
  }
  .modal{
    width: 400px;
    &-title{
      margin-bottom: 24px;
    }
    &-input{
      margin-bottom: 24px;
      input{
        width: 100%;
      }
    }
    &-buttons{
      display: flex;
      &--button{
        width: 100%;
        &:first-child{
          margin-right: 12px;
        }
      }
    }
  }
`