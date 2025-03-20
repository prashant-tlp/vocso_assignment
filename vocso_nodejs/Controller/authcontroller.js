import { Admin } from "../Modal/authmodal.js";
import mail from "../config/mailservice.js";

export const adminAuthController = async (req,res) => {
    try {
        // console.log("req",req.body, req.verifyToken)
        const {user} = req.body
        const {verifyToken} = req
        if(user.email === verifyToken.user.email && user.name === verifyToken.user.email){
            const sendmail =await mail({user,token:verifyToken.token})
            res.status(200).json({response:'verification completed',data:user})
        }
        else{
            res.status(200).json({response:'verification failed'})
        }

    } catch (error) {
        if(error){
            res.end('error occured',error.message)
        }
    }
}