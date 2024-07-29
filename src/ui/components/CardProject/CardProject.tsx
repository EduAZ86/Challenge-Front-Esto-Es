import { FC } from "react";
import { ICardProjectProps } from "./types";
import { CreateDate } from "./CreateDate";

export const ProjectCard: FC<ICardProjectProps> = ({ project }) => {
    const {
        projectName,
        projectDescription,
        projectManager,
        assingnedPerson,
        projectStatus,
        createdAt
    } = project;
    return (
        <div
            className={`
                flex flex-col
                w-full h-20
                relative
                bg-light-background dark:bg-dark-background
            `}
        >
            <h2
                className={`
                    text-dark-text dark:text-light-text
                    text-sm font-[400]
                    text-start   
                `}
            >{projectName}</h2>
            <CreateDate createdAt={createdAt} />
            <div
                className={`
                    relative
                    flex flex-row 
                    items-center justify-start 
                    gap-2
                    w-full
                `}
            >
                <h3
                    className={`
                        text-dark-text dark:text-light-text
                        text-xs font-[400]
                    `}
                >{assingnedPerson.name}</h3>
                <img
                    className="w-6 h-6 rounded-full object-cover"
                    src={assingnedPerson.image} />
            </div>

        </div>
    )
}
