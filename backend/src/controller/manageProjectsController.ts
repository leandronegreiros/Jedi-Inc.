import { Request, Response } from "express";
import ManageProjectsService from "../service/manageProjectsService";
import { parseISO } from 'date-fns';

const manageProjectsService = new ManageProjectsService();

class ManageProjectsController {
    public async store(request: Request, response: Response) {
        try {
            const { name, date, end_date, project_value, risk, participants } = request.body;

            const parseDate =  parseISO(date);
            const parseEndDate =  parseISO(date);

            const exportServiceResponse = await manageProjectsService.store({
                name: name,
                date: parseDate,
                end_date: parseEndDate,
                project_value:project_value,
                risk: risk,
                participants:participants,
            });

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ message: 'Erro ao cadastrar projeto'});
        }
    }
}
export default ManageProjectsController;
