import { fetchData } from "../fetch/axiosConfig";
import { IProjectForm } from "@/types/project.types";
import { useMutation } from "@tanstack/react-query";

const updateProject = async (id: string, project: IProjectForm) => {
    try {
        const { data } = await fetchData.put(`/projects/${id}`, project);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const useUpdateProject = () => {
    return useMutation({
        mutationFn: ({ id, project }: { id: string, project: IProjectForm }) => updateProject(id, project), // Función de mutación para actualizar el proyecto
        onError: (error) => {
            console.error("Error updating project:", error);
        },
        onSuccess: (data) => {
            console.log("Project updated successfully:", data);
        }
    });
};

