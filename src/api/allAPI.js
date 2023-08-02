import axios from 'axios'

const baseURL = 'https://twitter-ac-daniel-4bc657e8f005.herokuapp.com/api/tweets'

const axiosInstance = axios.create({
	baseURL,
})

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('authToken')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	(err) => Promise.reject(err)
)
export const getTweets = axiosInstance
