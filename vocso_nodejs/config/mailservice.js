import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

export default function mail({user,token}){
    // console.log(user,token)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.emailuser,
            pass:process.env .emailPass,
        }
    })
    const mailOption = {
        from:process.env.emailuser,
        to:`${user?.email}`,
        subject:'Login token',
        text:`your sesstiontoken is ${token}`
    }
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOption,(error,info)=>{
            if(error){
                reject('error sending mail')
            }
            else{
                resolve('mail sent')
            }
        })
    })
}