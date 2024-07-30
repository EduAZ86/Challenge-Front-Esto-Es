import { FC } from "react"
import { IColumnTitleProps } from "./types"

export const ColumnTitle: FC<IColumnTitleProps> = ({ title }) => {
    return (
        <h2
            className=" font-[500] text-sm text-light-text dark:text-dark-text"
        >
            {title}
        </h2>
    )
}