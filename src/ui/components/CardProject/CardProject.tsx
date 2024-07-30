import { FC } from "react";
import { ICardProjectProps } from "./types";
import { CreateDate } from "./CreateDate";
import { MenuButton } from "./MenuButton";
import { assignedPersons } from "@/utils/examplePerson";


export const ProjectCard: FC<ICardProjectProps> = ({ project }) => {
    const {
        projectName,
        assingnedPerson,
        createdAt
    } = project;

    const assigned = assignedPersons.find(person => person.value === assingnedPerson);
    return (
        <div
            className={`
                w-full h-20
                flex flex-col
                relative            
                border-solid border-y-[1px]
                items-start justify-center
                px-4
            `}
        >
            <h2
                className={`
                     text-light-text dark:text-dark-text
                    text-sm font-[400] opacity-85
                    text-start   
                `}
            >
                {projectName}
            </h2>
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
                <img
                    className="w-6 h-6 rounded-full object-cover"
                    src={assigned?.image}
                    alt={assingnedPerson}
                />
                <h3
                    className={`
                         text-light-text dark:text-dark-text opacity-65
                        text-xs font-[400]
                    `}
                >{assingnedPerson}</h3>
            </div>
            <MenuButton projectId={project._id} />
        </div>
    )
}
