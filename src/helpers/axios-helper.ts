import axios from 'axios'
import { IfileType } from '../components/upload';

export const doGetFile = async () => {
    
    // later can use try catch
    let res = await axios.get('http://localhost:4000/')
        .then((response) => {
        console.log(response);
        }, (error) => {
        console.log(error);
    });

    //let data = res.data;
    // console.log('res for get', res);
}

export const doPostFile = async (file: FormData) => { 
    
    try {
        let res = await axios.post('http://localhost:4000/upload', file, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (err) {
        if(err.response.status === 500) {
            console.log('Server throws error');
        } else {
            console.log(err.response.data.msg)
        }
    }
    //let data = res.data;
    //console.log(data);
}

