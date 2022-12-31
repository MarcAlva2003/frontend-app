import { InputCalendarStyle } from "./input-calendar-style";

interface IInputCalendar{
  onChange: (ev: any) => void;
  placeholder?: string;
  value: string;
}

export const InputCalendar = (props: IInputCalendar) => {
  const {
    placeholder,
    onChange,
    value
  } = props;
  return(
    <InputCalendarStyle>
      <input
        value={value}
        type="date"
        placeholder={placeholder}
        onChange={(ev: any) => {onChange(ev)}}
      />
    </InputCalendarStyle>
  )
}