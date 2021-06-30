import { Request, Response } from "express";

class InvestmentController {
    public async simulate(request: Request, response: Response) {
        try {

            //  const exportServiceResponse = await manageProjectsService.index();

            //    return response.status(200).json(exportServiceResponse);
        } catch (error) {

            return response.status(500).json({ Error: 'listing failed' });
        }
    }
}
export default InvestmentController;
