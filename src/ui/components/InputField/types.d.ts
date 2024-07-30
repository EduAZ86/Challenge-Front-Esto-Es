import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IInputFieldProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
    | "name"
    | "id"
    | "placeholder"
    | "type"
> {
    requiredMessage?: string;
    register: UseFormRegister;
    label: string;
    errors: FieldErrors<FieldValues>
}