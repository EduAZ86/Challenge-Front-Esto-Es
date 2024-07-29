import { IProjectResponse } from "@/types/project.types";
import { FC } from "react"
import { ProjectCard } from "../CardProject/CardProject";

export const CardList: FC = () => {

    const Projects: IProjectResponse[] = [];

    return (
        <div
            className={`
              w-full h-min-screen
              display flex flex-col
              items-start justify-center  
            `}
        >
            {Projects.map((project) => {
                return (
                    <ProjectCard key={project._id} project={project} />
                )
            })}
        </div>
    )
}

