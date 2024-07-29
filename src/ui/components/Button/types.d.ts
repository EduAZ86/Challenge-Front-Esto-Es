import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    text: string;
}