"use client"
import { ChangeEvent, FC, useEffect } from "react"
import { ISearchBarProps } from "./types"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"
import { useDataStore } from "@/lib/zustand/useDataStore"

export const SearchBar: FC<ISearchBarProps> = ({

}) => {

    const { setValue, register, watch, reset } = useForm()
    const { setSearchQuery, searchQuery } = useDataStore();

    const searchValue = watch("search");

    useEffect(() => {
        setSearchQuery(searchValue);
    }, [searchValue, setSearchQuery]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue("search", event.target.value, { shouldValidate: true });
    };
    const handleClick = () => {
        reset({ search: "" });
        setSearchQuery("");
    }

    return (
        <form
            className={`
                w-full h-10
                px-4
                flex flex-row
                justify-center
                items-center
                bg-light-background
                dark:bg-dark-background
            `}
        >
            <input
                {...register("search")}
                id={"search"}
                type="text"
                placeholder={"Name project"}
                onChange={handleInputChange}
                className={`
                    w-full h-10                    
                    dark:bg-dark-background bg-light-background                    
                    p-3
                  
                    focus:outline-none focus:ring-1
                    text-base
                    focus:ring-light-secondary dark:focus:ring-dark-secondary
                    `}
            />
            {searchQuery !== "" &&
                <button
                    type="button"
                    onClick={handleClick}
                    className="w-10 h-full "
                >
                    <FontAwesomeIcon icon={faDeleteLeft} />
                </button>}
        </form>
    )
}    