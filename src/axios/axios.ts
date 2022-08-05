import axios from 'axios'

export const api = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})

api.interceptors.request.use(config=>{
    config.url = config.url + '&units=metric&lang=ua&appid=' + process.env.REACT_APP_API_KEY
    return config
})




export const coordinateApi = axios.create({
    baseURL:process.env.REACT_APP_CORDS_URL
})


coordinateApi.interceptors.request.use(config=>{
    config.url = config.url + '&limit=5&appid=' + process.env.REACT_APP_API_KEY
    return config
})