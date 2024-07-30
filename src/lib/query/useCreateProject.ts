import { fetchData } from "../fetch/axiosConfig";
import { IProjectForm } from "@/types/project.types";
import { useMutation } from "@tanstack/react-query";

const createProject = async (project: IProjectForm) => {
    try {
        const { data } = await fetchData.post("/projects", project);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const useCreateProject = () => {
    return useMutation({
        mutationFn: createProject,
        onError: (error) => {
            console.error("Error creating project:", error);
        },
        onSuccess: (data) => {
            console.log("Project created successfully:", data);
        }
    });
};
