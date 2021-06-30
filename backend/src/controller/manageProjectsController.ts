import { Request, Response } from "express";
import ManageProjectsService from "../service/manageProjectsService";
import moment from "moment";

const manageProjectsService = new ManageProjectsService();

class ManageProjectsController {
    public async index(request: Request, response: Response) {
        try {

            const exportServiceResponse = await manageProjectsService.index();

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: 'listing failed'});
        }
    }

    public async store(request: Request, response: Response) {
        try {
            const { name, date, end_date, project_value, risk, participants } = request.body;

            const exportServiceResponse = await manageProjectsService.store({
                name: name,
                date: moment(date, "MM/DD/YYYY"),
                end_date: moment(end_date, "MM/DD/YYYY"),
                project_value:project_value,
                risk: risk,
                participants:participants,
            });

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: 'Registration failed'});
        }
    }

    public async update(request: Request, response: Response) {
        try {

            const exportServiceResponse = await manageProjectsService.update(request.body);

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: 'update failed'});
        }
    }

    public async delete(request: Request, response: Response) {
        try {

            const exportServiceResponse = await manageProjectsService.delete(request.body);

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: 'delete failed'});
        }
    }
}
export default ManageProjectsController;
