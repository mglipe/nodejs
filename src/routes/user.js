import express from  'express';
import UserController from '../controller/UserController.js';
import paginate from '../middleware/paginate.js';

const routes = express.Router();

routes.get('/user', UserController.searchAllUser, paginate);
routes.post('/user', UserController.createUser);
routes.get('/user/search', UserController.searchByFilter);
routes.delete('/user/deleteall', UserController.deleteAllUser);
routes.get('/user/:id', UserController.searchOneUser);
routes.put('/user/:id', UserController.updateUser);
routes.delete('/user/:id', UserController.deleteUser);



export default routes