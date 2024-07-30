import { IProjectResponse } from "@/types/project.types";

export interface ICardProjectProps {
    project: IProjectResponse;
}

export interface ICreateDateProps extends Pick<IProjectResponse, "createdAt"> { }

export interface IMenuButtonProps {
    projectId: string;
}

export interface ITogleMenuProps {
    projectId: string;
}

export interface IProfilePersonProps {
    alt: string;
    src: string;
    name: string;
}