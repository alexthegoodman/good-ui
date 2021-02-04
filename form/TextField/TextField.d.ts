import { TextFieldMasks } from "./TextField";

export interface TextFieldProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  helperText?: string;
  label?: string;
  fieldName: string;
  fieldInfo?: string;
  fieldPlaceholder?: string;
  fieldType?: string;
  fieldMask?: typeof TextFieldMasks;
  fieldProps?: any;
}
