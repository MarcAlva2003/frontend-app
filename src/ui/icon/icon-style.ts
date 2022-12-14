import styled from "styled-components";

export const IconStyle = styled.div.attrs((
  props: {
    iconSize: string,
    width: string,
    height: string,
    fillColor?: string;
    strokeColor?: string;
  })=>props)`

  min-width: ${props => props.iconSize ? props.iconSize : props.width};
  width: ${props => props.iconSize ? props.iconSize : props.width};
  min-height: ${props => props.iconSize ? props.iconSize : props.height};
  height: ${props => props.iconSize ? props.iconSize : props.height};
  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg{
    width: 100%;
    height: 100%;
    fill: ${props => props.fillColor};
    stroke: ${props => props.strokeColor};
  }
`;