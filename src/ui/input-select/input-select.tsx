import { useEffect, useState } from "react";

import { Icon } from "../icon/icon";
import { IconList } from "../iconsList";
import { SelectStyle } from "./input-select-style";

export interface ISelectOption {
  value: string;
  label: string;
}

interface ISelect {
  placeholder: string;
  value: string;
  name: string;
  onChange: (ev: any) => void;
  options: ISelectOption[];
}

export const Select = (props: ISelect) => {
  const {
    placeholder,
    value,
    name,
    onChange,
    options,
  } = props;

  return (
    <SelectStyle>
      <div className="select-wrapper">
        <select
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(ev: any) => {onChange(ev)}}
        >
          {options.map((item: ISelectOption, index: number) => (
            <option value={`${item.value}`}>{item.label}</option>
          ))}
        </select>
        <div className="select-wrapper--icon">
          <Icon
            icon={IconList.arrows.chevronDownThin}
            size="16px"
          />
        </div>
      </div>

    </SelectStyle>
  )
}