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

            return response.status(500).json({ Error: error.message });
        }
    }

    public async store(request: Request, response: Response) {
        try {
            const { name, date, end_date, project_value, risk, participants } = request.body;
console.log(moment(date, "DD/MM/YYYY"));

            const exportServiceResponse = await manageProjectsService.store({
                name,
                date: moment(date, "DD/MM/YYYY"),
                end_date: moment(end_date, "DD/MM/YYYY"),
                project_value,
                risk,
                participants,
            });

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({Error: error.message });
        }
    }

    public async update(request: Request, response: Response) {
        try {

            const exportServiceResponse = await manageProjectsService.update(request.body);

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: error.message });
        }
    }

    public async delete(request: Request, response: Response) {
        try {

            const exportServiceResponse = await manageProjectsService.delete(request.body);

            return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: error.message });
        }
    }
}
export default ManageProjectsController;
