import { createJWTToken } from "../shared/utils/JWTUtils.js";



export const loginController = (req,resp)=>{
    const {email,password} = req.body;
    console.log(email,password);
    // token 
    const user = {
        id:"123456",
        name:"Aman",
        email:email
    }
    const token = createJWTToken(user);
    return resp.cookie('accessToken',token).redirect('/')
   
}
// jsonwebtoken- > authentication->  user login -> sucess -> token -> frontend -> backend ->  

// localstorage-> sessionstorage -> cookie 