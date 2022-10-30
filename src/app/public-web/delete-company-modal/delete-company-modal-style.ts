import styled from "styled-components";

export const DeleteCompanyModalStyle = styled.div`
  .delete-company-modal{
    width: 400px;
    max-width: 100%;
    &--message{
      margin-bottom: 24px;
    }
    &--buttons{
      display: flex;
      &__item{
        width: 100%;
        margin-right: 12px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
`