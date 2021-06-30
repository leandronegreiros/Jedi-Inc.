import {  Router } from 'express';
import manageProjectsRoutes from './manageProjects.routes';

const routes = Router();

routes.use('/manageProjects', manageProjectsRoutes);

export default routes;
