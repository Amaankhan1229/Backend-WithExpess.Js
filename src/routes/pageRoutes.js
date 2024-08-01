
import {Router} from 'express'
<<<<<<< HEAD
import { dashboardController, errorController, indexPageController, loginPageController, signUpPageController } from '../controller/pageController.js'
import { ensureAuth } from '../shared/utils/JWTUtils.js'
=======
import { indexPageController, loginPageController } from '../controller/pageController.js'
>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28

const pageRoutes = Router()

pageRoutes.get('/',(req,resp)=>indexPageController(req,resp))


pageRoutes.get('/login',(req,resp)=>loginPageController(req,resp))

<<<<<<< HEAD
pageRoutes.get('/signup',(req,resp)=>signUpPageController(req,resp));

pageRoutes.get('/dashboard',ensureAuth,(req,resp,next)=>dashboardController(req,resp,next))

pageRoutes.get('/error',(req,resp)=>errorController(req,resp))
// middleware 
=======



>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28
export default pageRoutes