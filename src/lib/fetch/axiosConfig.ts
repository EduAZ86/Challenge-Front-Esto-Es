import { IProjectForm } from "@/types/project.types";
import axios from "axios";

const BASE_URL = "/api";

export const fetchData = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const getProjectsByPage = async (lengthPage: number, offset: number) => {
    try {
        const { data } = await fetchData.get("/projects", {
            params: {
                lengthPage,
                offset
            }
        });
        return data;

    } catch (error) {
        console.log(error);
    }
}

export const getDataProjectById = async (id: string) => {
    try {
        const { data } = await fetchData.get(`/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createProject = async (project: IProjectForm) => {
    try {
        const { data } = await fetchData.post("/projects", project);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProject = async (id: string) => {
    try {
        const { data } = await fetchData.delete(`/projects/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateProject = async (id: string, project: IProjectForm) => {
    try {
        const { data } = await fetchData.put(`/projects/${id}`, project);
        return data;
    } catch (error) {
        console.log(error);
    }
}