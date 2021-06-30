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
    public async store(parametros: any) {

        const create = await project.create(parametros);

        if (!create) {
            throw new Error("Não foi possível criar projeto")
        }
        return {message: "Projeto criado com sucesso"};
    }
}

export default ManageProjectsService;
