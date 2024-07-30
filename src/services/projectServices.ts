import ProjectModel from "@/models/project";
import { IProjectForm } from "@/types/project.types";

export const getAllProjects = async () => {
    const data = await ProjectModel.find()  

    if (data.length === 0) {
        return { success: false, messsage: 'There are no color project to show' };
    }
    return { success: true, data };
}

export const getProjectById = async (id: string) => {
    const data = await ProjectModel.findById(id);
    if (!data) {
        return { success: false, message: 'Project not found' };
    };
    return { success: true, response: data }
}

export const createProject = async (project: IProjectForm) => {
    const newProject = new ProjectModel(project);
    await newProject.save();
    return { success: true, data: newProject };
}

export const deleteProject = async (id: string) => {
    const foundProject = await ProjectModel.findById(id);
    if (!foundProject) {
        return { success: false, message: 'Project not found' };
    };
    const removedProject = await foundProject.deleteOne();
    if (!removedProject) {
        return { success: false, message: 'Project not deleted' };
    };
    return { success: true, message: 'Project deleted' };
}

export const updateProject = async (id: string, project: IProjectForm) => {
    const foundProject = await ProjectModel.findById(id);
    if (!foundProject) {
        return { success: false, message: 'Project not found' };
    };
    const updatedProject = await foundProject.updateOne(project);
    if (!updatedProject) {
        return { success: false, message: 'Project not updated' };
    };
    return { success: true, message: 'Project updated' };
}