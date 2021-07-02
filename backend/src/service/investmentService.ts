import project from '../model/project';

import AppError from '../errors/AppError';

class InvestmentService {
    public async simulate(parameters: any) {

        const { _id, investmentValue } = parameters;
        let investmentCalculation;

        const findProject = await project.find({ _id });

        if (!findProject) {
            throw new AppError("Unable to update project")
        }

        const { project_value, risk } = findProject[0];

        if (investmentValue < project_value) {
            return "Investment less than the project value!";
        }

        switch (risk) {
            case 0:
                investmentCalculation = 0.05 * investmentValue;
                break;
            case 1:
                investmentCalculation = 0.10 * investmentValue;
                break;
            case 2:
                investmentCalculation = 0.20 * investmentValue;
                break;
            default:
                return"risk not found!";
        }

        return `Retorno do investimento: R$ ${investmentCalculation.toFixed(2)}` ;
    }
}

export default InvestmentService;
