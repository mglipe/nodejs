import express from 'express';
import PLatformController from '../controller/PlatformController.js';
const routes = express.Router();

routes.get('/platform', PLatformController.searchPlatforms);
routes.get('/platform/:id', PLatformController.searchOnePlatform);
routes.post('/platform', PLatformController.createPlatform);
routes.put('/platform/:id', PLatformController.updatePlatform);
routes.delete('/platform/:id', PLatformController.deletePlatform);


export default routes;