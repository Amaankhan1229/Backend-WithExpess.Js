<<<<<<< HEAD
import { getUserByEmail } from "../repo/userRepo.js";
=======
>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28
import { createJWTToken } from "../shared/utils/JWTUtils.js";



<<<<<<< HEAD
export const loginController = async (req,resp)=>{
    try {
        const {email,password} = req.body;
        
        const user = await getUserByEmail(email)
        console.log(user);
        if(user.password == password){
            const customUser = {
                userId:user.userId,
                userName: user.userName,
                email:user.email
            }
            const token = createJWTToken(customUser);
            return resp.cookie('accessToken',token).redirect('/')
        }
        else{
            throw new Error('Invalid Email Or Password')
        }
        
    } catch (error) {
        resp.redirect(`/error?message=${error.message.toString()}`)
    }    
=======
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
   
>>>>>>> 8a578585069878f529a4bb7e70820d864c8dee28
}
// jsonwebtoken- > authentication->  user login -> sucess -> token -> frontend -> backend ->  

// localstorage-> sessionstorage -> cookie 