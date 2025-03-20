import { Admin } from "../Modal/authmodal.js";
import mail from "../config/mailservice.js";

export const adminAuthController = async (req,res) => {
    try {
        // console.log("req",req.body, req.verifyToken)
        // console.log("req.body",req.body)
        const {user} = req.body
        // console.log("user",user)
        const {verifyToken} = req;
        // console.log("verifyToken",verifyToken)
        if(user.email === verifyToken.user.email && user.name === verifyToken.user.name){
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