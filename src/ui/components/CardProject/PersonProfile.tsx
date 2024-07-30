import { FC } from "react";
import { IProfilePersonProps } from "./types";

export const PersonProfile: FC<IProfilePersonProps> = ({
    alt,
    name,
    src
}) => {

    return (
        <div
            className={`
                    relative
                    flex flex-row 
                    items-center justify-start 
                    gap-2
                    w-full
                `}
        >
            <img
                className="w-6 h-6 rounded-full object-cover"
                src={src}
                alt={alt}
            />
            <h3
                className={`
                         text-light-text dark:text-dark-text opacity-65
                        text-xs font-[400]
                    `}
            >{name}</h3>
        </div>
    )
}