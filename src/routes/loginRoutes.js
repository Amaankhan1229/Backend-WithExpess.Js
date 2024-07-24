import {Router} from 'express'
import { loginController } from '../controller/loginController.js';

const loginRoutes = Router();

loginRoutes.post('/login',(req,resp)=>loginController(req,resp));



export default loginRoutes