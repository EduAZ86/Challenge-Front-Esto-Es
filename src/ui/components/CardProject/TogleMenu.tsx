import { faDeleteLeft, faEdit, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { FC } from "react"
import { ITogleMenuProps } from "./types"
import { useDataStore } from "@/lib/zustand/useDataStore"

export const MenuToggle: FC<ITogleMenuProps> = ({ projectId }) => {
    const { setIdDeleteProject, openModal } = useDataStore()
    const handleDelete = () => {
        setIdDeleteProject(projectId)
        openModal()
    }

    return (
        <div className={`
                absolute top-8 right-0 
                h-20 w-44
                bg-light-background dark:bg-dark-background
                shadow-lg
               z-50 
            `}>

            <Link
                href={`/editProject/${projectId}`}
                className={`
                    w-full h-10
                    flex flex-row
                    items-center justify-start  
                    relative
                    text-xs
                    text-light-text dark:text-dark-text
                    border-solid border-b-[1px] border-light-secondary
                       bg-light-background dark:bg-dark-background 
                    px-4
                    gap-2
                    hover:brightness-50 
                    duration-300
                    z-50                    
                `}
            >
                <FontAwesomeIcon icon={faEdit} />
                <span>Edit</span>
            </Link>
            <button
                className={`
                    w-full h-10
                    flex flex-row
                    items-center justify-start  
                    relative
                    text-xs
                       bg-light-background dark:bg-dark-background
                    text-light-text dark:text-dark-text
                    border-solid border-b-[1px] border-light-secondary 
                    px-4
                    gap-2                    
                    hover:brightness-50 duration-300
                    z-50 
                     
                    `}
                onClick={handleDelete}
            >
                <FontAwesomeIcon icon={faTrash} />
                <span>Delete</span>
            </button>
        </div>
    )
}