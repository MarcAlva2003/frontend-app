import { ButtonStyle } from "./button-style";
import { Icon } from "../icon/icon";
import { IconList } from "../iconsList";
import { enGB } from "date-fns/locale";

interface IButton {
  text?: string;
  size: 'large' | 'medium' | 'small';
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger1'
  | 'danger2'
  | 'success'
  | 'iconButton',
  iconButton?: string;
  disabled?: boolean;
  radius?: 'low' | 'medium' | 'hight'
  onClick?: (ev: any) =>  void;
  iconLeft?: string;
}

export const Button = (props: IButton) => {
  return (
    <ButtonStyle
      className={`
        ${props.size}
        ${props.type}
        ${props.radius}
        ${props.disabled ? 'disabled' : 'active'}
        button
      `}
      onClick={(ev: any) => {
        ev.preventDefault();
        (props.onClick && !props.disabled) && props.onClick(ev);
      }}
    >
      <div className="button-center">
        {(props.type === 'iconButton' && props.iconButton) ? (
          <div>{props.iconButton}</div>
        ) : (
          <p>{props.text}</p>
        )}
      </div>
    </ButtonStyle>
  )
}