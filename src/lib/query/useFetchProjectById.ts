import { IProjectResponse } from "@/types/project.types";
import { fetchData } from "../fetch/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const getDataProjectById = async (id: string) => {
    try {
        const { data } = await fetchData.get(`/projects/${id}`);        
        return data.data.response as IProjectResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const useFetchProjectById = (id: string) => {
    return useQuery({
        queryKey: ["project", id],
        queryFn: () => getDataProjectById(id)
    });
};
