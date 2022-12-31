import { Icon } from "../icon/icon";
import { InputStyle } from "./input-style";

interface IIcon {
  icon: string;
  size?: string;
  width?: string;
  height?: string;
  fillColor?: string;
  strokeColor?: string;
  onClickFunction?: () => void;
}

interface IInput {
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange?: (ev: any) => void;
  iconRight?: IIcon;
  iconLeft?: IIcon;
}

export const Input = (props: IInput) => {
  const {
    iconRight,
    iconLeft
  } = props;
  return (
    <InputStyle>
      <div className="input-wrapper">
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(ev: any) => { props.onChange && props.onChange(ev) }}
        />
        {iconRight && (
          <div className={`input-wrapper--icon ${iconRight.onClickFunction ? 'clickeable' : ''}`}
            onClick={() => {iconRight.onClickFunction && iconRight.onClickFunction()}}
          >
            <Icon
              icon={iconRight.icon}
              size={iconRight.size}
              width={iconRight.width}
              height={iconRight.height}
              fillColor={iconRight.fillColor}
              strokeColor={iconRight.strokeColor}
            />
          </div>
        )}
      </div>
    </InputStyle>
  )
}