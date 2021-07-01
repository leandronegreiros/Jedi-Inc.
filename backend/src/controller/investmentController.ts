import { Request, Response } from "express";
import InvestmentService from "../service/investmentService";

const investmentService = new InvestmentService();

class InvestmentController {
    public async simulate(request: Request, response: Response) {
        try {

            const exportServiceResponse = await investmentService.simulate(request.body);

            return response.status(200).json(exportServiceResponse);

        } catch (error) {
            return response.status(400).json({ Error: error.message });
        }
    }
}
export default InvestmentController;
