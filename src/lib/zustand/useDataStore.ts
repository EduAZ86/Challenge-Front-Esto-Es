import { IProjectResponse } from "@/types/project.types";
import { create } from "zustand";

interface IModalState {
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    setIdDeleteProject: (id: string) => void;
    idDeleteProject: string;
    clearDeleteProject: () => void;
    page: number;
    setPage: (page: number) => void;
    projects: IProjectResponse[]
    setProjects: (projects: IProjectResponse[]) => void;
    pageSize: number;
    getProjectsForPage: (page: number) => IProjectResponse[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useDataStore = create<IModalState>((set, get) => ({
    isOpenModal: false,
    idDeleteProject: "",
    clearDeleteProject: () => set({ idDeleteProject: "" }),
    setIdDeleteProject: (id: string) => set({ idDeleteProject: id }),
    openModal: () => set({ isOpenModal: true }),
    closeModal: () => set({ isOpenModal: false }),
    page: 1,
    setPage: (page: number) => set({ page }),
    projects: [],
    setProjects: (projects: IProjectResponse[]) => set({ projects }),
    pageSize: 10,
    searchQuery: "",
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    
    getProjectsForPage: (page: number) => {
        const { projects, pageSize } = get();
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return projects.slice(startIndex, endIndex);
    }
}))