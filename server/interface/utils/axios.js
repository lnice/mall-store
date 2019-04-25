import axios from 'axios'

const instance = axios.create({
    baseURL: `http://pc.anfanli.org`,
    timeout: 1000,
    headers: {

    }
})
export default function ({next}){
    next()
    return instance;
}