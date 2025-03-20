import mail from "../config/mailservice.js";

export const adminAuthController = async (req,res) => {
    try {

        const {user} = req.body
        // console.log("user",user)
        const {verifyToken} = req;
        // console.log("verifyToken",verifyToken)
        if(user.email === verifyToken.user.email && user.name === verifyToken.user.name){
            const sendmail =await mail({user,token:verifyToken.token})
            res.status(200).json({response:'verification completed',data:user})
        }

    } catch (error) {
        if(error){
            res.end('error occured',error)
        }
    }
}