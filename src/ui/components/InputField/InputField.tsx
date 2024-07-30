import { FC } from "react";
import { IInputFieldProps } from "./types";

export const InputField: FC<IInputFieldProps> = ({
    errors,
    register,
    label,
    id,
    placeholder,
    type,
    requiredMessage,
    name
}) => {
    return (
        <div
            className={`
            w-full h-16
            flex flex-col relative
            gap-2
        `}
        >
            <label
                className={`
                  text-light-text dark:text-dark-text font-semibold
                  text-sm  
                `}
            >
                {label}
            </label>
            <input
                {...register(name,
                    {
                        required: requiredMessage !== undefined,
                        message: requiredMessage
                    })}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`
                    w-full h-10 rounded-md
                    dark:bg-dark-background bg-light-background                    
                    px-3
                    border-solid border-[1px] border-light-secondary
                    focus:outline-none focus:ring-1
                    text-xs
                    focus:ring-light-secondary dark:focus:ring-dark-secondary
                    `}
            />
            <span className="text-light-error text-xs dark:text-dark-error">{errors[name]?.message}</span>

        </div>
    )
}