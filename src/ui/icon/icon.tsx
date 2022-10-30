import { IconStyle } from "./icon-style";

interface IIcon{
  icon: string;
  size?: string;
  width?: string;
  height?: string;
}

export const Icon = (props: IIcon) => {
  const {icon, size, width, height} = props;
  return(
    <IconStyle
      iconSize={size}
      width={width}
      height={height}
    >
      <div className="icon-container">
        <img src={icon} alt="" />
      </div>
    </IconStyle>
  )
}