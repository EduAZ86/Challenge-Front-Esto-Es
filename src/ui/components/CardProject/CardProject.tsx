import { FC } from "react";
import { ICardProjectProps } from "./types";
import { CreateDate } from "./CreateDate";
import { MenuButton } from "./MenuButton";
import { assignedPersons } from "@/utils/examplePerson";
import { PersonProfile } from "./PersonProfile";


export const ProjectCard: FC<ICardProjectProps> = ({ project }) => {
    const {
        projectName,
        assingnedPerson,
        projectManager,
        projectStatus,
        createdAt
    } = project;

    const assigned = assignedPersons.find(person => person.value === assingnedPerson);
    return (
        <div
            className={`
                w-full h-20
                flex flex-row
                items-center justify-start
                gap-10
                relative            
                border-solid border-y-[1px]                
                px-4
                 bg-light-background dark:bg-dark-background
            `}
        >
            <div className="w-full md:w-fit h-full  flex flex-col items-start justify-center">
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
                <div className="md:hidden flex flex-row">
                    <PersonProfile
                        key="assignedPersonMobile"
                        name={assingnedPerson}
                        src={assigned?.image ? assigned?.image : ""}
                        alt={assingnedPerson}
                    />
                </div>
            </div>
            <div className="hidden md:flex md:absolute md:top-1/3 md:left-1/4">
                <PersonProfile
                    key="managerPerson"
                    name={projectManager}
                    src={assigned?.image ? assigned?.image : ""}
                    alt={projectManager}
                />
            </div>
            <div className="hidden md:flex md:absolute md:top-1/3 md:left-1/2">
                <PersonProfile
                    key="assignedPerson"
                    name={assingnedPerson}
                    src={assigned?.image ? assigned?.image : ""}
                    alt={assingnedPerson}
                />
            </div>
            <div  className="hidden md:flex md:absolute md:top-1/3 md:left-[73%] bg-light-secondary opacity-65 px-4 py-1 rounded-[4px]">
                <h3
                className="text-xs "
                >{projectStatus}</h3>
            </div>
            <MenuButton projectId={project._id} />
        </div>
    )
}
