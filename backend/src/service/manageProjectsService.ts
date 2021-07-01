import project from '../model/project';

import AppError from '../errors/AppError';

interface IProjects {
    name: String,
    date: Date,
    end_date: Date,
    project_value: Number,
    risk: Number,
    participants: String,
}

class ManageProjectsService {
    public async index() {

        const projectList = await project.find();

        if (!projectList) {
            throw new AppError("Unable to list projects")
        }
        return projectList;
    }

    public async store(parameters: any) {

        const create = await project.create(parameters);

        if (!create) {
            throw new AppError("Unable to create project")
        }
        return { message: "Project created successfully" };
    }

    public async update(parameters: any) {

        const { _id, name, date, end_date, project_value, risk, participants } = parameters
        const filter = { _id };
        const updateDoc = {
            $set: {
                name,
                date,
                end_date,
                project_value,
                risk,
                participants
            }
        };
        const options = { upsert: true };

        const updateProject = await project.updateOne(filter, updateDoc, options);

        if (!updateProject) {
            throw new AppError("Unable to update project")
        }
        return { message: "Project update successfully" };
    }

    public async delete(parameters: any) {

        const deleteProject = await project.deleteOne(parameters);

        if (!deleteProject) {
            throw new AppError("Unable to delete project")
        }

        return { message: "Project delete successfully" };
    }
}

export default ManageProjectsService;
