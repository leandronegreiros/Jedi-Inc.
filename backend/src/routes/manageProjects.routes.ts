import { Router } from 'express';

import ManageProjectsController from '../controller/manageProjectsController';
import InvestmentController from '../controller/investmentController';

const manageProjectsRoutes = Router();

const manageProjectsController = new ManageProjectsController();
const investmentController = new InvestmentController();

manageProjectsRoutes.get("/list", manageProjectsController.index);
manageProjectsRoutes.post("/create", manageProjectsController.store);
manageProjectsRoutes.put("/update", manageProjectsController.update);
manageProjectsRoutes.delete("/delete", manageProjectsController.delete);
manageProjectsRoutes.post("/simulateInvestment", investmentController.simulate);

export default manageProjectsRoutes;
