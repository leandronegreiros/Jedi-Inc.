import { Router } from 'express';

import ManageProjectsController from '../controller/manageProjectsController';

const manageProjectsRoutes = Router();

const manageProjectsController = new ManageProjectsController();

manageProjectsRoutes.post("/", manageProjectsController.store);

export default manageProjectsRoutes;
