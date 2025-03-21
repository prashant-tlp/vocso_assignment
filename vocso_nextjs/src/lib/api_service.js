import axios from 'axios';
import Cookies from 'js-cookie';


const apiWorker = axios.create({
    baseURL:'https://vocso-assignment.onrender.com/',
    // baseURL:'http://localhost:3001/',
})

export const apiReq = async ({url, method = 'GET' | 'POST' | 'PUT' | 'DELETE', data}) => {
    // console.log(url,'/n',method,'/n',data)
    const token = Cookies.get('sessionToken')
    try {
        const response = await apiWorker({
            url,
            method,
            data,
            headers: {
                Authorization: `Bearer ${token || ""}`, 
              },
        })    

        return response
    } catch (error) {
        console.error("error api",error.message)
    }
}
