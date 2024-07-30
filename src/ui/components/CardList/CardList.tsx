"use client"
import { FC, useEffect } from "react"
import { ProjectCard } from "../CardProject/CardProject";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { useDataStore } from "@/lib/zustand/useDataStore";
import { useFetchProjects } from "@/lib/query/useFetchProjects";
import { useDeleteProject } from "@/lib/query/useDeleteProject";

export const CardList: FC = () => {
    const { idDeleteProject, clearDeleteProject, setProjects, page, pageSize, searchQuery } = useDataStore();
    const { isOpenModal, closeModal } = useDataStore()
    const deleteProjectMutation = useDeleteProject();
    const { data: projects, refetch } = useFetchProjects();

    const onClose = () => {
        clearDeleteProject();
        closeModal();
    }
    useEffect(() => {
        if (projects) {
            setProjects(projects);
        }
    }, [projects, setProjects]);
    const handleDelete = async () => {
        if (idDeleteProject && idDeleteProject.length > 0) {
            try {
                await deleteProjectMutation.mutateAsync(idDeleteProject);
                await refetch();
                onClose();
            } catch (error) {
                console.error("Error deleting project:", error);
            }
        }
    }
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const filteredProjects = projects?.filter(project =>
        project.projectName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const currentProjects = filteredProjects?.slice(startIndex, endIndex);
    
    return (
        <div
            className={`
              w-full h-min-screen
              display flex flex-col
              items-start justify-center
              bg-light-background dark:bg-dark-background
            `}
        >
            {currentProjects?.map((project) => {
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
                        onClick={handleDelete}
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

