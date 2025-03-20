import axios from 'axios';
import Cookies from 'js-cookie';


const apiWorker = axios.create({
    baseURL:'https://vocso-assignment.onrender.com/',
    // baseURL:'http://localhost:3001/',
    headers: {
        Authorization:`Bearer ${Cookies.get('sessionToken')}`
      },
})

export const apiReq = async ({url, method = 'GET' | 'POST' | 'PUT' | 'DELETE', data}) => {
    // console.log(url,'/n',method,'/n',data)
    try {
        const response = await apiWorker({
            url,
            method,
            data
        })    
        return response
    } catch (error) {
        console.error("error api",error.message)
    }
}
