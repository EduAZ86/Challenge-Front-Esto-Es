import { FC } from "react"
import { IButtonProps } from "./types"

export const Button: FC<IButtonProps> = ({ text, onClick, type }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                h-fit w-fit
                py-2 px-4
                rounded-[4px]
                bg-primary
                text-center
                text-dark-text
                 bg-light-primary
                `}
        >
            {text}
        </button>
    )
}