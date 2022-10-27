import { ButtonStyle } from "./button-style";

interface IButton {
  text?: string;
  size: 'large' | 'medium' | 'small';
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'iconButton',
  iconButton?: string;
  disabled?: boolean;
  radius?: 'low' | 'medium' | 'hight'
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