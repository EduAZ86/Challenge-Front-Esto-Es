"use client"
import { FC, useEffect } from "react"
import { Form } from "../Form/Form"
import { InputField } from "../InputField/InputField"
import { useForm } from "react-hook-form"
import { Button } from "../Button/Button"
import { Select } from "../Select/Select"
import { managers } from "@/utils/exampleManagers"
import { status } from "@/utils/exampleStatus"
import { assignedPersons } from "@/utils/examplePerson"
import { IFormProjectProps } from "./types"
import { zodResolver } from "@hookform/resolvers/zod"
import { validationUserSchema } from "./validationProjectSchema"
import { IProjectForm } from "@/types/project.types"
import { useCreateProject } from "@/lib/query/useCreateProject"
import { useUpdateProject } from "@/lib/query/useUpdateProject"
import { useFetchProjectById } from "@/lib/query/useFetchProjectById"


export const FormProject: FC<IFormProjectProps> = ({
    name,
    title,
    textButton,
    variant,
    projectId
}) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: zodResolver(validationUserSchema)
    })

    const { data: projectData } = useFetchProjectById((variant === "update" && projectId) ? projectId : "");

    useEffect(() => {
        reset({
            projectName: projectData?.projectName,
            projectDescription: projectData?.projectDescription,
            projectManager: projectData?.projectManager,
            assignee: projectData?.assingnedPerson,
            projectStatus: projectData?.projectStatus
        });

    }, [projectData, reset, variant]);


    const createProjectMutation = useCreateProject()
    const updateProjectMutation = useUpdateProject()

    const onSubmit = handleSubmit(async (data) => {
        const dataProject: IProjectForm = {
            projectName: data.projectName,
            projectDescription: data.projectDescription,
            projectManager: data.projectManager,
            assingnedPerson: data.assignee,
            projectStatus: data.projectStatus
        }
        if (variant === "create") {
            createProjectMutation.mutate(dataProject)
        }
        if (variant === "update" && projectId) {
            updateProjectMutation.mutate({ id: projectId, project: dataProject })
        }

        reset();
    })
    return (
        <div
            className={`
            w-full h-full
            flex flex-col           
            items-center justify-center                        
        `}
        >
            <Form
                title={title}
                name={name}
                onSubmit={onSubmit}
            >

                <InputField
                    label="Project Name"
                    placeholder="Project Name"
                    type="text"
                    id="projectName"
                    name="projectName"
                    requiredMessage="Project name is required"
                    register={register}
                />
                <InputField
                    label="Project Description"
                    placeholder="Project Description"
                    type="text"
                    id="projectDescription"
                    name="projectDescription"
                    requiredMessage="Project Description is required"
                    register={register}
                />
                <Select
                    key={"projectManager"}
                    options={managers}
                    label="Project Manager"
                    register={register}
                    name="projectManager"
                />
                <Select
                    key={"assignee"}
                    options={assignedPersons}
                    label="Assignee"
                    register={register}
                    name="assignee"
                />
                <Select
                    key={"projectStatus"}
                    options={status}
                    label="Project Status"
                    register={register}
                    name="projectStatus"
                />
                <Button
                    text={textButton}
                    type="submit"
                />
                <div className="mt-4">
                    {Object.keys(errors).map((key) => (
                        <div key={key} className="text-light-error text-xs dark:text-dark-error">
                            {errors[key]?.message as string}
                        </div>
                    ))}
                </div>
            </Form>
        </div>
    )
}