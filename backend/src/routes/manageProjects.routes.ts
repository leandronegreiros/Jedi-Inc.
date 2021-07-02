import { Router } from 'express';

import ManageProjectsController from '../controller/manageProjectsController';
import InvestmentController from '../controller/investmentController';

const manageProjectsRoutes = Router();

const manageProjectsController = new ManageProjectsController();
const investmentController = new InvestmentController();

manageProjectsRoutes.get("/list", manageProjectsController.index);
manageProjectsRoutes.post("/create", manageProjectsController.store);
manageProjectsRoutes.post("/update", manageProjectsController.update);
manageProjectsRoutes.post("/delete", manageProjectsController.delete);
manageProjectsRoutes.post("/simulateInvestment", investmentController.simulate);

export default manageProjectsRoutes;
