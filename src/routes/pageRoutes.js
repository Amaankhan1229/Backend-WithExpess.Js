
import {Router} from 'express'
import { indexPageController, loginPageController } from '../controller/pageController.js'

const pageRoutes = Router()

pageRoutes.get('/',(req,resp)=>indexPageController(req,resp))


pageRoutes.get('/login',(req,resp)=>loginPageController(req,resp))




export default pageRoutes