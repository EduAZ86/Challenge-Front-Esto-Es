import { create } from "zustand";

interface IModalState {
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    setIdDeleteProject: (id: string) => void;
    idDeleteProject: string;
}

export const useDataStore = create<IModalState>((set) => ({
    isOpenModal: false,
    idDeleteProject: "",
    openModal: () => set({ isOpenModal: true }),
    closeModal: () => set({ isOpenModal: false }),
    setIdDeleteProject: (id: string) => set({ idDeleteProject: id }),
}))