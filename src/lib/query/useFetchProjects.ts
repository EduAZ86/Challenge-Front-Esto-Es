import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../fetch/axiosConfig";
import { IProjectResponse } from "@/types/project.types";

const getProjects = async () => {
    try {
        const { data } = await fetchData.get("/projects");   
        
        return data.data.data as IProjectResponse[];
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const useFetchProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: getProjects
    });
};