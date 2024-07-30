
type ProyecjtStatus = "Iniciado" | "En progreso" | "Finalizado" | string;


export interface IProjectForm {
    projectName: string;
    projectDescription: string;
    projectManager: string;
    assingnedPerson: string;
    projectStatus: ProyecjtStatus;

}
export interface IProject extends IProjectForm {

    createdAt: Date;
    updatedAt?: Date;
}

export interface IProjectResponse extends IProject {
    _id: string
}