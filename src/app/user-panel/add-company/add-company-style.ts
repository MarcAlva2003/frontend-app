import { pageFormat } from "../../../ui/styles/page-format";
import styled from "styled-components";

export const AddCompanyStyle = styled.div`
  width: 100%;
  ${pageFormat}
  .content{
    margin-top: 60px;
    background-color: #FFFFFF;
    width: 100%;
    padding: 24px;
    border-radius: 12px;
    &-title{
      padding-bottom: 33px;
      margin-bottom: 30px;
      border-bottom: 1px solid ${props => props.theme.greys.grey200};
    }
  }
  .form-inputs{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
    column-gap: 30px;
  }
  .input-group{
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin-bottom: 24px;
    & label{
      margin-bottom: 4px;
    }
    & .error-field{
      margin-top: 4px;
    }
  }
  .form-submit{
    max-width: 300px;
  }
`