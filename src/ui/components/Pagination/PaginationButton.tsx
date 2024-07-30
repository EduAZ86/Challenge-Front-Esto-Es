import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import { IPaginationButtonProps } from "./types"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const PaginationButton: FC<IPaginationButtonProps> = ({
    direction,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={
                `
                `
            }
        >
            <FontAwesomeIcon icon={direction === "left" ? faArrowLeft : faArrowRight} />
        </button>
    )
}