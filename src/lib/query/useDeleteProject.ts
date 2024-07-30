import { fetchData } from "../fetch/axiosConfig";
import { useMutation } from "@tanstack/react-query";

export const deleteProject = async (id: string) => {
    try {
        const { data } = await fetchData.delete(`/projects/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const useDeleteProject = () => {
    return useMutation({
        mutationFn: deleteProject,
        onError: (error) => {
            console.error("Error deleting project:", error);
        },
        onSuccess: (data) => {
            console.log("Project deleted successfully:", data);
        }
    });
};

