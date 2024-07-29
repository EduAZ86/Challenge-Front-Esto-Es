import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export const MenuProject: FC = () => {
    return (
        <button
            className={`
            w-6 h-6
            absolute top-4 right-4
            flex items-center justify-center
            dark:text-dark-text text-light-text
            text-xl
            `}
        >
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
    )
}