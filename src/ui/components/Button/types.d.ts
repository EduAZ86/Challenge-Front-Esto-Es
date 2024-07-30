import { ButtonHTMLAttributes } from "react";

type variants = "primary" | "secondary"
export interface IButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type"> {
    text: string;
}