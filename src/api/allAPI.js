import axios from "axios"

const baseURL = 'https://gentle-temple-56514.herokuapp.com/api/tweets'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)
export const getTweets = axiosInstance
