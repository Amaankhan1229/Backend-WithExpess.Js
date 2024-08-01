import {Router} from 'express'
import { loginController } from '../controller/loginController.js';
<<<<<<< HEAD
import { createUserController } from '../controller/createUserController.js';

const loginRoutes = Router();

loginRoutes.post('/login', (req,resp,next)=>loginController(req,resp));

loginRoutes.post('/createUser',(req,resp)=>createUserController(req,resp))

//  req , resp ,next
// request  - call to backend by client
// response - information by backend to client
// next -> in backend what is next 

// (1)=>{},(2)=>{3},(4)=>{},(5)=>{}
=======

const loginRoutes = Router();

loginRoutes.post('/login',(req,resp)=>loginController(req,resp));


>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28

export default loginRoutes