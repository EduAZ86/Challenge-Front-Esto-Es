import { FC } from "react"
import { IButtonProps } from "./types"

export const Button: FC<IButtonProps> = ({ text, onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`
                h-fit w-fit
                py-2 px-4
                rounded-[4px]
                bg-primary
                text-center
                text-dark-text 
                `}
        >
            {text}
        </button>
    )
}