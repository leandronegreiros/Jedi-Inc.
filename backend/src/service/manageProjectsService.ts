import project from '../model/project';

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
            throw new Error("Unable to list projects")
        }
        return projectList;
    }

    public async store(parameters: any) {

        const create = await project.create(parameters);

        if (!create) {
            throw new Error("Unable to create project")
        }
        return {message: "Project created successfully"};
    }

    public async update(parameters: any) {

        const findProject = await project.find(parameters);
        if (!findProject) {
            throw new Error("Unable to update project")
        }

        const updateProject = await project.updateMany(parameters);

        if (!updateProject) {
            throw new Error("Unable to update project")
        }
        return {message: "Project update successfully"};
    }

    public async delete(parameters: any) {

        const deleteProject = await project.remove(parameters);

        if (!deleteProject) {
            throw new Error("Unable to delete project")
        }
        return {message: "Project delete successfully"};
    }
}

export default ManageProjectsService;
