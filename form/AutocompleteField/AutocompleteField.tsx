import * as React from "react";

import { Field, FieldProps, useFormikContext } from "formik";
import Select from "react-select";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import { AutocompleteFieldProps } from "./AutocompleteField.d";

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
  fieldType = "text",
  fieldProps = {},
  options = [],
  isMulti = false,
}) => {
  const { values, submitForm } = useFormikContext();

  // console.info("AutocompleteField", options);

  return (
    <Field
      ref={ref}
      name={fieldName}
      {...fieldProps}
      render={({ field, form }: FieldProps<any>) => (
        <FormGroup
          helperText={helperText}
          label={label}
          labelFor={fieldName}
          labelInfo={fieldInfo}
        >
          <Select
            value={field.value}
            placeholder={fieldPlaceholder}
            options={options}
            isMulti={isMulti}
            {...field}
            {...fieldProps}
            onChange={(value) => {
              form.setFieldValue(field.name, value);
              fieldProps.onChange(value);
            }}
          />
          {form.touched[fieldName] && form.errors[fieldName] ? (
            <ValidationNotice error={form.errors[fieldName] as string} />
          ) : (
            <></>
          )}
        </FormGroup>
      )}
    />
  );
};

export default AutocompleteField;
