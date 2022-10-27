import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* SIZES */
  &.large{
    padding: 0 20px;
    height: 40px;
  }

  /* RADIUS */
  &.low{border-radius: 4px;}
  &.medium{border-radius: 8px;}
  &.hight{border-radius: 12px;}

  /* TYPES */
  /* PRIMARY */
  &.primary{
    background-color: ${props => props.theme.blues.blue100};
    cursor: pointer;
    transition-duration: .2s;
    transition-property: background-color, outline;
    p{
      font-weight: 600;
      /* color: ${props => props.theme.greys.grey050}; */
      color: #FFFFFF;
      /* transition: font-size ; */
    }
    &.active{
      &:hover{
      background-color: ${props => props.theme.blues.blue200};
    }
    &:active{
      background-color: ${props => props.theme.blues.blue300};
      outline: 3px solid ${props => props.theme.blues.blue050};
      p{
        transform: scale(1.03);
      }
    }
    }
    &.disabled{
      background-color: ${props => props.theme.greys.grey200};
      user-select: none;
      cursor: default;
      p{
        color: ${props => props.theme.greys.grey600};
      }
    }
  }
  /* SECONDARY */
  &.secondary{
    background-color: ${props => props.theme.type.white};
    cursor: pointer;
    transition-duration: .2s;
    transition-property: background-color, outline;
    border: 1px solid ${props => props.theme.blues.blue100};
    p{
      font-weight: 600;
      /* color: ${props => props.theme.greys.grey900}; */
      color: ${props => props.theme.blues.blue300};
    }
    &.active{
      &:hover{
      background-color: #efefef;
    }
    &:active{
      background-color: ${props => props.theme.blues.blue050};
      outline: 3px solid ${props => props.theme.blues.blue050};
      p{
        transform: scale(1.03);
      }
    }
    }
    &.disabled{
      background-color: ${props => props.theme.greys.grey200};
      user-select: none;
      cursor: default;
      p{
        color: ${props => props.theme.greys.grey600};
      }
    }
  }
`