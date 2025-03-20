import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

console.log("EMAIL USER:", process.env.emailUser);
console.log("EMAIL PASS:", process.env.emailPass ? "******" : "NOT SET");

export default function mail({user,token}){
    // console.log(user,token)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.emailUser,
            pass:process.env .emailPass,
        }
    })
    const mailOption = {
        from:process.env.emailuser,
        to:`${user?.email}`,
        subject:'Auth0 Authenication Service',
        text:`Dear ${user.name} Your token is : \n${token}`
    }
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOption,(error,info)=>{
            if(error){
                console.log("mail error",error)
                reject(error)
            }
            else{
                resolve('mail sent')
            }
        })
    })
}