import { FC } from "react";
import { ITitleProps } from "./types";

export const Title: FC<ITitleProps> = ({ title }) => {
    return (
        <h1
            className={`
                text-light-text dark:text-dark-text
                text-base font-semibold
                text-start
            `}
        >
            {title}
        </h1>
    )
}