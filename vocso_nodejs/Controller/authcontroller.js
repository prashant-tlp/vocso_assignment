import mail from "../config/mailservice.js";

export const adminAuthController = async (req,res) => {
    try {

        const {user} = req.body
        // console.log("user",user)
        const {verifyToken} = req;
        // console.log("verifyToken",verifyToken)
        if (user.email === verifyToken.user.email && user.name === verifyToken.user.name) {
            const sendMailResponse = await mail({ user, token: verifyToken.token });
            return res.status(200).json({ response: "Verification completed", data: user, mailStatus: sendMailResponse });
          } else {
            return res.status(401).json({ response: "Verification failed" });
          }

    } catch (error) {
        if(error){
            console.error("Error in adminAuthController:", error);
            return res.status(500).json({ response: "Error occurred", error: error.message });
        }
    }
}