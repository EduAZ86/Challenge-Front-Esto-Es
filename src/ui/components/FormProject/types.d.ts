type variant = "create" | "update";

export interface IFormProjectProps {
    title: string;
    name: string;
    textButton: string;
    variant: variant;
    projectId?: string;
}