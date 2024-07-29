import { IProject } from "@/types/project.types";
import { Document, Model, model, models, Schema } from "mongoose";

interface IProjectDocument extends IProject, Document { }


const ProjectSchema: Schema<IProjectDocument> = new Schema<IProjectDocument>({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectManager: { type: String, required: true },
    assingnedPerson: { type: String, required: true },
    projectStatus: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() }
});

const ProjectModel: Model<IProjectDocument> = models.Project || model<IProjectDocument>("Project", ProjectSchema);

export default ProjectModel