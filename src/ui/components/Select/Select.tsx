import { FC } from "react";
import { ISelectProps } from "./types";
import { Option } from "./Option";

export const Select: FC<ISelectProps> = ({ options, label, register, name, ...otherSelectProps }) => {
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
                 text-light-text dark:text-dark-text
                  text-sm  font-[400]
                `}
            >
                {label}
            </label>

            <select
                {...otherSelectProps}
                {...register(name, { required: 'Project Manager is required' })}
                className={`  
                w-full h-10 
                p-2                            
                rounded-[4px]
                cursor-pointer
                  border-solid border-[1px] border-light-secondary
                bg-light-background dark:bg-dark-background
                text-light-text dark:text-dark-text  
                focus:ring-1 focus:ring-light-secondary dark:focus:ring-dark-secondary `}
            >
                {options?.map((option, index) => {
                    return (
                        <Option
                            key={`basic-select-option-${index}`}
                            {...option}
                        />
                    )
                })}
            </select>
        </div>
    )
}