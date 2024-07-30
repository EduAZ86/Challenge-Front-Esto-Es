import { FormHTMLAttributes } from "react";

export interface IFormProps extends Pick<FormHTMLAttributes<HTMLFormElement>,
    | "onSubmit"
    | "title"
    | "name"
    | "children"
> { }