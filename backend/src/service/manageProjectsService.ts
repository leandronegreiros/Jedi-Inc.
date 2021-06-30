import {  v4 as uuid_v4 } from "uuid";

interface IProjects {
    name: String,
    date: Date,
    end_date: Date,
    project_value: Number,
    risk: Number,
    participants: String,
}

class ManageProjectsService {
    public async store({
        name,
        date,
        end_date,
        project_value,
        risk,
        participants,
    }: IProjects) {

        const projects = [];

        const project = { id: uuid_v4(), name, date, end_date, project_value, risk, participants };

        projects.push(project)

        return project;
    }
}

export default ManageProjectsService;
