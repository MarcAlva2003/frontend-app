import { InputStyle } from "./input-style";

interface IInput{
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange: (ev: any) => void;
}

export const Input = (props: IInput) => {
  return(
    <InputStyle>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(ev: any) => {props.onChange(ev)}}
      />
    </InputStyle>
  )
}