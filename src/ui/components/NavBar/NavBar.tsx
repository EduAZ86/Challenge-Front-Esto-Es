'use client'
import { FC } from "react";
import { Title } from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { usePathname } from "next/navigation";

export const NavBar: FC = () => {
    const pathname = usePathname();


    const titles: { [key: string]: string } = {
        "/": "My projects",
        "/createProject": "Add project",
        "/editProject": "Edit project"
    };
    const title = titles[pathname] || "Edit project";
    return (
        <nav
            className={`
             flex  px-4 
            ${pathname === "/" ? "flex-row-reverse justify-between" : "flex-row gap-2"} 
             items-center 
             h-10 w-full border-solid border-y-[1px] border-light-secondary   
            `}
        >{
                pathname === "/" ?
                    <Link
                        href="/createProject"
                        className={`
                            h-8 w-fit
                            px-4
                            text-sm
                             flex items-center justify-center
                            rounded-[4px]
                            bg-primary
                            text-center
                            text-dark-text
                             bg-light-primary
                            `}
                    >+ Add Project</Link>
                    :
                    <Link
                        href="/"
                        className="flex flex-row text-xs"
                    >
                        <FontAwesomeIcon
                            className=" text-light-text dark:text-dark-text text-base"
                            icon={faArrowLeft} />
                        <h3>Back</h3>

                    </Link>
            }
            <Title title={title} />
        </nav>
    )
}