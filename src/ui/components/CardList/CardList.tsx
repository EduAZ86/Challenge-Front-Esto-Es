"use client"
import { FC } from "react"
import { ProjectCard } from "../CardProject/CardProject";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { useDataStore } from "@/lib/zustand/useDataStore";
import { useFetchProjects } from "@/lib/query/useFetchProjects";

export const CardList: FC = () => {

    const { isOpenModal, closeModal } = useDataStore()
    const onClose = () => {
        closeModal();
    }
    const { data: projects } = useFetchProjects();
    return (
        <div
            className={`
              w-full h-min-screen
              display flex flex-col
              items-start justify-center
              bg-light-background dark:bg-dark-background
            `}
        >
            {projects?.map((project) => {
                return (
                    <ProjectCard key={project._id} project={project} />
                )
            })}
            {isOpenModal && <Modal
                title="Delete Project"
            >
                <div
                    className={`
                        w-full
                        flex flex-row items-center justify-around
                        `}
                >
                    <Button
                        text="Delete"
                    />
                    <Button
                        text="Cancel"
                        onClick={onClose}
                    />

                </div>
            </Modal>}
        </div>
    )
}

