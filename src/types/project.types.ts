
type ProyecjtStatus = "Iniciado" | "En progreso" | "Finalizado";

type Person = {
    name: string;
    email: string;
    ocupation: string;
    image: string;
}

type Manager = Person;

export interface IProject {
    projectName: string;
    projectDescription: string;
    projectManager: Manager;
    assingnedPerson: Person;
    projectStatus: ProyecjtStatus;
    createdAt: Date;
    updatedAt?: Date;
}

export interface IProjectResponse extends IProject {
    _id: string
}