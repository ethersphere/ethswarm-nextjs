import * as React from "react";
import { cx } from "utils";

type InputFieldType = {
  placeholder?: string;
  type?: "text" | "email";
  className?: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldType> = ({
  placeholder,
  type = "text",
  className = "pl-2.5 pr-7 text-xs",
  value = "",
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={cx(
        "bg-gray-800 text-gray-300 border-none focus:ring-1 focus:ring-gray-300 duration-100 placeholder-gray-275 font-display",
        className
      )}
    />
  );
};

export default InputField;
