import styled from "styled-components";

export const IconStyle = styled.div.attrs((
  props: {
    iconSize: string,
    width: string,
    height: string,
  })=>props)`

  .icon-container{
    img{
      width: ${props => props.iconSize ? props.iconSize : props.width};
      height: ${props => props.iconSize ? props.iconSize : props.height};
    }
  }
`;