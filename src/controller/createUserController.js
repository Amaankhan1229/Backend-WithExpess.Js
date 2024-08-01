import { createUser } from "../repo/userRepo.js"
import { uniqueId } from "../shared/utils/uuidUtils.js";



export const createUserController = async (req,resp) =>{
    try {
        const {userName,email,password} = req.body

        // validation -> checks data coming correct

        const user = {
            userId:uniqueId(),
            userName:userName,
            email:email,
            password:password
        }

       await createUser(user);
       resp.redirect('/login')
    } catch (error) {
        resp.redirect(`/error?message=${error.message.toString()}`)
    }

}