import { ButtonHTMLAttributes } from "react";

export interface IPaginationProps {

}

type direction = "left" | "right"

export interface IPaginationButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    | "onClick"
> {
    direction: direction;
}