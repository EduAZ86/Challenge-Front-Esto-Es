"use client"
import { FC } from "react"
import { IPaginationProps } from "./types"
import { PaginationButton } from "./PaginationButton"
import { useDataStore } from "@/lib/zustand/useDataStore"

export const Pagination: FC<IPaginationProps> = ({

}) => {
    const { page, setPage, projects, pageSize } = useDataStore();
    const totalPages = Math.ceil(projects.length / pageSize);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div
            className={`
            flex  px-4 
            flex-row 
            justify-between
            items-center 
            h-10 w-full border-solid border-y-[1px] border-light-secondary   
           `}
        >
            <PaginationButton
                key={"left"}
                direction="left"
                onClick={handlePreviousPage}
            />
            <div>
                <button>
                    <span>Page {page} of {totalPages}</span>
                </button>
            </div>
            <PaginationButton
                key={"right"}
                direction="right"
                onClick={handleNextPage}
            />
        </div>
    )
}