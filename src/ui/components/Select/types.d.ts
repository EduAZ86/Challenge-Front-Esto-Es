import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";

type TOption = {    
    value: string,
    label: string;
    image?: string;
   
}
export interface ISelectProps extends Pick<SelectHTMLAttributes<HTMLSelectElement>,
    | "title"
    | "name"
    | "onChange"
    | "value"
> {
    options: TOption[];
    label: string;
    register: UseFormRegister;
}

export interface IOption extends Pick<OptionHTMLAttributes<HTMLOptionElement>,
    | "value"
> {
    label: string;
}