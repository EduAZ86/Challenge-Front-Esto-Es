import { FC } from "react";
import { IFormProps } from "./types";

export const Form: FC<IFormProps> = ({ children, ...otherFormProps }) => {
    return (
        <form
            {...otherFormProps}
            className={`
        w-full h-full
         relative z-0                   
        flex flex-col
        p-6 rounded-md overflow-hidden gap-2
    `}
        >
            {children}
        </form>
    )
}