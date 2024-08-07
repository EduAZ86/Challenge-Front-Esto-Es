"use client"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { MenuToggle } from "./TogleMenu";
import { IMenuButtonProps } from "./types";
import { useDataStore } from "@/lib/zustand/useDataStore";

export const MenuButton: FC<IMenuButtonProps> = ({ projectId }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { setIdDeleteProject } = useDataStore();

    const toggleMenu = () => {
        setIdDeleteProject(projectId);
        setIsOpen(!isOpen);
    }

    return (
        <div
            onClick={toggleMenu}
            className={`
            w-6 h-6
            absolute top-4 right-4
            flex items-center justify-center           
            text-xl cursor-pointer
            `}
        >
            <FontAwesomeIcon
                className="text-light-text dark:text-dark-text opacity-85"
                icon={faEllipsisVertical} />
            {isOpen &&
                <MenuToggle projectId={projectId} />
            }
        </div>

    )
}