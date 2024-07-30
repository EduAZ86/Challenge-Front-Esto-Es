import { FC } from "react";
import { ICreateDateProps } from "./types";
import { format } from 'date-fns';

export const CreateDate: FC<ICreateDateProps> = ({ createdAt }) => {
    const formatCreationDate = (date: Date): string => {
        return `Creation date: ${format(date, "MM/dd/yyyy hh:mm a")}`;
    };
    const formattedDate = formatCreationDate(createdAt);
    return (
        <p
            className={`
                text-light-text dark:text-dark-text opacity-45
                text-[10px] font-[400]
                text-end
            `}
        >{formattedDate}</p>
    )
}