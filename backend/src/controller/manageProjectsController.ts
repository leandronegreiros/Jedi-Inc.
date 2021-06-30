import { Request, Response } from "express";
import ManageProjectsService from "../service/manageProjectsService";
import moment from "moment";

const manageProjectsService = new ManageProjectsService();

class ManageProjectsController {
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
}
export default ManageProjectsController;
