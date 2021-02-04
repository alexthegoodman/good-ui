import * as React from "react";

import { TextFieldProps } from "./TextField.d";
import { Field, FieldProps } from "formik";
import ValidationNotice from "../ValidationNotice/ValidationNotice";
import InputMask from "react-input-mask";
import { Input } from "antd";
// import StringMask from "string-mask";

export const TextFieldMasks = {
  NONE: "none",
  PHONE: "phone",
  CCNUMBER: "creditCardNumber",
};

const TextField: React.FC<TextFieldProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  helperText = null,
  label = "",
  fieldName = "",
  fieldInfo = "(required)",
  fieldPlaceholder = "",
  fieldType = "text",
  fieldMask = TextFieldMasks.NONE,
  fieldProps = {},
}) => {
  let mask = "";
  switch (fieldMask) {
    case TextFieldMasks.PHONE:
      mask = "999-999-9999";
      break;
    case TextFieldMasks.CCNUMBER:
      mask = "9999-9999-9999-9999";
      break;
  }

  return (
    <Field
      ref={ref}
      name={fieldName}
      render={({ field, form }: FieldProps<any>) => (
        <>
          {/* <label></label> */}
          <Input placeholder={fieldPlaceholder} {...field} {...fieldProps} />
          {form.touched[fieldName] && form.errors[fieldName] ? (
            <ValidationNotice error={form.errors[fieldName] as string} />
          ) : (
            <></>
          )}
        </>
        // <FormGroup
        //   helperText={helperText}
        //   label={label}
        //   labelFor={fieldName}
        //   labelInfo={fieldInfo}
        // >
        //   {/* Does not properly integrate with validation */}
        //   {fieldMask !== TextFieldMasks.NONE ? (
        //     <InputMask
        //       mask={mask}
        //       value={field.value}
        //       // onChange={field.onChange}
        //       onBlur={field.onBlur}
        //       {...field}
        //       onChange={(e) => {
        //         // console.info("e", e);
        //         const val = e.currentTarget.value;
        //         let newVal = val;
        //         // if (mask !== "") {
        //         //   // mask must be same length as value
        //         //   // also does not limit input or show guides
        //         //   const formatter = new StringMask(mask);
        //         //   newVal = formatter.apply(val);
        //         // }
        //         form.setFieldValue(fieldName, newVal);
        //         // form.validateField(field.name); ??
        //       }}
        //     >
        //       {(inputProps) => {
        //         return (
        //           <InputGroup
        //             id={fieldName}
        //             className={className}
        //             placeholder={fieldPlaceholder}
        //             type={fieldType}
        //             {...inputProps}
        //             // name={field.name}
        //             // {...field}
        //           />
        //         );
        //       }}
        //     </InputMask>
        //   ) : (
        //     <InputGroup
        //       id={fieldName}
        //       className={className}
        //       placeholder={fieldPlaceholder}
        //       type={fieldType}
        //       // name={field.name}
        //       {...field}
        //       onChange={(e) => {
        //         // console.info("e", e);
        //         const val = e.currentTarget.value;
        //         let newVal = val;
        //         // if (mask !== "") {
        //         //   // mask must be same length as value
        //         //   // also does not limit input or show guides
        //         //   const formatter = new StringMask(mask);
        //         //   newVal = formatter.apply(val);
        //         // }
        //         // console.info("onchage", val, newVal);
        //         form.setFieldValue(fieldName, newVal);
        //         // form.validateField(field.name); ??
        //       }}
        //     />
        //   )}

        //   {form.touched[fieldName] && form.errors[fieldName] ? (
        //     <ValidationNotice error={form.errors[fieldName] as string} />
        //   ) : (
        //     <></>
        //   )}
        // </FormGroup>
      )}
    />
  );
};

export default TextField;
