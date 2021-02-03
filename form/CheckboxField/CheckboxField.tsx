import * as React from "react";

import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { CheckboxFieldProps } from "./CheckboxField.d";

import Checkmark from "../../../assets/img-min/checkmark.svg";

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "",
}) => {
  // const clickHandler = e => onClick(e);
  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const handleEnabledChange = enabled => {
  //   console.info(enabled);
  //   setIsEnabled(enabled);
  // };
  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <FormGroup
          helperText={helperText}
          labelFor={fieldName}
          labelInfo={fieldInfo}
        >
          <div className="checkboxField">
            {field.value ? (
              <div className="checkmark">
                <Checkmark />
              </div>
            ) : (
              <></>
            )}
            <Checkbox
              id={fieldName}
              className={className}
              label={label}
              {...field}
            />
            {form.touched[fieldName] && form.errors[fieldName] ? (
              <ValidationNotice error={form.errors[fieldName] as string} />
            ) : (
              <></>
            )}
          </div>
        </FormGroup>
      )}
    />
  );
};

export default CheckboxField;
