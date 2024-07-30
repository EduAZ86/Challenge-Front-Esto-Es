import { FC } from "react";
import { IOption } from "./types";

export const Option: FC<IOption> = ({ value, label }) => {
    return (
        <option
            value={value}
            className={`
        text-sm cursor-pointer
        text-light-text dark:text-dark-text
        hover:brightness-50          
        `}
        >
            {label}
        </option>
    )
}