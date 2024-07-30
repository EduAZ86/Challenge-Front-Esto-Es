import { z } from "zod";
export const validationUserSchema = z.object({
    projectName: z.string().min(1, "Project name is required"),
    projectDescription: z.string().min(1, "Project Description is required"),
    projectManager: z.string().min(1, "Project Manager is required"),
    assignee: z.string().min(1, "Assignee is required"),
    projectStatus: z.string().min(1, "Project Status is required"),
})