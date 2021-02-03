import { OptionsType, GroupedOptionsType } from "react-select";

export interface AutocompleteFieldProps {
  ref?: React.Ref<any>;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  helperText?: string;
  label?: string;
  fieldName: string;
  fieldInfo?: string;
  fieldPlaceholder?: string;
  fieldType?: string;
  fieldProps?: any;
  options: OptionsType<any> | GroupedOptionsType<any>;
  isMulti: boolean;
}
