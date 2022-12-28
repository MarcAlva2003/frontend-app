import { IconStyle } from "./icon-style";
import { ReactSVG } from 'react-svg'

interface IIcon{
  icon: string;
  size?: string;
  width?: string;
  height?: string;
  fillColor?: string;
  strokeColor?: string;
}

export const Icon = (props: IIcon) => {
  const {icon, size, width, height, fillColor, strokeColor} = props;
  return(
    <IconStyle
      iconSize={size}
      width={width}
      height={height}
      fillColor={fillColor}
      strokeColor={strokeColor}
    >
      <ReactSVG src={icon}/>
      {/* <div className="icon-container">
        <img src={icon} alt="" />
      </div> */}
    </IconStyle>
  )
}