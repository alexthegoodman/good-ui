import * as React from "react";

import { SelectFieldProps } from "./SelectField.d";
import { useField } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

const SelectField: React.FC<SelectFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  onChange = (e) => console.info("Change"),
  helperText = "",
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  options = [],
}) => {
  const [field, meta, helpers] = useField(fieldName);
  const clickHandler = (e) => onClick(e);
  const changeHandler = (e) => onChange(e);

  return (
    <>
      <Select
        defaultValue={options[0]}
        // style={{ width: 120 }}
        onChange={changeHandler}
        {...field}
      >
        {options.map((option, i) => {
          return <Option value={option}>{option}</Option>;
        })}
      </Select>
      {meta.touched && meta.error ? (
        <ValidationNotice error={meta.error as string} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SelectField;
