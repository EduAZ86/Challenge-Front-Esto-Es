"use client"
import { FormProject } from "@/ui";
import { useParams } from "next/navigation";


export default function EditProject() {
    const { projectId } = useParams();

    return (
        <FormProject
            name="Edit Project"
            title="Edit Project"
            textButton="Save changes"
            variant="update"
            projectId={projectId as string}
        />
    )
}