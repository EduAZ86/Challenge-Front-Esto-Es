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
    lengthPage: number;
    setLengthPage: (lengthPage: number) => void;
    offset: number;
    setOffset: (offset: number) => void;
}

export const useDataStore = create<IModalState>((set) => ({
    isOpenModal: false,
    idDeleteProject: "",
    clearDeleteProject: () => set({ idDeleteProject: "" }),
    setIdDeleteProject: (id: string) => set({ idDeleteProject: id }),
    openModal: () => set({ isOpenModal: true }),
    closeModal: () => set({ isOpenModal: false }),
    page: 1,
    setPage: (page: number) => set({ page }),
    lengthPage: 10,
    setLengthPage: (lengthPage: number) => set({ lengthPage }),
    offset: 0,
    setOffset: (offset: number) => set({ offset }),
}))