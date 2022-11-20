import { pageFormat } from "../../../ui/styles/page-format";
import styled from "styled-components";

export const CompanyIdStyle = styled.div`
  ${pageFormat}
  .company-container{
    margin-top: 60px;
    background-color: #FFFFFF;
    width: 100%;
    padding: 24px;
    border-radius: 12px;
    & .company{
      &-data-row{
        margin-bottom: 12px;
        display: flex;
        &--item:first-child{
          margin-right: 8px;
        }
      }
      &-name{
        /* background-color: red; */
        padding-bottom: 33px;
        margin-bottom: 30px;
        border-bottom: 1px solid ${props => props.theme.greys.grey200};
      }
    }
  }
`;